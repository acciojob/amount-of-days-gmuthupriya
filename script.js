function daysOfAYear(value) {
	if(value%4===0)
	{
		return 366;
	}
	else{
		return 365;
	}
}
console.log(daysOfAYear(value))