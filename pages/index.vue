<template>
    <div class="md:mx-auto mx-8 flex items-center flex-col md:h-full my-16 md:my-auto justify-center max-w-lg">
        <!-- <img class="w-1/4 mx-auto" alt="Une illustration de deux mains" src="../assets/img/logo.png"> -->
        <Logo class="mt-4 mx-auto w-56 fill-current text-leaf" />
        <div class="text-leaf font-serif my-1 text-md">Massages détente, écoute et plantes</div>
        <Waves class="w-32 my-8 fill-current text-norway" />
        <Page class="text-leaf text-md text-justify" :page="presentation" />
        <a class="my-8 bg-leaf hover:bg-leaf  focus:outline-none text-cream font-bold pt-3 pb-4 px-8 rounded" href="/contact">Envoyer un message </a>
    </div>
</template>

<script>
import Page from '../components/Notion/Page.vue'
import Logo from '../components/Logo.vue'
import Waves from '../components/Waves.vue'

export default {
  components: { Page, Logo, Waves },
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
