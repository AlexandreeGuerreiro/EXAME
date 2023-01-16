<template>
    <div>



        <Header />

        <body>

            <!-- start banner Area -->
            <section class="banner-area relative about-banner" id="home">
                <div class="overlay overlay-bg"></div>
                <div class="container">
                    <div class="row d-flex align-items-center justify-content-center">
                        <div class="about-content col-lg-12">
                            <h1 class="text-white">
                                Register
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End banner Area -->

            <!-- Start contact-page Area -->
            <section class="contact-page-area section-gap">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12">
                            <form class="form-area contact-form text-right" id="myForm" @submit.prevent="register">
                                <div class="row">
                                    <div class="col-lg-6 form-group">
                                        <input v-model="user.name" name="name" placeholder="Enter your name" onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Enter your name'"
                                            class="common-input mb-20 form-control" required="" type="text">

                                        <input v-model="user.email" name="email" placeholder="Enter email address"
                                            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Enter email address'"
                                            class="common-input mb-20 form-control" required="" type="email">

                                        <input v-model="user.password" name="password1" placeholder="Enter password"
                                            onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter password'"
                                            class="common-input mb-20 form-control" required="" type="password">

                                        <input v-model="passwordConfirmation" name="password2" placeholder="Repeat password"
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Repeat password'"
                                            class="common-input mb-20 form-control" required="" type="password">
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="alert-msg" style="text-align: left;"></div>
                                        <button type="submit" class="genric-btn primary" style="float: left;">Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End contact-page Area -->




        </body>




        <Footer />

    </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
    name: 'register',
    components: {
        Footer,
        Header
    },

    data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
      passwordConfirmation: '',
      submitting: true,
      error: true,
    }
  },

    mounted() {
    },
    methods: {
        validate() {
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (!this.user.email.match(validRegex)) {
                this.error = true;
                alert('Invalid characters')
                return false;
            } else if (this.user.password.length < 6) {
                this.error = true;
                alert('Password must be at least 6 digits')
                return false;
            } else if (this.user.password !== this.passwordConfirmation) {
                this.error = true;
                alert('Password and Repeat Password must match')
                return false;
            }

            this.error = false;
            return true;
        },

        async register() {
            if (this.validate()) {
                const exists = await this.$store.dispatch('user/userExists', this.user);
                if (!exists) { //add user to database
                    const addedUser = await this.$store.dispatch('user/addUser');
                    console.log(addedUser);
                    this.$router.push({ path: '/message/1' });
                }
            }
            else {
                return
            }
        },
    },
    computed: {

    },

}
</script>