<template>
    <div class="header">
        <div class="left">
            <i class="i-logo-header"></i>
        </div>
        <div class="right">
            <router-link to="/" class="btn-txt">회원가입</router-link>
            <router-link to="/" class="btn-txt">로그인</router-link>
            <button class="btn-txt" @click="$emit('logout')">로그아웃</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
