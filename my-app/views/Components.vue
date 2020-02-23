<template>
  <div class="container mx-auto px-4">
    <div class="bg-blue-600 w-full" style="height: 80px"></div>
    <featuresTwo />
    <featuresThree />
    <how-it-works />
    <how-it-works-tabs />
    <testimonials />
    <testimonials-large />
    <portfolio />
    <portfolio-photo />
    <team />
    <team-large />
    <price-one />
    <price-two />
    <faq />
    <blog-link />
    <blog-all />
    <ecommerce />
    <ecommerce-large />
    <admin />
    <admin-large />
    <page-not-found />
    <page404 />
  </div>
</template>

<script>
import FeaturesTwo from "@/components/Components/FeaturesTwo.vue";
import FeaturesThree from "@/components/Components/FeaturesThree.vue";
import HowItWorks from "@/components/Components/HowItWorks.vue";
import HowItWorksTabs from "@/components/Components/HowItWorksTabs.vue";
import Testimonials from "@/components/Components/Testimonials.vue";
import TestimonialsLarge from "@/components/Components/TestimonialsLarge.vue";
import Portfolio from "@/components/Components/Portfolio.vue";
import PortfolioPhoto from "@/components/Components/PortfolioPhoto.vue";
import Team from "@/components/Components/Team.vue";
import TeamLarge from "@/components/Components/TeamLarge.vue";
import PriceOne from "@/components/Components/PriceOne.vue";
import PriceTwo from "@/components/Components/PriceTwo.vue";
import Faq from "@/components/Components/Faq.vue";
import BlogLink from "@/components/Components/BlogLink.vue";
import BlogAll from "@/components/Components/BlogAll.vue";
import Ecommerce from "@/components/Components/Ecommerce.vue";
import EcommerceLarge from "@/components/Components/EcommerceLarge.vue";
import Admin from "@/components/Components/Admin.vue";
import AdminLarge from "@/components/Components/AdminLarge.vue";
import PageNotFound from "@/components/Components/PageNotFound.vue";
import Page404 from "@/components/Components/Page404.vue";

export default {
  name: "Components",
  components: {
    FeaturesTwo,
    FeaturesThree,
    HowItWorks,
    HowItWorksTabs,
    Testimonials,
    TestimonialsLarge,
    Portfolio,
    PortfolioPhoto,
    Team,
    TeamLarge,
    PriceOne,
    PriceTwo,
    Faq,
    BlogLink,
    BlogAll,
    Ecommerce,
    EcommerceLarge,
    Admin,
    AdminLarge,
    PageNotFound,
    Page404
  }
};
</script>

<style lang="scss" scoped></style>
