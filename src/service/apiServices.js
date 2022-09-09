export default class ApiService {
  getDrinks() {
    return fetch(`
    https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php`);
  }
  getInfosCock(id) {
    return fetch(`
    https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
  getIngredients() {
    return fetch(`
    https://www.thecocktaildb.com/api/json/v2/9973533/random.php`);
  }
  getAlcoholic() {
    return fetch(`
    https://www.thecocktaildb.com/api/json/v2/1/filter.php?a=Alcoholic`);
  }
  getUnalcoholic() {
    return fetch(`
    https://www.thecocktaildb.com/api/json/v2/1/filter.php?a=Non_Alcoholic`);
  }
  getLast() {
    return fetch(`
    https://www.thecocktaildb.com/api/json/v2/9973533/latest.php`);
  }
  getSearch(search) {
    return fetch(`
    https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${search}`);
  }
}
