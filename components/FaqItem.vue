<template>
  <div class="mx-auto my-8 w-1/3 ">
    <div class="mx-auto my-4 flex justify-between cursor-pointer" @click="visible=!visible">
      <h5 class="inline-block text-leaf font-sans text-lg font-semibold">
        {{ title }}
      </h5>
      <Chevron class="inline-block text-leaf" />
    </div>
    <p class="text-leaf mb-16" :class="[visible ? 'block': 'hidden']">
     {{ body }}
    </p>
  </div>
</template>

<script>
import Chevron from './Chevron.vue'
export default {
  components: { Chevron },
  props: {
    title: String,
    body: String
  },
  data () {
    return {
      visible: false
    }
  }
}
</script>
