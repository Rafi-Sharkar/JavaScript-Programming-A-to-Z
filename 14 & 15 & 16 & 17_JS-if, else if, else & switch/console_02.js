//Letter grade

var mark = prompt("Enter your mark:");

if(mark > 100 || mark < 0)  // if one condition fail then it gose to pther condition
    document.write("invalid input");
else if(mark >= 80 && mark <=100)
    document.write("You get A+");
else if(mark >=70 && mark <=80)
    document.write("You get A");
else if(mark >= 60 && mark <=70)
    document.write("You get -A");
else if(mark >= 50 && mark <=60)
    document.write("You get B");
else
    document.write("Fail");