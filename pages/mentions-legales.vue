<template>
    <div class="flex flew-col justify-center">
        <div class="max-w-xl text-leaf">
            <h1 class="font-serif text-6xl py-8">Mentions Légales</h1>
            <Page :page="content" />
        </div>
    </div>
</template>

<script>
import Page from '../components/Notion/Page.vue'
import Logo from '../components/Logo.vue'
import Waves from '../components/Waves.vue'
import Faq from '../components/Faq.vue'
import ArrowDown from '../components/ArrowDown.vue'

export default {
    components: { Page, Logo, Waves, Faq, ArrowDown },
    async asyncData ({ $axios }) {
        const content = await $axios.$get(
        'https://api.notion.com/v1/blocks/7c390795c01c4567b42198009d8da65e/children',
        {}
        )
        
        return { content }
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
h3 {
    @apply text-xl font-semibold mt-8 mb-4;
}
</style>