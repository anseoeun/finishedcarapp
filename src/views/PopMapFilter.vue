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
                    <span v-if="list.txt == '벤츠'"><img :src="require('@/assets/images/benz/ico-benz.png')"
                        style="width:2rem" /></span>
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
                  <button :class="{on: list.selected}" @click="list.selected = !list.selected"><span
                      v-html="list.txt"></span></button>
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
              selected: true,
              txt: '한국전력'
            },
            {
              selected: false,
              txt: '제주도청'
            },
          ]
        },
        {
          tit: '기타 사업자',
          list: [
            {
              selected: false,
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
              selected: false,
              txt: '엘지헬로비전'
            },
            {
              selected: false,
              txt: 'GS칼텍스'
            },
            {
              selected: false,
              txt: '에스트래픽'
            },
            {
              selected: false,
              txt: '삼성이브이씨'
            },
            {
              selected: false,
              txt: '매니지온'
            },
            {
              selected: false,
              txt: '차지인'
            },
            {
              selected: false,
              txt: '클린일렉스'
            },
            {
              selected: false,
              txt: '타디스<br>테크놀로지'
            },
            {
              selected: false,
              txt: '한국전기차<br>인프라기술'
            },
            {
              selected: false,
              txt: '씨어스'
            },
            {
              selected: false,
              txt: '이카플러그'
            },
            {
              selected: false,
              txt: '파워큐브<br>코리아'
            },
            {
              selected: false,
              txt: '스타코프'
            },
            {
              selected: false,
              txt: '휴맥스EV'
            },
            {
              selected: false,
              txt: '제주전기<br>자동차서비스'
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
    buisnessList() {
      return this.skin === 'benz' ? this.buisnessList2 : this.buisnessList1;
    }
  },
}
</script>
