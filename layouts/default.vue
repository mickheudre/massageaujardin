<template>
  <div class="bg-cream max-w-screen scrollbar-hide">
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
    <div class="min-h-screen">
      <NuxtPage />
    </div>
    <footer>
      <div class="bg-white w-full flex flex-col sm:flex-row text-leaf sm:justify-between px-8 py-4 text-sm sm:items-center">
        <span class="sm:w-64 my-1">Massage pour toutes fait partie de la coopérative <a class="font-bold" href="https://www.coopaname.coop/">Coopaname</a> </span>
        <NuxtLink class="font-bold my-1" to="/mentions-legales">Mentions Légales</NuxtLink>
        <span class="my-1">Site développé par <a class="font-bold" href="https://mickheudre.me">Mickaël</a>, avec des dessins de <a class="font-bold" href="https://cmllemrtn.com/">Camille</a>.</span>
      </div>
    </footer>
  </div>
</template>

<style>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>