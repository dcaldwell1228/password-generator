function generatePassword() {
	let length = 15,
		charset =
			"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789{}()!@#$%^&*[].,:;?",
		retVal = "";

	for (let i = 0, n = charset.length; i < length; ++i) {
		retVal += charset.charAt(Math.floor(Math.random() * n));
	}
	console.log(retVal);
	document.getElementById("password").value = retVal;
}

function copyPassword() {
	let copyText = document.getElementById("password");
	copyText.select();
	copyText.setSelectionRange(0, 99999);

	document.execCommand("copy");
	document.getElementById("copied").textContent =
		"Password Copied: " + copyText.value;
}
