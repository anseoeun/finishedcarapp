<template>
  <div class="index">
    <h2>Publishing work sheet</h2>
    <table>
    <colgroup>
      <col style="width:60px" />
      <col style="width:35%" />
      <col style="width:35%" />
      <col style="width:auto" />
    </colgroup>

    <thead>
      <tr>
        <th></th>
        <th>페이지</th>
        <th>FileName/Link</th>
        <th>memo</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, name, index) in list" :key="value">
        <td v-if="name.includes('title-')" colspan="4" class="title">{{ value }}</td>
        <template v-else>
          <td>{{ index + titleNum }}</td>
          <td>{{ value }}</td>
          <td><router-link :to="'/'+name">{{ '/'+name }}</router-link></td>
          <td></td>
        </template>
      </tr>
      <template v-if="skin === 'bmw'">
        <tr v-for="(value, name, index) in bmwList" :key="value">
          <td v-if="name.includes('title-')" colspan="4" class="title">{{ value }}</td>
          <template v-else>
            <td>{{ index + titleNum }}</td>
            <td>{{ value }}</td>
            <td><router-link :to="'/'+name">{{ '/'+name }}</router-link></td>
            <td></td>
          </template>
        </tr>
      </template>
      <template v-if="skin === 'benz'">
        <tr v-for="(value, name, index) in benzList" :key="value">
          <td v-if="name.includes('title-')" colspan="4" class="title">{{ value }}</td>
          <template v-else>
            <td>{{ index + titleNum }}</td>
            <td>{{ value }}</td>
            <td><router-link :to="'/'+name">{{ '/'+name }}</router-link></td>
            <td></td>
          </template>
        </tr>
      </template>
      <template v-if="skin === 'polestar'">
        <tr v-for="(value, name, index) in polestarList" :key="value">
          <td v-if="name.includes('title-')" colspan="4" class="title">{{ value }}</td>
          <template v-else>
            <td>{{ index + titleNum }}</td>
            <td>{{ value }}</td>
            <td><router-link :to="'/'+name">{{ '/'+name }}</router-link></td>
            <td></td>
          </template>
        </tr>
      </template>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  data(){
    return {
      titleNum: 0,
      list: {
          'title-sample': '-샘플',        
          //샘플
          'sample/form': '샘플/폼요소',
          'sample/button': '샘플/버튼',
          'sample/list': '샘플/리스트',
          'sample/popup': '샘플/팝업',

          'title-login': '-로그인/회원가입',
          // 스플래시
          'splash': '스플래시',
          // 로그인/회원가입
          'permissionGrant': '권한 허용 안내',
          'joinRuleList': '이용약관',
          'login': '로그인',
          'join': '회원가입',
          'idFind': '아이디찾기',
          'pwSetting': '비밀번호초기화',

          'title-page': '-페이지',
          // 메인
          'main': '메인',
          
          // 충전상태
          'chargeStatus': '충전상태', 
          'reserveStatus': '예약현황',

          // 홈충전신청
          'applyIndex': '홈충전신청Index',
          'apply': '홈충전신청',
          'applyStatus': '홈충전설치현황',
          'applyPayment': '홈충전신청-걸제',

          // 마이페이지
          'myPage': '마이페이지',
          // 내정보
          'myInfo': '내정보',
          // 이용내역
          'usingList': '이용내역',

          // 충전하기
          'chargeMap': '충전소지도',
          'chargeSearch': '충전소 검색',
          'chargeDetail': '충전소 상세',
          'ChargeStart': '즉시충전',
          

          // 고객센터
          'cscenter': '고객센터',
          // 공지사항
          'notice': '공지사항',
          // FAQ
          'faq': 'FAQ',
          // 1:1 문의
          'question': '1:1 문의',
          'questionRegist': '1:1 문의 등록',
          // 라이센스
          'license': '라이센스',


      },
      bmwList: {
          // BMW
          'title-bmw': '-BMW',
          // xEV 고객 가입
          'joinOther': 'xEV 고객 가입',
          // BMW APPS
          'bmwApps': 'BMW APPS',
          // 카드상세및혜택
          'cardService': '카드상세및혜택',
          // 상품구매내역
          'productBuyList': '상품구매내역',
          // 쿠폰리스트
          'couponList': '쿠폰리스트',
          'couponListNo': '쿠폰리스트없음',
          //쿠폰보관함
          'couponBox': '쿠폰보관함',
      },
      benzList: {
          // 벤츠
          'title-polestar': '-BENZ',
          // 스마트코칭
          'smartCoaching': '스마트코칭',
          // 스마트코칭 서비스
          'smartCoachingService': '스마트코칭 서비스',
          // 스마트코칭 서비스 진행
          'smartCoachingServiceProgress': '스마트코칭 서비스 진행',
      },
      polestarList: {
          // 폴스타
          'title-polestar': '-POLESTAR',
          // 안내
          'guide': '안내',
          // 프로모션
          'promotion': '프로모션',
          // 이벤트
          'event': '이벤트',
      }
    }
  },
  mounted(){
    document.querySelector('body').setAttribute('style', '')
  }
}
</script>

<style scoped>
  h2{font-size:20px;color: #000;}
  .index{padding:20px;font-size:12px;background:#fff;color: #000;min-height:100vh;}
  .index table {width:100%; border-collapse:collapse; border:0px solid #666;margin-top:10px;}
  .index caption {text-align:left; font-size:200%; color:#999;}
  .index th {padding:6px; border:1px solid #fff; color:#fff; font-size:110%; background-color:#000;}
  .index td {height:16px; padding:4px; padding-left:10px; border:1px solid #666;}
  .index a,
  .index a:link, #mwork a:visited {color:#009; text-decoration:none;}
  .index a:hover, #mwork a:active {color:#00f; text-decoration:underline;}
  .index tr:hover td {background-color:#eee !important;}
  .index .title {background-color:#eee !important;}
</style>
