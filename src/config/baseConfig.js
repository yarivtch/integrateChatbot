export const createBaseConfig = (domain, options) => {
    return {
        name: options.name || "Chat Bot",
        language: options.language || "he",
        categories: options.categories || [],
        knowledgeBase: options.knowledgeBase || {},
        ragConfig: {
            endpoint: options.ragConfig?.endpoint || `/api/rag/${domain}`,
            documentsPath: options.ragConfig?.documentsPath || `/documents/${domain}`,
            threshold: options.ragConfig?.threshold || 0.6
        },
        sqlConfig: {
            apiUrl: options.sqlConfig?.apiUrl || `/api/sql/${domain}`,
            queryTemplates: options.sqlConfig?.queryTemplates || null
        }
    };
};

