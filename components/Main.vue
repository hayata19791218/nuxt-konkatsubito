<template>
    <div class="l-top-main">
        <ul class="l-top-main__articles">
            <li 
                v-for="(content,contentIndex) in contents"
                :key="content.id"
            >
                <a 
                    href=""
                    class="l-top-main__articles-wrap1"
                    v-if="contentIndex % 2 == 0"
                >
                    <img 
                        class="l-top-main__articles-img"
                        :src="article.src" alt=""
                    >
                    <div class="l-top-main__articles-field">
                        <h2 class="l-top-main__articles-title">{{content.title}}</h2>
                        <div>
                            <time datetime="2021-12-18" itemdrop="datepublished" class="l-top-main__articles-date">{{content.title}}</time>    
                            <span>|</span>
                            <span class="l-top-main__articles-tag">{{content.tag}}</span>
                        </div>   
                    </div>
                </a>
                <!-- <a 
                    href=""
                    class="l-top-main__articles-wrap2"
                    v-if="articleIndex % 2 == 1"
                >
                    <div class="l-top-main__articles-field">
                        <h2 class="l-top-main__articles-title">{{article.title}}</h2>
                        <div>
                            <time datetime="2021-12-18" itemdrop="datepublished" class="l-top-main__articles-date">{{article.date}}</time>    
                            <span>|</span>
                            <span class="l-top-main__articles-tag">{{article.tag}}</span>
                        </div>   
                    </div>
                    <img 
                        class="l-top-main__articles-img"
                        :src="article.src" alt=""
                    >
                </a> -->
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
export default{
    name:'Main',
    async asyncData() {
    const { data } = await axios.get(
            // 5-2でメモしたURLを記載しましょう。
            "https://konkatsubito.microcms.io/api/v1/blog",
            {
                // 5-2でメモしたAPIキーを記載しましょう。
                headers: { "X-MICROCMS-API-KEY": "a0e3502938bf4d198b1871310d0505697174" }
            }
        );
        return data;
    },
    data:function(){
        return{
           
            // articles:[
            //     {
            //         src:require('@/assets/images/article1.jpg'),
            //         title:"ゼクシイで知った時に自分勝手に行動する人",
            //         date:"2021年12月18日",
            //         tag:"ゼクシイ"
            //     },
            //     {
            //         src:require('@/assets/images/article2.jpg'),
            //         title:"Youbrideで知った美人だけど頭が悪すぎる人",
            //         date:"2021年12月1日",
            //         tag:"Youbride"
            //     },
            //     {
            //         src:require('@/assets/images/article3.jpg'),
            //         title:"Youbrideで知った自分勝手なゲームオタクの人",
            //         date:"2021年11月28日",
            //         tag:"Youbride"
            //     },
            //     {
            //         src:require('@/assets/images/article4.jpg'),
            //         title:"婚活サイトをゼクシイ縁結びからwithに移行する",
            //         date:"2021年11月21日",
            //         tag:"ゼクシイ"
            //     },
            //     {
            //         src:require('@/assets/images/article5.jpg'),
            //         title:"やり取りで変だと思ったらやり取りをやめた方がいい",
            //         date:"2021年11月17日",
            //         tag:"Youbride"
            //     },
            //     {
            //         src:require('@/assets/images/article6.jpg'),
            //         title:"最初から相手の名前を聞いたり返事を返さない人って何？",
            //         date:"2021年11月03",
            //         tag:"Youbride"
            //     },
            //     {
            //         src:require('@/assets/images/article7.jpg'),
            //         title:"頻繁に私のプロフィールを見る人は信用できない気がする",
            //         date:"2021年11月02日",
            //         tag:"Youbride"
            //     },
            //     {
            //         src:require('@/assets/images/article8.jpg'),
            //         title:"すぐにサイトを辞めるなら婚活をしないで欲しい",
            //         date:"2021年10月124",
            //         tag:"ゼクシイ"
            //     },
            //     {
            //         src:require('@/assets/images/article9.jpg'),
            //         title:"Youbrideで知った自分のことしか考えないバツイチオタクの人",
            //         date:"2021年10月22日",
            //         tag:"Youbride"
            //     },
            // ]
        }
    }
}
</script>

<style lang="scss">
.l-top-main{
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
}
</style>