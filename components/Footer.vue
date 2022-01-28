<template>
    <div class="l-top-footer">
        <div class="l-top-footer__wrap">
            <nuxt-link 
                to="/privacy"
                class="l-top-footer__privacy"
            >| プライバシーポリシー |</nuxt-link>
            <p class="l-top-footer__logo">©︎2021〜 婚かつ人</p>
        </div>
    </div>
</template>


<script>
// import axios from 'axios';
export default{
    name:'Footer',
}
</script>

<style lang="scss">
    .l-top-footer{
        margin-top: 40px;
        padding: 10px;
        background-color: #E84F82;
        &__wrap{
            display: flex;
            justify-content: space-between;
            width: 1000px;
            margin: 0 auto;
            @media screen and (max-width:1023px){
                width: 750px;
            }
            @media screen and (max-width:768px){
                width: 90%;
            }
        }
        &__privacy{
            color: #fff;
            font-size: 12px;
            display: block;
        }
        &__logo{
            color: #fff;
            font-size: 12px;
            display: block;
        }
    }
</style>