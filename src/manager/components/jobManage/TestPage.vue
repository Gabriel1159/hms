<template>
  <div class="selectSection">
        <Listbox v-model="selectedSectionName" :options="groupedSection" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" class="w-full md:w-14rem" listStyle="max-height:250px">
            <template #optiongroup="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.value" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"  />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </Listbox>
    </div>
</template>

<script>
import Listbox from 'primevue/listbox';
export default {
  
  data(){
    return {
        Listbox,
      selectedSectionName:"",
      groupedSection:[
                {
                    label: "内科系统",
                    items:[
                        {label:"呼吸与危重症医学科",value:"呼吸与危重症医学科"},
                        {label:"呼吸睡眠医学科",value:"呼吸睡眠医学科"},
                        {label:"消化内科",value:"消化内科"},
                        {label:"心血管内科",value:"心血管内科"},
                        {label:"高血压科",value:"高血压科"},
                        {label:"肾内科",value:"肾内科"},
                        {label:"内分泌科",value:"内分泌科"},
                        {label:"风湿免疫科",value:"风湿免疫科"},
                        {label:"感染科",value:"感染科"},
                        {label:"老年科",value:"老年科"},
                        {label:"神经内科",value:"神经内科"},
                        {label:"全科医学科（综合内科）",value:"全科医学科（综合内科）"},
                        {label:"急诊内科",value:"急诊内科"},
                    ]
                },
                {
                    label:"外科系统",
                    items:[
                        {label:"肝胆外科",value:"肝胆外科"},
                        {label:"胃肠外科",value:"胃肠外科"},
                        {label:"疝和腹壁外科",value:"疝和腹壁外科"},
                        {label:"乳腺外科",value:"乳腺外科"},
                        {label:"泌尿外科",value:"泌尿外科"},
                        {label:"心外科",value:"心外科"},
                        {label:"血管外科",value:"血管外科"},
                        {label:"胸外科",value:"胸外科"},
                        {label:"神经外科",value:"神经外科"},
                        {label:"骨肿瘤科",value:"骨肿瘤科"},
                        {label:"骨关节科",value:"骨关节科"},
                        {label:"创伤骨科",value:"创伤骨科"},
                        {label:"脊柱外科",value:"脊柱外科"},
                        {label:"医疗美容科",value:"医疗美容科"},
                        {label:"整形外科",value:"整形外科"},
                        {label:"创伤救治中心",value:"创伤救治中心"},
                        {label:"急诊外科",value:"急诊外科"},
                    ]
                },
                {
                    label:"妇产科儿科",
                    items:[
                        {label:"急诊外科",value:"妇产科"},
                        {label:"急诊外科",value:"儿科"},
                    ]
                },
                {
                    label:"五官科",
                    items:[
                        {label:"眼科",value:"眼科"},
                        {label:"耳鼻咽喉头颈外科",value:"耳鼻咽喉头颈外科"},
                        {label:"口腔科",value:"口腔科"},
                    ]
                },
                {
                    label:"其他科室",
                    items:[
                        {label:"皮科",value:"皮科"},
                        {label:"中医科",value:"中医科"},
                        {label:"医学心理科",value:"医学心理科"},
                        {label:"麻醉科",value:"麻醉科"},
                        {label:"疼痛医学科",value:"疼痛医学科"},
                        {label:"重症医学科",value:"重症医学科"},
                        {label:"放疗科",value:"放疗科"},
                        {label:"介入诊疗中心",value:"介入诊疗中心"},
                        {label:"临床营养科",value:"临床营养科"},
                        {label:"输血科",value:"输血科"},
                        {label:"药学部",value:"药学部"},
                        {label:"中心实验室",value:"中心实验室"},
                        {label:"动物实验室",value:"动物实验室"},
                        {label:"图书馆",value:"图书馆"},
                        {label:"病案统计室",value:"病案统计室"},
                        {label:"电子显微镜实验室",value:"电子显微镜实验室"},
                    ]
                },
                {
                    label:"诊断相关科室",
                    items:[
                        {label:"内镜中心",value:"内镜中心"},
                        {label:"放射科",value:"放射科"},
                        {label:"超声诊断科",value:"超声诊断科"},
                        {label:"核医学科",value:"核医学科"},
                        {label:"检验科",value:"检验科"},
                        {label:"病理科",value:"病理科"},
                    ]
                }
            ]
    }
  }

}
</script>

<style>

</style>