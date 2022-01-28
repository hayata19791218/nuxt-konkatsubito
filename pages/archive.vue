<template>
    <div>
        <Header/>
        <div class="l-archive">
            <div class="l-archive__tab-border">
                <ul class="l-archive__tab-wrap">
                    <li 
                        @click="select('youbride')"
                        :class="{'active':isActive == 'youbride'}"
                    >Youbride</li>
                    <li 
                        @click="select('zexy')"
                        :class="{'active':isActive == 'zexy'}"
                    >ゼクシイ縁結び</li>
                </ul>
            </div>
            <div>
                <div v-if="isActive == 'youbride'">
                    <ul class="l-archive__articles">
                        <li 
                            v-for="content in contents"
                            :key="content.id"
                        >
                            <div v-if = "content.tag == 'Youbride'">
                                <nuxt-link :to="`/blog/${content.id}`">
                                    <div
                                        class="l-archive__articles-wrap1"
                                    >
                                        <img 
                                            class="l-archive__articles-img"
                                            :src="content.eyecatch.url" alt=""
                                        >
                                        <div class="l-archive__articles-field">
                                            <h2 class="l-archive__articles-title">{{content.title}}</h2>
                                            <div>
                                                <time 
                                                class="l-archive__articles-date"
                                                :datetime="content.published" 
                                                v-text="$dateFns.format(new Date(content.published),'yyyy年MM月dd日')"
                                                />  
                                                <span>|</span>
                                                <span class="l-archive__articles-tag">{{content.tag}}</span>
                                            </div>   
                                        </div>
                                    </div>
                                </nuxt-link>
                                
                            </div>
                        </li>
                    </ul>
                </div>
                <div v-else-if="isActive == 'zexy'">
                    <ul class="l-archive__articles">
                        <li 
                            v-for="content in contents"
                            :key="content.id"
                        >
                            <div v-if = "content.tag == 'Zexy'">
                                <nuxt-link :to="`/blog/${content.id}`">
                                    <div
                                        class="l-archive__articles-wrap1"
                                    >
                                        <img 
                                            class="l-archive__articles-img"
                                            :src="content.eyecatch.url" alt=""
                                        >
                                        <div class="l-archive__articles-field">
                                            <h2 class="l-archive__articles-title">{{content.title}}</h2>
                                            <div>
                                                <time 
                                                class="l-archive__articles-date"
                                                :datetime="content.published" 
                                                v-text="$dateFns.format(new Date(content.published),'yyyy年MM月dd日')"
                                                />  
                                                <span>|</span>
                                                <span class="l-archive__articles-tag">{{content.tag}}</span>
                                            </div>   
                                        </div>
                                    </div>
                                </nuxt-link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      isActive:'youbride'
        }
    },
    async asyncData() {
            const { data } = await axios.get(
                "https://konkatsubito.microcms.io/api/v1/blog",
                // 記事数を指定する場合は「?limit=3」とかにする
                {
                    headers: { "X-MICROCMS-API-KEY": "a0e3502938bf4d198b1871310d0505697174" }
                }
            );
            // console.log(data)
            return data;
            
        },
        methods:{
            select:function(site){
            this.isActive = site;
        }
    }












}
</script>

<style lang="scss">
  .l-archive {
    width: 1000px;
    margin: 40px auto;
    min-height: 100vh;
    @media screen and (max-width:1023px){
        width: 750px;
    }
    @media screen and (max-width:767px){
        width: 90%;
    }
    &__tab-wrap{
        display: flex;
        justify-content: space-between;
        width: 336px;
        @media screen and (max-width:1023px){
            width: 300px;
        }
        li {
            width: 160px;
            height: 54px;
            line-height: 54px;
            text-align: center;
            font-size: 18px;
            color: #E84F82;
            border: 3px solid #E84F82;
            border-bottom: none;
            font-weight: bold;  
            @media screen and (max-width:1023px){
                width: 140px;
                height: 44px;
                line-height:44px;
                font-size: 16px;
            }
        } 
    }
    &__tab-border{
        border-bottom:3px solid #E84F82;
    }
    &__articles{
        li{
            margin-top: 50px;
        }
        li:last-child{
            margin-bottom: 50px;
        }
    }
    &__articles-img{
        width: 300px;
        display: block;
        @media screen and (max-width:1023px){
            width: 200px;
        }
        @media screen and (max-width:1023px){
            width: 80%;
            margin-left:auto;
            margin-right:auto;
        }
    }
    &__articles-date{
        font-size: 12px;
        color: #697880;
        @media screen and (max-width:1023px){
            font-size: 11px;
        }
    }
    &__articles-tag{
        color: #E84F82;
        font-size: 13px;
        @media screen and (max-width:1023px){
            font-size: 11px;
        }
    }
    &__articles-wrap1{
        display: flex;
        justify-content:space-between;
        align-items:flex-start;
        @media screen and (max-width:767px){
            justify-content:flex-start;
            flex-direction:column;
        }
    }
    &__articles-wrap2{
        display: flex;
        justify-content:space-between;
        align-items:flex-start;
        @media screen and (max-width:767px){
            justify-content:flex-start;
            flex-direction:column;
        }
    }
    &__articles-field{
        margin-left: 30px;
        width: 500px;
        margin-right:auto;
        @media screen and (max-width:767px){
            margin-left: 0;
            width: 100%;
            margin-top: 20px;
            margin-right: 0;
        }
    }
    &__articles-title{
        line-height: 1.5em;
        margin-bottom: 10px;
        color:#000;
        @media screen and (max-width:1023px){
            font-size: 14px;
        }
    }
    &__archive{
        text-align: center;
        border: 2px solid #E84F82;
        padding: 15px;
        color: #E84F82;
        display: block;
        width: 200px;
        margin: 0 auto;
        border-radius: 20px;
        transition-duration: .7s;
        font-size: 18px;
        transition-duration:.3s;
    }
    .active{
        background-color:#E84F82;
        color:#fff;
    }
  }
</style>