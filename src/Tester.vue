<template>

<div id="Tester">
    <h1>THIS IS A COMPONENT</h1>
    <h2>YEEE-HAWW...it works, dude!!!</h2>
    <button v-on:click="showpara()">CLICK ME</button>
    <p id="paragraph" v-model="showpara">{{message}}</p>
</div>

</template>


<script>

export default {
    name: "Tester",

    data: {
        message: "YOU CLICKED THE BUTTON."
    },

    methods: {
        
        showpara: function(){
            
            this.message;

        }

    }

}
</script>


<style>


</style>