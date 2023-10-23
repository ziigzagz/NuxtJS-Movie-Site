<template>
  <div>
    <div class="footer-content">
      <div class="container" v-html="footerText">
      
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container text-white">
        ©CopyRight 2022 เว็บดูหนังเจ้าแรกในไทยที่มีหนังใหม่ชนโรงก่อนเว็บอื่น
        <a href="#" class="text-black">ดูหนังออนไลน์</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerText: "",
    };
  },
  mounted() {
    this.footerText = this.$config.public.footerText;
  },
};
</script>

<style lang="css" scoped>
.footer-content {
  font-weight: 300;
  line-height: 1.5;
  color: #a0a5aa;
  font-size: 14px;
  text-align: center;
  margin: 0;
  padding: 2rem 0;
  box-sizing: border-box;
  width: 100%;
  background: #211e1e;
}
.footer-copyright {
  font-size: 0.9rem;
  padding: 10px;
  color: #fff;
  text-align: center;
  background-color: #28a745;
}
</style>