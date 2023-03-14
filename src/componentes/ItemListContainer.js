import React from 'react'

const personajes = [
    { id:1, imagen:'https://i.redd.it/c4wyz5ramjo91.gif', titulo:'Neco-Arc', precio:1500 },
    { id:2, imagen:'https://i.redd.it/c4wyz5ramjo91.gif', titulo:'Dori-Dori', precio:1000 }
];

const ItemListContainer = ( {greeting}) => {
    
    const pedirDatos = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(personajes);
            }, 2000);
        });
    }

    pedirDatos().then((response) => console.log(response));

  return (
    <div>
        <h2>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer