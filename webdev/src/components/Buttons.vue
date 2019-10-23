<template>
<div>
    <b-button-group>
        <b-button variant="success" id="show-btn" @click="$bvModal.show('bv-modal-example')">Post</b-button>
        <b-button variant="info" @click="$bvModal.show('bv-modal-report')">Report</b-button>
    </b-button-group>
    <b-modal id="bv-modal-example" hide-footer>
        <template v-slot:modal-title>
            <img src="../assets/icon.png" id="img"/>&nbsp;&nbsp;POST FORM
        </template>
        <div class="d-block text-center">
           <modalForm/>
        </div>
        <b-button class="mt-3" variant="success" block>Post</b-button>
    </b-modal>

    <b-modal id="bv-modal-report" hide-footer>
        <template v-slot:modal-title>
           <img src="../assets/icon.png" id="img"/>&nbsp;&nbsp; REPORT FORM
        </template>
        <div class="d-block text-center">
           <reportForm/>
        </div>
        <b-button class="mt-3" variant="success" block>Report</b-button>
    </b-modal>
</div>
</template>

<script>
import modalForm from '@/components/Form.vue'
import reportForm from '@/components/ReportForm.vue'
export default {
    name: "buttons",
    components:{
        modalForm,
        reportForm
    }
}
</script>
