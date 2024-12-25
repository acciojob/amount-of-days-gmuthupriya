
function daysOfAYear(value) {
	if(value%4===0 &&(value%100!==0)||(value%400==0))
	{
		return 366;
	}
	else{
		
		return 365;
	}
}
console.log(daysOfAYear(2000));
