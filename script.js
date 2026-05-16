//your JS code here. If required.
let hEle = document.querySelector('#display');

function getWindowSize(){
	let width = window.innerWidth;
	 const height = window.innerHeight;
	hEle.textContent = `Width: ${width} and Height: ${height}`
}
getWindowSize();
window.addEventListener('resize',getWindowSize);