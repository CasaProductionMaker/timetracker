function saveTime() {
	// save time
	let times = JSON.parse(localStorage.getItem('times')) || [];
	times.push(Date.now());
	localStorage.setItem('times', JSON.stringify(times));
}

function clearTimes() {
	// save time
	localStorage.setItem('times', JSON.stringify([]));
}