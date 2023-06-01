<template>
    <div class="card">
        <DataTable v-model:selection="selectedProduct" :value="products" dataKey="id" tableStyle="min-width: 50rem">
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="id" header="id"></Column>
        </DataTable>
    </div>
    {{ selectedProduct }}
</template>

<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { ref } from 'vue'

let selectedProduct = ref([])
let products = [
    {
        name: 'Alice',
        id: 1
    },
    {
        name: 'Bob',
        id: 2
    },
    {
        name: 'Carol',
        id: 3
    }
]
</script>