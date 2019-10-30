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
            <v-card-text>
                <v-container>
                    <v-text-field label="Name of Event" outlined></v-text-field>
                    <v-text-field label="Address" outlined></v-text-field>
                    <v-textarea label="Description" outlined></v-textarea>
                    <v-select :items="items" label="Choose Category" dense outlined></v-select>
                    <v-file-input label="File input" multiple show-size accept="image/*" outlined prepend-icon="mdi-camera"></v-file-input>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
            </v-card-actions>
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
            event: '',
            address: '',
            description: '',
            file: '',
        }
    }),
    rules: {
        required: value => !!value || 'Required.',
    }
}

</script>
