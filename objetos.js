//Abrí la consola del chrome y crea un objeto que se llame nave. 
//Tal vez te resulte más fácil escribirlo en tu editor de texto 
//(Visual Studio/Sublime/Atom/etc) y pegarlo en la consola.

//El objeto nave debería tener las siguentes propiedades y valores:

//tipo de nave: un string que diga "espacial" 
//(ojo con los espacios en el nombre de la propiedad, tenés que ponerlo entre comillas si tiene espacios)
//país: un string que indique de qué país es la nave
//cantidad de tripulantes: un número que indica la cantidad de 
//tripulantes de la nave (ojo con los espacios en el nombre de la propiedad)
//tripulantes: un arreglo con los nombres de los tripulantes
//estado: "usada"
//despegar: un método (una función) que loguee en la consola 
//"Despegue en 3, 2, 1 … OH NO, ESPEREN, ALGO SE ROMPIÓ!" y después tire un alert que diga "BOOOOM!!"
//Ahora desde la consola extrae estos valores de las siguientes formas:
//El país de la nave usando dot notation.
//El tipo de nave usando bracket notation.
//Extrae la cantidad de tripulantes usando dot notation… ¿se puede?
//Extrae la cantidad de tripulantes usando bracket notation y guarda ese valor 
//en una variable que se llame cantTrip.
//Crea una variable que se llame test y guarda adentro un string que diga "estado".

//Ejecutá el método (función) dentro de la propiedad despegar (tenés que extraerlo 
//del objeto y agregar un () al final).

var nave = {
    tipodenave: 'espacial',
    pais: 'dinamarca',
    tripulantes: 30,
    tripulantes_nombres: [], //meto arreglo
    estado: 'usada',
    despegar: function () { //meto funcion dentro del objeto
        console.log('Despegue en 3, 2, 1 … OH NO, ESPEREN, ALGO SE ROMPIÓ!')
        console.log(alert('BOOOOM!!'))
    }

}
nave[test] ////Usa la variable test para extraer el valor dentro de la propiedad estado. Probá usando 
//dot notation y bracket notation. ¿Cuál funciona?

nave.despegar()//Ejecutá el método (función) dentro de la propiedad despegar (tenés que extraerlo 
//del objeto y agregar un () al final).




//Crea una variable llamada mi_auto y asignale un objeto vació.

//Qué devuelve mi_auto[property_key] ?
//Qué devuelve mi_auto["modelo"] ?

//Asigna la string "color"a la variable next_property
//Usa la variable next_property para añadir el color a tu auto
//Qué devuelve mi_auto[next_property]?
//Qué devuelve mi_auto["color"]?
//Usa for in para iterar sobre el objeto mi_auto y muestra en la consola el key y el value de cada propiedad.

var mi_auto = {}

mi_auto.marca = 'ford'//Asignale a mi_auto una propiedad marca, que debería contener un string
mi_auto.año = 2020//Agrega una propiedad año que tenga un entero
mi_auto.nuevo = Boolean(true)//Agrega una propiedad nuevo que contenga un booleano

var property_key = 'modelo'//Crea una variable llamada property_key y asígnale el string "modelo"
mi_auto[property_key] = 'Kuga' //Usa la variable property_key , no el string "modelo", para agregar la propiedad modelo al objeto mi_auto.

var anotherpropertykey = 'precio' //Crea una variable llamada anotherpropertykey y dale el valor "precio".
mi_auto[anotherpropertykey] = 100000
//Usa la variable another_property_key, no la string "precio", para cuantificar el valor de tu auto.

var next_property = 'color'
mi_auto[next_property] = 'gris topo'

for (var muestra in mi_auto) {
    console.log(muestra, mi_auto[muestra] + ' value');
    console.log(muestra + ' key')
}

//RESPUESTAS mi_auto[next_property]
//"gris topo"
//mi_auto["color"]
//"gris topo"
//mi_auto["modelo"] 
//"Kuga"


//Recorre el arreglo numeros y pone cada número (2, 4, 5, 37, 0) 
//como una propiedad del objeto numeros_duplicados. El valor de cada propiedad debería ser 
//ese número multiplicado por dos. (primero crea el objeto vacío antes de empezar a agregarle las 
//propiedades y valores).
//TIP: es fundamental dividir el problema en partes y avanzar paso a paso. 
//Podes empezar haciendo un for clásico para recorrer el arreglo números 
//(no deberías usar "for in" para recorrer arreglos). 
//El console log está puesto sólo para mostrarte en la consola en qué se transforma i 
//en cada vuelta, pero no deberías usarlo para resolver el ejercicio. 
//Sólo te ayuda a entender qué está pasando.
//var numeros = [2, 4, 5, 37, 0]
//for( var i = 0; i < numeros.length; i++) {
//   console.log("valor del indice i es: " + i)
//   console.log("valor dentro del indice " + i + " es: " + numeros[i])


var numeros = [2, 4, 5, 37, 0]
var numeros_duplicados = {}
// despues deberia quedar así 
//{ '0': 0, 
//'2': 4, 
//'4': 8,
//'5': 10,
//'37': 74}

for (var i = 0; i < numeros.length; i++) {

    numeros_duplicados[numeros[i]] = numeros[i] * 2;
}

console.log(numeros_duplicados)



//POLITICOS Para resolver estos ejercicios repasemos conceptos que nos van a ayudar a resolverlo:


var greeting = "Hello and welcome!"
greeting[0]
var words = greeting.split(' ')
var favorites = []
var famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt', 'ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis']
var obama_jobs = []
var politicos = {
    secretary_of_state: 'hillary clinton',
    potus: 'barack obama',
    flotus: 'michelle obama',
    vice_prez: 'joe biden',
    gov_of_california: 'jerry brown'
}


for (var i = 0; i < famous.length; i++) { //Ahora itera sobre el arreglo famous y agrega a tu  
    if (famous[i][0] == 'a') {  //favoritos personas cuyos nombres empiecen con 'a'. FAVOURITES
        favorites.push() = famous.slice(i);
    } //aca me puede comparar la primer ==a , push, lo coloco en el arreglo favorito tomando ese arreglo
}

for (var nombre in politicos) { //Itera sobre el objeto politicos y agregá sus nombres al arreglo famous .
    politicos.famous.push(nombre, politicos[nombre])
}

//Itera sobre el objeto politicos y agregá los nombres de los trabajos en el arreglo obama_jobs.
for (var x in politicos) {
    politicos.obama_jobs.push(politicos(x))
}

//Crea un objeto vació llamado b_named_politicos.
var b_named_politicos = {}

//Agrega como una propiedad del objeto b_named_politicos a cualquier politico 
//cuyo nombre ò apellido empiece con 'b'. Usá su job title como key y su nombre como valor.

for (var nombre in politicos) {
    if (politicos[nombre][0] == 'b') {
        b_named_politicos[politicos(nombre)] = (nombre, politicos[nombre]);
    }
}

//Crea un objeto vació llamado reverse_politico_lookup.
//Agrega políticos a este objeto usando su nombre como key y su job_title como valor.
var reverse_politico_lookup = {}

for (var nombre in politicos) {
    if (politicos[nombre][0] == 'b') {
        reverse_politicos_lookup[nombre, politicos[nombre]] = (politicos(nombre))
    }
}

















