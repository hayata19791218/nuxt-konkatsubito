<template>
<div>
    <ul>
        <li
            v-for="content in articleData"
            :key="content.id"
        >
            <nuxt-link :to="`/blog/${content.id}`">
                <div
                 
                >
                    <div class="l-top-main__articles-field">
                        <h2 class="l-top-main__articles-title">{{content.title}}</h2>
                       
                    </div>
                </div>
            </nuxt-link>
        </li>
    </ul>
</div>
</template>


<script>
// import axios from 'axios';
export default{
    name:'Sidebar',
    // async asyncData() {
    //     const { data } = await axios.get(
    //         "https://konkatsubito.microcms.io/api/v1/blog",
    //         {
    //             headers: { "X-MICROCMS-API-KEY": "a0e3502938bf4d198b1871310d0505697174" }
    //         }
    //     );
    //     return data;
    // },
    props:{
        articleData:{
            type:Object,
            default:()=>{}
        }
    }
 
}
</script>