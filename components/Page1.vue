<template>
  <div>
    PAGE 1 => <br>
    value_page1 => {{ obj.value_page1 }}<br>
    value_page2 => {{ obj.value_page2 }}<br>
    value_page3 => {{ obj.value_page3 }}<br>
    value_page4 => {{ obj.value_page4 }}<br>
    value_page5 => {{ obj.value_page5 }}<br>
    <button @click="gotoPage2()">click from page 1</button>
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
      number_page1: 5,
    };
  },

  mounted() {
    console.log("---- from Page 1");
    console.log(this.obj);
    console.log("----2");
  },
  methods: {
    gotoPage2() {
      let obj_copy = this.obj;
      obj_copy.value_page1 = this.number_page1;
      this.$emit("childToParent", {
        obj: obj_copy,
        currents_component: "Page2",
      });
    },
  },
};
</script>

<style>
</style>