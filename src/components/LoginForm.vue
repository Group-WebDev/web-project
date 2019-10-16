<template>
<div id="form">
    <b-jumbotron bg-variant="info">
        <center>
            <h1>LogIn</h1>
        </center>
        <b-form>
            <b-form-group id="email" label="Email address:" label-for="input-1">
                <b-form-input type="email" placeholder="Input Email" v-model="login.email" required></b-form-input>
            </b-form-group>
            <b-form-group id="password" label="Password:" label-for="input-2">
                <b-form-input type="password" placeholder="Password" v-model="login.password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"></b-form-input>
            </b-form-group>
            <b-button type="submit" v-on:click="login()" variant="primary">Login</b-button>
        </b-form>
    </b-jumbotron>
</div>
</template>

<script>
export default {
    name: "login-form",
    data() {
        return {
            login: {
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
