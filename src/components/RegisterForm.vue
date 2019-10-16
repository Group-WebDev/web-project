<template>
<div id="form">
    <b-jumbotron bg-variant="info">
        <center>
            <h1>Register</h1>
        </center>
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
            <b-button type="submit" v-on:click="register()" variant="primary">Login</b-button>
        </b-form>
    </b-jumbotron>
</div>
</template>

<script>
export default {
    name: "register-form",
    data() {
        return {
            register: {
                name:'',
                address:'',
                email: '',
                password: '',
            }
        }
    },
   
}
</script>

<style scoped>
#form {
    margin-left: 30%;
    position: relative;
    left: 30%;
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
