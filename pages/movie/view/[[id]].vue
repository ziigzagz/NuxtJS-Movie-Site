<template>
  <div>
    <Head>
      <Title>{{ title }} 0000 </Title>
    </Head>
    <div class="content-wrapper">
      <div class="movies-wrapper">
        <div class="movies-header">{{ MovieDetail.name }}</div>
        <div class="movies-content">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-5">
                <img
                  :src="MovieDetail.coverImagePath"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="col-md-8 col-7">
                <iframe
                  width="100%"
                  height="100%"
                  :src="
                    `https://www.youtube.com/embed/` + MovieDetail.youtubeId
                  "
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="allowfullscreen"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="movies-wrapper">
        <div class="movies-header text-start">
          เรื่องย่อ : {{ MovieDetail.name }}
        </div>
        <div class="movies-content">
          <div class="container text-white">
            <div class="row">
              <div class="col description">
                <p>
                  {{ MovieDetail.description }}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col text-center">
                <NuxtLink to="/">ดูหนังออนไลน์</NuxtLink>
                <NuxtLink :to="`/movie/view/` + MovieId" v-bind="MovieName">{{
                  MovieDetail.name
                }}</NuxtLink>
              </div>
            </div>
            <div class="row">
              <div class="col text-center text-white mt-3">
                {{ lang }}
              </div>
            </div>
            <div class="row mt-3">
              <div class="col">
                <div class="movies-player">
                  <iframe
                    class="img-fluid i-frame"
                    :src="MovieDetail.linkPlayer"
                   frameborder="0" allowfullscreen=""
                   scrolling="no" 
                  ></iframe>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <button
                  v-for="(item, index) in MoviePlayer"
                  :key="index"
                  class="btn btn-danger me-1 mt-1"
                >
                  {{ index + 1 }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="movies-wrapper">
        <div class="movies-header">หนังอื่นๆ น่าสนใจ</div>
        <div class="movies-content">
          <div class="container">
            <div class="row">
              <div
                class="col-md-4 col-lg-4 col-xl-3 col-6"
                v-for="(item, index) in relatedMovies"
                :key="index"
              >
                <div class="movies-item">
                  <NuxtLink :to="`/movie/view/` + item.movieId"
                    ><div class="movies-box">
                      <div class="title">{{ item.name }} {{ index }}</div>
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
                      {{ lang }}
                    </div></NuxtLink
                  >
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
      MovieId: "",
      MovieName: "",
      MovieDetail: {},
      MoviePlayer: [],
      relatedMovies: [],
lang: "",
      title: `%s | ${this.$config.public.title}`,
    };
  },
  async mounted() {
    this.MovieId = this.$route.params.id;
    await this.getMovieByID(this.MovieId);
    await this.getrelatedMovies();
  },
  methods: {
    async getMovieByID(MovieId = 1) {
      let url = `${this.$config.public.api}/movieById/${MovieId}`;
      let res = await axios.get(url);
      this.MovieDetail = res.data?.data[0];
      console.log(this.MovieDetail);
    },
    async getrelatedMovies(){
      let url = `${this.$config.public.api}/movieRandom`;
      let res = await axios.get(url);
      this.relatedMovies = res.data?.data;
      console.log(this.relatedMovies);
    }
  },
};
</script>

<style lang="scss" scoped>
.movies-content .movies-trailer {
  width: 100%;
  height: 100%;
}
a {
  margin: 0 5px;
  text-decoration: none;
  color: #585858;
  font-weight: 400;
}
a:hover {
  margin: 0 5px;
  text-decoration: none;
  color: yellow;
  font-weight: 400;
}
.movies-content .movies-player {
  position: relative;
  display: block;
  margin-bottom: 1rem;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
.i-frame {
  width: 100%;
  aspect-ratio: 14/9;
}
</style>