<template>
    <div class="flex items-center flex-row mx-56 my-18 my-auto h-screen justify-center">
      <div class="flex-col w-1/2 max-w-screen-sm">
        <div class="text-leaf font-serif my-1 text-6xl leading-snug">Un moment de détente et de soin, au coeur de Fontaine</div>
        <!-- <Waves class="w-32 my-8 fill-current text-norway" /> -->
        <Page class="text-leaf font-sans text-lg text-justify mt-4 mb-16" :page="presentation" />
        <div class="flex space-x-8 items-center">
        <a class="flex-shrink-0 bg-leaf hover:bg-leaf text-lg focus:outline-none text-cream font-bold pt-5 pb-6 px-10 rounded" href="/contact">Envoyer un message </a>
        <p class="text-sm text-leaf">Je propose une tarrification solidaire afin que toute personne, quelque soit ses moyens, puisse accéder à des pratiques de soins. </p>
      </div>
      </div>
      <div class="flex-col w-1/2 items-center justify-center ">
              <img class="w-1/3 mx-auto" style="mix-blend-mode:multiply" alt="Une illustration de deux mains" src="../assets/img/hand.png">
      </div>
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
