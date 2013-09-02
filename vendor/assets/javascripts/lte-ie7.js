/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icon-fonts\'; font-size: 1em">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-at' : '&#x270e;',
			'icon-envelope' : '&#x2709;',
			'icon-facebook' : '&#x263a;',
			'icon-twitter' : '&#x270d;',
			'icon-github' : '&#x2604;',
			'icon-linkedin' : '&#x260d;',
			'icon-search' : '&#x2691;',
			'icon-cogs' : '&#x2692;',
			'icon-loop' : '&#x27f3;',
			'icon-quote-left' : '&#x275d;',
			'icon-angle-up' : '&#x25b4;',
			'icon-angle-down' : '&#x25be;',
			'icon-info' : '&#x69;',
			'icon-info-sign' : '&#x6a;',
			'icon-info-2' : '&#x6b;',
			'icon-info-3' : '&#x6c;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};
