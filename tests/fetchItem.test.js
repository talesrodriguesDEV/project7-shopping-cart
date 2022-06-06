require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifica se fetchItem é uma função', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  });

  it('Verifica o funcionamento da função fetchItem', async () => {
    expect.assertions(4);
    const expectedReturn = await fetchItem('MLB1615760527');
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(endpoint);
    expect(expectedReturn).toEqual(item);
    await expect(fetchItem()).resolves.toEqual(Error('You must provide an url'));
  });
});
