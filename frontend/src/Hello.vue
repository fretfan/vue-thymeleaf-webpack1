<template>
<div>
    <span>Dratuti!</span> this is msg: {{helloMsg}}
    <div>Count is: <b>{{ count }}</b> </div>
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
        count: String
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
<style scoped>
    span {
        color:red;
    }
<style>