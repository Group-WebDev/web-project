<template>
<v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">Add Events</v-btn>
        </template>
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
                        <v-select :items="items" label="Choose Category" dense outlined required></v-select>
                        <v-file-input v-model="data.file" label="File input" multiple show-size accept="image/*" outlined prepend-icon="mdi-camera" required></v-file-input>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" :disabled="!formIsValid" type="submit" text @click="save">Save</v-btn>
                </v-card-actions>
            </v-form>

        </v-card>
    </v-dialog>
</v-row>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        items: ['Problem', 'Solution'],
        data: {
            name: '',
            address: '',
            description: '',
            file: []
        }
    }),
    created() {
        if (this.$route.params.data) {
            this.data = this.$route.params.data;
        } else {
            this.data = {
                name: '',
                address: '',
                description: '',
                file:[]
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
        },
        resetForm() {
            this.data.name = ''
            this.data.address = ''
            this.data.description = ''
            this.data.file = ''
            this.items = []
        },
        submit() {  
            this.resetForm()
        },
    },
    rules: {
        required: value => !!value || 'Required.',
    }
}
</script>
