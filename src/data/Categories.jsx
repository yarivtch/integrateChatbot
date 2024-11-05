import { 
    MessageSquare, 
    Send, 
    User, 
    Bot, 
    Info, 
    Calendar, 
    Package, 
    Phone, 
    FileText,
    Users,
    Briefcase,
    ShoppingCart,
    FileQuestion,
    Building
  } from 'lucide-react';
  
  export const categories = [
    { 
        title: 'אודות שב"ס',
        icon: <Building className="w-5 h-5" />,
        intent: 'אודות_שבס'
      },
      { 
        title: 'זכויות אסירים',
        icon: <FileText className="w-5 h-5" />,
        intent: 'זכויות_אסירים'
      },
      { 
        title: 'ביקורים',
        icon: <Users className="w-5 h-5" />,
        intent: 'ביקורים'
      },
      { 
        title: 'מאסר נדחה',
        icon: <Calendar className="w-5 h-5" />,
        intent: 'מאסר_נדחה'
      },
      { 
        title: 'ציוד מותר',
        icon: <Package className="w-5 h-5" />,
        intent: 'ציוד_מותר'
      },
      { 
        title: 'שיקום ותעסוקה',
        icon: <Briefcase className="w-5 h-5" />,
        intent: 'שיקום_ותעסוקה'
      },
      { 
        title: 'קנטינה מקוונת',
        icon: <ShoppingCart className="w-5 h-5" />,
        intent: 'קנטינה_מקוונת'
      },
      { 
        title: 'בקשות מיוחדות',
        icon: <FileQuestion className="w-5 h-5" />,
        intent: 'בקשות_מיוחדות'
      },
      { 
        title: 'פרטי קשר',
        icon: <Phone className="w-5 h-5" />,
        intent: 'פרטי_קשר'
      }
  ];
