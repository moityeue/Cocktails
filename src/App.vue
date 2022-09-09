<template>
  <header class="header">
    <section class="top-nav">
      <div>
        <img
          src="../src\assets\logos\Logoofficiel.png"
          width="80"
          height="80"
          alt=""
        />
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul class="menu">
        <li>
          <router-link to="/">Tous les cocktails🍸</router-link>
        </li>
        <li>
          <router-link to="/avec alcool">Avec Alcool🍸</router-link>
        </li>
        <li>
          <router-link to="/sans alcool">Sans Alcool🍸</router-link>
        </li>
        <li>
          <router-link to="/recettes">Recettes🍸 </router-link>
        </li>
        <li>
          <router-link to="/search">Recherches🍸 </router-link>
        </li>
      </ul>
    </section>
  </header>
  <router-view />
  <div class="main-content">
    <section>
      <h1>Nos cocktails secrets</h1>
    </section>
    <section class="content">
      <div class="slideshow_wrapper">
        <div class="slideshow">
          <div class="slide_one slide">
            <img
              src="https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg"
              width="80"
              height="80"
              alt=""
            />
            <div class="caption">
              <h1>Le Manhatan</h1>
            </div>
          </div>
          <div class="slide_two slide">
            <img
              src="https://www.thecocktaildb.com/images/media/drink/txustu1473344310.jpg"
              width="80"
              height="80"
              alt=""
            />
            <div class="caption">
              <h1>The burning rhum</h1>
            </div>
          </div>
          <div class="slide_three slide">
            <img
              src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
              width="80"
              height="80"
              alt=""
            />
            <div class="caption">
              <h1>Tequila One</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h3>Dégustation gratuite!!!</h3>
    </section>
  </div>
  <footer class="footer">
    <div class="img">
      <img
        src="../src\assets\logos\Logoofficiel.png"
        width="80"
        height="80"
        alt=""
      />
    </div>
    <h1 class="footer-title">"LA CASA DEL COCKTAIL"</h1>
    <div class="contact">
      <h4>📞 06.32.47.31.94</h4>
      <h4>📮 Centre commercial La Part-Dieu</h4>
      <h4>69003 Lyon</h4>
    </div>
  </footer>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  background: linear-gradient(#8c60d3, #fff);
  font-family: sans-serif;
}
.header {
  display: flex;
  background-color: #8a5fd0;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  width: 99%;
  z-index: 3;
  justify-content: space-between;
}
.header a {
  text-decoration: none;
  color: #fff;
}
.top-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(#9075bc, #9075bc);
  color: #fff;
  height: 50px;
  width: 100%;
  max-width: 1200px;
  padding: 1em;
}
.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu > li {
  margin: 0 1rem;
}

.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}
.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: "";
  margin-top: -8px;
}

.menu-button::after {
  content: "";
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}

@media (max-width: 700px) {
  .menu-button-container {
    display: flex;
  }
  .header > .menu {
    display: none;
  }
  .menu {
    position: absolute;
    top: 0;
    margin-top: 50px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  #menu-toggle ~ .menu li {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  #menu-toggle:checked ~ .menu li {
    border: 1px solid #333;
    height: 2.5em;
    padding: 0.5em;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .menu > li {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 97.5%;
    color: red;
    background-color: #9075bc;
    width: 100%;
  }
  .menu > li:not(:last-child) {
    border-bottom: 1px solid #fff;
  }
}
.allCocktails > h1 {
  position: absolute;
  top: 50%;
  margin-bottom: 5%;
}
.alcoholic {
  background: #835bc6;
  height: auto;
  display: flex;
  flex-direction: culumn;
  justify-content: space-around;
  position: relative;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 10px 10px;
  margin-bottom: 10%;
  margin-top: 12%;
}
.avecalcool {
  position: relative;
  overflow: hidden;
  height: 50%;
  width: 30%;
  margin: 33px 30px;
  border-radius: 1px;
  box-shadow: 0 0 10px #2a264f;
  background: transparent;
  border-radius: 24px;
}
.avecalcool > img {
  width: 45%;
  height: 50%;
}

.home {
  color: rgba(144, 117, 188, 1);
}
.vuelogo > img {
  width: 150px;
}

.vuelogo {
  overflow: hidden;
  background-size: cover;
}
nav {
  position: relative;
  height: 80px;
  width: 80%;
  margin-left: 20%;
  top: 25px;
  font-size: 1rem;
  color: #df5959;
}
routeur-link {
  font-weight: bold;
  margin-left: 10px;
  color: #c3a3f6;
}
section {
  background: rgba(255, 255, 255, 0.6);
  text-align: center;
  color: #3498db;
  padding: 0px 10px 0px 10px;
  max-width: 500px;
  margin: 0 auto;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
    "Helvetica, Arial", "Lucida Grande", "sans-serif";
  font-weight: 900;
  border-radius: 13px;
  margin-bottom: 10px;
}
.slideshow_wrapper {
  width: 500px;
  height: 280px;
  overflow: hidden;
  margin-bottom: 20%;
}
@media (max-width: 505px) {
  .slideshow_wrapper {
    width: 300px;
    justify-content: center;
  }
}
.slideshow {
  width: 1500px;
  height: 280px;
  margin: 0px 0px 0px -1000px;
  position: relative;
  -webkit-animation-name: slide_animation;
  -webkit-animation-duration: 10s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  -webkit-animation-play-state: running;
  animation-name: slide_animation;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-play-state: running;
}
.slide {
  width: 500px;
  height: 270px;
  position: relative;
  float: left;
  overflow: hidden;
}
@keyframes slide_animation {
  0% {
    left: 0px;
  }
  10% {
    left: 0px;
  }
  20% {
    left: 500px;
  }
  30% {
    left: 500px;
  }
  40% {
    left: 500px;
  }
  50% {
    left: 500px;
  }
  60% {
    left: 1000px;
  }
  70% {
    left: 1000px;
  }
  80% {
    left: 1000px;
  }
  90% {
    left: 1000px;
  }
  100% {
    left: 1000px;
  }
}

@-webkit-keyframes slide_animation {
  0% {
    left: 0px;
  }
  10% {
    left: 0px;
  }
  20% {
    left: 500px;
  }
  30% {
    left: 500px;
  }
  40% {
    left: 500px;
  }
  50% {
    left: 500px;
  }
  60% {
    left: 1000px;
  }
  70% {
    left: 1000px;
  }
  80% {
    left: 1000px;
  }
  90% {
    left: 1000px;
  }
  100% {
    left: 1000px;
  }
}
.slideshow img {
  width: 500px;
  height: 400px;
}
.slideshow:hover {
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}
.recette {
  display: flex;
  justify-content: space-around;
}
.caption {
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.4);
  position: relative;
  transition: all 0.3s ease-in;
  -webkit-transition: all 0.3s ease-in;
  color: #fff;
  border: 4px solid violet;
}
.slide img:hover + .caption {
  top: -65px;
}
footer {
  height: 150px;
  display: flex;
  justify-content: space-between;
  background: #9075bc;
}
.footer-title {
  margin-top: 3%;
  height: 100px;
  justify-content: center;
  color: #fff;
  letter-spacing: 2px;
}
.img {
  margin-top: 2%;
  margin-left: 10%;
}
.contact {
  margin-top: 1.5%;
  margin-right: 10%;
}
</style>
