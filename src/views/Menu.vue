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
                                Menu List
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End banner Area -->

            <!-- Start menu-list Area -->
            <section class="menu-list-area section-gap">
                <div class="container">
                    <div class="row">
                        <div class="menu-cat mx-auto">
                            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="pizza-tab" data-toggle="pill" href="#pizza"
                                        role="tab" aria-controls="pizza" aria-selected="true">Pizza</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-bread-tab" data-toggle="pill" href="#pills-bread"
                                        role="tab" aria-controls="pills-bread" aria-selected="false">Breads</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-burger-tab" data-toggle="pill" href="#pills-burger"
                                        role="tab" aria-controls="pills-burger" aria-selected="false">Burgers</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-chicken-tab" data-toggle="pill" href="#pills-chicken"
                                        role="tab" aria-controls="pills-chicken" aria-selected="false">Chicken</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div id="pills-tabContent" class="tab-content absolute">
                        <div class="tab-pane fade show active" id="pizza" role="tabpanel" aria-labelledby="pizza-tab">
                            <div v-for="pizzaProduct in pizzaProducts" :key="pizzaProduct.id"
                                class="single-menu-list row justify-content-between align-items-center">
                                <div class="col-lg-9">
                                    <a href="#">
                                        <h4>{{ pizzaProduct.name }}</h4>
                                    </a>
                                    <p>
                                        {{ pizzaProduct.description }}
                                    </p>
                                </div>
                                <div class="col-lg-3 flex-row d-flex price-size">
                                    <div class="s-price col">

                                        <span>${{ pizzaProduct.price }}</span> <br />
                                        <button v-if="userLoggedIn" @click="addOrder(pizzaProduct)"
                                            class="genric-btn info-border circle arrow">Order<span
                                                class="lnr lnr-arrow-right"></span></button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade show " id="pills-bread" role="tabpanel"
                            aria-labelledby="pills-bread-tab">
                            <div v-for="breadProduct in breadProducts" :key="breadProduct.id"
                                class="single-menu-list row justify-content-between align-items-center">
                                <div class="col-lg-9">
                                    <a href="#">
                                        <h4>{{ breadProduct.name }}</h4>
                                    </a>
                                    <p>
                                        {{ breadProduct.description }}
                                    </p>
                                </div>
                                <div class="col-lg-3 flex-row d-flex price-size">
                                    <div class="s-price col">

                                        <span>${{ breadProduct.price }}</span> <br />
                                        <button v-if="userLoggedIn" @click="addOrder(breadProduct)"
                                            class="genric-btn info-border circle arrow">Order<span
                                                class="lnr lnr-arrow-right"></span></button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade show " id="pills-burger" role="tabpanel"
                            aria-labelledby="pills-burger-tab">
                            <div v-for="burgerProduct in burgerProducts" :key="burgerProduct.id"
                                class="single-menu-list row justify-content-between align-items-center">
                                <div class="col-lg-9">
                                    <a href="#">
                                        <h4>{{ burgerProduct.name }}</h4>
                                    </a>
                                    <p>
                                        {{ burgerProduct.description }}
                                    </p>
                                </div>
                                <div class="col-lg-3 flex-row d-flex price-size">
                                    <div class="s-price col">

                                        <span>${{ burgerProduct.price }}</span> <br />
                                        <button v-if="userLoggedIn" @click="addOrder(burgerProduct)"
                                            class="genric-btn info-border circle arrow">Order<span
                                                class="lnr lnr-arrow-right"></span></button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade show " id="pills-chicken" role="tabpanel"
                            aria-labelledby="pills-chicken-tab">
                            <div v-for="chickenProduct in chickenProducts" :key="chickenProduct.id"
                                class="single-menu-list row justify-content-between align-items-center">
                                <div class="col-lg-9">
                                    <a href="#">
                                        <h4>{{ chickenProduct.name }}</h4>
                                    </a>
                                    <p>
                                        {{ chickenProduct.description }}
                                    </p>
                                </div>
                                <div class="col-lg-3 flex-row d-flex price-size">
                                    <div class="s-price col">

                                        <span>${{ chickenProduct.price }}</span> <br />
                                        <button v-if="userLoggedIn" @click="addOrder(chickenProduct)"
                                            class="genric-btn info-border circle arrow">Order<span
                                                class="lnr lnr-arrow-right"></span></button>
                                    </div>

                                </div>
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

    components: {
        Footer,
        Header
    },


    data() {
        const getUser = this.$store.getters['user/getUser'];
        const isUserLoggedIn = getUser.id != undefined;

        return {
            userLoggedIn: isUserLoggedIn,
            pizzaProducts: [],
            breadProducts: [],
            burgerProducts: [],
            chickenProducts: [],
            categories: [],
        }
    },
    created() {
        this.getProducts()
    },
    mounted() {

    },
    methods: {
        async getProducts() {

            await this.$store.dispatch('products/getProductsFromDB')
            this.pizzaProducts = this.$store.getters['products/getProductsByCatName']("Pizza")
            this.breadProducts = this.$store.getters['products/getProductsByCatName']("Breads")
            this.burgerProducts = this.$store.getters['products/getProductsByCatName']("Burgers")
            this.chickenProducts = this.$store.getters['products/getProductsByCatName']("Chicken")
        },
        async addOrder(product) {
            const order = {
                    customer_id: this.$store.getters['user/getUser'].id, 
                    product_id: product.id,
                    product_price: product.price
                }

            await this.$store.dispatch('orders/newOrder', order);
            this.$router.push({ path: '/message/4' });
        },

    },
    computed: {

    },
}
</script>

<style scoped>
.thumbwrap {
    position: relative;
}

.thumb span {
    position: absolute;
    visibility: hidden;
}

.thumb:hover,
.thumb:hover span {
    visibility: visible;
    top: -30px;
    left: -35px;
    z-index: 1;
}
</style>