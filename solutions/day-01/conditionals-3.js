
  //1. Write a program which tells the number of days in a month.

  //Enter a month: January
  //January has 31 days.

  //Enter a month: JANUARY
  //January has 31 day

  //Enter a month: February
  //February has 28 days.

  //Enter a month: FEbruary
  //February has 28 days.

  let month = prompt('Enter a month: ');
  let monthCap = month.toUpperCase();

  if ((monthCap == 'JANUARY') || (monthCap =='MARCH') || (monthCap =='MAY') || (monthCap =='JULY') || (monthCap =='AUGUST') || (monthCap =='OCTOBER') || (monthCap =='DECEMBER')) {alert(`${monthCap} has 31 days`)}

  else if (monthCap == 'FEBRUARY') {alert(`FEBRUARY has 28 days and every four years 29 days`)}

  else if ((monthCap == 'APRIL') || (monthCap =='JUNE') || (monthCap =='SEPTEMBER') || (monthCap =='NOVEMBER')){alert(`${monthCap} has 30 days`)}

  else {alert(`${monthCap} is either not a month or you misspelled
  the month`)}
