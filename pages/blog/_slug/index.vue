<template>
  <main>
// ここに5-2でメモしたキーを入れると、右側のバリューが出力されます。
    <h1>{{ title }}</h1>
    <!-- <p>{{ date }}</p> -->
    <div v-html="content"></div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
    async asyncData({ params }) {
        const { data } = await axios.get(
        `https://konkatsubito.microcms.io/api/v1/blog/${params.slug}`,
        {
            headers: { 'X-MICROCMS-API-KEY': 'a0e3502938bf4d198b1871310d0505697174' }
        }
        )
        return data
    }
}
</script>