<template>
  <div class="containerArticle">
    <div class="rightPart">
        <img :src="Tshirt.imageURL" class="imgProduct"/>
    </div>
    <div class="leftPart">
        <div class="titleProduct">{{ Tshirt.name }}</div>
        <div class="priceProduct">{{ Tshirt.price }}</div>
        <div class="priceProduct">{{ Tshirt.description }}</div>
        <div class="divButton">
            <router-link to="/" class="buttonMenu">Revenir au menu</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'OneTshirt',
  data() {
      return {     
        Tshirt: "",

      }
    },
    methods: {
      firstCall(id) {
        axios.get('http://vps-a47222b1.vps.ovh.net/TShirt/' + id)
        .then((res) => {
            this.Tshirt = res.data
            console.log(this.Tshirt)
        })
        .catch((err) => {
            console.log(err)
        })
      },
    },
    created() {
        var url = window.location.href;
        var id = url.substring(url.lastIndexOf('/') + 1);
        
        this.firstCall(id) 
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.containerArticle{
    display:flex;
    flex-direction:row;
    margin-top:100px;
    max-width:1000px;
    margin-left:auto;
    margin-right:auto;
}
.titleProduct{
    text-align:center;
    color:black;
    font-size:1.2em;
}
.priceProduct{
    margin-left:20px;
    font-size:1.2em;
    margin-top:20px;
}
.leftPart{
    margin-right:20px;
}
.rightPart{
    margin-right:20px;
}
.buttonMenu{
    width:150px;
    height:40px;
    border:1px solid grey;
    border-radius:3px;
    margin-bottom:30px;
    text-decoration:none;
    color:black;
}
.divButton{
    text-align:center;
    margin-top:20px;
}
</style>
