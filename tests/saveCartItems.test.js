const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Verifica o funcionamento da função saveCartItems', () => {
    expect.assertions(2);
    saveCartItems('ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'ol><li>Item</li></ol>');
  });
});
