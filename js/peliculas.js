'use strict'

console.log('Cargado JS');

class Pelicula {
  constructor(){
    //console.log('Se ha creado una pelicula');
    //this es el objeto que ejecuta el codigo
    this.titulo = 'Tiroteo en Missippi'
    this.pueblo = new Pueblo('TodoPolvo', 'muy polovoriento, en mitad del desierto')
    this.narrador = new Narrador()
    this.maria = new PersonajesBuenos('Maria')
    this.paco = new PersonajesBuenos('Paco')
    this.morgan = new PersonajesMalos('Morgan')
    this.iniciar()
  }
  iniciar(){
    document.write(`<h1>${this.titulo}</h1>`)
    document.write(`<p>${this.pueblo.nombre} era un pueblo${this.pueblo.descripcion}`)
    this.narrador.hablar('Era una soleada mañana')
    this.paco.hablar(`Hola ${this.maria.nombre}, Hoy hace un dia espléndido.`)
    this.maria.hablar(`Hola ${this.paco.nombre}, la verdad que si.`)
    this.narrador.hablar('Ambos se miraron un instante y siguieron su camino ....')
    this.morgan.hablar('¡Eh tu! ¡Prigado! Dame tu caballo y la cartera')
    this.paco.hablar('No quiero son mias, largate de aquí')
    this.narrador.hablar(`Morgan apunta a ${this.paco.nombre}`)

  }
}


class Pueblo {
  constructor(nombre, descripcion) {
    this.nombre=nombre;
    this.descripcion=descripcion
  }
}

class Narrador {
  hablar(texto){
    document.write(`- ${texto} -`)
  }
}

class arma{

}
class Personajes {
  constructor(nombre,balas) {
    this.nombre = nombre
    this.balas = balas
    this.arma = new arma(this.balas)

  }
  hablar(texto){
    document.write(`<p class="personaje"><span>${this.nombre}:</span> ${texto}</p>`)
  }
}

class PersonajesBuenos extends Personajes{
  hablar(texto){
    document.write(`<p class="personaje"><span>${this.nombre}:</span> ${texto}</p>`)
  }
}
// uso de la herencias tiene que ser un tipo de la clase padre y hay que tener cuidado
class PersonajesMalos extends Personajes{
  hablar(texto){
    document.write(`<p class="malo"><span>${this.nombre}:</span> ${texto}</p>`)
  }
}


new Pelicula()
