<template>
    <div style="margin-top: 20px;">
        <div style="width: 20%; position: absolute; left: 2%;">
            <div class="card flex justify-content-center">
                <Listbox v-model="firstRoom" :options="firstRooms" optionLabel="name" class="w-full md:w-14rem" />
            </div>
        </div>
        <div style="width: 30%; position: absolute; left: 22%;" v-show="showSecond">
            <div class="card flex justify-content-center">
                <Listbox v-model="secondRoom" :options="secondRooms" optionLabel="name" class="w-full md:w-14rem" />
            </div>
        </div>
        <div style="position: absolute; left: 22%;" v-show="showDoctors">
            {{ doctorList }}
        </div>
    </div>
    
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import Listbox from 'primevue/listbox'
import axios from 'axios';
// import axios from 'axios';

let firstRoom = ref({})
let secondRoom = ref({})
let firstRooms = ref([
    {name: 'room1'},
    {name: 'room2'},
    {name: 'room3'}
])
let secondRooms = ref([
    {name: 'room11'},
    {name: 'room21'},
    {name: 'room31'}
])
let doctorList = ref([])

let showSecond = ref(false)

watchEffect(()=>{
    if(firstRoom.value.name==undefined)
    {
        showSecond.value = false
    }
    else if(firstRoom.value.name!=undefined&&secondRoom.value.name==undefined)
    {
        /*axios({
            method: 'post',
            url: 'http://121.199.161.134:8080/getSecondRoomsByFID',
            params: {
                id: firstRoom.value.id
            }
        }).then((res)=>{
            console.log(res)
        })*/
        showSecond.value = true
    }
    else
    {
        showSecond.value = false
        axios({
            method: 'get',
            url: 'http://121.199.161.134:8080/getDoctorsByRoom',
            params: {
                roomName: secondRoom.value.name
            }
        }).then((res)=>{
            console.log(res)
        })
    }
})

onMounted(()=>{
    /*axios({
        method: 'get',
        url: 'http://121.199.161.134:8080/getFirstRooms',
        params: {

        }
    }).then((res)=>{
        console.log(res)
    })*/

    
})
</script>