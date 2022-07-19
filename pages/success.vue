<template>
    <div class="flex flex-col items-center justify-center h-full">
        <Waves class="w-32 my-8 fill-current text-norway" />
        <h1 class="font-serif text-4xl text-leaf my-4">Votre message a été envoyé</h1>
        <NuxtLink class="text-leaf" to="/">Retour au site</NuxtLink>
    </div>
</template>

<script>
import Waves from '../components/Waves.vue'

export default {
    components: { Waves }
}
</script>
