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


//Entrada 

function reves(nombres)
{
    let nombre2 = "";
    nombre2 = nombre2.toLowerCase();

    for (let i=nombres.length-1; i>=0; i--)
    {
        nombre2 += nombres.charAt(i);
    }
return (nombre2);
}

//Salida
"enilA aruaL"

//Ejercicio 3
function palin(nombre3)
{
    nombre3 = nombre3.toLowerCase();
    nombre3 = nombre3.replaceAll("","",);
    if(reves(nombre3)==nombre3)
    {
        return true;
    }
return false;
}

//Salida
"enilA aruaL"
