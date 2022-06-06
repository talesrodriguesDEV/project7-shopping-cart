require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verifica se fetchProducts é uma função', () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toBe('function');
  });

  it('Verifica o funcionamento da função fetchProducts', async () => {
    expect.assertions(4);
    const expectedReturn = await fetchProducts('computador');
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(endpoint);
    expect(expectedReturn).toEqual(computadorSearch);
    await expect(fetchProducts()).resolves.toEqual(Error('You must provide an url'));
  });
});
