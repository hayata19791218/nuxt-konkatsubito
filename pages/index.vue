<template>
    <div>
        <Header/>
        <div class="l-top-main">
            <div>
                <ul class="l-top-main__articles">
                    <li 
                        v-for="(content,contentIndex) in contents"
                        :key="content.id"
                    >
                        <nuxt-link :to="`/blog/${content.id}`">
                            <div
                                class="l-top-main__articles-wrap1"
                                v-if="contentIndex % 2 == 0"
                            >
                                <img 
                                    class="l-top-main__articles-img"
                                    :src="content.eyecatch.url" alt=""
                                >
                                <div class="l-top-main__articles-field">
                                    <h2 class="l-top-main__articles-title">{{content.title}}</h2>
                                    <div>
                                        <time 
                                        class="l-top-main__articles-date"
                                        :datetime="content.published" 
                                        v-text="$dateFns.format(new Date(content.published),'yyyy年MM月dd日')"
                                        />  
                                        <span>|</span>
                                        <span class="l-top-main__articles-tag">{{content.tag}}</span>
                                    </div>   
                                </div>
                            </div>
                        </nuxt-link>
                        <nuxt-link :to="`/blog/${content.id}`">
                            <div
                                class="l-top-main__articles-wrap2"
                                v-if="contentIndex % 2 == 1"
                            >
                                <div class="l-top-main__articles-field">
                                    <h2 class="l-top-main__articles-title">{{content.title}}</h2>
                                    <div>
                                        <time 
                                        class="l-top-main__articles-date"
                                        :datetime="content.published" 
                                        v-text="$dateFns.format(new Date(content.published),'yyyy年MM月dd日')"
                                        />     
                                        <span>|</span>
                                        <span class="l-top-main__articles-tag">{{content.tag}}</span>
                                    </div>   
                                </div>
                                <img 
                                    class="l-top-main__articles-img"
                                    :src="content.eyecatch.url" alt=""
                                >
                            </div>
                        </nuxt-link>
                    </li>
                </ul>
                <nuxt-link 
                    to="/archive"
                    class="l-top-main__archive"
                >全ての記事を見る</nuxt-link>
            </div>
            <div class="l-top-main__sidebar">
                <div class="l-top-main__recently-article">
                    <h2 class="l-top-main__recently-article-title">最近の記事</h2>
                    <ul>
                        <li 
                        v-for="content in contents"
                        :key="content.id"
                        >{{content.title}}</li>
                    </ul>
                    <nuxt-link 
                        to="/archive" 
                        class="l-top-main__recently-archive"
                    >一覧を見る</nuxt-link>
                </div>
                <div class="l-top-main__search">
                    <h2 class="l-top-main__search-title">検索</h2>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import axios from "axios";

export default{
    data:function(){
        return{
         contents:[]
            
        }
    },
    async asyncData() {
        const { data } = await axios.get(
            "https://konkatsubito.microcms.io/api/v1/blog?limit=5",
            // 記事数を指定する場合は「?limit=3」とかにする
            {
                headers: { "X-MICROCMS-API-KEY": "a0e3502938bf4d198b1871310d0505697174" }
            }
        );
        // console.log(data)
        return data;
        
    },
    
}
</script>

<style lang="scss">
.l-top-main{
    display: flex;
    width: 1000px;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
    &__articles{
        width: 600px;
        margin-left:auto;
        margin-right:auto;
        li{
            margin-bottom: 50px;
        }
        li:last-child{
            margin-bottom: 0;
        }
    }
    &__articles-img{
        width: 300px;
        display: block;
    }
    &__articles-date{
        font-size: 12px;
        color: #697880;
    }
    &__articles-tag{
        color: #E84F82;
        font-size: 13px;
    }
    &__articles-wrap1{
        display: flex;
        justify-content:space-between;
        align-items:flex-start;
    }
    &__articles-wrap2{
        display: flex;
        justify-content:space-between;
        align-items:flex-start;
    }
    &__articles-field{
        width: 250px;
    }
    &__articles-title{
        line-height: 1.5em;
        margin-bottom: 10px;
        color:#000;
    }
    &__archive{
        text-align: center;
        border: 2px solid #E84F82;
        padding: 15px;
        color: #E84F82;
        display: block;
        width: 200px;
        margin: 50px auto;
        border-radius: 20px;
        transition-duration: .7s;
        font-size: 18px;
        transition-duration:.3s;
    }
    &__archive:hover{
        background-color: #E84F82;
        color:#fff;
        transition-duration:.3s;
    }
    &__sidebar{
        width: 315px;
    }
    &__recently-article{
        li{
            font-size: 13px;
            color: #000;
            margin-top: 15px;
            line-height: 2em;
        }
    }
    &__recently-article-title{
        font-size: 18px ;
        color: #E84F82 ;
        border-bottom: 1px solid #BBBBBB;
        padding-bottom: 5px;
    }
    &__recently-archive{
        border: 1px solid #E84F82;
        color: #E84F82;
        padding-top: 10px;
        padding-bottom: 10px;
        display: block;
        text-align: center;
        width: 250px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
    }
    &__search{
        margin-top: 40px;
    }
    &__search-title{
        font-size: 18px ;
        color: #E84F82 ;
        border-bottom: 1px solid #BBBBBB;
        padding-bottom: 5px;
    }
}
</style>