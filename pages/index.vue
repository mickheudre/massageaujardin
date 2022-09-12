<template>
  <div>
    <div class="flex items-center flex-col md:flex-row mx-8 md:mx-56 my-18 my-auto h-screen justify-center ">
      <div class="flex-col w-1/2 max-w-screen-sm">
        <div class="text-leaf font-serif my-1 text-6xl leading-snug">
          Un moment de détente et de soin, au coeur de Fontaine
        </div>
        <Page class="text-leaf font-sans text-md text-justify mt-8 mb-16" :page="presentation" />
        <div class="flex flex-col md:flex-row space-x-8 items-center">
          <a class="flex-shrink-0 bg-leaf hover:bg-leaf text-lg focus:outline-none text-cream font-bold pt-5 pb-6 px-10 rounded" href="/contact">Prendre un rendez-vous </a>
          <p class="text-xs text-leaf">
            Je propose une tarrification solidaire afin que toute personne, quelque soit ses moyens, puisse accéder à des pratiques de soins.
          </p>
        </div>
      </div>
      <div class="flex-col w-1/2 items-center justify-center ">
        <img class="w-1/3 mx-auto" style="mix-blend-mode:multiply" alt="Une illustration de deux mains" src="../assets/img/hand.png">
      </div>
    </div>
    <div class="flex items-top flex-col md:flex-row mx-8 md:mx-56 my-32 my-auto justify-center space-x-64">
      <div class="flex-col w-1/2 max-w-screen-sm">
        <h3 class="text-leaf font-serif text-3xl mt-4 mb-8">
          Massages
        </h3>
        <Page class="text-leaf font-sans text-md text-justify" :page="massages" />
      </div>
      <div class="flex-col w-1/2 max-w-screen-sm ">
        <h3 class="text-leaf font-serif text-3xl mt-4 mb-8">
          Accompagnement par les plantes
        </h3>
        <Page class="text-leaf font-sans text-md text-justify" :page="plantes" />
      </div>
    </div>
    <Waves class="w-48 mx-auto py-24 fill-current text-norway" />
    <h4 class="text-center mx-auto text-leaf font-serif text-3xl py-12">
      Le dialogue et l’écoute ont une place centrale dans mes pratiques. <br> Nous construirons ensemble chaque scéance, en fonction de vos attentes et votre état présent.
    </h4>
    <div class="py-8">
      <Faq :data="qa" />
    </div>
    <div class="flex justify-center my-16">
      <a class="text-center bg-leaf hover:bg-leaf text-lg focus:outline-none text-cream font-bold pt-5 pb-6 px-10 rounded" href="/contact">Me contacter </a>
    </div>

    <div class="h-32 w-screen" />
  </div>
</template>

<script>
import Page from '../components/Notion/Page.vue'
import Logo from '../components/Logo.vue'
import Waves from '../components/Waves.vue'
import Faq from '../components/Faq.vue'

export default {
  components: { Page, Logo, Waves, Faq },
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
    const qa = await $axios.$post(
      'https://api.notion.com/v1/databases/84a4cbb2a4f44bf58c2a6d5cb651f6a7/query',
      {}
    )
    qa.results.sort((a, b) => { return (a.properties.Position.number - b.properties.Position.number) })
    return { presentation, massages, plantes, qa }
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
