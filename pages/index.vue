
<template>
  <div>
    <div class="content-wrapper">
      <div class="movies-wrapper">
        <div class="movies-header">แนะนำหนังใหม่</div>
        <div class="movies-content">
          <div class="container">
            <div class="row">
              <div
                class="col-md-4 col-lg-4 col-xl-3 col-6"
                v-for="(item, index) in movie_list"
                :key="index"
              >
                <div class="movies-item">
                  <NuxtLink :to="`/movie/view/` + item.movieId"
                    ><div class="movies-box">
                      <div class="title">
                        {{ item.name }}
                      </div>
                      <!---->
                      <div class="ribbon mfull-hd">HD</div>
                      <div class="ribbon mzoom" style="display: none">Zoom</div>
                      <div class="poster">
                        <img
                          :src="item.coverThumbPath"
                          :alt="item.name"
                          class="img-fluid"
                          lazy="loaded"
                        />
                      </div>
                    </div>
                    <div class="movies-footer">
                      {{ item.lang }}
                    </div></NuxtLink
                  >
                </div>
              </div>
            </div>
            <div class="overflow-auto text-white mt-5">
              <v-pagination
                :length="total"
                :total-visible="5"
                v-model="page"
                @input="onPageChange"
              ></v-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Page1 from "@/components/Page1.vue";
import Page2 from "@/components/Page2.vue";
import axios from "axios";
export default {
  data() {
    return {
      movie_list: [],
      page: 1,
      total: 0,
    };
  },

  mounted() {
    this.getMovieHome(this.$route.query.page);
  },
  methods: {
    async getMovieHome(page = 1) {
      let categoryId = "0";
      let moviePerPage = 20;
      let offset = (page - 1) * moviePerPage + 1;
      let limit = moviePerPage;
      let url = `${this.$config.public.api}/movie?offset=${offset}&limit=${limit}&categoryId=${categoryId}`;
      const res = await axios.get(url);
      this.movie_list = res.data.data;
      this.total = res.data.total / moviePerPage + 1;
    },
  },

  watch: {
    page: {
      handler: function (val, oldVal) {
        this.getMovieHome(val);
      },
      deep: true,
    },
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>

<style lang="css" scoped>
</style>