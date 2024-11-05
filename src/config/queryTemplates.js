export const queryTemplates = {
    "visiting_hours": {
        patterns: [
            "שעות ביקור",
            "מתי אפשר לבקר",
            "זמני ביקור",
            "שעות ביקורים",
            "מתי מותר להגיע",
            "ביקור בכלא *",  // נוסיף תבניות יותר ספציפיות
            "שעות ביקור ב*"
        ],
        sql: "SELECT visiting_hours, special_instructions FROM prison_facilities WHERE prison_name = ?",
        formatResult: (result) => {
            console.log("Formatting result:", result); // דיבוג
            if (!result || !result.data || result.data.length === 0) {
                return "מצטער, לא נמצא מידע על בית הכלא המבוקש";
            }
            const facility = result.data[0];
            return `שעות ביקור בכלא ${facility.prison_name}:\n` +
                   `${facility.visiting_hours}\n` +
                   `הנחיות מיוחדות: ${facility.special_instructions}` +
                   (facility.additional_info ? `\nמידע נוסף: ${facility.additional_info}` : '');
        }
    }
};

