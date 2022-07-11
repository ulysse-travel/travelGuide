<template>
  <div>
    <div id="container" class="container" ref="myContainer">
      <div class="col col-wide-12 col-desktop-12 col-tablet-12 col-mobile-12">
        <router-link :to="{ name: 'Page-Home'}" >
          <div class="logo"></div>
        </router-link>
      </div>
      <div class="header">
        <span class="top">Explorer le monde avec</span>
        <h1><b>les guides</b>Ulysse*</h1>
        <span class="bottom">*Par et pour vous.</span>
      </div>
      <div class="plane"></div>
      <div v-if="error">
        {{ error }}
      </div>
      <div class="flex" v-else>
        <div class="card-guide" v-for="guideCard in guides" :key="guideCard.id" :style='"background:" + guideCard.attributes.bgcolor'>
          <router-link :to="{ name: 'Page-guide', params: { pageName: guideCard.attributes.slug, pageId : guideCard.id } }" >
            <div class="card-content">
              <div class="hublot">
                <div class="hublot-one"></div>
                <div class="img"><img :src='"http://localhost:1337" + guideCard.attributes.linkImg'></div>
              </div>
              <div class="title">{{ guideCard.attributes.title }}</div>
              <div class="numbers">{{ guideCard.attributes.numberOfThings }}  bonnes adresses</div>
              <ul class="tags">
                <li class="tag" v-for="tag in guideCard.attributes.tags" :key="tag.id">
                  <i :class='tag.attributes.classIcon'></i>
                </li>
              </ul>
              <div class="clear"></div>
              <div class="thanks"><b>Merci :</b> {{ guideCard.attributes.thanks }}   </div>
              <div class="arrow"></div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="share">
        <div class="content">
          <b>Vous avez une bonne adresse à nous partager ?</b> <br>
          <span>Ca tombe bien, toutes les bonnes adresses sont issues de la communauté Ulysse</span>     
        </div>
        <a href="mailto:decouverte@ulysse.com" class="btn">❤ Partager une adresse </a>
      </div>
    </div>
    <div class="container-fluid footer">
      <div class="container">
        <div class="col col-wide-12 col-desktop-12 col-tablet-12 col-mobile-12">
          <div class="row">
            <div class="col col-wide-6 col-desktop-6 col-tablet-6 col-mobile-12">
              <div class="title-f">Bienvenue à bord !</div>
              <div class="content-f">
                <p>Parce que voyager c'est génial, réservez vos billets d'avion (enfin) sereinement. On vous propose les meilleures options de vol sur un site sans publicité et sans frais cachés, avec un service client de compétition.</p>
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
.header{
  padding-top: 120px;
  text-align: center;
  position: relative;
  margin: auto;
  width: 600px;
  top:-400px;
  z-index: 2;
  span{
    &.top{
      font-size:17px;
      padding-bottom: 20px;
      display: block;
      opacity: 0.8;
    }
    &.bottom{
      font-size: 26px;
      position: absolute;
      bottom: 80px;
      right: -130px;  
    }
  }
  h1{
    font-size: 120px;
    line-height: 110px;
    font-weight: 600;
    b{
      display: block;
      background: linear-gradient(-45deg, #75B8C9,#9AC975,#AEAB8E,#D439A9,#7578C9);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;      
    }
  }
}
.plane{
  height: 1420px;
  background-image: url("@/assets/plane.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
  top: -1000px;
  z-index: 1;
  margin-bottom: -870px;
}
.flex{
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  gap: 10px;
}
.card-guide{
  color:#fff;
  width: calc(50% - 15px);
  border-radius: 20px;
  margin-bottom: 180px;
  box-shadow: 0px 14px 24px rgba(117, 114, 156, 0.3);
  position: relative;
  transition:all 0.2s linear;
  z-index: 2;
  top: 0;
  &:last-child {
    //margin-bottom: 30px;
  }
  &:hover{
    top: -30px;
    box-shadow: 0px 14px 58px rgba(117, 114, 156, 0.8);
    transition:all 0.2s linear;
    position: relative;
  }
  a{
    color: #fff;
  }
  .card-content{
    padding: 60px;
    position: relative;
    a{
      color: #fff;
    }
    .hublot{
              height: 164px;
      position: relative;
      .hublot-one{
        background-image: url("@/assets/hublot.png");
        background-position: center;
        background-size: cover;      
        width: 265.41px;
        height: 404px;
        margin-top: -203px;
        margin-left: -19px;
        margin-bottom: -60px;
        position: absolute;        
        z-index: 2;
      }
      .img{
        position: absolute;
        top: -100px;
        left: 5px;      
        z-index: 1;
        max-width: 163px;
        background-size: cover;
        img{
          max-width: 163px;
          background-size: cover;          
        }
      }
    }
    .arrow{
      background-image: url("@/assets/arrow.png");
      background-size: cover;
      width: 35px;
      height: 35px;
      display: block;
      position: absolute;
      right: 60px;
      bottom: 60px;
    }
  }
  .title{
    font-size: 50px;
    font-weight: 600;
    margin-top: 80px;
  }
  .numbers{
    font-size: 17px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .tags{
    margin: 0;
    padding: 0;
    .tag{
      float: left;
      margin-right: 10px;
      border: 2px solid white;
      padding: 10px;
      border-radius: 10px;
      height: 50px;
      width: 50px;
      text-align: center;
    }
    i{
      display: block;
      background-repeat: no-repeat;
      margin: auto;
      &.hotel{
        background: url("@/assets/hotels.svg");
        width: 22.5px;
        height: 25.5px;
      }
      &.food{
        background: url("@/assets/food.svg");
        width: 17.5px;
        height: 25.5px;
      }      
    }
  }
  .thanks{
    margin-top:30px;
    font-size: 14px;
    line-height: 18px;
    width: 80%;
  }
}
.share{
  text-align: center;
  //margin-top: 80px;
  margin-bottom: 100px;
  font-size: 18px;
  position: relative;
  z-index: 2;
  span{
    opacity: 0.8;
    margin-top: 10px;
    display: block;
  }
  b{
    font-size: 34px;
  }
  .content{
    margin-bottom: 20px;
  }
}
</style>
<script>
import axios from 'axios'
import { gsap } from "gsap"

export default {
  name: 'Page-Home',
  data () {
    return {
      guides: [],
      modifiedData: {
        tags: [],
      },
      error: null
    }
  },
  async mounted () {

    gsap.fromTo('.logo',{opacity:0 }, {opacity: 1 , duration: 2 })
    gsap.fromTo('.header',{opacity:0 }, {opacity: 1 , y: 400 , duration: 1 })
    gsap.fromTo('.plane',{opacity:0 }, {opacity: 1 , y: 1000 , duration: 1 })

    try {
      const response = await axios.get('http://localhost:1337/api/guides-lists?populate=%2A', this.modifiedData)
      this.guides = response.data.data;
    } catch (error) {
      this.error = error;
    }
  }  
}
</script>
 