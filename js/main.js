let nombre  = "Elote";
nombre = nombre.toLowerCase();
let letra = "";
let contfinal=0;

for (let i=0;i<nombre.length;i++)
   {
    console.log(nombre.charAt(i));
    let conttemp = 1;
    for (let index = i+1; index < nombre.length; index++) {
       if(nombre.charAt(i) == nombre.charAt(index))
          conttemp++;
    }
    if (conttemp>contfinal){
        contfinal = conttemp;
        letra = "La letra "+ nombre.charAt(i);
         }
      
   }
   console.log(letra, contfinal);



