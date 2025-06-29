<template>
<nav class="navbar">
  <div class="logo">
    <img src="../assets/img/logo.png" alt="">
    <h1>海風伺服器 | SeaWind.cc</h1>
  </div>
  <div class="nav-links">

    <router-link to="/" class="simpleLink">首頁</router-link>
    <router-link to="" class="simpleLink">支持</router-link>
    <span>
      <!-- 規範 -->
      <span @mouseenter="dropdownOpenTFP =true" @mouseleave="dropdownOpenTFP = false">
        <a href="" :class="{hover: dropdownOpenTFP }" @click.prevent>遊玩須知<i class="fa-solid fa-caret-right"></i></a>
        <Transition name="dropdown">
          <div v-if="dropdownOpenTFP" class="dropdown">
            <router-link to="">社群須知</router-link>
            <router-link to="">遊玩教學</router-link>
          </div>
        </Transition>
      </span>
       <!-- 關於海風 -->
      <span @mouseenter="dropdownOpenAbout = true" @mouseleave="dropdownOpenAbout = false">
        <a href="" :class="{ hover: dropdownOpenAbout }" @click.prevent>關於海風<i class="fa-solid fa-caret-right"></i></a>
        <Transition name="dropdown">
          <div v-if="dropdownOpenAbout" class="dropdown">
            <router-link to="">官方團隊</router-link>
            <router-link to="">海貓貓窩</router-link>
            <router-link to="">文化藝廊</router-link>
            <router-link to="">合作友群</router-link>
          </div>
        </Transition>
      </span>
      <!-- 責任聲明 -->
      <span @mouseenter="dropdownOpenRS = true" @mouseleave="dropdownOpenRS = false">
        <a href="" :class="{ hover: dropdownOpenRS }" @click.prevent>責任聲明<i class="fa-solid fa-caret-right"></i></a>
        <Transition name="dropdown">
          <div v-if="dropdownOpenRS" class="dropdown">
            <router-link to="">隱私權</router-link>
            <router-link to="">服務條款</router-link>
          </div>  
        </Transition>
      </span>
    </span>
  </div>
  <div class="sidebarBtn">
    <Transition name="barBtn" mode="out-in">
      <a href="" :key="sidebarOpen" @click="emit('toggle-sidebar')" @click.prevent><i :class="sidebarOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars' "></i></a>
    </Transition>
  </div>
</nav>
</template>
<style scoped>
.navbar{
  top: 0px;
  width: 100vw;
  height: 75px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  z-index: 100;
  .logo{
    margin: 0px 10px;
    display: flex;
    align-items: center;
    img{
      height: 55px;
      border-radius: 20px;
    }
    h1{
      color: #6dc2e4;
      margin: 0px 10px;
    }
  }
  .nav-links{
    display: flex;
    align-items: center;
    margin-right: 25px;

    a{
      box-sizing: content-box;
      transition: all 200ms ;
      font-size: 20px;
      color: #FFFFFF;
      margin: 0px 15px;
      text-decoration: none;
      position: relative;

      i{
        margin-left: 3px;
        transition: all 200ms;
      }



      &:hover{
        color: #53B7DF;
      }
    }
    .simpleLink{
      &:deep(){
        padding: 0px; 
        &:hover{
          &::after {
            width: 100%;
          }  
        }
        &::after{
          content: "";
          position: absolute;
          left: 0px;
          bottom: -5px;
          transition: width 300ms;
          transform: translateX(0%);
          background-color: #53B7DF;
          width: 0px;
          height: 3px;
        }
      }
    }

    &>span{

      &>span{
        position: relative;
        a{
          -webkit-tap-highlight-color: transparent; /* iOS / Android */ 
          &.hover{
            padding-bottom: 10px;
            color: #53B7DF;
            .fa-solid.fa-caret-right{
              transform: rotate(90deg);
            }
          }
          &.hover{
            color: #53B7DF;
            padding-bottom: 10px;
            .fa-solid.fa-caret-right{
              transform: rotate(90deg);
            }
          }
        }


        .dropdown{
          position: absolute;
          display: block;
          background-color: #202020;
          border-radius: 10px;
          padding: 3px 0px;
          width: 176px;
          top: 30px;
          left: 15px;
          
          &:deep(a){
            margin: 5px 10px;
            display: block;
          
          }
        }
        &:nth-last-child(1){
          .dropdown{
            left: -65px;
          }
        }
      }

    }
    
  }
  .sidebarBtn{
    display: none;
    font-size: 43px;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    width: 40px;
    a{
      z-index: 2;
      -webkit-tap-highlight-color: transparent; /* iOS / Android */
      touch-action: manipulation;               /* 避免雙擊放大 */
      i{
        color: #FFFFFF;
      }
    }
  }
}
@media (max-width:960px) {
  .navbar{
    .nav-links{
      display: none;
    }
    .sidebarBtn{
      display: flex;
    }
  }
}
.dropdown-enter-from,
.dropdown-leave-to { opacity:0; transform:translateY(-10px); }
.dropdown-enter-active,
.dropdown-leave-active { transition:opacity 180ms ease, transform 180ms ease; }

.barBtn-enter-active,
.barBtn-leave-active {
  transition: opacity 180ms ease;
}

/* 起始與結束狀態 */
.barBtn-enter-from,
.barBtn-leave-to {
  opacity: 0;
}

.barBtn-enter-to,
.barBtn-leave-from {
  opacity: 1;
}
</style>
<script setup>
import { ref } from "vue";

const dropdownOpenTFP = ref(false);
const dropdownOpenRS = ref(false);
const dropdownOpenAbout = ref(false);

const props = defineProps({
  sidebarOpen: { type: Boolean, required: true }
})

const emit = defineEmits(['toggle-sidebar'])

</script>