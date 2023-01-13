

   



var down = document.getElementById("GFG_DOWN");
           
    // Create a break line element
    var br = document.createElement("br");
    function GFG_Fun() {
               
    // Create a form dynamically
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");
 
    // Create an input element for Full Name
    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "name");
    FN.setAttribute("placeholder", "");

    
 
     
 
       // Create an input element for retype-password
       var RPWD = document.createElement("input");
       RPWD.setAttribute("type", "text");
       RPWD.setAttribute("name", "");
       RPWD.setAttribute("placeholder", "");
 
                // create a submit button
                var s = document.createElement("input");
                s.setAttribute("type", "envoyer");
                s.setAttribute("value", "envoyer");
                 
                // Append the full name input to the form
                form.appendChild(FN);
                 
                // Inserting a line break
                form.appendChild(br.cloneNode());
                 
                 
                // Append the ReEnterPassword to the form
                form.appendChild(RPWD);
                form.appendChild(br.cloneNode());
                 
                // Append the submit button to the form
                form.appendChild(s);
 
                document.getElementsByTagName("body")[0]
               .appendChild(form);
            }





   
