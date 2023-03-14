var sceltaum = "";
var contatore = 0;

var sasso = document.querySelector(".sasso");
var carta = document.querySelector(".carta");
var forbice = document.querySelector(".forbice");
var umano = document.querySelector(".umano");

var esito_pari = document.getElementById("pareggio");
var punteggio_um = 0;
var punteggio_com = 0;
var um_punt = document.getElementById("p-score");
var com_punt = document.getElementById("c-score");

var display_moves = document.getElementById("display_moves_id");
var action = document.getElementById("action_id");
var click = document.getElementById("clicca_id");
var perso = document.getElementById("perso_id");
var vinto = document.getElementById("vinto_id");
  //__________________________________________________________________________________________________
  //SCELTA UMANO

  sasso.addEventListener("click", function(event){umano.src = sasso.src;sceltaum = "sasso";contatore +=1;round()});
  carta.addEventListener("click", function(event){umano.src = carta.src;sceltaum = "carta";contatore +=1;round()});
  forbice.addEventListener("click", function(event){umano.src = forbice.src;sceltaum = "forbice";contatore +=1;round()});

function round()
{
  //__________________________________________________________________________________________________
  //SCELTA COMPUTER
  var sceltacom = "";

  var armi = ["Paper", "Scissors", "Rock"];
  var numero = Math.floor(Math.random() * 3);

  var percorso = document.querySelector(".computer");
  percorso.src = "images/" + armi[numero] + ".svg";
  percorso.addEventListener("click", function(event){computer.src = percorso.src;});
  
  if (numero == 0) {sceltacom = "carta";}
  if (numero == 1) {sceltacom = "forbice";}
  if (numero == 2) {sceltacom = "sasso";}

//__________________________________________________________________________________________________
//SCELTE UMANO E COMPUTER SU CONSOLE
console.log("umano: " + sceltaum);
console.log("computer: " + sceltacom);
//__________________________________________________________________________________________________
//ESITO ROUND

    if (sceltaum == "sasso" && sceltacom == "sasso")
    {
      esito_pari.innerText = "PAREGGIO";
    }
    if (sceltaum == "carta" && sceltacom == "carta")
    {
      esito_pari.innerText = "PAREGGIO";
    }
    if (sceltaum == "forbice" && sceltacom == "forbice")
    {
      esito_pari.innerText = "PAREGGIO";
    }

    if (sceltaum == "sasso" && sceltacom == "forbice")
    {
      punteggio_um += 1;
      um_punt.innerText = punteggio_um;
      esito_pari.innerText = "";
    }
    if (sceltaum == "forbice" && sceltacom == "sasso")
    {
      punteggio_com += 1;
      com_punt.innerText = punteggio_com;
      esito_pari.innerText = "";
    }

    if (sceltaum == "carta" && sceltacom == "sasso")
    {
      punteggio_um += 1;
      um_punt.innerText = punteggio_um;
      esito_pari.innerText = "";
    }
    if (sceltaum == "sasso" && sceltacom == "carta")
    {
      punteggio_com += 1;
      com_punt.innerText = punteggio_com;
      esito_pari.innerText = "";
    }

    if (sceltaum == "forbice" && sceltacom == "carta")
    {
      punteggio_um += 1;
      um_punt.innerText = punteggio_um;
      esito_pari.innerText = "";
    }
    if (sceltaum == "carta" && sceltacom == "forbice")
    {
      punteggio_com += 1;
      com_punt.innerText = punteggio_com;
      esito_pari.innerText = "";
    }
    console.log("umano: " + punteggio_um);
    console.log("computer: " + punteggio_com);
    console.log("round: " + contatore);
//__________________________________________________________________________________________________
//ESITO FINALE
    if(punteggio_um == 5)
    {
      esito_pari.innerText = "COMPLIMENTI! HAI VINTO (:"
      display_moves.style.visibility = "hidden";display_moves.style.height = "0px";display_moves.style.width = "0px";
      action.style.visibility = "hidden";action.style.height = "0px";action.style.width = "0px";
      click.style.visibility = "hidden";
      vinto.style.visibility = "visible";vinto.style.height = "500px";vinto.style.width = "500px";
      var suono = new Audio("sounds/Good_result.mp3").play();
    }
    if(punteggio_com == 5)
    {
      esito_pari.innerText = "PECCATO! HAI PERSO ):"
      display_moves.style.visibility = "hidden";display_moves.style.height = "0px";display_moves.style.width = "0px";
      action.style.visibility = "hidden";action.style.height = "0px";action.style.width = "0px";
      click.style.visibility = "hidden";
      perso.style.visibility = "visible";perso.style.height = "500px";perso.style.width = "700px";
      var suono = new Audio("sounds/Sad_Trombone.mp3").play();
    }
}


