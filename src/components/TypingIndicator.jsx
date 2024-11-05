import React from 'react';
import { Bot } from 'lucide-react';

export const TypingIndicator = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Bot className="w-5 h-5 text-blue-600" />
            </div>
            <div className="bg-gray-100 p-3 rounded-lg text-gray-500">
                מקליד...
            </div>
        </div>
    );
};