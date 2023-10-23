<template>
  <div>
    <header>
      <div class="container">
        <div class="row align-items-center">
          <div class="text-md-left text-center col-md-5">
            <a href="/" class="header-brand"
              ><div class="header-icon">
                <img
                  :src="logoWeb"
                  alt="ดูหนังออนไลน์ฟรี 2022 หนังใหม่ Netflix คมชัด HD 4K"
                  class="img-fluid" v-if="logoWeb!=''"
                /></div
            ></a>
          </div>
          <div class="col-md-7">
            <div class="row">
              <div class="col text-white">
                <h1 style="font-family: Kanit, sans-serif; font-size: 16px">
               {{headerText}}
                </h1>
              </div>
            </div>
            <div class="row d-flex justify-content-end">
              <div class="col-auto text-end">
                <div class="header-search">
                  <form class="form-inline d-flex ">
                    <input
                      type="text"
                      placeholder="พิมพ์ชื่อหนัง ..."
                      class="form-control"
                    />
                    <button type="submit" class="btn btn-success ms-2">
                      <i class="fas fa-search mr-2"></i>ค้นหา
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoWeb: "",
      headerText: "",
    };
  },
  mounted() {
    this.logoWeb = this.$config.public.logoWeb;
    this.headerText = this.$config.public.headerText;
  },
};
</script>

<style lang="scss" scoped>
header {
  padding: 10px 0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAAAAACoBHk5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmBBkDGh0FNcSxAAAAAW9yTlQBz6J3mgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wNC0yNVQwMzoyNjoyOCswMDowMPyzAxMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDQtMjVUMDM6MjY6MjgrMDA6MDCN7ruvAAAAGklEQVQI12NQBgIjBhChzAAigCSQUGYAEcoAN8gDt+49E9MAAABaZVhJZk1NACoAAAAIAAUBEgADAAAAAQABAAABGgAFAAAAAQAAAEoBGwAFAAAAAQAAAFIBKAADAAAAAQACAAACEwADAAAAAQABAAAAAAAAAAAASAAAAAEAAABIAAAAAR9S9zQAAAAASUVORK5CYII=);
}
</style>