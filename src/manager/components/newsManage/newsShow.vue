<template>
    <Button label="添加新闻" @click="visible=true" style="position: absolute; margin: 20px; left: 5%;" />
    <Dialog v-model:visible="visible" header="添加新闻" style="width:60%; position: absolute;">
        <table style="left: 5%; position: relative;">
            <tr>
                <td style="width: 30%;">上传图片：</td>
                <td style="width: 60%;">
                    <div>
                        <div>
                            <input @click="getFiles($event)" name="files" type="file" /><br />
                        </div>
                    </div>
                </td>
            </tr>
            <br/>
            <tr>
                <td>介绍文字：</td>
                <td>
                    <InputText type="text" v-model="introText" style="width: 100%;"/>
                </td>
            </tr>
        </table>
        <br/><br/>
        <Button @click="upload" type="submit" style="position: absolute; left: 50%; transform: translate(0, -50%);">上传</Button>
        <br/>
    </Dialog>
    <div style="position: relative; top: 90px;">
        <newsListShow />
    </div>
    
</template>

<script setup>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import newsListShow from './newsListShow.vue'

let visible = ref(false)
let introText = ref("")

let files = []

function getFiles(event)
{
    let files_t = event.target.files
    for(var i=0; i<files_t.length; i++)
    {
        files.push(files_t[i])
    }
}

function upload()
{
    let formData = new FormData();
    formData.append('files', files[0])
    console.log(formData)
    console.log(introText)
}



</script>