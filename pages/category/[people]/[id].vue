<template>
    <div>
    </div>
</template>

<script>

    export default {
        mounted() {
            this.l();
        },
        data() {
            return {
                zax : ""
            }
        },
        watch: {
            zax(){
                this.l();
                console.log(this.name)
            }
        },
        methods: {
            l(){
                console.log(this.$route.params.id)
                console.log(this.$route.params.people)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>