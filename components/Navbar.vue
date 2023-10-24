<template>
  <div>
    <div class="menu-bar">
      <div class="container">
        <ul class="nav">
          <li
            class="nav-item"
            v-for="(item, index) in navItem"
            :key="index" >
            <NuxtLink class="nav-link"
             :to="item">
              {{ index }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItem: {
        ดูหนังออนไลน์: "/",
        หนังใหม่ล่าสุด: "/movie-year/" + new Date().getFullYear(),
        หนังฝรั่ง: "/movie-category/6/eng-movie/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87",
        หนังไทย: "/movie-category/3/thai-movie/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%97%E0%B8%A2",
        "Netflix เน็ตฟิก": "/movie-category/5/netflix/Netflix",
        หนังญี่ปุ่น: "/movie-category/8/japan-movie/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99",
        ซีรีย์ออนไลน์: "/movie-category/13/Series/%E0%B8%8B%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B9%8C",
        อนิเมะออนไลน์: "/movie-category/11/Animation/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%B9%E0%B8%99-%E0%B8%AD%E0%B8%99%E0%B8%B4%E0%B9%80%E0%B8%A1%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99%20",
        ติดต่อเรา: "",
      },
    };
  },
};
</script>

<style lang="css" scoped>
.menu-bar {
  display: block;
  margin: 0 0 1rem;
  padding: 0;
  background-color: #28a745;
  box-shadow: inset 0 20px 10px -20px rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  overflow: hidden;
}
.menu-bar .nav {
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.menu-bar .nav .nav-item .nav-link {
  display: flex;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  font-size: 1rem;
  color: #fff;
  white-space: nowrap;
}
.menu-bar .nav .nav-item .nav-link:hover {
  background-color: #247938;
}
</style>