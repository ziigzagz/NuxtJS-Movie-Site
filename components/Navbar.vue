<template>
  <div>
    <div class="menu-bar">
      <div class="container">
        <ul class="nav">
          <li class="nav-item">
            <a
              href="/"
              aria-current="page"
              class="nav-link nuxt-link-exact-active nuxt-link-active"
              target=""
            >
              ดูหนังออนไลน์
            </a>
          </li>
          <li class="nav-item">
            <a href="/movie-year/2022" class="nav-link" target="">
              หนังใหม่ล่าสุด
            </a>
          </li>
          <li class="nav-item">
            <a
              href="/movie-category/6/eng-movie/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87"
              class="nav-link"
              target=""
            >
              หนังฝรั่ง
            </a>
          </li>
          <li class="nav-item">
            <a
              href="/movie-category/3/thai-movie/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%97%E0%B8%A2"
              class="nav-link"
              target=""
            >
              หนังไทย
            </a>
          </li>
          <li class="nav-item">
            <a
              href="/movie-category/5/netflix/Netflix"
              class="nav-link"
              target=""
            >
              Netflix เน็ตฟิก
            </a>
          </li>
          <li class="nav-item">
            <a
              href="/movie-category/8/japan-movie/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99"
              class="nav-link"
              target=""
            >
              หนังญี่ปุ่น
            </a>
          </li>
          <li class="nav-item">
            <a
              href="/movie-category/13/Series/%E0%B8%8B%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B9%8C"
              class="nav-link"
              target=""
            >
              ซีรีย์ออนไลน์
            </a>
          </li>
          <li class="nav-item">
            <a
              href="/movie-category/11/Animation/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%B9%E0%B8%99-%E0%B8%AD%E0%B8%99%E0%B8%B4%E0%B9%80%E0%B8%A1%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99%20"
              class="nav-link"
              target=""
            >
              อนิเมะออนไลน์
            </a>
          </li>
          <li class="nav-item">
            <a href="#" rel="noopener" target="_blank" class="nav-link">
              ติดต่อเรา
            </a>
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
        ดูหนังออนไลน์: 5,
        หนังใหม่ล่าสุด: 5,
        หนังฝรั่ง: 5,
        หนังไทย: 5,
        "Netflix เน็ตฟิก": 5,
        หนังญี่ปุ่น: 5,
        ซีรีย์ออนไลน์: 5,
        อนิเมะออนไลน์: 5,
        ติดต่อเรา: 5,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
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