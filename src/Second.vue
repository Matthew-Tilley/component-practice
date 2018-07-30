<template>

    <div id="something">
        <h1>HELLO!!!</h1>
        <h2>{{message}}</h2>
        <h3>{{ arg1 + arg2 }}</h3>
        <h3>THIS IS MULTIPLIED: {{arg3}}  Blahblah {{arg4}}</h3>
        <button v-on:click="multiply()">MULTIPLY</button>
    </div>

</template>


<script>

export default{

    data: function(){

        return {
            
            message: "LKJASLKJASD",
            arg1: 2,
            arg2: 9,
            arg3: "",
            arg4: "Nonsense!"

        }

    },


    methods: {

        multiply: function(){
            
            this.arg3 = this.arg1 * this.arg2;

            return arg3;

        }
    }

}

</script>


<style>

</style>
