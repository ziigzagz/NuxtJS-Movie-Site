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
                  :src="MovieDetail.trailer"
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
          เรื่องย่อ : {{ MovieDetail.nameThai }}
        </div>
        <div class="movies-content">
          <div class="container">
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
                {{
                  this.soundThai && this.soundTrack
                    ? "เสียงไทย + soundtrack"
                    : this.soundThai
                    ? "เสียงไทย"
                    : this.soundTrack
                    ? "soundtrack"
                    : ""
                }}
              </div>
            </div>
            <div class="row mt-3">
              <div class="col">
                <div class="movies-player">
                  <!-- <iframe
                    class="img-fluid i-frame"
                    :src="this.MoviePlayer[0]?.videoPath + `?web=1`"
                    allowfullscreen="allowfullscreen"
                  ></iframe> -->
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <button
                  v-for="(item, index) in this.MoviePlayer"
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
                      {{
                        soundThai && soundTrack
                          ? "เสียงไทย + soundtrack"
                          : soundThai
                          ? "เสียงไทย"
                          : soundTrack
                          ? "soundtrack"
                          : ""
                      }}
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
      MovieDetail: {
        name: "",
        nameThai: "",
        coverImagePath: "",
        trailer: "",
      },
      MoviePlayer: [],
      relatedMovies: [],
      soundThai: false,
      soundTrack: false,
      title: `%s | ${this.$config.public.title}`,
    };
  },
  async mounted() {
    this.MovieId = this.$route.params.id;
    await this.getMovieByID(this.MovieId);
  },

  
  methods: {
    async getMovieByID(MovieId = 1) {
        
      let payload = {
        url:
          "https://service.server-cdn-streaming.com/api/web/movie/" + MovieId,
        method: "GET",
        params: {},
      };
      await axios({
        url: "https://api.xn--72czp5e5a8b.xyz/",
        method: "POST",
        data: payload,
      })
        .then((response) => {
        //   return response.data;
          this.MovieName = response.data?.movie?.name;
        //   this.relatedMovies = response.data?.relatedMovies?.slice(0, 8);
        //   this.MovieDetail = response.data.movie;
        //   this.soundThai = response.data?.movie?.soundThai;
        //   this.soundTrack = response.data?.movie?.soundTrack;
        //   this.MoviePlayer = response.data?.videos;
          console.log("data ==>", response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
  aspect-ratio: 16/9;
}
</style>