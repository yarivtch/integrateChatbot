import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { configMap } from './config/configMap';
import { ChatMessage } from './components/ChatMessage';
import { TypingIndicator } from './components/TypingIndicator';
import AgentOrchestrator from './agents/AgentOrchestrator';

function App({ domain = 'prison' }) {
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            content: 'שלום! ניתן ללחוץ על אחד הנושאים למעלה כדי לקבל את המידע הרצוי. איך אוכל לעזור?'
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const config = configMap[domain];
    const orchestrator = useRef(new AgentOrchestrator(config));

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = async (message) => {
        if (!message.trim()) return;
        setInput('');
        setMessages(prev => [...prev, { type: 'user', content: message }]);
        setIsTyping(true);

        try {
            const response = await orchestrator.current.processQuery(message);
            setTimeout(() => {
                setMessages(prev => [...prev, { 
                    type: 'bot', 
                    content: response.content
                }]);
                setIsTyping(false);
            }, 1000);
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, { 
                type: 'bot', 
                content: 'מצטער, אירעה שגיאה. אנא נסה שוב.' 
            }]);
            setIsTyping(false);
        }
    };

    const handleCategoryClick = async (intent) => {
        const category = config.categories.find(c => c.intent === intent);
        if (category) {
            try {
                const response = await orchestrator.current.handleCategoryClick(intent);
                setMessages(prev => [
                    ...prev, 
                    { type: 'user', content: `מידע על ${category.title}` },
                    { type: 'bot', content: response.content }
                ]);
            } catch (error) {
                console.error('Error:', error);
                setMessages(prev => [...prev, { 
                    type: 'bot', 
                    content: 'מצטער, אירעה שגיאה. אנא נסה שוב.' 
                }]);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="flex flex-col h-[600px] mx-auto max-w-2xl shadow-xl rounded-lg overflow-hidden bg-white" dir="rtl">
                <div className="bg-blue-600 text-white p-4 flex-shrink-0">
                    <h1 className="text-xl font-bold">{config.name}</h1>
                </div>

                <div className="flex-shrink-0 border-b">
                    <div className="flex flex-wrap gap-2 p-3">
                        {config.categories.map((category) => (
                            <button
                                key={category.intent}
                                onClick={() => handleCategoryClick(category.intent)}
                                className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors text-sm"
                            >
                                {category.icon && <category.icon className="w-5 h-5" />}
                                {category.title}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex-1 flex flex-col min-h-0">
                    <div className="flex-1 overflow-y-auto p-4">
                        {messages.map((message, index) => (
                            <ChatMessage key={index} message={message} />
                        ))}
                        {isTyping && <TypingIndicator />}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="flex-shrink-0 border-t p-4 bg-white">
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleSend(input)}
                                disabled={!input.trim()}
                                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                            >
                                <Send className="w-6 h-6" />
                            </button>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
                                placeholder="הקלד את שאלתך כאן..."
                                className="flex-1 p-2 border rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;