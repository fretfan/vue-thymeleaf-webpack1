<template>
<div>
    <span>Dratuti!</span> this is msg: {{helloMsg}}
    <div>Count is: {{ count}} </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            helloMsg: 'This is from Hello.vue'
        }
    },
    props: {
        count: String
    }
}
</script>
<style scoped>
    span {
        color:red;
    }
<style>