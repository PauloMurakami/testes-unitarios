import axios from 'axios';

export function somaNumeros(numeroUm:number, numeroDois:number) {
    return numeroUm + numeroDois;
}
export function subtraiNumeros(numeroUm:number, numeroDois:number) {
    return numeroUm - numeroDois;
}
export function divideNumeros(numeroUm:number, numeroDois:number) {
    return numeroUm / numeroDois;
}
export async function getURL() {
    return await axios.get("http://google.com.br").then((res) => {
        return res;
    }).catch((error) => {
        throw error;
    });
}
export async function juntaTudo(numeroUm:number, numeroDois:number) {
    let somar = somaNumeros(numeroUm, numeroDois);
    let subtrair = subtraiNumeros(numeroUm, numeroDois);
    let dividir = divideNumeros(numeroUm, numeroDois);

    let somarResultados = somar + subtrair + dividir;

    await getURL();
    return somarResultados;
}