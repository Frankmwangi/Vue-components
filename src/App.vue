<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in-Directives</h1>
                <p v-text="'some text'"></p>
                <p v-html="'<strong>some text</strong>'"></p>
            </div>
        </div>
         <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p>color this</p>
            </div>
        </div>
        <hr>

    </div>
</template>

<script>
    export default {
    }
</script>

<style>

</style>