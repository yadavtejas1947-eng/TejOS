function updateClock(){
    var now=new Date();
    var date=now.toLocaleDateString("en-GB");
    var time=now.toLocaleTimeString("en-US",{
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    document.getElementById("clock").textContent = `${date} ${time}`;
}

updateClock();                 //Show Immediately
setInterval(updateClock,1000); //Updates Clock every second