<template>
<div>

    <v-form>
        <v-container>
            <v-card>
                <v-card-title>
                    <span class="headline">Events</span>
                </v-card-title>
                <v-form ref="data" @submit.prevent="submit">
                    <v-card-text>
                        <v-container>
                            <v-text-field v-model="data.name" label="Name of Event" outlined required></v-text-field>
                            <v-text-field v-model="data.address" label="Address" outlined required></v-text-field>
                            <v-textarea v-model="data.description" label="Description" outlined required></v-textarea>
                            <v-select :items="items" v-model="data.items" label="Choose Category" dense outlined required></v-select>
                            <v-file-input v-model="data.file" label="File input" accept="image/*" outlined prepend-icon="mdi-camera" required></v-file-input>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" :disabled="!formIsValid" text @click="save">Save</v-btn>
                    </v-card-actions>
                </v-form>

            </v-card>
        </v-container>
    </v-form>

</div>
</template>

<script>
export default {
    data: () => ({
        items: ['solution', 'problem'],
        data: {
            name: '',
            address: '',
            description: '',
            file: "",
            items: ""
        }

    }),
    // return {
    //   data:null,
    //   items:['solution', 'problem']
    // }

    created() {
        if (this.$route.params.data) {
            this.data = this.$route.params.data;
        } else {
            this.data = {
                name: '',
                description: '',
                address: '',
                items:"",
                file: []
            };
        }
    },
    computed: {
        formIsValid() {
            return (
                this.data.name &&
                this.data.address &&
                this.data.description &&
                this.data.file &&
                this.items
            )
        },
    },
    methods: {
        async save() {
            await this.$store.dispatch('saveData', this.data);
            console.log('back');
            this.$router.push('/');
        },
    }
};
</script>
