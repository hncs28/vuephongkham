<template>
    <div>
      <div class="menu" style="margin-top: 30px">
        <HeaderMenu :loggedIn="loggedIn" :customerUsername="loggedInUsername"/>
      </div>
      <div class="image2">
        <img src="@/assets/image.jpg">
        <div class="text">ĐĂNG NHẬP</div>
      </div>
      <div class="login">
        <div class="login-container">
          <h2 style="color: #54595f;">Trang Đăng Nhập</h2>
          <form @submit.prevent="login">
            <div class="form-login-group">
              <label for="customerUsername">Tên đăng nhập</label>
              <input type="text" v-model="customerUsername" id="customerUsername" placeholder="Tên đăng nhập" required>
            </div>
            <div class="form-login-group">
              <label for="customerPassword">Mật khẩu</label>
              <input type="password" v-model="customerPassword" id="customerPassword" placeholder="Mật khẩu" required>
            </div>
            <button type="submit">Đăng Nhập</button>
            <p>Chưa có tài khoản? <router-link to="/register" style="font-weight: bold; color: red;">Đăng ký</router-link></p>
          </form>
          <p v-if="loggedIn">Hello, {{ loggedInUsername }}</p>
        </div>
      </div>
      <div class="footer-container">
        <!-- Footer content here -->
      </div>
    </div>
  </template>
  
  <script>
  import HeaderMenu from './HeaderMenu.vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';

  
  export default {
    components: {
      HeaderMenu,
    },
    data() {
      return {
        customerUsername: '',
        customerPassword: '',
        loggedIn: false,
        loggedInUsername: ''
      };
    },
    setup() {
      const router = useRouter();
      return { router };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/login', {
            customerUsername: this.customerUsername,
            customerPassword: this.customerPassword
          });
  
          
          console.log('Response:', response);
  
          if (response.data.message === 'Login successful') {
            this.loggedIn = true;
            this.loggedInUsername = response.data.customerUsername;
            this.$router.push({ name: 'HomePage', params:{loggedIn:this.loggedIn, loggedInUsername:this.loggedInUsername} }); 
          } else {
            alert(response.data.message);
          }
        } catch (error) {
          // Log the entire error object to see what went wrong
          console.error('Error:', error);
  
          if (error.response) {
            console.error('Error response:', error.response);
            if (error.response.data) {
              console.error('Error response data:', error.response.data);
              if (error.response.data.message) {
                alert(error.response.data.message);
                return;
              }
            }
          }
  
          alert('An unknown error occurred.');
        }
      }
    }
  };
  </script>
  

<style>
.image2 {
    position: relative;
    display: inline-block;
    padding-top: 30px;
}

.image2 img {
    display: block;
    width: 110%;
    height: auto;
}

.image2::before {
    content: "";
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.5);
    pointer-events: none;
}

.image2 .text {
    position: absolute;
    top: 60%;
    left: 20%;
    transform: translate(-50%, -50%);
    color: black;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 30px;
    font-weight: bold;
}

/*------------------------LogIn*--------------------------*/
.login {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    margin: 0;
}

.login-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 600px;
    text-align: center;
}

.login-container h2 {
    margin-bottom: 20px;
}

.form-login-group {
    display: flex;
    align-items: center;
    margin: 10px 0;
}

.form-login-group label {
    margin-right: 0px;
    width: 130px;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #54595f;
}

.form-login-group input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 10px;
}


.login-container button {
    width: 30%;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 10px;
    background-color: #85cb6c;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

.login-container button:hover {
    background-color: #206806;
}



/*------------------------Footer--------------------------*/
.footer-container {
    display: flex;
    margin-top: 50px;
    height: 400px;
    background-color: #f6f7fa;
}

.footer-left {
    margin-left: 80px;
    margin-top: 100px;
    flex: 2;
}

.footer-right {
    padding-top: 15px;
    margin-top: 100px;
    margin-right: 80px;
    flex: 1;
}

.footer-logo img {
    margin-left: 35px;
    padding-bottom: 30px;
    flex: 0;
    width: 100px;
    height: auto;
}

.footer-item img {
    margin-left: 15px;
    width: 35px;
    height: 35px;
}

.footer-right p {
    justify-content: flex-start;
    text-align: left;
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    color: #54595f;
}

.footer-right img {
    width: 15px;
    height: 20px;
}
</style>