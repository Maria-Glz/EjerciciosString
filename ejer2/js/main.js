let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function(event){
  event.preventDefault();
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");
  let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
  let exampleFormControlInput2 = document.getElementById("exampleFormControlInput2");
  
  let alertError = document.getElementById("alertError");
  exampleFormControlTextarea1.value= exampleFormControlTextarea1.value.trim(); 
  alertError.style.display="none";
  alertError.innerHTML = "";
//   console.log(exampleFormControlTextarea1.value.length);
//   console.log("[" + 
//          exampleFormControlTextarea1.value.replaceAll("  ", "")
//          + "]"
//          );

  if(exampleFormControlTextarea1.value.trim().replaceAll("  ", "").length<20){
    alertError.innerHTML = "El mensaje debe tener mas de 20 caracteres";
    alertError.style.display="block";
    exampleFormControlTextarea1.focus();
    exampleFormControlTextarea1.select();

  }
  if (exampleFormControlInput1.value.match(emailRegex)==null)
  {
    alertError.style.display="block";
    alertError.innerHTML += "<br/> El correo electronico no es valido.";
  }
  let RFCRegex = /^[A-Z]{4}[0-9]{6}[A-Z0-0]{3}$/;
  if (exampleFormControlInput2.value.match(RFCRegex) == null){
    alertError.style.display="block";
    alertError.innerHTML += "<br/> El RFC no es valido.";
  }


});