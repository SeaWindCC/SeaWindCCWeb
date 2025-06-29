<template>
<main class="main">
  <section class="hero">
    <div>
      <div>
        <h2>海 風 伺 服 器</h2>
        <h3><span>和諧</span>　｜　<span>友善</span>　｜　<span>善良風俗</span>　｜　<span>公平</span>　｜　<span>方便</span></h3>
      </div>
    </div>
  </section>
</main>
</template>
<style scoped>
.main{
  .hero{
    background-image: url(../assets/img/homeHero.png);
    background-position: center;
    background-size: cover;
    height: 700px;

    &>div{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      background-color: #00000049;

      &>div{
        text-align: center;
        h2{
          font-size: 48px;
          color: #9dafff;
        }
        h3{
          color: #FFFFFF;
          font-size: 24px;
          span{
            color: #FFEBCD;
          }
        }
      }
    }
  }
}
@media (max-height:750px) {
  .main{
    .hero{
      height: 100dvh;
    }
  }
}
</style>
<script setup>


</script>