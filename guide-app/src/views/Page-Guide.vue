<template>
  <div>
    <div id="container" class="container" v-if="guides">
      <div class="col col-wide-12 col-desktop-12 col-tablet-12 col-mobile-12">
        <router-link :to="{ name: 'Page-Home'}" >
          <div class="logo"></div>s
        </router-link>
      </div>
      <div class="col col-wide-12 col-desktop-12 col-tablet-12 col-mobile-12">
        <div class="top">
          <div class="breadcrumb">
            <router-link :to="{ name: 'Page-Home'}" >Page d'accueil</router-link> › <b>{{ guides.attributes.title }}</b>
          </div>
          <div class="title">
            {{ guides.attributes.title }}
          </div>
          <div class="numberOfThings">
            {{ guides.attributes.numberOfThings }} bonnes adresses
          </div>
        </div>
      </div>
      <div class="filters col col-wide-12 col-desktop-12 col-tablet-12 col-mobile-12">
        <div class="tags">
          <ul>
            <li class="tag" v-for="tag in guides.attributes.tags" :key="tag.id">
              <i :class='tag.attributes.classIcon'></i>
            </li>
          </ul>  
          <div class="clear"></div>
        </div>          
      <a href="mailto:decouverte@ulysse.com" class="btn">❤ Partager une adresse </a>
      </div>
      <div class="col col-wide-12 col-desktop-12 col-tablet-12 col-mobile-12 paddingzero">
          <div class="col col-wide-4 col-desktop-4 col-tablet-4 col-mobile-12" v-for="goodPlace in guides.attributes.thing_to_sees" :key="goodPlace.id">
            <a :href='goodPlace.attributes.url' target="_blank" class="card-goodplaces ">
              <div class="img"><img :src='"http://localhost:1337" + goodPlace.attributes.linkImg'></div>
              <div class="infos">
                <div class="left">
                  <div class="title">
                    <ul>
                      <li class="tag" v-for="tag in guides.attributes.tags" :key="tag.id">
                        <i :class='tag.attributes.classIcon'></i>
                      </li>
                    </ul>                   
                    {{ goodPlace.attributes.name }}
                    </div>
                  <div class="where"><span class="where-i"></span> {{ goodPlace.attributes.place }}</div>                
                </div>
                <div class="right">
                  <div class="like"><span class="iconYeah"></span>{{ goodPlace.attributes.like }}</div>    
                </div>
                <div class="clear"></div>
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
.top{
  margin-top: 60px;
  margin-bottom: 80px;
  .title{
    font-size: 80px;
    font-weight: 600;
  }
  .numberOfThings{
    font-size: 17px;
    margin-top: 30px;
  }
  .breadcrumb{
    font-size: 11px;
    margin-bottom: 15px;
    a{
      color: #6F798D;
      &:hover{
        color:#316CE2;
      }
    }
  }
}
.tags{
  float: left;
  ul{
    margin: 0;
    padding: 0;
  }
  margin-bottom: 60px;
  .tag{
    float: left;
    margin-right: 10px;
    background-color: #F3F4F9;
    height: 60px;
    width: 60px;
    border-radius: 10px;
    vertical-align: middle;
    text-align: center;
  }
  i{
    display: block;
    margin: auto;
    vertical-align: middle;
    height: 60px; 
    background-repeat: no-repeat;
    background-position: center;       
    &.hotel{
      background-image: url("@/assets/hotels-black.svg");
      width: 22.5px;
    }
    &.food{
      background-image: url("@/assets/food-black.svg");
      width: 17.5px;
    }      
  }
}
.btn{
  float: right;
}
.card-goodplaces{
  margin: 0;
  padding: 0;
  box-shadow: 0px 14px 24px rgba(117, 114, 156, 0.3);
  border-radius: 20px;  
  margin-bottom: 30px;
  display: block;
  transition:all 0.2s linear;
  top: 0;  
  position: relative;
  color: #0F2041;
  &:hover{
    top: -20px;
    box-shadow: 0px 14px 58px rgba(117, 114, 156, 0.8);
    transition:all 0.2s linear;
    position: relative;
    cursor: pointer;
  }
  .infos{
    padding: 30px;
    .left{
      float: left;
      .where-i{
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
    .right{
      float: right;
    }
    .title{
      font-size: 22px;
      font-weight: 600;
    }
    .where{
      margin-top: 10px;
      font-size: 17px;
      opacity: 0.6;
    }
    .like{
      font-size: 14px;
      font-weight: 600;
      .iconYeah{
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
  img{
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
  pageId : 1, 
  data () {
    return {
      guides: false,    
      error: null
    }
  },
  async mounted () {
    try {
      const response = await axios.get('http://localhost:1337/api/guides-lists/' + this.pageId + '?populate=%2A')
      this.guides = response.data.data;
    } catch (error) {
      this.error = error;
    }
  }
}
</script>
 