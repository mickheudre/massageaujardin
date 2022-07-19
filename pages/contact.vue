<template>
    <form class="max-w-lg md:mx-auto mx-8">
        <h2 class="mb-8 pt-16 font-serif text-leaf text-3xl ">Vous pouvez me contacter par l'intermediaire de ce formulaire</h2>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-leaf text-xs font-bold mb-2" for="grid-first-name">
        Prénom
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" v-model="prenom" type="text">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-leaf text-xs font-bold mb-2" for="grid-last-name">
        Nom
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" v-model="nom" type="text">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-leaf text-xs font-bold mb-2">
        E-mail ou téléphone
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" v-model="contact" type="email">
      <p class="text-leaf text-xs italic">Je vous recontacterai par mail ou par téléphone suivant votre préférence</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-leaf text-xs font-bold mb-2" for="grid-password">
        Message
      </label>
      <textarea class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" v-model="message"></textarea>
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/2">
      <button  @click="send" class="bg-leaf hover:bg-leaf  focus:outline-none text-cream font-bold pt-3 pb-4 px-4 rounded" type="button">
        Envoyer le message
      </button>
    </div>
    <div class="md:w-2/3"></div>
  </div>
</form>
</template>

<script>
export default {
    data: function() {
        return {
            errors: [],
            prenom: null,
            nom: null,
            contact: null,
            message: null
        }
  },
  methods: {
    send() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({prenom: this.prenom, nom: this.nom, contact: this.contact, message: this.message})
        };
  fetch("/api/contact", requestOptions)
    .then(response => console.log(response))
    }
  }
}
</script>