if (location.toString() !== location.origin + '/') {
	location.replace(location.origin + '/');
}
const urlParams = new URLSearchParams(new URL(document.referrer || location).search);
if (urlParams.has('theme'))
	theme(urlParams.get('theme'));
document.getElementById('theme').onclick = switchTheme;
document.getElementById('homepage-button').onclick = () => {
	navigate(location.origin);
}
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
	if (value === 'light' || value === 'dark') {
		document.body.setAttribute('theme-button', value);
		document.getElementById('theme-icon').setAttribute('src', location.origin + '/icons/theme/' + value + '.svg');
		return;
	}
}
