<template>
  <div>
    <FaqItem v-for="item in data.results" :key="item.created_time" :body="item.properties.Reponse.rich_text[0].plain_text" :title="item.properties.Question.title[0].plain_text" />
  </div>
</template>

<script>
import FaqItem from './FaqItem.vue'

export default {
  components: { FaqItem },
  props: {
    data : Object
  }
}
</script>
