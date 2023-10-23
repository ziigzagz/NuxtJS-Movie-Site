<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <Header />
    <Navbar />
    <Content />
    <div class="container">
      <div class="form-row">
        <div class="col-lg-2 col-12 d-none d-lg-block">
          <div class="side-bar">
            <div class="side-bar-header">ปีที่ฉาย</div>
            <div class="side-bar-content">
              <div class="menu-items year">
                <NuxtLink
                  class="item text-center"
                  v-for="i in year"
                  :key="i"
                  :to="/movie-year/ + i"
                >
                  {{ i }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-12 pe-2 ps-2">
          <NuxtPage />
        </div>
        <div class="col-lg-2 col-12">
          <div class="side-bar mb-3" v-if="movieGenre.length>0">
            <div class="side-bar-header" >ประเภทหนัง</div>
            <div class="side-bar-content">
              <div class="menu-items">
                <NuxtLink
                  class="item text-center"
                  v-for="(item, index) in movieGenre.rows"
                  :key="index"
                  :to="
                    /movie-genre/ +
                    item.genreId +
                    `/` +
                    item.name +
                    `/` +
                    item.nameThai
                  "
                >
                  {{ item.name }} {{ item.nameThai }}
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="side-bar">
            <div class="side-bar-header">หมวดหมู่</div>
            <div class="side-bar-content">
              <div class="menu-items">
                <NuxtLink
                  class="item text-center"
                  v-for="(item, index) in movieCategory"
                  :key="index"
                  :to="
                    /movie-category/ +
                    item.categoryId +
                    `/` +
                    item.alias +
                    `/` +
                    item.name
                  ">
                  {{ item.name }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import Content from "@/components/Content.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
export default {
  components: {
    Header,
    Footer,
    Navbar,
    Content,
  },
  data() {
    return {
      title: ".....",
      year: [],
      movieGenre: {},
      movieCategory: {},
    };
  },
  mounted() {
    // loop create year 1978 to current year order desc
    for (let i = new Date().getFullYear(); i >= 1978; i--) {
      this.year.push(i);
    }
    this.getMovieCategory();
  },
  methods: {
    async getMovieHome(page = 1) {
      let categoryId = "3";
      let offset = (page - 1) * 20;
      let limit = 20;
      // let url = `${config.api}/movie/home?categoryId=${categoryId}&offset=${offset}&limit=${limit}`;
      // let res = await axios.get(url);
    },
    async getMovieCategory() {
      let url = `${this.$config.public.api}/movieCategory`;
      let res = await axios.get(url);
      this.movieCategory = res.data.data;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>