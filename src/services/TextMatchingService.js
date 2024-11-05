// services/TextMatchingService.js
class TextMatchingService {
    normalizeText(text) {
        if (!text || typeof text !== 'string') {
            console.warn('Invalid text provided to normalizeText:', text);
            return '';
        }

        return text
            .toLowerCase()
            .replace(/[.,?!]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    calculateSimilarity(text1, text2) {
        if (!text1 || !text2) {
            console.warn('Invalid texts provided to calculateSimilarity:', { text1, text2 });
            return 0;
        }

        const set1 = new Set(this.normalizeText(text1).split(' '));
        const set2 = new Set(this.normalizeText(text2).split(' '));
        const intersection = new Set([...set1].filter(x => set2.has(x)));
        const union = new Set([...set1, ...set2]);
        return intersection.size / union.size;
    }

    findBestMatch(text, patterns) {
        if (!Array.isArray(patterns) || patterns.length === 0) {
            console.warn('Invalid patterns array:', patterns);
            return 0;
        }

        const scores = patterns.map(p => this.calculateSimilarity(text, p));
        console.log('Pattern matching scores:', scores);
        return Math.max(...scores);
    }
}

export default TextMatchingService;