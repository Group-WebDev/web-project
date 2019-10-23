<template>
<center><b-jumbotron id="form">
    <b-jumbotron id="content">
        <center>
             <img src="../assets/logos.png"/>
            <h1>LogIn</h1>
        </center><br/>
        <b-form>
            <b-form-group id="email" label="Email address:" label-for="input-1">
                <b-form-input type="email" placeholder="Input Email" v-model="login.email" required></b-form-input>
            </b-form-group>
            <b-form-group id="password" label="Password:" label-for="input-2">
                <b-form-input type="password" placeholder="Password" v-model="login.password"></b-form-input>
            </b-form-group>
            <router-link to="/welcome"><b-button type="button" variant="primary" @click="log()">Login</b-button></router-link><br/>
            <p1>NOt Have An Account?</p1><br/>
            <router-link to="/register"><h6>REGISTER</h6></router-link>
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
         methods: {
            log() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "welcome" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    
   
}
</script>

<style>
body{
  background-image:url("../assets/background.jpg");
  background-size:cover;
  background-repeat:no-repeat;

}
 #form {
     width:40%;
     background-color:transparent;
 }

 img{
    width: 30%;
    height: 30%;
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
