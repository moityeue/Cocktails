<template>
  <h1 class="title">Quel cocktail recherchez vous...</h1>
  <div class="search">
    <input
      placeholder="rechercher votre cocktail"
      type="text"
      @input="search = $event.target.value"
    />
  </div>
  <div
    class="allSearch"
    v-for="item in data"
    :key="item.idDrink"
    :id="item.idDrink"
  >
    <router-link :to="{ name: 'infos', params: { id: item.idDrink } }">
      <img :src="item.strDrinkThumb"
    /></router-link>
    <h1>{{ item.strDrink }}</h1>
    <h2>{{ item.strCategory }}</h2>
    <p>{{ item.strGlass }}</p>
  </div>
  <img
    class="champ1"
    alt="champagne"
    src="../Images\beb33369fb8f5ce75322e26a398b2027.jpg"
    width="100"
    height="100"
  />
  <img
    class="champ2"
    alt="champagne"
    src="../Images\beb33369fb8f5ce75322e26a398b2027.jpg"
    width="100"
    height="100"
  />
</template>

<script>
import ApiService from "@/service/apiServices.js";
const apiService = new ApiService();

export default {
  name: "SearchView",
  components: {},
  data() {
    return {
      data: [],
      search: "",
    };
  },
  watch: {
    search() {
      this.searchCocktails(this.search);
    },
  },
  methods: {
    async searchCocktails(search) {
      const res = await apiService.getSearch(search);
      const drinkks = await res.json();
      this.data = drinkks.drinks.slice(0, 5);
      console.log(this.data);
    },
  },
};
</script>
<style scoped>
.title {
  width: 80%;
  text-align: center;
  font-size: 2em;
  margin-top: 10%;
  align-items: center;
  font-family: Georgia, serif;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #fff;
  word-spacing: 2px;
}
input {
  margin-left: 7%;
  width: 100%;
  padding: 5px;
  border-radius: 25px;
}
.champ1 {
  position: absolute;
  top: 30%;
  left: 8%;
  border-radius: 25px;
  transform: rotate(25deg);
}
.champ2 {
  position: absolute;
  top: 60%;
  right: 10%;
  border-radius: 25px;
  transform: rotate(-15deg);
}
.search {
  left: 5%;
  top: 15%;
  position: absolute;
  height: 100px;
  width: 80%;
}
p {
  color: red;
  font-size: 32px;
}
.allSearch {
  width: 30%;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px auto;
  padding: 10px 10px;
  margin-bottom: 10%;
  margin-top: 1%;
  border: 5px solid #a64dff;
  background: url("../Images/comment-embellir-ses-cocktails1.jpg");
  opacity: 1;
}
.allSearch > h1 {
  margin-top: 5%;
  margin-bottom: 5%;
  font-family: Georgia, serif;
  font-size: 45px;
  letter-spacing: 2px;
  word-spacing: 2px;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: uppercase;
  color: #8a5fd9;
}
.allSearch a > img {
  margin-top: 5%;
  width: 60%;
  border-radius: 10px;
  text-align: center;
  align-items: center;
}
.allSearch > p {
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  font-size: 20px;
  color: #000000;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  margin-left: 18%;
}
</style>
