const fetchProducts = async (query) => {
  try {
    if (!query) throw new Error('You must provide an url');
    const mercadoLibreAPI = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await fetch(mercadoLibreAPI);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
