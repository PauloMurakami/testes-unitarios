import { juntaTudo } from "../src";

describe('Testando Integralmente', () => {
    test("Testando a função juntaTudo", async () => {
        let response = await juntaTudo(10,10);
        expect(response).toBe(21)
    });
})