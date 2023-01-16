<template>
			<!-- start banner Area -->
			<section class="banner-area relative about-banner" id="home">	

				<div class="container">				
					<div class="row d-flex align-items-center justify-content-center">
						<div class="about-content col-lg-12">
							<h1 class="text-white">
								{{message}}		
							</h1>	
						</div>	
					</div>
				</div>
				
			</section>
			<!-- End banner Area -->
</template>

<script>
export default {
    data() {
		return {
            message: '',
		}
	},   
    mounted() {
        this.setMessage()
	},
	methods: {
    async setMessage() {
      if (this.$route.params.id == 1) {
        this.message = "Welcome! You can now login"
      }
      if (this.$route.params.id == 2) {
        this.message = "Welcome back " + this.$store.getters['user/getUser'].name + "!"
      }
      if (this.$route.params.id == 3) {
		await this.$store.dispatch('user/logoutUser');
        this.message = "Logged out, see you soon!"
      }
      if (this.$route.params.id == 4) {
        this.message = "Thank you for your order"
      }

      var timeleft = 2;
        var downloadTimer = setInterval(() => {
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            this.$router.push('/menu')
        }
        timeleft -= 1;
        }, 1000);
    },


  },
}
</script>

<style scoped>
</style>



