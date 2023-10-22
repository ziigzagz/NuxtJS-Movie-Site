
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
                  <NuxtLink :to="`/movie/view/`+item.movieId"
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
                    </div></NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movie_list: [],
    };
  },
  mounted() {
    console.log(this.$route.params.year);
    this.getMovieByYear(this.$route.params.year);
  },
  methods: {
    async getMovieByYear(year = new Date().getFullYear()) {
      let payload = {
        url: "https://service.server-cdn-streaming.com/api/web/movie-list",
        method: "GET",
        params: {
          releaseYear: year,
          offset: 0,
          limit: 20,
        },
      };
      await axios({
        url: "https://api.xn--72czp5e5a8b.xyz/",
        method: "POST",
        data: payload,
      })
        .then((response) => {
          this.movie_list = response.data.rows;
          console.log(response.data.rows);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>