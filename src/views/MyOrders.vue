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
                                My Orders
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End banner Area -->

            <!-- Start menu-list Area -->
            <section class="menu-list-area section-gap">
                <div class="container">

                    <div v-for="order in orders" :key="order.id"
                        class="single-menu-list row justify-content-between align-items-center">
                        <div class="col-lg-9">
                            <a href="#">
                                <h4>{{order.product_name}}</h4>
                            </a>
                            <p>
                                {{ order.created_at }}
                            </p>
                        </div>
                        <div class="col-lg-3 flex-row d-flex price-size">
                            <div class="s-price col">

                                <span>${{ order.product_price }}</span>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <!-- End menu-list Area -->


        </body>

        <Footer />

    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'


export default {
    name: 'dishes',
    components: {
        Footer,
        Header
    },
    data() {
        return {
            orders: [],
        }
    },
    created() {
        this.getOrders()
    },
    mounted() {

    },
    methods: {
        async getOrders() {
            await this.$store.dispatch('orders/getMyOrdersFromDB', this.$store.getters['user/getUser'].id)
            this.orders = this.$store.getters['orders/getOrders']
        },
    },
    computed: {

    },
}
</script>

<style scoped>

</style>