function copyNow(){
	let copied = document.getElementById("donate-email");
    let copyValue = document.getElementById("copy-email");
    copied.select();
    document.execCommand("copy");
    copyValue.innerHTML = "Email copied";
}