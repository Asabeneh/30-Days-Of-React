function daysInMonth(month) {
    let months = {
        january:31,
        february: 28,
        march: 31,
        april: 30,
        may: 31,
        june: 30,
        july: 31,
        august: 31,
        september: 30,
        october: 31,
        novemeber: 30,
        december: 31
    };
    month = month.toLowerCase();
    if (month == february && isLeapYear()) {
        return months[month] + 1;
    }
    return months[month];
}