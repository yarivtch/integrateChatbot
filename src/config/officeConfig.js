import { createBaseConfig } from './baseConfig';

const officeCategories = [
    { 
        title: 'מחלקות IT',
        intent: 'it_departments'
    },
    { 
        title: 'אודות הארגון',
        intent: 'about_organization'
    }
];

const officeKnowledgeBase = {
    "it_departments": {
        "general_answer": "מחלקות ה-IT בארגון ודרכי ההתקשרות",
        "services": {
            "development": {
                "name": "מחלקת פיתוח",
                "manager": "ישראל ישראלי",
                "phone": "03-1234567",
                "responsibilities": [
                    "פיתוח מערכות חדשות",
                    "תחזוקת מערכות קיימות",
                    "פיתוח ממשקים"
                ]
            },
            "infrastructure": {
                "name": "מחלקת תשתיות",
                "manager": "חיים כהן",
                "phone": "03-1234568",
                "responsibilities": [
                    "ניהול שרתים",
                    "ניהול רשת",
                    "אבטחת מידע"
                ]
            },
            "support": {
                "name": "מחלקת תמיכה",
                "manager": "שרה לוי",
                "phone": "03-1234569",
                "responsibilities": [
                    "תמיכה במשתמשים",
                    "פתרון תקלות",
                    "הדרכות"
                ]
            }
        },
        "keywords": ['מחלקות', 'טלפונים', 'תמיכה', 'פיתוח', 'תשתיות', 'מספרי טלפון'],
        "variations": {
            "questions": [
                "איך אפשר לפנות ל",
                "מה הטלפון של",
                "מי אחראי על",
                "למי פונים בנושא"
            ],
            "topics": ["פיתוח", "תשתיות", "תמיכה", "טלפונים"]
        }
    },

    "about_organization": {
        "general_answer": "מידע על הארגון ובעלי התפקידים המרכזיים",
        "services": {
            "management": {
                "cio": {
                    "name": "דוד דוידוב",
                    "role": "מנהל IT ראשי",
                    "phone": "03-1234566",
                    "email": "david@company.com"
                },
                "deputy_cio": {
                    "name": "רחל כהן",
                    "role": "סגנית מנהל IT",
                    "phone": "03-1234565",
                    "email": "rachel@company.com"
                }
            },
            "organization_info": {
                "vision": "להוביל חדשנות טכנולוגית ולספק פתרונות מתקדמים",
                "employees": "50 עובדים",
                "location": "תל אביב, קומה 15",
                "working_hours": "ימים א-ה, 9:00-18:00"
            }
        },
        "keywords": ['ארגון', 'מנהלים', 'בעלי תפקידים', 'חזון', 'מבנה ארגוני'],
        "variations": {
            "questions": [
                "מי המנהל של",
                "מה החזון",
                "איפה נמצא",
                "מי אחראי על"
            ],
            "topics": ["הנהלה", "חזון", "מיקום", "שעות עבודה"]
        }
    }
};

export const officeConfig = createBaseConfig('office', {
    name: "מערכת מידע IT",
    language: "he",
    categories: officeCategories,
    knowledgeBase: officeKnowledgeBase
});