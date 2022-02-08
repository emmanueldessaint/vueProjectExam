<template>
<div>
  <div class="containerProducts">
    <div v-for="item in Tshirts" :key="item.id" class="cardProduct">
      <router-link :to="`/article/${item.id}`" style="text-decoration: none; color: inherit;">
        <img :src="item.imageURL" class="imgProduct"/>
        <div class="titleProduct">{{ item.name }}</div>
        <div class="priceProduct">{{ item.price }}</div>
      </router-link>
    </div>
  </div>
    <div class="divButtons">
      <button v-on:click="changePage(1)" v-bind:class="{ selected: ActuelPage === 1 }" class="singleButton">1</button>
      <button v-on:click="changePage(2)" v-bind:class="{ selected: ActuelPage === 2 }" class="singleButton">2</button>
      <button v-on:click="changePage(3)" v-bind:class="{ selected: ActuelPage === 3 }" class="singleButton">3</button>
      <button v-on:click="changePage(4)" v-bind:class="{ selected: ActuelPage === 4 }" class="singleButton">4</button>
    </div>
  
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AllTshirts',
  data() {
      return {     
        Tshirts: [],
        ActuelPage: 1,
      }
    },
    methods: {
      getTshirts(page) {
        axios.get('http://vps-a47222b1.vps.ovh.net/TShirt/page/' + page)
        .then((res) => {
            this.Tshirts = res.data
            console.log(this.Tshirts)
        })
        .catch((err) => {
            console.log(err)
        })
      },

      firstCall() {
        axios.get('http://vps-a47222b1.vps.ovh.net/TShirt/page/1')
        .then((res) => {
            this.Tshirts = res.data
            console.log(this.Tshirts)
        })
        .catch((err) => {
            console.log(err)
        })
      },
      changePage(page) {
        this.ActuelPage = page;
        this.getTshirts(page)
      }
    },
    created() {
        this.firstCall() 
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.containerProducts{
  width:100%;
  display:flex;
  flex-wrap:wrap;
  margin-left:5%;
  margin-right:5%;
  text-decoration:none;
}
.cardProduct{
  margin:10px;
  width:200px;
  height:250px;
  color:grey;

}
.imgProduct{
  width:100%;
  height:180px;
}
.titleProduct{
  margin-top:10px;
  text-align:center;
  font-weight:500;
  font-size:1.2em;
}
.priceProduct{
  margin-top:10px;
  margin-bottom:20px;
  text-align:center;
  font-weight:500;
  font-size:1.2em;
}
.divButtons{
  display:flex;
  margin-top:50px;
  margin-left:20px;
}
.selected{
  background-color:grey;
}
.singleButton{
  margin-right:5px;
}
</style>
