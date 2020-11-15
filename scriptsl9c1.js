var startTime = new Date().getTime(); 


function stopTime(){ 
    var stopTime = new Date().getTime(); 

    timeOnPageInSeconds = (stopTime - startTime) / 600; 

    window.alert("You have been on this page for " + timeOnPageInSeconds + " seconds.");

}