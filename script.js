//your JS code here. If required.
function checkisLeapyear(year) {
	if(year<1||year>9999)
	{
		throw new Error("Year should be within 1 to 9999")
	}

const isLeap = (year%4===0 && year%100!=0) || (year%400===0)
return isLeap ? 365 : 366;
}
console.log(checkisLeapyear(2000));
console.log(checkisLeapyear(1900));
console.log(checkisLeapyear(2024));