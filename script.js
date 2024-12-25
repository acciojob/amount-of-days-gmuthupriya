function daysOfAYear(value) {
	if(value%4===0)
	{
		return 366;
	}
	else{
		return 365;
	}
}
let value=parseInt(promt("Enter a year"));
console.log(daysOfAYear(value))