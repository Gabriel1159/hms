<template>
    <div class="card">
        <DataTable v-model:selection="selectedProduct" :value="products" dataKey="id" tableStyle="min-width: 50rem">
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column field="id" header="ID"></Column>
            <Column field="body" header="内容"></Column>
            <Column field="img" header="图片链接"></Column>
        </DataTable>
    </div>
    <!-- {{ selectedProduct }} -->
</template>

<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { onMounted, ref, watchEffect } from 'vue'
import { defineEmits } from 'vue'
import axios from 'axios'

let selectedProduct = ref([])
let products = ref([])

const emit = defineEmits(['select-items'])
watchEffect(()=>{
    emit("select-items", selectedProduct)
})

onMounted(()=>{
    axios({
        method: 'post',
        url: 'http://121.199.161.134:8080/getAllNews'
    }).then((res)=>{
        console.log(res)
        products.value = res.data.data
    })
})

</script>