<template>
    <div class="notion-toggle w-full">
        <div class="flex   justify-between items-center cursor-pointer" @click="visible=!visible">
            <h5 class="notion-toggle-title w-4/5">
                {{ block.toggle.rich_text[0].plain_text }}
            </h5>
            <Chevron class="transform text-leaf" :class="[visible ? 'rotate-90' :'']" />
        </div>
        <div  :class="visible ? 'block' : 'hidden'">
            <p class="toggle-text" v-for="element in this.block.children.results" :key="element.id"> {{ element.paragraph.rich_text[0].plain_text }} </p>
        </div>
    </div>
</template>

<script>
import Chevron from './Chevron.vue'
import RichText from './RichText.vue';

export default {
    name: 'Toggle',
    components: { Chevron, RichText },
    props: {
        block: Object
    },
    data () {
        return {
            visible: false
        }
    }
}
</script>
