let libros = ["El principito","Blanca Nieves","Luna de pluton","La Bella y La Bestia","Pedro paramo","El Alquimista","Mujercitas"];
let ulLibros = document.getElementById("ulLibros");

console.log(libros.length);
libros.push("Memorias");
libros.push("Memorias");
libros.unshift("Calculo Vectorial"); //agrega al inicio
libros.unshift("Calculo Vectorial");
console.log(libros.length);

let tmpLibro = libros.pop();// quita elementos del final de la lista
console.log(tmpLibro, libros.length);
tmpLibro = libros.shift(); //remueve elemntos del inicio
console.log(tmpLibro,libros.length);

let libros2 = libros.map(function (libro) { //map 
    return libro.toUpperCase();
});

for(let i=0;i<libros.length;i++)
{
    ulLibros.innerHTML+=`<li class="list-group-item"> ${i+1}. ${libros[i]}</li>`;
    console.log(libros[i].toUpperCase());
}

//segunda opcion
// let i=0;
// while (i<libros.length){
//     ulLibros.innerHTML+=`<li class="list-group-item"> ${i+1}.- ${libros[i]}</li>`;
//     i++;
// }

// //tercera opcion

// libros.forEach(libro=>ulLibros.innerHTML+=`<li class="list-group-item">${libro}</li>`);

// //cuarta forma
// libros.forEach((libro,i)=>
// ulLibros.innerHTML+=`<li class="list-group-item">${i+1}.- ${libro}</li>`);
