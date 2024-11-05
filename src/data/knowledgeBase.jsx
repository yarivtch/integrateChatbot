export const knowledgeBase = {
  "about_ips": {
    "general_answer": "שירות בתי הסוהר (שב״ס) הוא הגוף האחראי על מערכת בתי הכלא בישראל",
    "services": {
        "main_services": {
            "medical": "טיפול רפואי בסיסי",
            "rehabilitation": "תוכניות שיקום והכשרה מקצועית",
            "employment": "מערך תעסוקה",
            "religion": "שירותי דת ותפילה",
            "education": "אפשרויות ללימודים ופעילויות נוספות"
        }
    },
    "keywords": ['שבס', 'בית סוהר', 'כלא', 'אודות', 'מידע כללי', 'שירות בתי הסוהר'],
    "variations": {
        "questions": ["מה זה שבס", "מי אחראי על", "מה עושה שבס"],
        "topics": ["שירותים", "מידע כללי", "אחריות"]
    },
    "related_links": ["prisoner_rights", "rehabilitation_employment"]
},

"visits": {
    "general_answer": "ביקורי משפחות מתקיימים בימים ובשעות קבועים, בהתאם לסוג האסיר ומצבו",
    "services": {
        "requirements": {
            "coordination": "יש לתאם ביקור מראש",
            "documents": "נדרשת הצגת תעודה מזהה",
        },
        "packages": {
            "rules": "ניתן להביא חבילות בכפוף לנהלים",
            "inspection": "החבילות עוברות בדיקה קפדנית"
        },
        "procedures": {
            "duration": "משך הביקור מוגבל בהתאם לנהלים",
            "timing": "יש להגיע בזמן שנקבע",
            "behavior": "יש לשמור על כללי התנהגות נאותים",
            "restrictions": "אין להעביר חפצים ללא אישור"
        }
    },
    "keywords": ['ביקור', 'משפחות', 'חבילות', 'שעות ביקור', 'תיאום ביקור'],
    "variations": {
        "questions": ["מתי אפשר לבקר", "איך קובעים ביקור", "מה מותר להביא"],
        "topics": ["תיאום", "חבילות", "שעות", "נהלים"]
    },
    "related_links": ["allowed_equipment", "contact_info"]
},

"delayed_imprisonment": {
    "general_answer": "מאסר נדחה הוא ביצוע של עונש מאסר במועד מאוחר ליום מתן גזר הדין",
    "services": {
        "reporting_process": {
            "location": "יש להתייצב במקום שנקבע",
            "timing": "בתאריך ובשעה שנקבעו",
            "equipment": "חובה להביא ציוד אישי מוגבל בלבד",
            "screening": "נדרש לעבור ועדת מיון מוקדם"
        },
        "required_documents": {
            "mandatory": [
                "גזר דין",
                "תעודה מזהה",
                "אישור רפואי עדכני"
            ],
            "additional": "מסמכים נוספים לפי דרישה"
        }
    },
    "keywords": ['מאסר', 'נדחה', 'התייצבות', 'גזר דין', 'מועד', 'מיון מוקדם'],
    "variations": {
        "questions": ["מה צריך להביא", "איך מתייצבים", "מתי להגיע"],
        "topics": ["מסמכים", "ציוד", "התייצבות", "מיון"]
    },
    "related_links": ["allowed_equipment", "contact_info"]
},

"allowed_equipment": {
    "general_answer": "קיימות מספר אפשרויות להכנסת ציוד: ציוד למאסר נדחה, רכישה בקנטינה רגילה, או דרך הקנטינה המקוונת באשל",
    "services": {
        "delayed_imprisonment": {
            "clothing": {
                "underwear": "6 זוגות לבנים וגרביים",
                "towels": "2 מגבות",
                "sportswear": "2 אימוניות ללא בטנה וכובע",
                "pants": "2 מכנסי ספורט"
            },
            "bedding": {
                "covers": "ציפה לשמיכה וכרית",
                "sheets": "2 סדינים"
            },
            "allowed_items": [
                "תשמישי קדושה",
                "תעודת זהות",
                "עד 1,500 ש\"ח במזומן"
            ],
            "prohibited_items": [
                "מכשור חשמלי",
                "תכשיטים",
                "סיגריות"
            ]
        },
        "regular_canteen": {
            "availability": "בכל בתי הסוהר",
            "payment": "מכספי פיקדון האסיר"
        },
        "online_canteen": {
            "location": "פיילוט בכלא אשל בלבד",
            "frequency": "זכאות אחת לשבועיים",
            "eligible": "אסירים באגפים פליליים (למעט עצורי ימים)"
        }
    },
    "keywords": ['ציוד', 'מותר', 'אסור', 'להביא', 'בגדים', 'כסף', 'מזומן', 'אסור להביא'],
    "variations": {
        "questions": ["מה מותר להביא", "מה אסור להביא", "איזה ציוד מותר"],
        "topics": ["בגדים", "מצעים", "כסף", "ציוד אסור"]
    },
    "related_links": ["delayed_imprisonment", "online_canteen"]
},
"rehabilitation_employment": {
       "general_answer": "שב\"ס מפעיל מגוון תוכניות שיקום ותעסוקה לאסירים",
       "services": {
           "rehabilitation_programs": {
               "professional": "הכשרות מקצועיות",
               "education": "לימודים והשכלה",
               "therapy": "תוכניות טיפול",
               "workshops": "סדנאות העצמה"
           },
           "employment_options": {
               "prison_work": "עבודה בתוך הכלא",
               "training": "הכשרה מקצועית",
               "earnings": "אפשרות להרוויח כסף",
               "preparation": "הכנה לשוק העבודה"
           },
           "professional_training": {
               "courses": "קורסים מקצועיים",
               "studies": "לימודי מקצוע",
               "certifications": "הסמכות מקצועיות"
           }
       },
       "keywords": ['שיקום', 'תעסוקה', 'עבודה', 'לימודים', 'הכשרה', 'טיפול', 'קורסים'],
       "variations": {
           "questions": [
               "איזה עבודות יש",
               "איך אפשר ללמוד",
               "מה ההכשרות שיש"
           ],
           "topics": ["עבודה", "לימודים", "הכשרות", "שיקום"]
       },
       "related_links": ["prisoner_rights", "special_requests"]
   },

   "online_canteen": {
    "general_answer": "מידע על שירותי הקנטינה בשב\"ס",
    "services": {
        "regular_canteen": {
            "availability": "פועלת בכל בתי הסוהר",
            "purchase_method": "הרכישה מתבצעת במהלך המאסר",
            "payment": "התשלום מתבצע מכספי הפיקדון האישי של האסיר"
        },
        "online_service": {
            "location": "פיילוט בכלא אשל בלבד",
            "frequency": "זכאות אחת לשבועיים",
            "eligible": "מיועד לאסירים באגפים פליליים (למעט עצורי ימים)",
            "purchase_method": "רכישה דרך האזור האישי באתר gov.il",
            "rules": [
                "זכאות נפרדת מביקורים",
                "אין אפשרות להשלמת רכישה חלקית",
                "לא ניתן לבצע רכישה עתידית"
            ]
        },
        "allowed_products": {
            "items": [
                {"name": "מארזי סיגריות", "limit": 2},
                {"name": "כרטיסי חיוג", "limit": 2},
                {"name": "מצתים", "limit": 2}
            ]
        }
        },
      "keywords": ['קנטינה', 'רכישה', 'מקוון', 'סיגריות', 'כרטיס חיוג', 'מצתים', 'חנות'],
        "variations": {
            "questions": [
                "מה אפשר לקנות",
                "איך קונים",
                "כמה מותר"
            ],
            "topics": ["מוצרים", "רכישה", "אשל", "מקוון"]
      },
      "related_links": ["allowed_equipment", "visits"]
    },

   "special_requests": {
       "general_answer": "מידע על הגשת בקשות מיוחדות בשב\"ס",
       "services": {
           "request_types": {
               "pardon": "בקשות חנינה",
               "sentence_reduction": "בקשות לקיצור עונש",
               "medical": "בקשות לטיפול רפואי מיוחד",
               "religious": "בקשות בנושאי דת"
           },
           "submission_process": {
               "steps": [
                   "יש למלא טופס מתאים",
                   "לצרף מסמכים תומכים",
                   "להגיש דרך הגורם המטפל"
               ]
           }
       },
       "keywords": ['חנינה', 'קיצור', 'בקשה', 'טיפול מיוחד', 'בקשה מיוחדת', 'הגשת בקשה'],
       "variations": {
           "questions": [
               "איך מגישים בקשה",
               "מה צריך להגיש",
               "איך מבקשים"
           ],
           "topics": ["חנינה", "קיצור עונש", "טיפול רפואי", "דת"]
       },
       "related_links": ["prisoner_rights", "contact_info"]
   },

   "contact_info": {
       "general_answer": "פרטי התקשרות עם שב\"ס",
       "services": {
           "early_screening": {
               "phone": "0747831077",
               "fax": "089193314",
               "hours": "ימים א-ה, 8:00-16:00"
           },
           "delayed_imprisonment": {
               "phone": "0747831078",
               "fax": "089194028",
               "email": "MaasarN@ips.gov.il"
           },
           "contact_person": {
               "name": "מרים חייאב",
               "role": "רכזת ענף אבחון ומיון",
               "address": "רחוב הרב דוד שמעון אפריאט, רמלה"
           }
       },
       "keywords": ['טלפונים','טלפון', 'פקס', 'מייל', 'דואר', 'איש קשר', 'ליצור קשר', 'פניות'],
       "variations": {
           "questions": [
               "איך יוצרים קשר",
               "מה הטלפון",
               "למי לפנות"
           ],
           "topics": ["מיון מוקדם", "מאסרים נדחים", "פניות"]
       },
       "related_links": ["delayed_imprisonment", "special_requests"]
   },
   "prisoner_rights": {
    "general_answer": "כל אסיר זכאי למספר זכויות בסיסיות המעוגנות בחוק ובנהלי שב\"ס",
    "services": {
        "basic_rights": {
            "walk": "שעת טיול יומית בחצר",
            "medical": "טיפול רפואי בסיסי",
            "religion": "אפשרות לקיום פולחן דתי",
            "visits": "זכות לביקורים בהתאם לנהלים",
            "work": "אפשרות לעבוד ולהרוויח כסף"
        },
        "special_procedures": {
            "special_needs": "נהלים מיוחדים לאסירים בעלי צרכים מיוחדים",
            "chronic_diseases": "טיפול מותאם לבעלי מחלות כרוניות",
            "religious_adjustments": "התאמות דתיות לפי הצורך"
        }
    },
    "keywords": ['זכויות', 'טיול', 'רפואה', 'דת', 'תפילה', 'עבודה', 'צרכים מיוחדים'],
    "variations": {
        "questions": [
            "מה הזכויות שלי",
            "למה אני זכאי",
            "מה מגיע לי"
        ],
        "topics": [
            "טיול",
            "רפואה", 
            "דת",
            "ביקורים",
            "עבודה"
        ]
    },
    "related_links": ["visits", "medical_care", "rehabilitation_employment"]
  }
};