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
          <div class="side-bar">
            <div class="side-bar-header">ประเภทหนัง</div>
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
          <div class="side-bar mt-3">
            <div class="side-bar-header">หมวดหมู่</div>
            <div class="side-bar-content">
              <div class="menu-items">
                <NuxtLink
                  class="item text-center"
                  v-for="(item, index) in movieCategory.rows"
                  :key="index"
                  :to="
                    /movie-category/ +
                    item.categoryId +
                    `/` +
                    item.alias +
                    `/` +
                    item.name
                  "
                >
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
// const config = useRuntimeConfig();
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
      movieGenre: {
        status: 1,
        rows: [
          {
            genreId: 1,
            name: "Action",
            nameThai: "แอคชั่น",
            alias: "action",
            status: "active",
            createdAt: "2021-03-09T20:46:41.000Z",
            updatedAt: "2021-03-09T20:46:41.000Z",
          },
          {
            genreId: 2,
            name: "Adventure",
            nameThai: "ผจญภัย",
            alias: "adventure",
            status: "active",
            createdAt: "2021-03-09T20:46:55.000Z",
            updatedAt: "2021-03-09T20:46:55.000Z",
          },
          {
            genreId: 3,
            name: "Animation",
            nameThai: "อนิเมชั่น",
            alias: "animation",
            status: "active",
            createdAt: "2021-03-09T20:47:19.000Z",
            updatedAt: "2021-03-09T20:47:19.000Z",
          },
          {
            genreId: 4,
            name: "Biography",
            nameThai: "ชีวประวัติ",
            alias: "biography",
            status: "active",
            createdAt: "2021-03-09T20:47:32.000Z",
            updatedAt: "2021-03-09T20:47:32.000Z",
          },
          {
            genreId: 5,
            name: "Cartoon",
            nameThai: "การ์ตูน",
            alias: "cartoon",
            status: "active",
            createdAt: "2021-03-09T20:47:46.000Z",
            updatedAt: "2021-03-09T20:47:46.000Z",
          },
          {
            genreId: 6,
            name: "Comedy",
            nameThai: "ตลก",
            alias: "comedy",
            status: "active",
            createdAt: "2021-03-09T20:47:57.000Z",
            updatedAt: "2021-03-09T20:47:57.000Z",
          },
          {
            genreId: 7,
            name: "Crime",
            nameThai: "อาชญกรรม",
            alias: "crime",
            status: "active",
            createdAt: "2021-03-09T20:48:12.000Z",
            updatedAt: "2021-03-09T20:48:12.000Z",
          },
          {
            genreId: 8,
            name: "Documentary",
            nameThai: "สารคดี",
            alias: "documentary",
            status: "active",
            createdAt: "2021-03-09T20:48:25.000Z",
            updatedAt: "2021-03-09T20:48:25.000Z",
          },
          {
            genreId: 9,
            name: "Drama",
            nameThai: "ดราม่า",
            alias: "drama",
            status: "active",
            createdAt: "2021-03-09T20:48:39.000Z",
            updatedAt: "2021-03-09T20:48:39.000Z",
          },
          {
            genreId: 22,
            name: "erotic",
            nameThai: "อีโรติก",
            alias: "erotic",
            status: "active",
            createdAt: "2022-12-04T12:19:24.000Z",
            updatedAt: "2022-12-04T12:19:24.000Z",
          },
          {
            genreId: 10,
            name: "Family",
            nameThai: "ครอบครัว",
            alias: "family",
            status: "active",
            createdAt: "2021-03-09T20:48:50.000Z",
            updatedAt: "2021-03-09T20:48:50.000Z",
          },
          {
            genreId: 11,
            name: "Fantasy",
            nameThai: "แฟนตาซี",
            alias: "fantasy",
            status: "active",
            createdAt: "2021-03-09T20:49:03.000Z",
            updatedAt: "2021-03-09T20:49:03.000Z",
          },
          {
            genreId: 12,
            name: "Horror",
            nameThai: "ผี สยองขวัญ",
            alias: "horror",
            status: "active",
            createdAt: "2021-03-09T20:49:14.000Z",
            updatedAt: "2021-03-09T20:49:14.000Z",
          },
          {
            genreId: 13,
            name: "Romance",
            nameThai: "โรแมนติก",
            alias: "romance",
            status: "active",
            createdAt: "2021-03-09T20:49:27.000Z",
            updatedAt: "2021-03-09T20:49:27.000Z",
          },
          {
            genreId: 14,
            name: "Sci-Fi",
            nameThai: "ไซไฟ",
            alias: "sci-fi",
            status: "active",
            createdAt: "2021-03-09T20:49:42.000Z",
            updatedAt: "2021-03-09T20:49:42.000Z",
          },
          {
            genreId: 17,
            name: "Series",
            nameThai: "ซีรีส์",
            alias: "Series",
            status: "active",
            createdAt: "2021-08-03T10:01:32.000Z",
            updatedAt: "2021-09-17T07:56:34.000Z",
          },
          {
            genreId: 15,
            name: "Sports",
            nameThai: "กีฬา",
            alias: "sports",
            status: "active",
            createdAt: "2021-03-09T20:49:55.000Z",
            updatedAt: "2021-03-09T20:49:55.000Z",
          },
          {
            genreId: 16,
            name: "Thriller",
            nameThai: "ระทึกขวัญ",
            alias: "Thriller",
            status: "active",
            createdAt: "2021-07-28T11:52:38.000Z",
            updatedAt: "2021-07-28T11:52:38.000Z",
          },
          {
            genreId: 19,
            name: "จักรวาล Conjuring",
            nameThai: "จักรวาล Conjuring",
            alias: "จักรวาล Conjuring",
            status: "active",
            createdAt: "2022-06-02T11:36:53.000Z",
            updatedAt: "2022-06-02T11:36:53.000Z",
          },
          {
            genreId: 23,
            name: "จักรวาล DC",
            nameThai: "จักรวาล DC",
            alias: "จักรวาล DC",
            status: "active",
            createdAt: "2023-05-04T10:16:33.000Z",
            updatedAt: "2023-05-04T10:16:33.000Z",
          },
          {
            genreId: 20,
            name: "จักรวาล fast and furious",
            nameThai: "จักรวาล fast and furious เร็วแรงทะลุนรก",
            alias: "จักรวาล fast and furious",
            status: "active",
            createdAt: "2022-07-20T03:35:03.000Z",
            updatedAt: "2022-07-20T03:35:03.000Z",
          },
          {
            genreId: 18,
            name: "จักรวาล Marvel",
            nameThai: "จักรวาล Marvel",
            alias: "จักรวาล Marvel",
            status: "active",
            createdAt: "2021-09-07T03:28:21.000Z",
            updatedAt: "2022-06-02T11:43:28.000Z",
          },
          {
            genreId: 21,
            name: "รวมมิตรหนังค่าย GTH/GDH",
            nameThai: "หนัง GTH/GDH",
            alias: "movie GTH/GDH",
            status: "active",
            createdAt: "2022-10-12T10:36:28.000Z",
            updatedAt: "2022-10-12T10:37:25.000Z",
          },
        ],
        count: 23,
      },
      movieCategory: {
        status: 1,
        rows: [
          {
            categoryId: 1,
            name: "หนังชนโรง",
            alias: "new-movie",
            order: 1,
            status: "active",
            createdAt: "2021-03-09T20:44:27.000Z",
            updatedAt: "2021-03-09T20:44:27.000Z",
          },
          {
            categoryId: 2,
            name: "หนังเกาหลี",
            alias: "korea-movie",
            order: 2,
            status: "active",
            createdAt: "2021-03-09T20:44:36.000Z",
            updatedAt: "2021-03-09T20:44:36.000Z",
          },
          {
            categoryId: 3,
            name: "หนังไทย",
            alias: "thai-movie",
            order: 3,
            status: "active",
            createdAt: "2021-03-09T20:44:50.000Z",
            updatedAt: "2021-03-09T20:44:50.000Z",
          },
          {
            categoryId: 4,
            name: "หนังอินเดีย",
            alias: "india-movie",
            order: 4,
            status: "active",
            createdAt: "2021-03-09T20:45:00.000Z",
            updatedAt: "2021-03-09T20:45:00.000Z",
          },
          {
            categoryId: 5,
            name: "Netflix",
            alias: "netflix",
            order: 5,
            status: "active",
            createdAt: "2021-03-09T20:45:13.000Z",
            updatedAt: "2021-03-09T20:45:13.000Z",
          },
          {
            categoryId: 6,
            name: "หนังฝรั่ง",
            alias: "eng-movie",
            order: 6,
            status: "active",
            createdAt: "2021-03-09T20:45:24.000Z",
            updatedAt: "2021-03-09T20:45:24.000Z",
          },
          {
            categoryId: 7,
            name: "หนังจีน",
            alias: "chinese-movie",
            order: 7,
            status: "active",
            createdAt: "2021-03-09T20:45:38.000Z",
            updatedAt: "2021-03-09T20:45:38.000Z",
          },
          {
            categoryId: 8,
            name: "หนังญี่ปุ่น",
            alias: "japan-movie",
            order: 8,
            status: "active",
            createdAt: "2021-04-26T06:56:29.000Z",
            updatedAt: "2021-04-26T06:56:29.000Z",
          },
          {
            categoryId: 9,
            name: "หนังอีโรติก",
            alias: "erotic",
            order: 9,
            status: "active",
            createdAt: "2021-05-25T05:51:22.000Z",
            updatedAt: "2021-05-25T05:52:53.000Z",
          },
          {
            categoryId: 10,
            name: "หนังฮ่องกง-ไต้หวัน",
            alias: "HongKong-Taiwan-movie",
            order: 10,
            status: "active",
            createdAt: "2021-05-25T05:52:44.000Z",
            updatedAt: "2021-05-25T09:40:44.000Z",
          },
          {
            categoryId: 11,
            name: "หนังการ์ตูน-อนิเมชั่น ",
            alias: "Animation",
            order: 11,
            status: "active",
            createdAt: "2021-05-25T09:10:32.000Z",
            updatedAt: "2021-05-25T09:10:32.000Z",
          },
          {
            categoryId: 13,
            name: "ซีรี่ย์",
            alias: "Series",
            order: 12,
            status: "active",
            createdAt: "2021-08-03T10:04:02.000Z",
            updatedAt: "2021-08-03T10:04:02.000Z",
          },
          {
            categoryId: 15,
            name: "disney plus",
            alias: "disney plus",
            order: 13,
            status: "active",
            createdAt: "2022-03-31T08:11:13.000Z",
            updatedAt: "2022-03-31T08:11:13.000Z",
          },
          {
            categoryId: 18,
            name: "amazon prime",
            alias: "amazon prime",
            order: 14,
            status: "active",
            createdAt: "2022-07-09T10:52:51.000Z",
            updatedAt: "2023-02-03T03:45:28.000Z",
          },
          {
            categoryId: 19,
            name: "viu",
            alias: "viu",
            order: 15,
            status: "active",
            createdAt: "2023-06-08T09:09:08.000Z",
            updatedAt: "2023-06-08T09:09:08.000Z",
          },
          {
            categoryId: 20,
            name: "apple+",
            alias: "apple+",
            order: 16,
            status: "active",
            createdAt: "2023-06-08T09:09:30.000Z",
            updatedAt: "2023-06-08T09:09:30.000Z",
          },
          {
            categoryId: 21,
            name: "iQiY",
            alias: "iQiY",
            order: 17,
            status: "active",
            createdAt: "2023-07-17T10:48:40.000Z",
            updatedAt: "2023-07-17T10:48:40.000Z",
          },
          {
            categoryId: 22,
            name: "true id",
            alias: "true id",
            order: 18,
            status: "active",
            createdAt: "2023-07-17T10:49:03.000Z",
            updatedAt: "2023-07-17T10:49:03.000Z",
          },
          {
            categoryId: 23,
            name: "HBO GO",
            alias: "HBO GO",
            order: 19,
            status: "active",
            createdAt: "2023-08-04T08:40:53.000Z",
            updatedAt: "2023-08-04T08:40:53.000Z",
          },
        ],
        count: 19,
      },
    };
  },
  mounted() {

    // loop create year 1978 to current year order desc
    for (let i = new Date().getFullYear(); i >= 1978; i--) {
      this.year.push(i);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>