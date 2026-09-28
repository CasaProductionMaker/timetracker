function saveTime() {
	// save time
	let time = new Date();
	let times = JSON.parse(localStorage.getItem('times')) || [];
	times.push(time.getTime());
	localStorage.setItem('times', JSON.stringify(times));

	let newTime = document.createElement("h1");
	const time12Hour = time.toLocaleTimeString('en-US', { 
		hour: '2-digit', 
		minute: '2-digit', 
		second: '2-digit', 
		hour12: true
	});
	newTime.innerText = time12Hour;
	document.body.appendChild(newTime);
}

function clearTimes() {
	// save time
	localStorage.setItem('times', JSON.stringify([]));
}

function onLoad() {
	let times = JSON.parse(localStorage.getItem('times')) || [];
	
	times.forEach(msTime => {
		let time = new Date(msTime);
		let newTime = document.createElement("h1");
		const time12Hour = time.toLocaleTimeString('en-US', { 
			hour: '2-digit', 
			minute: '2-digit', 
			second: '2-digit', 
			hour12: true
		});
		newTime.innerText = time12Hour;
		document.body.appendChild(newTime);
	});
}

onLoad();