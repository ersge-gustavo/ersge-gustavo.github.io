// 2024-11-26 by gustavo.exel@ersge.ch guexel@gmail.com


function getParamFromURL ( paramName ) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(paramName);
}



function getCookie(cookieName) {
    let cookies = document.cookie;
    let cookieArray = cookies.split("; ");

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        let [name, value] = cookie.split("=");
   
        if (name === cookieName) {
          return decodeURIComponent(value);
        }
    }
 
    return null;
}


function randomString ( length ) {
	let st = '';
	const chars = 'QWERTYUIOPASDFGHJKLZXCVBNM1234567890';
	const charslen = chars.length;
	for ( i=0; i<length; i++ ) {
		st += chars.charAt(Math.floor(Math.random()*charslen));
	}
	return st;
}


function getIdBrowser() {
	let idb = getCookie('idb');
	if (idb == null) {
		idb = randomString ( 8 );
		console.log ( 'created idBrowser ',idb );
		document.cookie = "idb="+idb+"; path=/";
	}
	return idb;
}



