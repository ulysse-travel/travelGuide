<template>
  <div>
    <div id="container" class="container" v-if="guides">
      <div class="col col-wide-12 col-desktop-12 col-tablet-12 col-mobile-12">
        <router-link :to="{ name: 'Page-Home' }">
          <div class="logo"></div>
        </router-link>
      </div>
      <div class="col col-wide-12 col-desktop-12 col-tablet-12 col-mobile-12">
        <div class="top">
          <div class="breadcrumb">
            <router-link :to="{ name: 'Page-Home' }">Page d'accueil</router-link> › <b>{{ guides.title }}</b>
          </div>
          <div class="title">
            {{ guides.title }}
          </div>
          <div class="numberOfThings">
            {{ guides.numberOfThings }} bonnes adresses
          </div>
        </div>
      </div>
      <div class="filters col col-wide-12 col-desktop-12 col-tablet-12 col-mobile-12">
        <div class="tags">
          <ul>
            <li class="tag" v-for="tag in guides.tags" :key="tag.id">
              <i :class='tag.class_icon'></i>
            </li>
          </ul>
          <div class="clear"></div>
        </div>
        <a href="mailto:decouverte@ulysse.com" class="btn">❤ Partager une adresse </a>
      </div>
      <div class="col col-wide-12 col-desktop-12 col-tablet-12 col-mobile-12 paddingzero">
        <div class="col col-wide-4 col-desktop-4 col-tablet-4 col-mobile-12" v-for="goodPlace in guides.travel_places"
          :key="goodPlace.id">
          <a :href='goodPlace.url' target="_blank" class="card-goodplaces ">
            <div class="img"><img :src='"https://bretzel.fly.dev" + goodPlace.linkImg'></div>
            <div class="infos">
              <div class="left">
                <div class="title">
                  <div class="tags_bottom">
                    <div class="tag"><i :class='goodPlace.category'></i> </div>
                  </div>
                  <div class="content">
                    <div class="name">{{ goodPlace.name }}</div>
                    <div class="where">{{ goodPlace.place }}</div>
                  </div>
                </div>
                <div class="like"><span class="iconYeah"></span>{{ goodPlace.like }}</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="container-fluid footer">
      <div class="container">
        <div class="col col-wide-12 col-desktop-12 col-tablet-12 col-mobile-12">
          <div class="row">
            <div class="col col-wide-6 col-desktop-6 col-tablet-6 col-mobile-12">
              <div class="title-f">Bienvenue à bord !</div>
              <div class="content-f">
                <p>Parce que voyager c'est génial, réservez vos billets d'avion (enfin) sereinement. On vous propose les
                  meilleures options de vol sur un site sans publicité et sans frais cachés, avec un service client de
                  compétition.</p>
              </div>
            </div>
            <div class="col col-wide-3 col-desktop-3 col-tablet-6 col-mobile-12">
              <div class="title-s">En savoir plus</div>
              <ul>
                <li>Travelnews</li>
                <li>Carte cadeau</li>
                <li>Chèques vacances</li>
                <li>Roadmap</li>
                <li>Contactez-nous</li>
                <li>FAQ</li>
                <li>Blog</li>
                <li>Jobs</li>
              </ul>
            </div>
            <div class="col col-wide-3 col-desktop-3 col-tablet-6 col-mobile-12">
              <div class="title-s">Autres trucs à lire</div>
              <ul>
                <li>CGV /CGU</li>
                <li>Mentions légales</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.logo {
  opacity: 1;
}

.top {
  margin-top: 60px;
  margin-bottom: 80px;
  text-align: center;

  .title {
    font-size: 80px;
    font-weight: 600;
  }

  .numberOfThings {
    font-size: 17px;
    margin-top: 30px;
  }

  .breadcrumb {
    font-size: 12px;
    margin-bottom: 15px;
    opacity: 0.5;

    a {
      color: #6F798D;

      &:hover {
        color: #316CE2;
      }
    }
  }
}

.tags {
  float: left;

  ul {
    margin: 0;
    padding: 0;
  }

  margin-bottom: 60px;

  .tag {
    float: left;
    margin-right: 10px;
    background-color: #F3F4F9;
    height: 60px;
    width: 60px;
    border-radius: 10px;
    vertical-align: middle;
    text-align: center;
  }

  i {
    display: block;
    margin: auto;
    vertical-align: middle;
    height: 60px;
    background-repeat: no-repeat;
    background-position: center;

    &.hotel {
      background-image: url("@/assets/hotels-black.svg");
      width: 22.5px;
    }

    &.food {
      background-image: url("@/assets/food-black.svg");
      width: 17.5px;
    }
  }
}

.tags_bottom {
  margin: 0;
  padding: 0;

  .tag {
    margin-right: 10px;
    border: 2px solid #0F2041;
    padding: 10px;
    border-radius: 10px;
    height: 50px;
    width: 50px;
    text-align: center;
  }

  i {
    display: block;
    background-repeat: no-repeat;
    margin: auto;

    &.hotel {
      background: url("@/assets/hotels-black.svg");
      width: 22.5px;
      height: 25.5px;
    }

    &.food {
      background: url("@/assets/food-black.svg");
      width: 17.5px;
      height: 25.5px;
    }
  }
}

.btn {
  float: right;
}

.card-goodplaces {
  margin: 0;
  padding: 0;
  box-shadow: 0px 14px 24px rgba(117, 114, 156, 0.3);
  border-radius: 20px;
  margin-bottom: 30px;
  display: block;
  transition: all 0.2s linear;
  top: 0;
  position: relative;
  color: #0F2041;

  &:hover {
    top: -20px;
    box-shadow: 0px 14px 58px rgba(117, 114, 156, 0.8);
    transition: all 0.2s linear;
    position: relative;
    cursor: pointer;
  }

  .infos {
    padding: 30px;

    .left {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .where-i {
        display: inline-block;
        margin: auto;
        vertical-align: middle;
        height: 15px;
        background-repeat: no-repeat;
        background-image: url("@/assets/where.svg");
        width: 16px;
        margin-right: 5px;
      }
    }

    .title {
      font-size: 22px;
      font-weight: 600;
      display: flex;
      align-items: center;
      width: 100%;

      .name {
        width: 70%;
      }

      .content {
        width: 100%;
      }
    }

    .where {
      font-size: 15px;
      opacity: 0.6;
      font-weight: 500;
    }

    .like {
      font-size: 14px;
      font-weight: 600;
      display: flex;
      align-items: center;

      .iconYeah {
        display: inline-block;
        margin: auto;
        vertical-align: middle;
        height: 25.5px;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("@/assets/hellyeah.svg");
        width: 17.5px;
        margin-right: 10px;
      }
    }
  }

  img {
    border-radius: 20px;
    max-width: 100%;
    margin: 0;
    padding: 0;
  }
}
</style>

<script>
import axios from 'axios'

export default {
  name: 'Page-Single',
  props: ["pageId", "pageName"],
  pageId: 1,
  data() {
    return {
      guides: false,
      error: null
    }
  },
  async mounted() {

    try {
      const response = await axios.get('https://bretzel.fly.dev/travel-guides/' + this.pageId)
      this.guides = response.data;
    } catch (error) {
      this.error = error;
    }
  }
}
</script>
 