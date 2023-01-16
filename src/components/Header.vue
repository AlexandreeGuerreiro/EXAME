<template>
	<header id="header">
		<div class="header-top">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
						<div class="menu-social-icons">
							<a href="#"><i class="fa fa-facebook"></i></a>
							<a href="#"><i class="fa fa-twitter"></i></a>
							<a href="#"><i class="fa fa-dribbble"></i></a>
							<a href="#"><i class="fa fa-behance"></i></a>
						</div>
					</div>
					<div class="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
						<a class="btns" href="tel:+953 012 3654 896">+953 012 3654 896</a>
						<a class="btns" href="mailto:support@colorlib.com">support@colorlib.com</a>
						<a class="icons" href="tel:+953 012 3654 896">
							<span class="lnr lnr-phone-handset"></span>
						</a>
						<a class="icons" href="mailto:support@colorlib.com">
							<span class="lnr lnr-envelope"></span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="container main-menu">
			<div class="row align-items-center justify-content-between d-flex">
				<router-link to="/"><img src="img/logo.png" alt="" title="" /></router-link>
				<nav id="nav-menu-container">
					<ul class="nav-menu">
						
						<router-link to="/menu">Menu</router-link>
						
						
						<li v-if="!userLoggedIn"><a href="#">Welcome Stranger!</a></li>
						<li v-if="userLoggedIn"><a href="#">Welcome {{user.name}}!</a></li>
						
						<router-link v-if="userLoggedIn" to="/orders">My Orders</router-link>
						
						<router-link v-if="!userLoggedIn" to="/register">Register</router-link>
						<router-link v-if="!userLoggedIn" to="/login">Login</router-link>

						<router-link v-if="userLoggedIn" to="/message/3">Logout</router-link>
					</ul>
				</nav><!-- #nav-menu-container -->
			</div>
		</div>
	</header><!-- #header -->
</template>

<script>
// import router from '../router';



export default {
    data() {
        const getUser = this.$store.getters["user/getUser"];
        const isUserLoggedIn = getUser.id != undefined;
        return {
            userLoggedIn: isUserLoggedIn,
            user: {
                id: getUser.id,
                name: getUser.name,
                email: getUser.email,
            },
        };
    },
    methods: {
        logout() {
            const canLogout = this.$store.dispatch("user/logoutUser");
            if (canLogout) {
                this.$router.push({ path: "/message/3" });
            }
        }
    },
    computed: {
        userIsEmpty: function () {
            let obj = this.$store.getters["user/getUser"];
            return Object.keys(obj).length === 0;
        },
        userName: function () {
            return this.$store.getters["user/getUser"].name;
        }
    },
    components: {  }
}


</script>  
