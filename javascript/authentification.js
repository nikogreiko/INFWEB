/*==========================================================================
  JavaScript pour la page d'authentification
 ===========================================================================*/

var prenom;
var nom;
var courriel;
var mdp;
var confMdp;


function getInscriptionInfo () {
  prenom = document.inscription.first.value;
  nom = document.inscription.last.value;
  courriel = document.inscription.email.value;
  mdp = document.inscription.signpass.value;
  confMdp = document.inscription.confirmpass.value;

	validationInfo();
}

function validationInfo () {
  //Validation si les champs sont tous remplies.
  if (prenom == "" || nom == "" || courriel == "" || mdp == "" || confMdp == ""){
  	alert("Tous les champs doivent être saisies.");
  	return false;
  }
  
}