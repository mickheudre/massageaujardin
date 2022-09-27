<template>
  <div class=" my-18">
    <div class="mx-10 md:mx-16 xl:ml-56 xl:mr-32 flex items-center flex-col-reverse md:flex-row  my-auto min-h-screen justify-center">
      <div class="flex-col flex-shrink-0 md:w-1/2 max-w-screen-sm ">
        <Page class="text-leaf font-serif my-1 text-5xl xl:text-6xl leading-tight xl:leading-snug" :page="headline" />
        <Page class="text-leaf font-sans text-sm xl:text-md text-justify mt-6 mb-16" :page="presentation" />
        <div class="w-full text-center">
        <div class="inline-block lg:flex lg:flex-row md:space-x-8 items-center">
          <a class="flex-shrink-0 bg-leaf hover:bg-leaf text-lg focus:outline-none text-cream justify-center font-bold pt-5 pb-6 px-10 rounded" href="/contact">Prendre un rendez-vous </a>
          <div class="flex">
          <p class="flex-1 text-xs text-leaf w-0 lg:w-auto text-left py-10">
            Je propose une tarrification solidaire afin que toute personne, quelque soit ses moyens, puisse accéder à des pratiques de soins.
          </p>
        </div>
        </div>
        </div>
      </div>
      <div class="md:w-1/2 flex flex-col items-center justify-center">
        <img class="w-1/2 mt-12 mb-6 md:my-0 md:w-3/5 xl:w-2/5" style="mix-blend-mode:multiply" alt="Une illustration de deux mains" src="../assets/img/hand.png">
      </div>
    </div>
    <div class="md:block hidden absolute bottom-0 mb-16 w-screen">
      <ArrowDown class="mx-auto w-8 h-8 animate-bounce text-leaf" />
    </div>
    <div class="flex items-top flex-col lg:flex-row mx-8 md:mx-32 my-32 my-auto justify-center lg:space-x-16 xl:space-x-64">
      <div class="flex flex-col lg:w-1/2 lg:max-w-screen-sm items-center">
        <div class="w-32 h-32 bg-norway" />
        <h3 class="text-leaf font-serif text-3xl mt-4 mb-8">
          Massages
        </h3>
        <Page class="text-leaf font-sans text-md text-justify" :page="massages" />
      </div>
      <div class="flex flex-col lg:w-1/2 lg:max-w-screen-sm items-center">
        <div class="w-32 h-32 bg-norway" />
        <h3 class="text-leaf font-serif text-3xl mt-4 mb-8">
          Accompagnement par les plantes
        </h3>
        <Page class="text-leaf font-sans text-md text-justify" :page="plantes" />
      </div>
    </div>
    <Waves class="w-48 mx-auto my-12 md:my-24 fill-current text-norway" />
    <h4 class="text-center mx-auto text-leaf font-serif text-xl xl:text-3xl py-12">
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
import Chevron from '../components/Chevron.vue'
import ArrowDown from '../components/ArrowDown.vue'

export default {
  components: { Page, Logo, Waves, Faq, Chevron, ArrowDown },
  async asyncData ({ $axios }) {
    const headline = await $axios.$get(
      'https://api.notion.com/v1/blocks/9b8b8fece480454b9e0716be569ffffa/children',
      {}
    )

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
    return { headline, presentation, massages, plantes, qa }
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
