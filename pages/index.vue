<template>
  <div class=" my-18 max-w-screen">
    <div class="mx-10 md:mx-16 xl:ml-56 xl:mr-32 flex items-center flex-col-reverse md:flex-row  my-auto min-h-screen justify-center">
      <div class="flex-col flex-shrink-0 md:w-1/2 max-w-screen-sm ">
        <NotionPage class="text-leaf font-serif my-1 text-5xl xl:text-6xl leading-extra-tight" :page="headline" />
        <NotionPage class="text-leaf font-sans text-sm xl:text-md text-justify mt-12 mb-16" :page="presentation" />
        <div class="w-full text-center">
          <div class="inline-block lg:flex lg:flex-row md:space-x-8 items-center">
            <a class="flex-shrink-0 bg-leaf hover:bg-leaf text-lg focus:outline-none text-cream justify-center font-bold pt-5 pb-6 px-10 rounded" href="/contact">Prendre un rendez-vous </a>
            <div class="flex">
              <NotionPage class="flex-1 text-xs text-leaf w-0 lg:w-auto text-left py-10" :page="solidaire" />
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-1/2 flex flex-col items-center justify-center">
        <img class="w-1/2 mt-12 mb-6 md:my-0 md:w-3/5 xl:w-2/5" style="mix-blend-mode:multiply" alt="Une illustration de deux mains" src="../assets/img/hand.png">
      </div>
    </div>
    <div class="md:block hidden absolute bottom-0 mb-8 w-full  px-12">
      <ArrowDown class="mx-auto w-8 h-8 animate-bounce text-leaf" />
    </div>
    <div class="flex items-top flex-col lg:flex-row mx-8 md:mx-32 my-32 my-auto justify-center lg:space-x-16 xl:space-x-64">
      <div class="flex flex-col lg:w-1/2 lg:max-w-screen-sm items-center">
        <div class="w-32 h-32 bg-norway" >
          <img  style="mix-blend-mode:screen" src="../assets/img/plants.png"/>
        </div>
        <h3 class="text-leaf font-serif text-3xl mt-4 mb-8">
          Massages
        </h3>
        <NotionPage class="text-leaf font-sans text-sm text-justify" :page="massages" />
      </div>
      <div class="flex flex-col lg:w-1/2 lg:max-w-screen-sm items-center">
        <div class="w-32 h-32 bg-norway" >
          <img  style="mix-blend-mode:screen" src="../assets/img/hands.png"/>
        </div>
        <h3 class="text-leaf font-serif text-3xl mt-4 mb-8">
          Shiatsu
        </h3>
        <NotionPage class="text-leaf font-sans text-sm text-justify" :page="plantes" />
      </div>
    </div>
    <Waves class="w-48 mx-auto my-12 md:my-24 fill-norway text-norway" />
    <h4 class="text-center mx-10 sm:mx-auto text-leaf font-serif text-xl xl:text-3xl py-12">
      Le dialogue et l’écoute ont une place centrale dans mes pratiques. <br> Nous construirons ensemble chaque séance, en fonction de vos attentes et votre état présent.
    </h4>
    <div class="py-8 max-w-xl mx-10 sm:mx-auto">
      <NotionPage :page="qa" class="w-full"/>
    </div>
    <div class="flex justify-center my-16">
      <a class="text-center bg-leaf hover:bg-leaf text-lg focus:outline-none text-cream font-bold pt-5 pb-6 px-10 rounded" href="/contact">Me contacter </a>
    </div>
    
    <div class="h-32 max-w-screen" />
  </div>
</template>

<script setup>
import { NotionPage } from '#components'


const {data: headline} = await useFetch(
'https://api.notion.com/v1/blocks/9b8b8fece480454b9e0716be569ffffa/children', {
headers : {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
  'Notion-Version': '2022-06-28',
}
})

const {data: presentation} = await useFetch(
'https://api.notion.com/v1/blocks/1f765b3fe8954a45845969bed726119b/children', {
headers : {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
  'Notion-Version': '2022-06-28',
}
})

const {data: solidaire} = await useFetch(
'https://api.notion.com/v1/blocks/abdb96e9d6bb4a3493ec07e673428c89/children', {
headers : {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
  'Notion-Version': '2022-06-28',
}
})

const {data: massages} = await useFetch(
'https://api.notion.com/v1/blocks/1d3568fa61e74a85998ba143302e7dda/children',{
headers : {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
  'Notion-Version': '2022-06-28',
}
})

const {data: plantes} = await useFetch(
'https://api.notion.com/v1/blocks/f52dccef8b144c1e90c64d1209924eed/children', {
headers : {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
  'Notion-Version': '2022-06-28',
}
})

const {data: qa} = await useFetch(
'https://api.notion.com/v1/blocks/8e9256661ba24388a148b568b704b664/children', {
headers : {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
  'Notion-Version': '2022-06-28',
}
})


for (const results of qa.value.results) {
  if (results.has_children) {
    const {data: child }  = await useFetch(
    `https://api.notion.com/v1/blocks/${results.id}/children`, {
    headers : {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
    }
  })
  results.children = child
}
}

</script>

<style >
.toggle-text {
  @apply text-leaf text-sm my-2
}
.notion-toggle-title {
  @apply text-leaf text-lg font-semibold mt-4 mb-2;
}
</style>
