'use strict'

console.log('Cargado JS');

class Pelicula {
  constructor(){
    //console.log('Se ha creado una pelicula');
    //this es el objeto que ejecuta el codigo
    this.titulo = 'Tiroteo en Missippi'
    this.pueblo = new Pueblo('TodoPolvo', 'muy polovoriento, en mitad del desierto')
    this.narrador = new Narrador()
    this.maria = new PersonajesBuenos('Maria', 6)
    this.paco = new PersonajesBuenos('Paco', 6)
    this.morgan = new PersonajesMalos('Morgan', 6)
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
    this.morgan.hablar('Estate quieto o te disparo')
    this.narrador.hablar(`${this.paco.nombre} salio a correr`)
    this.morgan.disparo(`${this.morgan.nombre}`)
    this.morgan.disparo(`${this.morgan.nombre}`)
    this.morgan.disparo(`${this.morgan.nombre}`)
    this.morgan.disparo(`${this.morgan.nombre}`)
    this.morgan.disparo(`${this.morgan.nombre}`)
    this.morgan.disparo(`${this.morgan.nombre}`)
    this.morgan.disparo(`${this.morgan.nombre}`)
    this.morgan.disparo()



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

class Arma{
  disparo(){
    document.write('PUMM')
  }
  sinBalas(){
    document.write('Click')
  }
}

class Personajes {
  constructor(nombre,balas) {
    this.nombre = nombre
    this.balas = balas
    this.arma = new Arma(this.balas)

  }
  hablar(texto){
    document.write(`<p class="personaje"><span>${this.nombre}:</span> ${texto}</p>`)
  }
}

class PersonajesBuenos extends Personajes{
  hablar(texto){
    document.write(`<p class="personaje"><span>${this.nombre}:</span> ${texto}</p>`)
  }
  disparo(balas){

    if(this.balas==0){
      document.write(`<p class="Personajes">¡Click!</p>`)
      this.balas=0
    }else {
      document.write(`<p class="Personajes">¡PUMM!</p>`)
      this.balas--
    }
  }
}
// uso de la herencias tiene que ser un tipo de la clase padre y hay que tener cuidado
class PersonajesMalos extends Personajes{
  hablar(texto){
    document.write(`<p class="malo"><span>${this.nombre}:</span> ${texto}</p>`)
  }
  disparo(balas){
    if(this.balas==0){
      document.write(`<p class="malo">¡Click!</p>`)
      this.balas=0
    }else {
      document.write(`<p class="malo">¡PUMM!</p>`)
      this.balas--
    }
  }
}


new Pelicula()
