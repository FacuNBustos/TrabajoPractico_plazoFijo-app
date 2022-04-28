// const useInputFilter = require("./scripts/services/inputFilter.service");

// describe('Tests useInputFilter', () => {
//     test('Se ingresa el string "Facundo" se espera una devolucion = Error', () => {
//         const expected = Error;
//         const result = useInputFilter('Facundo');
//         expect(expected).toStrictEqual(result);
//     }),
//     test('Se ingresa el string "Facundo Bustos" se espera una devolucion = ["Facundo", "Bustos"]', () => {
//         const expected = ['Facundo', 'Bustos'];
//         const result = useInputFilter('Facundo Bustos');
//         expect(expected).toStrictEqual(result);
//     })
//     test('Se ingresa el string "    Facundo Bustos     " se espera una devolucion = ["Facundo", "Bustos"]', () => {
//         const expected = ['Facundo', 'Bustos'];
//         const result = useInputFilter('Facundo Bustos');
//         expect(expected).toStrictEqual(result);
//     })
//     test('Se ingresa el string "Facundo Nicolas Bustos" se espera una devolucion =  Error ', () => {
//         const expected = Error;
//         const result = useInputFilter('Facundo Nicolas Bustos');
//         expect(expected).toBe(result);
//     })
//     test('Se ingresa el string "facundo bustos" se espera una devolucion =  ["Facundo", "Bustos"] ', () => {
//         const expected = ['Facundo', 'Bustos'];
//         const result = useInputFilter('facundo bustos');
//         expect(expected).toStrictEqual(result);
//     })
//     test('Se ingresa el string "fACUNDO bUSTOS" se espera una devolucion =  ["Facundo", "Bustos"] ', () => {
//         const expected = ['Facundo', 'Bustos'];
//         const result = useInputFilter('fACUNDO bUSTOS');
//         expect(expected).toStrictEqual(result);
//     })
// })