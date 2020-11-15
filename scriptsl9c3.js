function add(){ 
    var x = Number(document.getElementById('input1').value); 
    var y = Number(document.getElementById('input2').value);

    sum = x+y; 

    document.getElementById("output").innerHTML = sum; 
    
}