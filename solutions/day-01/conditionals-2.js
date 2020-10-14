//1. Write a code which can give grades to students according to theirs scores:

    //90-100, A
    //70-89, B
    //60-69, C
    //50-59, D
    //0-49, F


    function gradeGenerator() {
      let grade = Math.floor(Math.random() * 100)

      switch(true) {

     case (grade > 89) :
     document.getElementById("result").innerHTML = "Your grade is: " + grade + "% (A)"
    break;

    case  (grade > 69 && grade < 90) :     document.getElementById("result").innerHTML = "Your grade is: " + grade + "% (B)"
    break;

    case  (grade > 59 && grade < 70) :     document.getElementById("result").innerHTML = "Your grade is: " + grade + "% (C)"
    break;

    case  (grade > 49 && grade < 60) :     document.getElementById("result").innerHTML = "Your grade is: " + grade + "% (D)"
    break;

    case  (grade < 50) :     document.getElementById("result").innerHTML = "Your grade is: " + grade + "% (F)"
    break;

      }
    }
