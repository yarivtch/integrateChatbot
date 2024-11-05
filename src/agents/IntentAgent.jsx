import { knowledgeBase } from '../data/knowledgeBase';

class IntentAgent {
    constructor(config) {
        //console.log('Config in IntentAgent:', config); // לדיבוג
        if (!config || !config.knowledgeBase) {
            throw new Error('Config or knowledgeBase is missing');
        }
        this.knowledgeBase = config.knowledgeBase;
        this.threshold = config.ragConfig?.threshold || 0.6;
    }

    // מתודה ראשית לעיבוד שאלה
    async processQuery(query) {
        // אם זו לחיצה ישירה על קטגוריה
        if (typeof query === 'object' && query.type === 'direct_category') {
            return this.buildResponse(query.content, '', 1);
        }
    
        // המשך הטיפול הרגיל בשאלות טקסט
        const cleanQuery = this.sanitizeInput(typeof query === 'string' ? query : query.toString());
        const intentMatch = this.findIntent(cleanQuery);
        
        if (!intentMatch) {
            return {
                type: 'no_match',
                content: 'מצטער, לא הצלחתי להבין את שאלתך. אנא נסה לנסח אחרת או בחר מהקטגוריות למעלה.'
            };
        }
    
        return this.buildResponse(intentMatch.intent, cleanQuery, intentMatch.score);
    }

    // ניקוי וסניטציה של קלט
    sanitizeInput(query) {
        return query
            .trim()
            .toLowerCase()
            .replace(/[.,!?]/g, '');
    }

    // זיהוי כוונה
    findIntent(query) {
        let bestMatch = null;
        let highestScore = 0;
    
        const cleanQuery = query.trim().toLowerCase();
    
        Object.entries(this.knowledgeBase).forEach(([intent, data]) => {
            let score = 0;
    
            // בדיקת מילות מפתח
            data.keywords.forEach(keyword => {
                const keywordLower = keyword.toLowerCase();
                if (cleanQuery.includes(keywordLower)) {
                    // משקל גבוה יותר למילות מפתח מדויקות
                    score += cleanQuery === keywordLower ? 5 : 3;
                    // בונוס למילות מפתח בתחילת השאלה
                    if (cleanQuery.startsWith(keywordLower)) {
                        score += 2;
                    }
                }
            });
    
            // בדיקת וריאציות שאלות
            data.variations.questions.forEach(question => {
                const questionLower = question.toLowerCase();
                if (cleanQuery.includes(questionLower)) {
                    score += 2;
                    // בונוס לשאלות מדויקות
                    if (cleanQuery === questionLower) {
                        score += 3;
                    }
                }
            });
    
            // בדיקת נושאים
            data.variations.topics.forEach(topic => {
                if (cleanQuery.includes(topic.toLowerCase())) {
                    score += 1;
                }
            });
    
            if (score > highestScore) {
                highestScore = score;
                bestMatch = { intent, score };
            }
        });
    
        // הורדת הסף לזיהוי אבל עדיין שומרים על רמה מינימלית
        return highestScore >= 2 ? bestMatch : null;
    }
    

    // בניית תשובה
    buildResponse(intent, query, confidenceScore) {
        const data = this.knowledgeBase[intent];
        let formattedContent = data.general_answer + '\n\n';
    
        if (data.services) {
            switch(intent) {
                case 'contact_info':
                    // טיפול בפרטי קשר
                    if (data.services.early_screening) {
                        formattedContent += 'מיון מוקדם:\n';
                        formattedContent += `• טלפון: ${data.services.early_screening.phone}\n`;
                        formattedContent += `• פקס: ${data.services.early_screening.fax}\n`;
                        if (data.services.early_screening.hours) {
                            formattedContent += `• שעות פעילות: ${data.services.early_screening.hours}\n`;
                        }
                        formattedContent += '\n';
                    }
                    
                    if (data.services.delayed_imprisonment) {
                        formattedContent += 'מאסרים נדחים:\n';
                        formattedContent += `• טלפון: ${data.services.delayed_imprisonment.phone}\n`;
                        formattedContent += `• פקס: ${data.services.delayed_imprisonment.fax}\n`;
                        formattedContent += `• דוא"ל: ${data.services.delayed_imprisonment.email}\n\n`;
                    }
    
                    if (data.services.contact_person) {
                        formattedContent += 'איש קשר:\n';
                        formattedContent += `• ${data.services.contact_person.name}, ${data.services.contact_person.role}\n`;
                        formattedContent += `• ${data.services.contact_person.address}`;
                    }
                    break;
    
                case 'special_requests':
                    // טיפול בבקשות מיוחדות
                    if (data.services.request_types) {
                        formattedContent += 'סוגי בקשות:\n';
                        Object.entries(data.services.request_types).forEach(([_, type]) => {
                            formattedContent += `• ${type}\n`;
                        });
                    }
                    if (data.services.submission_process?.steps) {
                        formattedContent += '\nתהליך הגשת בקשה:\n';
                        data.services.submission_process.steps.forEach((step, index) => {
                            formattedContent += `${index + 1}. ${step}\n`;
                        });
                    }
                    break;
    
                case 'allowed_equipment':
                    case 'online_canteen':
                        // מידע על הקנטינה הרגילה
                        if (data.services.regular_canteen) {
                            formattedContent += 'קנטינה רגילה - בכל בתי הסוהר:\n';
                            Object.entries(data.services.regular_canteen).forEach(([_, info]) => {
                                formattedContent += `• ${info}\n`;
                            });
                            formattedContent += '\n';
                        }
                    
                        // מידע על הקנטינה המקוונת
                        if (data.services.online_service) {
                            formattedContent += 'קנטינה מקוונת - פיילוט בכלא אשל:\n';
                            Object.entries(data.services.online_service).forEach(([key, value]) => {
                                if (key !== 'rules') {
                                    formattedContent += `• ${value}\n`;
                                }
                            });
                    
                            // רשימת המוצרים
                            if (data.services.allowed_products?.items) {
                                formattedContent += '\nמוצרים מותרים לרכישה:\n';
                                data.services.allowed_products.items.forEach(item => {
                                    formattedContent += `• ${item.name}: ${item.limit} ${item.limit > 1 ? 'יחידות' : 'יחידה'}\n`;
                                });
                            }
                    
                            // הוספת מגבלות וכללים
                            if (data.services.online_service.rules) {
                                formattedContent += '\nחשוב לדעת:\n';
                                data.services.online_service.rules.forEach(rule => {
                                    formattedContent += `• ${rule}\n`;
                                });
                            }
                        }
                        break;
                    
                case 'prisoner_rights':
                    if (data.services.basic_rights) {
                        formattedContent += 'זכויות בסיסיות:\n';
                        Object.values(data.services.basic_rights).forEach(right => {
                            formattedContent += `• ${right}\n`;
                        });
                    }

                    if (data.services.special_procedures) {
                        formattedContent += '\nנהלים מיוחדים:\n';
                        Object.values(data.services.special_procedures).forEach(procedure => {
                            formattedContent += `• ${procedure}\n`;
                        });
                    }
                    break;        
                default:
                    // טיפול במידע כללי
                    Object.entries(data.services).forEach(([_, content]) => {
                        if (typeof content === 'object') {
                            Object.entries(content).forEach(([subKey, value]) => {
                                if (typeof value === 'string') {
                                    formattedContent += `• ${value}\n`;
                                } else if (Array.isArray(value)) {
                                    value.forEach(item => {
                                        formattedContent += `• ${item}\n`;
                                    });
                                }
                            });
                        }
                    });
                    break;
            }
        }
    
        return {
            type: 'answer',
            content: formattedContent.trim()
        };
    }
    
    

    // זיהוי תת-נושא ספציפי
    identifySpecificTopic(query, data) {
        if (!data.services) return null;

        for (const [topic, content] of Object.entries(data.services)) {
            if (query.includes(topic.toLowerCase())) {
                return topic;
            }
        }
        return null;
    }

    // פורמט תוכן ספציפי
    formatSpecificContent(content) {
        if (typeof content === 'string') return content;
        
        let formatted = '';
        Object.entries(content).forEach(([key, value]) => {
            if (typeof value === 'string') {
                formatted += `• ${value}\n`;
            } else if (Array.isArray(value)) {
                formatted += value.map(item => `• ${item}`).join('\n');
            } else if (typeof value === 'object') {
                formatted += this.formatSpecificContent(value);
            }
        });
        
        return formatted;
    }
}

export default IntentAgent;