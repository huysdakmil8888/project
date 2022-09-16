<template>
<li>
   <h3>{{fullName}}</h3>
   <h4>${{rate}}/hour</h4>
   <div>
      <span v-for="a in areas" :key="a">{{a}} - </span>
   </div>
   <div class="actions">
      <router-link :to="contactLink">contact</router-link> -
      <router-link :to="contactDetails">View details</router-link>
   </div>
</li>
</template>

<script>
export default {
   name: "CoachItem",
   props:['id','firstName','lastName','rate','areas'],
   computed:{
      fullName(){
         return this.firstName+' '+this.lastName;
      },
      contactLink(){
         return this.$route.path+'/coaches/'+this.id+'/contact'
      },
      contactDetails(){
         return this.$route.path+'/coaches/'+this.id
      },
   }
}
</script>

<style scoped>
li {
   margin: 1rem 0;
   border: 1px solid #424242;
   border-radius: 12px;
   padding: 1rem;
}

h3 {
   font-size: 1.5rem;
}

h3,
h4 {
   margin: 0.5rem 0;
}

div {
   margin: 0.5rem 0;
}

.actions {
   display: flex;
   justify-content: flex-end;
}
</style>
