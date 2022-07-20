import { divideNumeros, getURL, somaNumeros, subtraiNumeros } from "../src";

describe('Testando Unitariamente', () => {
    test("Testando a função soma", () => {
        let numerosSomados = somaNumeros(2,3);
        expect(numerosSomados).toBe(5)
    });
    test("Testando a função subtrair", () => {
        let numerosSubtraidos = subtraiNumeros(3,3);
        expect(numerosSubtraidos).toBe(0)
    });
    test("Testando a função dividir", () => {
        let numerosDivididos = divideNumeros(10,2);
        expect(numerosDivididos).toBe(5)
    });
    test("Testando a função getUrl", async () => {
        let response = await getURL();
        expect(response.status).toBe(200)
    });
});