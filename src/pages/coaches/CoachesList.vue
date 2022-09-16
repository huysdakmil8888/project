<template>
   <section>
      Filter
   </section>
   <section>
      <BaseCard>

      <div class="controls">
         <base-button to="/register" >Register</base-button>
      </div>
      List of Coaches
      <ul v-if="hasCoach">
         <coach-item :areas="c.areas" :rate="c.hourlyRate" :first-name="c.firstName" :last-name="c.lastName" v-for="c in filteredCoaches" :id="c.id" :key="c.id"></coach-item>
      </ul>
      <h3 v-else>No coach</h3>
      </BaseCard>

   </section>
</template>

<script>
import CoachItem from "@/components/coaches/CoachItem";
import BaseCard from "@/components/ui/BaseCard";
import BaseButton from "@/components/ui/BaseButton";
export default {
   name: "CoachesList",
   components: {BaseButton, BaseCard, CoachItem},
   computed:{
      filteredCoaches(){
         return this.$store.getters['coaches/coaches']
      },
      hasCoach(){
         return this.$store.getters['coaches/hasCoaches']
      },
   }
}
</script>

<style scoped>
ul {
   list-style: none;
   margin: 0;
   padding: 0;
}

.controls {
   display: flex;
   justify-content: space-between;
}
</style>
