console.log("its working");

function bmiCalc() {
	let x = parseInt(document.getElementById("weight").value);

	let y = parseInt(document.getElementById("height").value);

	let finalWeight = x * 0.45;
	let finalHeight = y * 0.025;
	// let result = parseInt(x) + parseInt(y) ** 2;
	let result = finalWeight / Math.pow(finalHeight, 2);
	console.log(result);
	document.getElementById("result").value = result.toFixed(2);
}
