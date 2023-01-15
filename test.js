

//création bouton ajouter
let btn = document.createElement("Button");        
let t = document.createTextNode("Ajouter");       
btn.appendChild(t);                                
document.body.appendChild(btn); 


//création formulaire:
function createForm() {
    
  let form = document.createElement("form");
  
  let titre = document.createElement("input");
   titre.setAttribute("type", "text");
   titre.setAttribute("name","titre");
   form.appendChild(titre);


  let paragraph = document.createElement("input");
    paragraph.setAttribute("type","text");
    paragraph.setAttribute("name","paragraph");
    form.appendChild(paragraph);

    
  let button = document.createElement("button");
    button.innerHTML = "Soumettre";
    button.setAttribute("onclick", "delete");
    form.appendChild(button);
  
    document.body.appendChild(form);
  }
 



//fonction pour afficher le formulaire au click sur le bouton    
btn.addEventListener("click", function() {
  
  createForm();
  
    
})


  //ajouter un titre sur la navbar
  function addTitleToNav(title) {

    // Création d'un lien pour le titre de l'article
    let a = document.createElement("a");
    a.setAttribute("href", "#" + title);
    a.innerHTML = title;
  
    // Ajout du lien au menu navbar
    let nav = document.getElementById("nav");
    nav.appendChild(a);
  }

  addTitleToNav("titre1");

  //fonction pour afficher l'article sur la navbar
  let button = document.createElement("button");
  button.addEventListener("click",function(){
    
    


  })


  //bouton pour supprimer un article
  let btnR = document.createElement('button');
    btnR.innerHTML = "supprimer";
    document.body.appendChild(btnR);
    btnR.style.display = 'none';
  
  
  
  
    
  

  
  







