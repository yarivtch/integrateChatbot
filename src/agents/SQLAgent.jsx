

// agents/SQLAgent.js
import QueryParser from '../services/QueryParser';

class SQLAgent {
    constructor(config) {
        if (!config?.sqlConfig) {
            throw new Error('SQL configuration is required');
        }
        this.apiUrl = config.sqlConfig.apiUrl;
        this.queryTemplates = config.sqlConfig.queryTemplates;
        this.queryParser = new QueryParser(this.queryTemplates);
    }
    /* async executeQuery(sql, params) {
        try {
            console.log("start executeQuery", query)

            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sql,
                    parameters: params
                })
            });

            if (!response.ok) {
                console.log(response)
                throw new Error('Database query failed');
            }

            return await response.json();
        } catch (error) {
            console.error('Database error:', error);
            throw error;
        }
    } */
    async executeQuery(sql, params) {
        try {
            console.log("Executing query with params:", params);

            const mockData = [
                { 
                    prison_name: "ירדן", 
                    visiting_hours: "10:00-12:00", 
                    special_instructions: "אין להכניס טלפונים" 
                },
                { 
                    prison_name: "מאיר", 
                    visiting_hours: "14:00-16:00", 
                    special_instructions: "יש להירשם מראש" 
                },
                { 
                    prison_name: "תל אביב", 
                    visiting_hours: "16:00-18:00", 
                    special_instructions: "אין להכניס מזון",
                    additional_info: "חניה בתשלום" 
                }
            ];

            const results = mockData.filter(item => 
                item.prison_name.toLowerCase() === params[0].toLowerCase()
            );

            return { data: results };
        } catch (error) {
            console.error('Mock data error:', error);
            throw error;
        }
    }

    async processQuery(query) {
        try {
            console.log("Processing query:", query);
            const parsedQuery = this.queryParser.parse(query);
            
            if (!parsedQuery) {
                console.log("No parsed query result");
                return null;
            }

            const results = await this.executeQuery(
                parsedQuery.sql, 
                parsedQuery.params
            );
            
            return parsedQuery.template.formatResult(results);
        } catch (error) {
            console.error('Error in SQLAgent:', error);
            return null;
        }
    }
}

export default SQLAgent;