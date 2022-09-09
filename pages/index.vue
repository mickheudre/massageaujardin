<template>
  <div>
    <div class="flex items-center flex-col md:flex-row mx-8 md:mx-56 my-18 my-auto h-screen justify-center ">
      <div class="flex-col w-1/2 max-w-screen-sm">
        <div class="text-leaf font-serif my-1 text-6xl leading-snug">Un moment de détente et de soin, au coeur de Fontaine</div>
        <Page class="text-leaf font-sans text-lg text-justify mt-4 mb-16" :page="presentation" />
        <div class="flex flex-col md:flex-row space-x-8 items-center">
          <a class="flex-shrink-0 bg-leaf hover:bg-leaf text-lg focus:outline-none text-cream font-bold pt-5 pb-6 px-10 rounded" href="/contact">Envoyer un message </a>
          <p class="text-sm text-leaf">Je propose une tarrification solidaire afin que toute personne, quelque soit ses moyens, puisse accéder à des pratiques de soins. </p>
        </div>
      </div>
      <div class="flex-col w-1/2 items-center justify-center ">
        <img class="w-1/3 mx-auto" style="mix-blend-mode:multiply" alt="Une illustration de deux mains" src="../assets/img/hand.png">
      </div>
    </div>
    <div class="flex items-top flex-col md:flex-row mx-8 md:mx-56 my-32 my-auto justify-center space-x-64">
      <div class="flex-col w-1/2 max-w-screen-sm">
        <h3 class="text-leaf font-serif text-3xl ">Massages</h3>
        <Page class="text-leaf font-sans text-lg text-justify" :page="massages" />
      </div>
      <div class="flex-col w-1/2 max-w-screen-sm">
        <h3 class="text-leaf font-serif text-3xl ">Accompagnement par les plantes</h3>
        <Page class="text-leaf font-sans text-lg text-justify" :page="plantes" />
      </div>
    </div>
    <Waves class="w-48 mx-auto py-32 fill-current text-norway" />
    <h4 class="text-center mx-auto text-leaf font-serif text-3xl py-16">Le dialogue et l’écoute ont une place centrale dans mes pratiques. <br> Nous construirons ensemble chaque scéance, en fonction de vos attentes et votre état présent.</h4>
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
    const massages = await $axios.$get(
      'https://api.notion.com/v1/blocks/1d3568fa61e74a85998ba143302e7dda/children',
      {}
    )

    const plantes = await $axios.$get(
      'https://api.notion.com/v1/blocks/f52dccef8b144c1e90c64d1209924eed/children',
      {}
    )
    return { presentation, massages, plantes }
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
