<template>
<center>
    <b-jumbotron id="form">
        <b-jumbotron id="content">
            <center>
                <h1>Register</h1>
            </center><br />
            <b-form>
                <b-form-group id="name" label="Name:" label-for="input-1">
                    <b-form-input type="text" placeholder="Full Name" v-model="register.name" required></b-form-input>
                </b-form-group>
                <b-form-group id="address" label="Address:" label-for="input-1">
                    <b-form-input type="text" placeholder="Input Address" v-model="register.address" required></b-form-input>
                </b-form-group>
                <b-form-group id="email" label="Email address:" label-for="input-1">
                    <b-form-input type="email" placeholder="Input Email" v-model="register.email" required></b-form-input>
                </b-form-group>
                <b-form-group id="password" label="Password:" label-for="input-2">
                    <b-form-input type="password" placeholder="Password" v-model="register.password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"></b-form-input>
                </b-form-group>
                <b-button type="submit" @click="$emit('add', 'user')" variant="primary">Sign Up</b-button>
            </b-form>
        </b-jumbotron>
    </b-jumbotron>
</center>
</template>

<script>
export default {
    props: ['users'],
    name: "register-form",
    data() {
        return {
            register: {
                name: '',
                address: '',
                email: '',
                password: '',
            }
        }
    },
    computed: {
        user() {
            return this.$store.state.users;
        }
    },
    created() {
        this.$store.dispatch('getUsers');
    },
    methods: {
        addUser() {
            this.$router.push({
                name: 'edit'
            });
        },
        async deleteUser(user) {
            // console.log('delete', user.id);
            await this.$store.dispatch('deleteUser', user);
            this.$store.dispatch('getUsers');
        },
        editCat(user) {
            // console.log('edit', user.id);
            this.$router.push({
                name: 'edit',
                params: {
                    user: user
                }
            });
        }
    }

}
</script>

<style scoped>
#form {
    position: relative;
    width: 40%;
    background-color: transparent;
}

#content {
    background-color: rgba(0, 0, 0, .10);
    box-shadow: 1px 1px 2px black, 0 0 25px lightblue, 0 0 5px black;
}

#name,
#email,
#address,
#password,
h1 {
    color: white;
}

[class*='-message'] {
    font-weight: 500;
}

.error-message {
    color: #d33c40;
}

.success-message {
    color: #32a95d;
}
</style>
