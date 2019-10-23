<template>
<div>
    <b-form-group>
        <label for="name">Name of Report:</label>
        <b-input class="form-group" placeholder="name of Report" id="name"></b-input>
        <label for="address">Address:</label>
        <b-input class="form-group" placeholder="Address" id="address"></b-input>
        <label for="description">Description:</label>
        <b-textarea class="form-group" placeholder="Description" id="description"></b-textarea>
        <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..." accept=".jpg, .png, .gif"></b-form-file>
        <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
         <b-button variant="danger" @click="file = null">Reset</b-button>
    </b-form-group>
</div>
</template>
<script>
  export default {
    data() {
      return {
        file: null
      }
    }
  }
</script>