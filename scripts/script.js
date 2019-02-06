const originalLetters = {
	normal: `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#%^&*()-=[];',.|:"`,
	handwriting1: `ð’¶ð’·ð’¸ð’¹ð‘’ð’»ð‘”ð’½ð’¾ð’¿ð“€ð“ð“‚ð“ƒð‘œð“…ð“†ð“‡ð“ˆð“‰ð“Šð“‹ð“Œð“ð“Žð“ð’œðµð’žð’Ÿð¸ð¹ð’¢ð»ð¼ð’¥ð’¦ð¿ð‘€ð’©ð’ªð’«ð’¬ð‘…ð’®ð’¯ð’°ð’±ð’²ð’³ð’´ð’µ1234567890!@#%^&*()-=[];',.|:"`,
	handwriting2: `Î±á‚¦ÆˆÔƒÒ½ÏÉ Ô‹Î¹ÊÆ™Ê…É±É³ÏƒÏÏ™É¾Ê‚ÆšÏ…Ê‹É¯xáƒ§È¥ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#%^&*()-=[];',.|:"`,
	sorcerer: `ÇŸÉ®ÆˆÉ–É›Ê„É¢É¦É¨ÊÓ„ÊŸÊÕ¼Ö…Ö„Õ¦Ê€Ö†È¶ÊŠÊ‹Õ¡Ó¼ÊÊÇŸÉ®ÆˆÉ–É›Ê„É¢É¦É¨ÊÓ„ÊŸÊÕ¼Ö…Ö„Õ¦Ê€Ö†È¶ÊŠÊ‹Õ¡Ó¼ÊÊ1234567890!@#%^&*()-=[];',.|:"`/*,
	double-struck: `ð•’ð•“ð•”ð••ð•–ð•—ð•˜ð•™ð•šð•›ð•œð•ð•žð•Ÿð• ð•¡ð•¢ð•£ð•¤ð•¥ð•¦ð•§ð•¨ð•©ð•ªð•«ð”¸ð”¹â„‚ð”»ð”¼ð”½ð”¾â„ð•€ð•ð•‚ð•ƒð•„â„•ð•†â„™â„šâ„ð•Šð•‹ð•Œð•ð•Žð•ð•â„¤ðŸ™ðŸšðŸ›ðŸœðŸðŸžðŸŸðŸ ðŸ¡ðŸ˜!@#%^&*()-=[];',.|:"`*/
};

const stuff = [`normal`, `handwriting1`, `handwriting2`, `sorcerer`, `double-struck`];
const normal = originalLetters.normal.split(``);
const handwriting1 = originalLetters.handwriting1.split(``);
const handwriting2 = originalLetters.handwriting2.split(``);
console.log(normal);
console.log(handwriting1);
function contactOwner() {
	window.open(`mailto:ldamienvesper@gmail.com`, `emailWindow`);
}
function copyText() {
	let newInput = document.querySelector(`.form-otherText`);
	let copyButton = document.querySelector(`.btn-copyText`);
	newInput.select();
	document.execCommand("copy");
	copyButton.innerHTML = `Copied!`;
	copyButton.classList.remove(`enabled`);
	copyButton.classList.add(`disabled`);
	copyButton.disabled = true;
	window.getSelection().removeAllRanges();
	setTimeout(function() {
		copyButton.innerHTML = `Copy`;
		copyButton.classList.remove(`disabled`);
		copyButton.classList.add(`enabled`);
		copyButton.disabled = false;
	}, 2000);
}
function loadText() {
	let regInput = document.querySelector(`.form-originalText`);
	let newInput = document.querySelector(`.form-otherText`);
	let loadBtn = document.querySelector(`.btn-loadText`);
	let optSelect = document.querySelector(`.form-stylingType`);
	//var strUser = e.options[e.selectedIndex].value;
	let regText = regInput.value;
	var textType;
	regInput.classList.remove(`enabled`);
	regInput.classList.add(`disabled`);
	loadBtn.classList.remove(`enabled`);
	loadBtn.classList.add(`disabled`);
	loadBtn.disabled = true;
	var newText = ``;
	for(var i = 0; i < regText.length; i++) {
		if(normal.includes(regText.slice(i, i + 1))) {
			newText += handwriting2[normal.indexOf(regText.slice(i, i + 1))];
		} else {
			newText += regText.slice(i, i + 1);
		}
	}
	newInput.value = newText;
	setTimeout(function() {
		regInput.classList.remove(`disabled`);
		regInput.classList.add(`enabled`);
		regInput.disabled = false;
		loadBtn.classList.remove(`disabled`);
		loadBtn.classList.add(`enabled`);
		loadBtn.disabled = false;
	}, 750);
}
function loadWebsite() {
	window.open(`./premadefonts.html`)
}
//abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890
//ð’¶ð’·ð’¸ð’¹ð‘’ð’»ð‘”ð’½ð’¾ð’¿ð“€ð“ð“‚ð“ƒð‘œð“…ð“†ð“‡ð“ˆð“‰ð“Šð“‹ð“Œð“ð“Žð“ð’œðµð’žð’Ÿð¸ð¹ð’¢ð»ð¼ð’¥ð’¦ð¿ð‘€ð’©ð’ªð’«ð’¬ð‘…ð’®ð’¯ð’°ð’±ð’²ð’³ð’´ð’µ1234567890
//Î±á‚¦ÆˆÔƒÒ½ÏÉ Ô‹Î¹ÊÆ™Ê…É±É³ÏƒÏÏ™É¾Ê‚ÆšÏ…Ê‹É¯xáƒ§È¥ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890
//ÇŸÉ®ÆˆÉ–É›Ê„É¢É¦É¨ÊÓ„ÊŸÊÕ¼Ö…Ö„Õ¦Ê€Ö†È¶ÊŠÊ‹Õ¡Ó¼ÊÊÇŸÉ®ÆˆÉ–É›Ê„É¢É¦É¨ÊÓ„ÊŸÊÕ¼Ö…Ö„Õ¦Ê€Ö†È¶ÊŠÊ‹Õ¡Ó¼ÊÊ1234567890
