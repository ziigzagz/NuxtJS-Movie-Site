
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
                  <a data-v-ede2d044="" href="/movie/view/3928" class=""
                    ><div data-v-ede2d044="" class="movies-box">
                      <div data-v-ede2d044="" class="title">
                        {{ item.name }}
                      </div>
                      <!---->
                      <div data-v-ede2d044="" class="ribbon mfull-hd">HD</div>
                      <div
                        data-v-ede2d044=""
                        class="ribbon mzoom"
                        style="display: none"
                      >
                        Zoom
                      </div>
                      <div data-v-ede2d044="" class="poster">
                        <img
                          data-v-ede2d044=""
                          :src="item.coverThumbPath"
                          alt="THE FIRST SLAM DUNK"
                          class="img-fluid"
                        />
                      </div>
                    </div>
                    <div data-v-ede2d044="" class="movies-footer">
                      {{
                        item.soundThai && item.soundTrack
                          ? "เสียงไทย + soundtrack"
                          : item.soundThai
                          ? "เสียงไทย"
                          : item.soundTrack
                          ? "soundtrack"
                          : ""
                      }}
                    </div></a
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
import Page1 from "@/components/Page1.vue";
import Page2 from "@/components/Page2.vue";
import axios from "axios";
export default {
  data() {
    return {
      movie_list: [],
    };
  },
  mounted() {
    let payload = {
      url: "https://service.server-cdn-streaming.com/api/web/movie-list",
      method: "GET",
      params: {
        genreId: "3",
        offset: 0,
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
        console.log(response.data.rows);
      })
      .catch((err) => {
        console.log(err);
      });

    // axios.post('https://api.xn--72czp5e5a8b.xyz/', payload)
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  },

  methods: {
    abc(data) {
      this.obj = data.obj;
      this.currents_component = data.currents_component;
    },
  },
  components: {
    Page1,
    Page2,
  },
};
</script>

<style lang="scss" scoped>
.movies-wrapper {
  background-color: #191919;
  border: 1px solid #333;
  margin-bottom: 0.6rem;
}
.movies-wrapper .movies-header {
  padding: 10px;
  font-size: 1.1rem;
  font-weight: 400;
  color: #fff;
  text-align: center;
}
.movies-wrapper .movies-content {
  padding-top: 15px;
  border-top: 1px solid #333;
}
.movies-wrapper .movies-content .movies-item {
  position: relative;
  padding-bottom: 10px;
  height: 100%;
}
.movies-item .movies-box {
  height: calc(100% - 3.5em);
  background-size: cover !important;
  position: relative;
  width: auto;
  background: #242424;
  color: #005baa;
  font-size: 11px;
  font-weight: 400;
  text-align: center;
  margin: 0;
  padding: 4px;
  border: 1px solid #444;
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  box-sizing: content-box;
  transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  display: block;
}
.movies-box .title {
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 4px;
  box-sizing: border-box;
  left: 0;
  z-index: 1;
  font-size: 1rem;
  font-weight: 300;
  word-wrap: break-word;
  color: #ffcb00;
  text-decoration: none;
}
.ribbon.mfull-hd {
  background: #dc0603;
}
.ribbon.mzoom {
  background: #8bc34a;
}
.movies-box .poster {
  width: 100%;
}
.movies-item .movies-footer {
  width: 100%;
  padding: 4px;
  color: #ccc;
  font-size: 13px;
  text-align: center;
  background: #444;
  border-radius: 0 0 4px 4px;
}
.movies-box .ribbon {
  width: 80px;
  position: absolute;
  text-align: center;
  line-height: 20px;
  letter-spacing: 1px;
  color: #f0f0f0;
  top: 10px;
  right: -20px;
  left: auto;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  font-weight: 700;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px 1px #222;
}
</style>