<template>
  <!-- <div :style="{ width: baseSwiperWidth }" class="base-swiper"> -->
  <div :style="{ width: baseSwiperWidth }" :class="baseSwiper">
    <!-- <div :style="{ width: baseSwiperWidth }" class="swiperClass"> -->
    <div class="base-swiper__wrp swiper-wrapper">
      <div
        v-for="col in lineCollections"
        :key="col.id"
        class="base-swiper__item swiper-slide"
      >
        <div class="base-swiper__img">
          <img :src="col.imageUrlPreview" :alt="col.name" />
        </div>
        <div class="base-swiper__content">
          <span class="base-swiper__code">{{ lineName }}</span>
          <div class="base-swiper__title">{{ col.name }}</div>
          <div class="base-swiper__text">{{ col.description }}</div>
          <a
            href="#"
            class="base-swiper__button"
            @click="goToCollection(col.id)"
            >Перейти до колекції</a
          >
        </div>
      </div>
    </div>
    <!-- <div :class="pagin"></div> -->
    <div class="base-swiper__pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper/js/swiper.esm.bundle";

export default {
  name: "Swiper",
  props: ["line-collections", "line-name", "base-swiper-width", "index"],
  computed: {
    baseSwiper() {
      return `base-swiper${this.index}`;
    },
    baseSwiperClass() {
      return `.base-swiper${this.index}`;
    }
  },
  mounted() {
    new Swiper(this.baseSwiperClass, {
      // new Swiper(".base-swiper", {
      // spaceBetween: 30,
      effect: "fade",
      // loop: true,
      // autoplay: {
      //   delay: 4000
      // },
      // mousewheel: {
      //   invert: true
      // },
      // autoHeight: true,
      pagination: {
        el: ".base-swiper__pagination",
        clickable: false
      },
      // keyboard: {
      //   enabled: true,
      //   onlyInViewport: false
      // },
      // scrollbar: {
      //   draggable: true
      // },
      on: {
        init: function() {
          console.log("swiper initialized");
        }
      }
    });
  },
  methods: {
    goToCollection(collectionId) {
      console.log("goToCollection: Value: ", collectionId);
      this.$router.push(`/collections/${collectionId}`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800");
* {
  box-sizing: border-box;
}

.base-swiper0,
.base-swiper1,
.base-swiper2,
.base-swiper3,
.base-swiper4,
.base-swiper5 {
  // width: 95%;
  position: relative;
  max-width: 800px;
  margin: auto;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  height: 400px;
  transition: all 0.3s;

  @media screen and (max-width: 992px) {
    max-width: 680px;
    height: 400px;
  }

  @media screen and (max-width: 768px) {
    min-height: 500px;
    height: auto;
    // margin: 180px auto;
    margin-top: 180px;
    margin-bottom: 90px;
  }

  @media screen and (max-width: 576px) {
    // min-height: 500px;
    height: auto;
    margin: 90px auto;
  }

  @media screen and (max-height: 500px) and (min-width: 992px) {
    height: 350px;
  }

  &__item {
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    &.swiper-slide-active {
      .base-swiper__img {
        img {
          opacity: 1;
          transition-delay: 0.3s;
        }
      }
      .base-swiper__content {
        > * {
          opacity: 1;
          transform: none;

          @for $i from 0 to 15 {
            &:nth-child(#{$i + 1}) {
              transition-delay: $i * 0.1 + 0.3s;
            }
          }
        }
      }
    }
  }

  &__img {
    // width: 40%;
    width: 300px;
    flex-shrink: 0;
    // height: 300px;
    height: auto;
    // background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    // box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
    border-radius: 20px;
    transform: translateX(-80px);

    overflow: hidden;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
      border-radius: 20px;
      opacity: 0.8;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      opacity: 0;
      border-radius: 20px;
      transition: all 0.3s;
    }

    @media screen and (max-width: 992px) {
      // width: 45%;
    }
    @media screen and (max-width: 768px) {
      transform: translateY(-50%);
      width: 90%;
    }
    @media screen and (max-width: 576px) {
      width: 95%;
    }
    @media screen and (max-height: 500px) and (min-width: 992px) {
      height: 270px;
    }
  }

  &__content {
    // width: 60%;
    padding-right: 25px;
    @media screen and (max-width: 992px) {
      // width: 55%;
    }
    @media screen and (max-width: 768px) {
      margin-top: -80px;
      text-align: center;
      padding: 0 30px;
    }

    @media screen and (max-width: 576px) {
      margin-top: 0;
      padding: 0;
    }
    > * {
      opacity: 0;
      transform: translateY(25px);
      transition: all 0.4s;
    }
  }

  &__code {
    color: #7b7992;
    margin-bottom: 15px;
    display: block;
    font-weight: 500;
  }

  &__title {
    font-size: 24px;
    font-weight: 700;
    color: #0d0925;
    margin-bottom: 20px;
  }

  &__text {
    color: #4e4a67;
    margin-bottom: 30px;
    line-height: 1.5em;
    text-align: justify;
  }

  &__button {
    display: inline-flex;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    padding: 15px 35px;
    border-radius: 50px;
    color: #fff;
    // box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
    text-decoration: none;
    font-weight: 500;
    justify-content: center;
    text-align: center;
    letter-spacing: 1px;
    @media screen and (max-width: 576px) {
      width: 100%;
    }
  }
  .swiper-container-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  &__pagination {
    position: absolute;
    z-index: 21;
    right: 20px;
    width: 11px !important;
    text-align: center;
    left: auto !important;
    top: 50%;
    bottom: auto !important;
    transform: translateY(-50%);
    @media screen and (max-width: 768px) {
      transform: translateX(-50%);
      left: 50% !important;
      top: 205px;
      width: 100% !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: 576px) {
      top: 120px;
    }
    &.swiper-pagination-bullets .swiper-pagination-bullet {
      margin: 8px 0;
      @media screen and (max-width: 768px) {
        margin: 0 5px;
      }
    }

    .swiper-pagination-bullet {
      width: 11px;
      height: 11px;
      display: block;
      border-radius: 10px;
      background: #062744;
      opacity: 0.2;
      transition: all 0.3s;
      &-active {
        opacity: 1;
        background: #fd3838;
        height: 30px;
        box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);

        @media screen and (max-width: 768px) {
          height: 11px;
          width: 30px;
        }
      }
    }
  }
}
</style>
