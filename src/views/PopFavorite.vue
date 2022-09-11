<template>
    <RightLayer :visible="visible" :close="true" @close="$emit('close')" class="apply-footer">
      <template slot="header"><div class="title">즐겨찾기</div></template>
      <template slot="content">
        <div class="cont-scroll">
          <div class="favorite-list">
            <ul>
              <li v-for="(item, index) in favoriteList" :key="index">
                <div class="box">
                  <button class="desc" @click="$emit('station');$emit('close')">
                    <strong class="tit" v-html="item.tit"></strong>
                    <div class="info-wrap">
                      <span class="tag">{{ item.status }}</span>
                      <span class="info">
                        <b class="km">{{ item.km }}Km</b>
                        <button class="favorite" @click.stop="item.favorite = !item.favorite"><Icon type="favorite-s" :class="{on: item.favorite}" /></button>
                      </span>
                    </div>
                  </button>
                  <div class="btn">
                    <button @click="$emit('mapFind')">길안내</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </template>  
    </RightLayer>
</template>

<script>

export default {
  props: {
    visible: {
      type: Boolean, 
      default: false  
    },
  },  
  data() {
    return {
      favoriteList: [
        {
          tit: '[차지비] 서울시 송파구<br>롯데타워 지하2층',
          status: '이용가능',
          km: '0.0',
          favorite: true,
        },
        {
          tit: '[차지비] 서울시 송파구<br>롯데타워 지하2층',
          status: '이용가능',
          km: '0.0',
          favorite: true,
        },
        {
          tit: '[차지비] 서울시 송파구<br>롯데타워 지하2층',
          status: '이용가능',
          km: '0.0',
          favorite: true,
        },
        {
          tit: '[차지비] 서울시 송파구<br>롯데타워 지하2층',
          status: '이용가능',
          km: '0.0',
          favorite: true,
        },
        {
          tit: '[차지비] 서울시 송파구<br>롯데타워 지하2층',
          status: '이용가능',
          km: '0.0',
          favorite: true,
        },
        {
          tit: '[차지비] 서울시 송파구<br>롯데타워 지하2층',
          status: '이용가능',
          km: '0.0',
          favorite: true,
        },
        {
          tit: '[차지비] 서울시 송파구<br>롯데타워 지하2층',
          status: '이용가능',
          km: '0.0',
          favorite: true,
        },
        {
          tit: '[차지비] 서울시 송파구<br>롯데타워 지하2층',
          status: '이용가능',
          km: '0.0',
          favorite: true,
        },
        {
          tit: '[차지비] 서울시 송파구<br>롯데타워 지하2층',
          status: '이용가능',
          km: '0.0',
          favorite: true,
        },
      ],
    }
  }
}
</script>
