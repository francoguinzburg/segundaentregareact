    import Ropa from '../data/Ropa.json'
    
    export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(Ropa);
        }, 2000);
    });
}

export const pedirProductoPorId = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(Ropa.find(prod => prod.id === id));
        }, 2000);
    });
}