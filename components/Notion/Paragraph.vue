<template>
    <p ref="paragraph"> 
        <StyledText v-for="element in this.block.paragraph.rich_text" :key="element" :text="element"></StyledText>
    </p>
</template>

<script>
import StyledText from './StyledText.vue'

export default {
    components: { StyledText }, 
    props: {
        block: Object
    }
}
</script>