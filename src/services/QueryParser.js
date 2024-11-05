// services/QueryParser.js
import TextMatchingService from './TextMatchingService';

class QueryParser {
   constructor(queryTemplates) {
       this.queryTemplates = queryTemplates;
       this.textMatcher = new TextMatchingService();
   }

   parse(query) {
       console.log("Starting to parse query:", query);
       const template = this.findMatchingTemplate(query);
       
       if (!template) {
           console.log("No matching template found");
           return null;
       }

       console.log("Found matching template:", template);
       const params = this.extractParameters(query);
       const sql = this.buildSQLQuery(template, params);

       return { 
           template, 
           sql, 
           params 
       };
   }

   findMatchingTemplate(query) {
    console.log("Looking for match for query:", query);
    let bestMatch = null;
    let highestScore = 0;

    for (const [key, template] of Object.entries(this.queryTemplates)) {
        const score = this.textMatcher.findBestMatch(query, template.patterns);
        console.log(`Template ${key} score:`, score);
        
        if (score > highestScore && score > 0.6) {
            highestScore = score;
            bestMatch = { ...template, key };
        }
    }

    console.log("Best match found:", bestMatch?.key, "with score:", highestScore);
    return bestMatch;
}

extractParameters(query) {
    console.log("Extracting parameters from:", query);
    const words = query.split(' ');
    const targetPrisons = ["ירדן", "מאיר", "תל אביב"];  // רשימת בתי הכלא שיש לנו במערכת

    // מחפש מילה שמתאימה לאחד מבתי הכלא
    for (const word of words) {
        if (targetPrisons.includes(word)) {
            console.log("Found prison name:", word);
            return [word];
        }
    }
    
    console.log("No prison name found in query");
    return [];
}




   buildSQLQuery(template, params) {
       let sql = template.sql;
       params.forEach(param => {
           sql = sql.replace('?', `'${param}'`);
       });
       console.log("Built SQL query:", sql);
       return sql;
   }
}

export default QueryParser;