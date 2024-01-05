function getGrade(score) {
    var grade;
    switch (true) {
      case score >= 80:
        grade = 'A';
        break;
      case score >= 70:
        grade = 'B';
        break;
      case score >= 60:
        grade = 'C';
        break;
      case score >= 50:
        grade = 'D';
        break;
      default:
        grade = 'F';
    }
    return grade;
  }

  
  function getSeason(month) {
    var season;
    switch (month) {
      case 'September':
      case 'October':
      case 'November':
        season = 'Autumn';
        break;
      case 'December':
      case 'January':
      case 'February':
        season = 'Winter';
        break;
      case 'March':
      case 'April':
      case 'May':
        season = 'Spring';
        break;
      case 'June':
      case 'July':
      case 'August':
        season = 'Summer';
        break;
      default:
        season = 'Invalid month';
    }
    return season;
  }
  

  function isWeekend(day) {
    var weekend = ['Saturday', 'Sunday'];
    return weekend.includes(day);
  }
  