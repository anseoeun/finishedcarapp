import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 퍼블리싱 인덱스, 샘플
  { path: '/', meta: { layout: 'None' }, component: () => import('@/views/Home.vue')  },
  { path: '/sample/form', meta: { layout: 'None' }, component: () => import('@/views/sample/Form.vue')  },
  { path: '/sample/button', meta: { layout: 'None' }, component: () => import('@/views/sample/Button.vue')  },
  { path: '/sample/list', meta: { layout: 'None' }, component: () => import('@/views/sample/List.vue')  },
  { path: '/sample/popup', meta: { layout: 'None' }, component: () => import('@/views/sample/Popup.vue')  },

  // 로그인
	{ path: '/splash', component: () => import('@/views/Splash.vue')},
	{ path: '/joinRuleList', meta: { layout: 'Sub', title: '회원가입' }, component: () => import('@/views/JoinRuleList.vue')},
	{ path: '/permissionGrant', component: () => import('@/views/PermissionGrant.vue')},
	{ path: '/login', component: () => import('@/views/Login.vue')},
	{ path: '/join', meta: { layout: 'Sub', title: '회원가입'}, component: () => import('@/views/Join.vue')},
	{ path: '/idFind', meta: { layout: 'Sub', title: '아이디 찾기'}, component: () => import('@/views/IdFind.vue')},
	{ path: '/pwSetting', meta: { layout: 'Sub', title: '비밀번호 초기화'}, component: () => import('@/views/PwSetting.vue')},

  // 메인
  { path: '/main', meta: { layout: 'Default', menu: 'home' }, component: () => import('@/views/Main.vue')},
  // 충전상태
  { path: '/chargeStatus', meta: { layout: 'Sub', title: '충전상태' }, component: () => import('@/views/ChargeStatus.vue')},
  // 예약현황
  { path: '/reserveStatus', meta: { layout: 'Sub', title: '예약현황' }, component: () => import('@/views/RserveStatus.vue')},
  // 홈충전솔루션신청
  { path: '/applyIndex', meta: { layout: 'Sub', title: '홈충전솔루션 신청' }, component: () => import('@/views/ApplyIndex.vue')},
  { path: '/apply', meta: { layout: 'Sub', title: '홈충전솔루션 신청' }, component: () => import('@/views/Apply.vue')},
  { path: '/applyStatus', meta: { layout: 'Sub', title: '설치현황 확인' }, component: () => import('@/views/Apply.vue')},
  // 홈충전솔루션신청-결제
  { path: '/applyPayment', meta: { layout: 'Sub', title: '충전요금 결제' }, component: () => import('@/views/ApplyPayment.vue')},

  // 마이페이지
  { path: '/myPage', meta: { layout: 'Default', menu: 'my' }, component: () => import('@/views/MyPage.vue')},
  // 내정보
  { path: '/myInfo', meta: { layout: 'Sub', footer:true, title: '내정보', menu: 'my'}, component: () => import('@/views/MyInfo.vue')},
  // 이용내역
  { path: '/usingList', meta: { layout: 'Sub', footer: true, title: '이용내역', menu: 'my'}, component: () => import('@/views/UsingList.vue')},
  
  // 충전하기 지도
  { path: '/chargeMap', meta: { layout: 'Map', menu: 'charge' }, component: () => import('@/views/ChargeMap.vue')},
  { path: '/chargeSearch', meta: { layout: 'Sub', title: '충전소 검색' }, component: () => import('@/views/ChargeSearch.vue')},
  { path: '/chargeDetail', meta: { layout: 'Sub'}, component: () => import('@/views/ChargeDetail.vue')},
  { path: '/chargeStart', meta: { layout: 'Sub', title: '즉시충전' }, component: () => import('@/views/ChargeStart.vue')},

  
  //고객센터
  { path: '/cscenter', meta: { layout: 'Default', menu: 'cscenter' }, component: () => import('@/views/Cscenter.vue')},
  // 공지사항
  { path: '/notice', meta: { layout: 'Sub', footer: true, title: '공지사항', menu: 'cscenter' }, component: () => import('@/views/Notice.vue')},
  // FAQ
  { path: '/faq', meta: { layout: 'Sub', footer: true, title: 'FAQ', menu: 'cscenter' }, component: () => import('@/views/Faq.vue')},
  // 1:1문의
  { path: '/question', meta: { layout: 'Sub', footer: true, title: '1:1 문의', menu: 'cscenter' }, component: () => import('@/views/Question.vue')},
  { path: '/questionRegist', meta: { layout: 'Sub', title: '1:1 문의', menu: 'cscenter' }, component: () => import('@/views/QuestionRegist.vue')},
  // 라이센스
  { path: '/license', meta: { layout: 'Sub', footer: true, title: '라이센스', menu: 'cscenter' }, component: () => import('@/views/License.vue')},

  //bmw ---------- 
  { path: '/joinOther', meta: { layout: 'Sub', title: '회원가입' }, component: () => import('@/views/JoinOther.vue')},
  { path: '/bmwApps', meta: { layout: 'Default' }, component: () => import('@/views/BmwApps.vue')},
  // 카드상세및혜택
  { path: '/cardService', meta: { layout: 'Sub', title: 'BMW Charging 서비스', menu: 'my' }, component: () => import('@/views/CardService.vue')},
  // 상품구매내역
  { path: '/productBuyList', meta: { layout: 'Sub',footer: true, title: '상품구매내역', menu: 'my' }, component: () => import('@/views/ProductBuyList.vue')},


  //polestar ----------
  { path: '/event', meta: { layout: 'Sub', footer: true, title: '이벤트', menu: 'cscenter' }, component: () => import('@/views/Event.vue')},  
]

for(let i=0;i<routes.length;i++){
  if(routes[i].meta === undefined){
    routes[i].meta = {};
    routes[i].meta.layout = 'None';
  }else if(routes[i].meta.layout === undefined){
    routes[i].meta.layout = 'None';
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
