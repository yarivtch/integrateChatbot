import React from 'react';
import { categories } from '../data/Categories.jsx';  // הוספת הייבוא

export const CategoryBar = ({ onCategoryClick }) => {
    return (
        <div className="flex flex-wrap gap-2 p-3 bg-white border-b" dir="rtl">
            {categories.map((category) => (
                <button
                    key={category.title}
                    onClick={() => onCategoryClick(category.intent)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors text-sm"
                >
                    {category.icon}
                    <span>{category.title}</span>
                </button>
            ))}
        </div>
    );
};