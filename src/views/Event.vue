<template>
  <div class="contents">
    <div class="event-wrap">
      <h2 class="tit-type1">이벤트</h2>
      <div class="tab-type1">
          <button @click="currentTab = 'ing';" :class="{on: currentTab === 'ing'}"><span>진행중 이벤트</span></button>
          <button @click="currentTab = 'end';" :class="{on: currentTab === 'end'}"><span>종료된 이벤트</span></button>
          <button @click="currentTab = 'winner'" :class="{on: currentTab === 'winner'}"><span>당첨자 발표</span></button>
      </div>
      <div v-if="currentTab === 'ing'" class="event-list ing">
        <div class="no-data">진행중인 이벤트가 없습니다.</div>
      </div>
      <div v-if="currentTab === 'end'" class="event-list end">
        <div class="no-data">종료된 이벤트가 없습니다.</div>
      </div>
      <div v-if="currentTab === 'winner'" class="event-list winner">
        <div class="no-data">당첨자 발표가 없습니다.</div>
      </div>
      
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return{
      currentTab: 'ing',
    }
  },
}
</script>
