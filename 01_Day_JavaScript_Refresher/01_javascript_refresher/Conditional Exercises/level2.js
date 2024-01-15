function gradeGiver(grade) {
    if (grade >= 80) {
        return "A";
    } else if (grade >= 70) {
        return "B";
    } else if (grade >= 60) {
        return "C";
    } else if (grade >= 50) {
        return "D";
    } else {
        return "F";
    }
}

function whatSeason(month) {
    const seasons = {
        "winter": ["december", "january", "february"],
        "spring": ["march", "april", "may"],
        "summer": ["june", "july", "august"],
        "autumn": ["september", "october", "novemeber"]
    };
    
    seasons.keys().forEach(key => {
        if (seasons[key].find(month.toLowerCase()) != -1) {
            return key;
        }
    });
}

function isWeekend(day) {
    if (day.toLowerCase() == "sunday" || day.toLowerCase() == "saturday") {
        console.log(day, "is a weekend.");
    } else {
        console.log(day, "is a working day");
    }
}