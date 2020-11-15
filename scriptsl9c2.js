var age = Number(window.prompt("What is your age?"))
curYear = new Date().getFullYear(); 

yearOfBirth = curYear - age; 
console.log(yearOfBirth); 

document.getElementById("year").innerHTML = yearOfBirth; 