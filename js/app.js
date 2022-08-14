const bigd=document.getElementById("megalos");
const smalld=document.getElementById("mikros");
const secd=document.getElementById("deutera");

function timenow(){
const data =new Date();

const seconds=data.getSeconds();
const minutes=data.getMinutes();
const hours=data.getHours();

const time=6;
const timezone=30;

deutera.style.transform ="rotate("+(seconds*time)+"deg)";
mikros.style.transform="rotate("+(hours*timezone)+"deg)";
megalos.style.transform="rotate("+(minutes*time)+"deg)";
}





displayClock();
timenow();
setInterval(timenow, 1000);


function displayClock(){
	

const data =new Date();

let seconds=data.getSeconds();
let minutes=data.getMinutes();
let hours=data.getHours();

minutes=checkTime(minutes);
seconds=checkTime(seconds);

var display = hours+":"+minutes+":"+seconds;
document.getElementById("psifiaki").innerHTML = display;
setTimeout(displayClock, 1000); 
}


function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}