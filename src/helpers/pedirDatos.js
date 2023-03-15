    import Personajes from '../data/Personajes.json'
    
    export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(Personajes);
        }, 2000);
    });
}