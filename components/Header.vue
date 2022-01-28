<template>
    <div class="l-top-header">
        <div class="l-top-header__wrap">
            <nuxt-link to="/">
                <h1 class="l-top-header__title">婚かつ人</h1>
            </nuxt-link>
            <nav>
                <ul class="l-top-header__nav">
                    <li>
                        <nuxt-link 
                            to="/profile"
                            class="l-top-header__nav-item"
                        >プロフィール</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link 
                            to="/profile"
                            class="l-top-header__nav-item"
                        >お問い合わせ</nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default{
    name:"Header"
}
</script>

<style lang="scss">
.l-top-header{
    padding: 20px 0;
    background-color:#E84F82;
    width: 100%;
    &__wrap{
        width: 1000px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media screen and (max-width:1023px){
            width: 750px;
        }
        @media screen and (max-width:768px){
            width: 90%;
        }
    }
    &__title{
        color: #fff;
        font-size: 28px;
        @media screen and (max-width:1023px){
            font-size: 20px;
        }
    }
    &__nav{
        display: flex;
        justify-content: space-between;
        width: 230px;
        @media screen and (max-width:1023px){
            font-size: 16px;
            width: 200px;
        }
        @media screen and (max-width:768px){
            font-size: 14px;
        }
    }
    &__nav-item{
        color:#fff;
    }
}
</style>