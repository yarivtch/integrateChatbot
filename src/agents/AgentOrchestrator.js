import IntentAgent from './IntentAgent';
import SQLAgent from './SQLAgent';


class AgentOrchestrator {
    constructor(config) {
        this.config = config;
        console.log("AgentOrchestrator config", config)
        this.intentAgent = new IntentAgent(config);
        this.sqlAgent = new SQLAgent(config);
    }

    async processQuery(query) {
        try {
            console.log(' begin  Processing query:', query); // לדיבוג

            let finalResponse = {
                type: 'combined_response',
                content: []
            };

            // 1. בדיקת IntentAgent
            const intentResponse = await this.intentAgent.processQuery(query);
            if (intentResponse.type !== 'no_match') {
                finalResponse.content.push({
                    source: 'general_info',
                    text: intentResponse.content
                });
            }

            // 2. בדיקת SQLAgent
            console.log('begin SQLAgent in the orchestrator:', query); // לדיבוג

            const sqlResponse = await this.sqlAgent.processQuery(query);
            console.log('sqlResponse:', sqlResponse); // לדיבוג

            if (sqlResponse) {
                finalResponse.content.push({
                    source: 'specific_info',
                    text: sqlResponse
                });
            }

            // 3. עיבוד התשובה המשולבת
            if (finalResponse.content.length > 0) {
                return {
                    type: 'success',
                    content: this.formatCombinedResponse(finalResponse.content)
                };
            }

            return {
                type: 'no_match',
                content: 'מצטער, לא הצלחתי למצוא מידע רלוונטי. אנא נסה לנסח אחרת.'
            };

        } catch (error) {
            console.error('Error in Orchestrator:', error);
            throw error;
        }
    }
    async handleCategoryClick(intent) {
        try {
            // מדמה שאילתה ישירה לפי הקטגוריה
            const simulatedQuery = {
                type: 'direct_category',
                content: intent
            };
            
            return await this.processQuery(simulatedQuery);
        } catch (error) {
            console.error('Error in handleCategoryClick:', error);
            throw error;
        }
    }
    formatCombinedResponse(contentArray) {
        let response = '';
        
        const generalInfo = contentArray.find(c => c.source === 'general_info');
        if (generalInfo) {
            response += generalInfo.text;
        }

        const specificInfo = contentArray.find(c => c.source === 'specific_info');
        if (specificInfo) {
            response += '\n\nמידע ספציפי נוסף:\n' + specificInfo.text;
        }

        return response;
    }
}

export default AgentOrchestrator;