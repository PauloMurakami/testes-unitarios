import { juntaTudo } from "../src";
import axios from 'axios';
jest.mock('axios');

describe('Testando Integralmente', () => {
    test("Testando a função juntaTudo", async () => {
        axios.get = jest.fn().mockResolvedValueOnce({status: 200})
        let response = await juntaTudo(10,10);
        expect(response).toBe(21)
    });
})