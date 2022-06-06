const fetchItem = async (itemID) => {
  try {
    if (!itemID) throw new Error('You must provide an url');
    const mercadoLibreAPI = `https://api.mercadolibre.com/items/${itemID}`;
    const response = await fetch(mercadoLibreAPI);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
