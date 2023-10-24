<template>
  <div>
    PAGE 2 => <br>
    value_page1 => {{ obj.value_page1 }}<br>
    value_page2 => {{ obj.value_page2 }}<br>
    value_page3 => {{ obj.value_page3 }}<br>
    value_page4 => {{ obj.value_page4 }}<br>
    value_page5 => {{ obj.value_page5 }}<br>
    <button @click="gotoPage1()">Click to page 1</button>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      number_page2: 10,
    };
  },
  mounted() {
    console.log("----From page 2=>1");
    console.log(this.obj);
    console.log("----From page 2=>2");
  },
  methods: {
    gotoPage1() {
      let obj_copy = this.obj;
      obj_copy.value_page2 = this.number_page2;
      this.$emit("childToParent", {
        obj: obj_copy,
        currents_component: "Page1",
      });
    },
  },
};
</script>

<style lang="css" scoped>
</style>