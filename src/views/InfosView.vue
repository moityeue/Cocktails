<template>
  <h1 class="title">Les recettes du chef ...</h1>
  <div class="infos">
    <h1>{{ data.strDrink }}</h1>
    <img :src="data.strDrinkThumb" />
    <h2>{{ data.strInstructions }}</h2>
    <h3>{{ data.strIngredient2 }}</h3>
    <p>{{ data.strAlcoholic }}</p>
    <p>{{ data.strGlass }}</p>
  </div>
</template>

<script>
import ApiServices from "@/service/apiServices.js";

const apiService = new ApiServices();
export default {
  name: "InfosView",
  data() {
    return {
      data: {},
    };
  },
  created() {
    this.InfoCock(this.$route.params.id);
  },
  methods: {
    async InfoCock(id) {
      const res = await apiService.getInfosCock(id);
      const drinks = await res.json();
      this.data = drinks.drinks[0];
      console.log(drinks);
    },
  },
};
</script>
<style scoped>
.infos {
  font-size: 12px;
  border-radius: 10px;
  box-shadow: 0 0 10px #2a264f;
  margin-bottom: 10%;
  padding: 40px 40px;
  margin-top: 20%;
  background: url("../Images/01118_HD.jpg");
  background-size: cover;
}
.title {
  color: #000000;
  font-size: 4em;
  margin-top: 2em;
  margin-bottom: 3em;
}
h1 {
  font-family: Georgia, serif;
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 5em;
  color: #9a5fd1;
  width: 100%;
  align-items: center;
}
h3 {
  font-family: Georgia, serif;
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 3em;
  color: #7a5fd1;
  width: 100%;
  align-items: center;
}
h2 {
  font-family: Georgia, serif;
  margin-top: 2%;
  margin-bottom: 5%;
  font-size: 3em;
  color: violet;
  width: 90%;
  align-items: center;
  color: #9a5fd1;
}
p {
  font-family: Georgia, serif;
  margin-top: 2%;
  font-size: 2em;
  justify-content: center;
  width: 100%;
  align-items: center;
}
.infos > img {
  margin-top: 10%;
  width: 50%;
  height: 50%;
  border-radius: 13px;
  margin-bottom: 10%;
}
.infos {
  margin-left: 15%;
  width: 30%;
  height: 10%;
  border: 1px solid #9a5fd1fd;
  margin-bottom: 20%;
}
</style>
