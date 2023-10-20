<template>
    <div>
        {{ $route.params.id }}
    </div>
</template>

<script>

    const route = useRoute()
    console.log(route.params.id)

    export default {
    }
</script>

<style lang="scss" scoped>

</style>