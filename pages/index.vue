
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
                        />
                      </div>
                    </div>
                    <div class="movies-footer">
                      {{
                        item.soundThai && item.soundTrack
                          ? "เสียงไทย + soundtrack"
                          : item.soundThai
                          ? "เสียงไทย"
                          : item.soundTrack
                          ? "soundtrack"
                          : ""
                      }}
                    </div></NuxtLink
                  >
                </div>
              </div>
            </div>
            <div class="overflow-auto text-white">
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
              ></b-pagination>

              <p class="mt-3">Current Page: {{ currentPage }}</p>

              <b-table
                id="my-table"
                :items="items"
                :per-page="perPage"
                :current-page="currentPage"
                small
              ></b-table>

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
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: "Fred", last_name: "Flintstone" },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Rockhead", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
      ],
    };
  },
  mounted() {
    this.getMovieHome(this.$route.query.page);
    console.log(this.$route.query.page)
  },
  methods: {
    getMovieHome(page = 1) {
      let payload = {
        url: "https://service.server-cdn-streaming.com/api/web/movie-list",
        method: "GET",
        params: {
          genreId: "3",
          offset: (page - 1) * 20,
          limit: 20,
        },
      };
      axios({
        url: "https://api.xn--72czp5e5a8b.xyz/",
        method: "POST",
        data: payload,
      })
        .then((response) => {
          this.movie_list = response.data.rows;
          // console.log(response.data.rows);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    Page1,
    Page2,
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>