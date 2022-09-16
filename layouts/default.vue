<template>
  <div class="bg-cream">
    <header>
      <!-- <div class="fixed w-full flex flex-row justify-between mt-16 mb-4">
        <Logo class="h-16 fill-current text-leaf mx-16" />
        <div class="flex space-x-16 mx-16 ">
            <a class="font-semibold text-lg text-leaf">Qui suis-je ?</a>
            <a class="font-semibold text-lg text-leaf">Contact</a>
        </div>
      </div> -->
      <!-- <img class="w-24 mt-4 mx-8" alt="Emilie Ibanez" src="../assets/img/emilie-ibanez.png"> -->
    </header>
    <div class="">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'

export default {
  components: { Logo },

}
</script>
