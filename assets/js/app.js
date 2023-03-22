// alert("hello.....");

"use strict"
const digitalclock = document.getElementById("digitalclock");

// const setZero = (val) => {
// 	if (val < 10){
// 		return "0" + val
// 	}
// 	else{
// 		return val
// 	}
// }


const setZero = (val) => {
	return(val < 10 ) ? ("0"+val) : (val)
}


function createdigitalclock(){
let cdate = new Date();

let hour = cdate.getHours();
let min = cdate.getMinutes();
let sec = cdate.getSeconds();
let session = "AM";
	
	if(hour >= 12){
		session = "PM"
	}
	if(hour > 12){
			hour = hour -12
	}

	hour = setZero(hour);
	min = setZero(min);
	sec = setZero(sec);


	// if(hour < 10){
	// 	hour = "0"+ hour	
	// }
	// if(min < 10){
	// 	min = "0"+min
	// }
	// if(sec < 10){
	// 	sec = "0"+sec
	// }
	
let result = `${hour}:${min}:${sec} ${session}`;
digitalclock.innerHTML=result;
setTimeout(createdigitalclock, 1000);
}

createdigitalclock();