$(document).keydown(function(event) {
if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189') ) {
        event.preventDefault();
     }
    // 107 Num Key  +
    // 109 Num Key  -
    // 173 Min Key  hyphen/underscor Hey
    // 61 Plus key  +/= key
});

$(window).bind('mousewheel DOMMouseScroll', function (event) {
       if (event.ctrlKey == true) {
       event.preventDefault();
       }
});

var activeIllustration = "";

var photo_names=["7_giorni.jpg","Capricorno.jpg","guida_galattica_per_autostoppisti.png","il_barone_rampante.jpg","il_cavaliere_inesistente.jpg","il_maestro_e_margherita.jpg","Keep_watching_keep_fading.jpg","mediterraneo.png","Nel_nome_della_rosa_non_squared.png","non_limitarti_a_galleggiare.jpg"];
var photo_info = {
  "il_barone_rampante.jpg": {
    "title":"Il barone Rampante",
    "quote":"Si conobbero. Lui conobbe lei e se stesso, perché in verità non s'era mai saputo. E lei conobbe lui e se stessa, perché pur essendosi saputa sempre, mai s'era potuta riconoscere così.",
    "date":"21/05/2020",
    "author":"Italo Calvino",
    "background-color":"#FFFFFF",
    "mockup":"il_barone_rampante_Mockup.png"
  },
  "7_giorni.jpg": {
    "title":"Sette Giorni",
    "quote":"niente parole, niente gesti, solo uno scambio di sorrisi muti. sediamo in silenzio senza altro scopo se non avvertire che non siamo soli. siamo insieme. sento la voce del fuoco, è una danza, e la voce dell'acqua, è un battito, sento la voce dell'erba, è un fruscio, sento la voce degli alberi, è un richiamo, sento la voce del vento, è un sibilo, sento la voce delle nuvole, è un'onda. come se mormorassero di aver conosciuto anche loro un destino beffardo, che si vogliono lasciare alle spalle. sento un canto simile a quello dell'usignolo. vola da me, tace, poi vola ancora da me.",
    "date":"12/08/2019",
    "author":"Yu Hua",
    "background-color":"#434343",
    "mockup":"7_Giorni_Mockup.png"
  },
  "Capricorno.jpg": {
    "title":"Capricorno",
    "quote":"",
    "date":"15/04/2020",
    "author":"",
    "background-color":"",
    "mockup":"",
    "description":""
  },
  "guida_galattica_per_autostoppisti.png": {
    "title":"Guida galattica per autostoppisti",
    "quote":"Con una paperella di gomma non si è mai soli.",
    "date":"18/08/2019",
    "author":"Douglas Adams",
    "background-color":"",
    "mockup":""
  },
  "il_cavaliere_inesistente.jpg": {
    "title":"Il cavaliere Inesistente",
    "quote":"Anche ad essere si impara.",
    "date":"05/05/2020",
    "author":"Italo Calvino",
    "background-color":"",
    "mockup":""
  },
  "il_maestro_e_margherita.jpg": {
    "title":"Il maestro e margherita",
    "quote":"Qualcosa di male, mi permetta, si nasconde in coloro che evitano il vino, il gioco, la compagnia di leggiadre fanciulle, le conversazioni conviviali. Questa gente о è gravemente malata oppure segretamente odia il prossimo",
    "date":"24/03/2020",
    "author":"Mikhail Bulgakov",
    "background-color":"",
    "mockup":""
  },
  "Keep_watching_keep_fading.jpg": {
    "title":"Keep watching, keep fading away",
    "quote":"",
    "date":"26/11/2017",
    "author":"",
    "background-color":"",
    "mockup":"",
    "description":""
  },
  "mediterraneo.png": {
    "title":"Mediterraneo",
    "quote":"",
    "date":"04/06/2019",
    "author":"",
    "background-color":"",
    "mockup":"",
    "description":"",
  },
  "Nel_nome_della_rosa_non_squared.png": {
    "title":"Il nome della rosa",
    "quote":"La bellezza del cosmo è data non solo dalla unità nella varietà, ma anche dalla varietà nell'unità.",
    "date":"02/03/2020",
    "author":"Umberto Eco",
    "background-color":"",
    "mockup":""
  },
  "non_limitarti_a_galleggiare.jpg" : {
    "title":"Non limitarti a galleggiare",
    "quote":"Pensa che si muore e che prima di morire tutti hanno diritto ad un attimo di bene. Ascolta con clemenza. Guarda con ammirazione le volpi, le poiane, il vento, il grano. Impara a chinarti su un mendicante, coltiva il tuo vigore e lotta fino a rimanere senza fiato. Non limitarti a galleggiare, scendi verso il fondo anche a rischio di annegare. Sorridi di questa umanità che si aggroviglia su se stessa. Cedi la strada agli alberi.",
    "date":"13/05/2020",
    "author":"Franco Arminio",
    "background-color":"",
    "mockup":""
  }
};

function resetActiveIllustration() {
  activeIllustration = "";
  if (document.getElementsByClassName('active-illustration')) {
    $('.separator-child').css("background-image","none");
  };
}

function showIllustration(raw_name) {
  //if any illustration div has the class "active" then hide that illustration and show the selected one
  name = raw_name.getAttribute("data-illustration");
  if (name == activeIllustration) {
    console.log("aaaaa");
  } else {
    activeIllustration = name;
    if (document.getElementsByClassName('active-illustration')) {
      $('#showcase').children("div").remove();
    };
    var mockup = photo_info[name]["mockup"];
    var background_color = photo_info[name]["background-color"];
    $('.separator-child').css({"background-image":"url(./public/photos/"+name+")","background-size":"130%","background-repeat":"no-repeat","filter": "blur(4px)","-webkit-filter": "blur(4px)", "opacity":"0.3"});
    $('#showcase').prepend('<div id="active" class="illustration-container" style="visibility:hidden"><img class="active-illustration" src="./public/photos/'+name+'" alt="'+name+'" width="60%"></img></div>');
    $(".illustration-container").addClass("illustration-slide-in");
    setTimeout("document.getElementById('active').style.visibility = 'visible'",1000);
  }
}

//chapters
for(var i = 0; i < photo_names.length; i++) {
  if (photo_names[i] in photo_info) {
    var raw_name = photo_names[i];
    var name = photo_info[photo_names[i]]["title"];
    $('#chapters').append('<p><span class="chapter" id='+name+' data-illustration='+raw_name+' onclick="showIllustration(this)" style="z-index:9; width:100%;">'+''+(i+1)+' - '+name+'</span></p>');
  } else {
    var no_name = "dawdada";
    $('#chapters').append('<span class="chapter" id="not_in_photo_info" onclick="showIllustration(no_name)" style="background: white;">not_in_photo_info</span>');
  }
}
