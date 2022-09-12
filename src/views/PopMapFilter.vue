<template>
    <RightLayer :visible="visible" :close="true" @close="$emit('close')" class="apply-footer">
      <template slot="header">
        <div class="tab-type2">
          <button @click="currentTab = 'buisness';" :class="{on: currentTab === 'buisness'}"><span>충전사업자</span></button>
          <button @click="currentTab = 'type';" :class="{on: currentTab === 'type'}"><span>충전기타입</span></button>
        </div>
      </template>
      <template slot="content">
        <div class="cont-scroll">
          <!-- 충전사업자 -->
          <div class="tab-wrap" v-if="currentTab === 'buisness'">
            <ul class="filter-list">
              <li v-for="(item, i) in buisnessList" :key="i">
                <strong class="tit">{{ item.tit }}</strong>
                <ul>
                  <li v-for="(list, j) in item.list" :key="j">
                    <button :class="{on: list.selected}" @click="list.selected = !list.selected">
                      <span v-if="list.txt == '벤츠'"><img :src="require('@/assets/images/benz/ico-benz.png')" style="width:2rem" /></span>
                      <template v-else><span v-html="list.txt"></span></template>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <!-- 충전기타입 -->
          <div class="tab-wrap" v-if="currentTab === 'type'">
            <ul class="filter-list">
              <li v-for="(item, i) in typeList" :key="i">
                <strong class="tit">{{ item.tit }}</strong>
                <ul>
                  <li v-for="(list, j) in item.list" :key="j">
                    <button :class="{on: list.selected}" @click="list.selected = !list.selected"><span v-html="list.txt"></span></button>
                  </li>
                </ul>
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
      currentTab: 'buisness',
      buisnessList1: [
        {
          tit: '차지비',
          list: [
            {
              selected: true,
              txt: '차지비'
            },
          ]
        },
        {
          tit: '공공기관',
          list: [
            {
              selected: true,
              txt: '환경부'
            },
            {
              selected: false,
              txt: '한전'
            }
          ]
        },
        {
          tit: '기타 사업자',
          list: [
            {
              selected: true,
              txt: '대영채비'
            },
            {
              selected: false,
              txt: '에버온'
            },
            {
              selected: false,
              txt: '한국전기차<br>충전서비스'
            },
            {
              selected: true,
              txt: '대영채비'
            },
            {
              selected: false,
              txt: '에버온'
            },
            {
              selected: false,
              txt: '한국전기차<br>충전서비스'
            },
          ]
        },
      ],
      buisnessList2: [
        {
          tit: '차지비',
          list: [
            {
              selected: true,
              txt: '차지비'
            },
            {
              selected: false,
              txt: '벤츠'
            },
          ]
        },
        {
          tit: '공공기관',
          list: [
            {
              selected: true,
              txt: '환경부'
            },
            {
              selected: false,
              txt: '한전'
            }
          ]
        },
        {
          tit: '기타 사업자',
          list: [
            {
              selected: true,
              txt: '대영채비'
            },
            {
              selected: false,
              txt: '에버온'
            },
            {
              selected: false,
              txt: '한국전기차<br>충전서비스'
            },
            {
              selected: true,
              txt: '대영채비'
            },
            {
              selected: false,
              txt: '에버온'
            },
            {
              selected: false,
              txt: '한국전기차<br>충전서비스'
            },
          ]
        },
      ],
      typeList: [
        {
          tit: '완속',
          list: [
            {
              selected: true,
              txt: '완속'
            }
          ]
        },
        {
          tit: '급속',
          list: [
            {
              selected: true,
              txt: 'DC콤보'
            },
            {
              selected: false,
              txt: '차데모'
            },
            {
              selected: false,
              txt: ' AC3상'
            }
          ]
        }
      ]
    }
  },
  computed: {
    buisnessList(){
      return  this.skin === 'benz' ? this.buisnessList2 : this.buisnessList1;
    }
  },
}
</script>
