<template>
<center><b-jumbotron id="form">
    <b-jumbotron id="content">
        <center>
            <h1>LogIn</h1>
        </center><br/>
        <b-form>
            <b-form-group id="email" label="Email address:" label-for="input-1">
                <b-form-input type="email" placeholder="Input Email" v-model="login.email" required></b-form-input>
            </b-form-group>
            <b-form-group id="password" label="Password:" label-for="input-2">
                <b-form-input type="password" placeholder="Password" v-model="login.password"></b-form-input>
            </b-form-group>
            <router-link to="/welcome"><b-button type="submit" variant="primary">Login</b-button></router-link>
        </b-form>
    </b-jumbotron>
</b-jumbotron></center>
</template>

<script>
export default {
    name: 'login-form',
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
     width:40%;
     background-color:transparent;
 }

 #content{
    background-color: rgba(0,0,0, .10);  
	box-shadow: 1px 1px 2px black, 0 0 25px lightblue, 0 0 5px black;
}

#email, #password, h1{
    color:white;

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
