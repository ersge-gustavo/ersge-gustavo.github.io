function ecrireDansUnSpan ( span, text ) {
	document.getElementById(span).innerHTML=text;
}

function couleurDunSpan ( span, couleur ) {
	document.getElementById(span).setAttribute('style','color:'+couleur);
}

function mettreUneImage ( img, filename ) {
	document.getElementById(img).setAttribute ( 'src', filename );
}

function estMarque ( checkbox ) {
	return document.getElementById(checkbox).checked;
}

function estMarqué ( checkbox ) {
	return estMarque(checkbox);
}
