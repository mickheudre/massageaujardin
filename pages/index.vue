<template>
  <!-- <div class="flex flex-col justify-center content-center items-center"> -->
  <div>
    <div class="mt-16 mx-auto max-w-screen-sm">
        <!-- 
        <img class="w-32 mx-auto " src="../assets/img/vague.png">
        <h6 class="my-8 mx-auto  w-48 text-xl text-duckgreen text-center font-serif">
          Massage détente, écoute et plantes
        </h6> -->
        <img class="w-1/4 mx-auto" alt="Une illustration de deux mains" src="../assets/img/logo.png">
        <img class="mt-4 mx-auto w-48" alt="Massage pour toutes" src="../assets/img/titre.png"></img>
    <Page class="mt-4 text-duckgreen text-md text-center" :page="presentation" />
        </div>

  </div>
</template>

<script>
import Page from '../components/Notion/Page.vue'
export default {
  components: { Page },
  async asyncData ({ $axios }) {
    const presentation = await $axios.$get(
      'https://api.notion.com/v1/blocks/1f765b3fe8954a45845969bed726119b/children',
      {}
    )
    return { presentation }
  },
  head () {
    return {
      title: 'Massage pour toutes',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Massage détente, écoute et plantes. Les rendez-vous se font à Fontaine 38600. Tarification solidaire.'
        }
      ]
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
