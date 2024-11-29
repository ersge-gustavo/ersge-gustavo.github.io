// 2024-11-26 by gustavo.exel@ersge.ch guexel@gmail.com


function getPage ( numPage ) {

	// return fields are:
	// [0] : title
	// [1] : code for cookie
	// [2] : needs unblocking true/false ?
	// [3] : URL, only used after it's unblocked

	test = 0;

	if (numPage == test++ ) return [
		'Introduction', 'Intro', false,
		'https://docs.google.com/document/d/e/2PACX-1vRQbazzegdrSO96qtf-ZjddeuoEqU4BqAwnRT-MRj_SRtB4aO-i7xMoUWQ9Z8ua7uY3oi8Tqr2DJxk8/pub'
	];

	if (numPage == test++ ) return [
		'Actions à partir de click de buttons', 'BtnOnClick', true,
		'https://docs.google.com/document/d/e/2PACX-1vQKoeCxZt53m_HVj5pgnOHHu4Jq15ZBfVdHcnmIIF0q0W5CmUwfIiCcA-dJb1rd088Ka_vgNu0NLkBN/pub'
	];

	if (numPage == test++ ) return [
		'Actions multiples à partir de click de buttons', 'BtnOnClickMult', true,
		'https://docs.google.com/document/d/e/2PACX-1vRafMFVvQ8hIinhiyxElGWOwLQdCoaSqD_05Mdum7sybNtb_4WRbauLAs8Ylza08NZnG_tBwdyH3RHe/pub'
	];

	if (numPage == test++ ) return [
		'La première fonction en Javascript', 'PrimFunc', true,
		'https://docs.google.com/document/d/e/2PACX-1vSZz6ehL_UIYFhlJSAV5um6LHaNtZHIdj5fAD81VCmwaoBregSIt-c8rCrz0ZeE2yH9jaPJidmMcdOU/pub'
	];

	if (numPage == test++ ) return [
		'Fonctions en Javascript', 'FuncsJS', true,
		'https://docs.google.com/document/d/e/2PACX-1vRL03NXN4jrD84ycza_9ecrmWQk0JNasiwFguyzu2hxqMsi6_LHU05puzlXRg4ue-MSty_yrrl7fr-4/pub'
	];

	if (numPage == test++ ) return [
		'Le jeu Papier / Caillou / Ciseaux', 'JeuPCC', true,
		'https://docs.google.com/document/d/e/2PACX-1vTR_ci7SiESvdVpm94wO6EXEoUYj6ta7_SRqcF5DMgIB7hvMy9HN_k0su99pL2t7GVHO3xvk6Q25ZRH/pub'
	];

	if (numPage == test++ ) return [
		'Choix de l’ordinateur, choix fixe au départ', 'ChoixOrdinateur', true,
		'https://docs.google.com/document/d/e/2PACX-1vQC4IaqAgYW-CD5jbXPR5F-02ckhjqIgwmuHEe0-LpkD3JzJXa_XHbat1PRp6__CeNxIZnAX9Q59QuS/pub'
	];

	if (numPage == test++ ) return [
		'Fonction pour le choix de l’ordinateur', 'FuncChoixOrdi', true,
		'https://docs.google.com/document/d/e/2PACX-1vRIhu9j2qdN6GsI89BO5lJhn3w4jPy40NnDEOU_8h_xEvETKar5pytfX-Y0RZe809M_g44mMlvvCdbR/pub'
	];

	if (numPage == test++ ) return [
		'Modifier la fonction choixAleatoire()', 'MofidFuncChoixAle', true,
		'https://docs.google.com/document/d/e/2PACX-1vRXQHucQvIZdtGIkeUIw3WZw7dHLv8mXJJnd95TO5svQ7WpKjr3qFj2zcIflvJO7MNoZAQE-gtnYZMV/pub'
	];

	if (numPage == test++ ) return [
		'Distinguer entre caillou et ciseaux', 'DistinguerCC', true,
		'https://docs.google.com/document/d/e/2PACX-1vRCxbE1-pG6zepfECXCUZO2_H6AykPZf0XCYvLMswH9wsuWkjOeS2lDTt5ILbLQpNk8CswzV1IXrdq8/pub'
	];

	if (numPage == test++ ) return [
		'Afficher le résultat: qui a gagné', 'QuiAGagne', true,
		'https://docs.google.com/document/d/e/2PACX-1vTR5nOU7WlhU3xbQ89SWqCCRs6-8fzM_bQ1ZYP37z8GqGmXJz4khstuispVRZwTrfOzMtOEbncfJr6s/pub'
	];

	if (numPage == test++ ) return [
		'Afficher notre choix comme image au lieu de texte', 'ImgNotreChoix', true,
		'https://docs.google.com/document/d/e/2PACX-1vTMawkoZ-POhin4qPSV2wLQ5V04nFX7-K_ELBt-Ejn0vYYaVlZtm7JG9ydUCs5jw8l_huIgq311zanf/pub'
	];

	if (numPage == test++ ) return [
		'Montrer le choix de l’ordinateur aussi comme image', 'ImgChoixOrdi', true,
		'https://docs.google.com/document/d/e/2PACX-1vR-fzAJdNTON6mO4mjQbzF8k6HL6RXuL1nKQYUaHWbBtlRkZlHHGFxZvMn0qBb0QflBDK1WtfpEqJOQ/pub'
	];

	if (numPage == test++ ) return [
		'Changer l’affichage des images', 'ImgsFaceAFace', true,
		'https://docs.google.com/document/d/e/2PACX-1vTkwXxkoFqrPPBnv_C3JNQU1EeDCEmA_SwyHBxTHDTmKybIy11PKilEFYW-k-d3QK52iss7Q-EWl3Us/pub'
	];

	if (numPage == test++ ) return [
		'Garder un score des résultats', 'ScoreResult', true,
		'https://docs.google.com/document/d/e/2PACX-1vT4ULwj9tkGqOz2m9wLHhyjJ-4mKP1i3UQQEKoUJs1fwW1sYUnUAzgjJcaFbc_Aqac7XaqvZJKhTt25/pub'
	];

	if (numPage == test++ ) return [
		'Une carte “Google Maps” dans notre page web', 'EmbedGMaps', true,
		'https://docs.google.com/document/d/e/2PACX-1vQ3Xg5kd082kdZwRDAusClR8A_Xy7Oailp1I2BEwcsmZ5vcETQ9e9X9WztuCVKiPowJuim-ohx4Rmjh/pub'
	];

	if (numPage == test++ ) return [
		'-- rien --', 'rien', true,
		'https://docs.google.com/document/d/e/2PACX-1vRL03NXN4jrD84ycza_9ecrmWQk0JNasiwFguyzu2hxqMsi6_LHU05puzlXRg4ue-MSty_yrrl7fr-4/pub'
	];


	return null;
}






