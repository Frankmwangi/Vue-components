<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
               <app-quote >     
               <h2 slot="title"> {{ quoteTitle }}</h2>
               <P slot="content">A wounderful quote</P>
               </app-quote>
          

            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    export default {
        data: function(){
            return{
                quoteTitle: 'The Quote'
            }
        },
        components:{
        appQuote: Quote
        }
    }
</script>

<style>
</style>
