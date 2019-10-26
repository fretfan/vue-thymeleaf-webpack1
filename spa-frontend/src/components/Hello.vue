<template>
<div>
    <span>Vue component!</span> this is msg: {{helloMsg}}
    <div>Count is: <b>{{ count }}</b> </div>
    <div>Number of click: <b>{{ numberOfClicks }}</b> </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            helloMsg: 'This is from Hello.vue'
        }
    },
    props: {
        count: String,
        numberOfClicks: {type: Number, default: 0}
    },
    methods: {
        getMessage() {
            axios.get('/test-message').then(resp => {
                this.helloMsg = resp.data;
            });
        }
    },
    mounted() {
        setTimeout(() => this.getMessage(), 1000);
    }
}
</script>
<style lang="scss" scoped>
    @import "../css/hello-style";
</style>