if (location.toString() !== location.origin + '/') {
	location.replace(location.origin + '/');
}
const urlParams = new URLSearchParams(new URL(document.referrer || location).search);
if (urlParams.has('theme'))
	theme(urlParams.get('theme'));
document.getElementById('theme').onclick = switchTheme;
function navigate(url) {
	url += '?theme=' + (document.body.getAttribute('theme') || 'light');
	location = url;
}
function switchTheme() {
	if (document.body.getAttribute('theme') === 'light') {
		theme('dark');
		return;
	}
	if (document.body.getAttribute('theme') === 'dark') {
		theme('light');
		return;
	}
	theme('light');
}
function theme(value) {
	if (value === 'light') {
		document.body.setAttribute('theme', 'light');
		return;
	}
	if (value === 'dark') {
		document.body.setAttribute('theme', 'dark');
		return;
	}
}
