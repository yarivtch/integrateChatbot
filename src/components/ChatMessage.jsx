import React from 'react';
import { User, Bot } from 'lucide-react';

export const ChatMessage = ({ message }) => {
    const isUser = message.type === 'user';

    // פונקציה לפורמט התוכן עם שמירה על שורות חדשות
    const formatContent = (content) => {
        return content.split('\n').map((line, i) => (
            <span key={i}>
                {line}
                <br />
            </span>
        ));
    };
    
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className="flex items-start gap-2 max-w-[80%]">
                {!isUser && (
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5 text-blue-600" />
                    </div>
                )}
                <div
                    className={`p-3 rounded-lg ${
                        isUser
                            ? 'bg-blue-600 text-white rounded-br-none'
                            : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                >
                    {formatContent(message.content)}
                </div>
                {isUser && (
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-white" />
                    </div>
                )}
            </div>
        </div>
    );
};