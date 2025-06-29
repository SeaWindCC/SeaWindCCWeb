<template>
<Transition name="sidebar">
  <aside v-if="sidebarOpen" class="sidebar">
    <router-link to="">首頁</router-link>
    <router-link to="">支持</router-link>
    <span>
      <span>
        <a href="" @click.prevent>遊玩須知</a>
        <Transition name="dropdown">

        </Transition>
      </span>
      <span>
        <a href="" @click.prevent>關於海風</a>
        <Transition name="dropdown">

        </Transition>
      </span>
      <span>
        <a href="" @click.prevent>責任聲明</a>
        <Transition name="dropdown">

        </Transition>
      </span>
    </span>
  </aside> 
</Transition>
<Transition name="mask">
  <div class="mask" v-if="sidebarOpen" @click="emit('toggle-sidebar')"></div>
</Transition>
</template>
<style scoped>
.sidebar{
  z-index: 2;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 300px;
  height: 100dvh;
  background-color: #202020;
  padding-top: 80px;
}
.mask{
  position: fixed;
  inset: 0;
  background-color: #00000045;
  z-index: 1;
}
.mask-enter-from,
.mask-leave-to{
  opacity: 0;
}
.mask-enter-to,
.mask-leave-from{
  opacity: 1 ;
}
.mask-enter-active,
.mask-leave-active{
  transition: opacity 180ms;
}

.sidebar-enter-from,
.sidebar-leave-to{
  transform: translateX(-100%);
}
.sidebar-enter-active,
.sidebar-leave-active{
  transition: all 180ms;
}

</style>
<script setup>

const props = defineProps({
  sidebarOpen:{type:Boolean , required:true}
})
const emit = defineEmits(["toggle-sidebar"])
</script>