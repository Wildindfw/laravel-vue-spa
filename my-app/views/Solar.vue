<template>
  <div class="relative bg-white">
    <header-solar />
    <main class="relative">
      <section>
        <div
          class="w-screen bg-center bg-cover"
          style="height: 300px; background-image: url(/img/solar-footer2.jpg)"
        >
          <span
            class="w-full absolute top-0 left-0 opacity-75 bg-black"
            style="height: inherit"
          ></span>
          <!-- <img src="@/assets/img/solar-footer2.jpg" alt="" /> -->
        </div>
        <!-- <div
          class="container relative w-full rounded-lg bg-gray-300"
          style="height: 200px; margin-top: -100px"
        ></div> -->
        <!-- <div
          style="height: 100px; margin-top: -100px; clip-path: polygon(0 75%, 100% 50%, 100% 100%, 0% 100%);"
        ></div> -->
        <div class="container flex justify-end" style="margin-top: -100px">
          <div class="blog-slider">
            <div class="blog-slider__wrp swiper-wrapper">
              <div class="blog-slider__item swiper-slide">
                <div class="blog-slider__img">
                  <img
                    src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div class="blog-slider__content">
                  <span class="blog-slider__code">26 December 2019</span>
                  <div class="blog-slider__title">Lorem Ipsum Dolor</div>
                  <div class="blog-slider__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae voluptate repellendus magni illo ea animi?
                  </div>
                  <a href="#" class="blog-slider__button">READ MORE</a>
                </div>
              </div>
              <div class="blog-slider__item swiper-slide">
                <div class="blog-slider__img">
                  <img
                    src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/jason-leung-798979-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div class="blog-slider__content">
                  <span class="blog-slider__code">26 December 2019</span>
                  <div class="blog-slider__title">Lorem Ipsum Dolor2</div>
                  <div class="blog-slider__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae voluptate repellendus magni illo ea animi?
                  </div>
                  <a href="#" class="blog-slider__button">READ MORE</a>
                </div>
              </div>

              <div class="blog-slider__item swiper-slide">
                <div class="blog-slider__img">
                  <img
                    src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div class="blog-slider__content">
                  <span class="blog-slider__code">26 December 2019</span>
                  <div class="blog-slider__title">Lorem Ipsum Dolor</div>
                  <div class="blog-slider__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae voluptate repellendus magni illo ea animi?
                  </div>
                  <a href="#" class="blog-slider__button">READ MORE</a>
                </div>
              </div>
            </div>
            <div class="blog-slider__pagination"></div>
          </div>
        </div>
        <div class="container flex">
          <ul class="flex flex-wrap">
            <li class="" style="max-width: 570px; height: 430px">
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg"
                alt=""
                class="w-full h-full object-cover rounded-lg"
              />
            </li>
            <li class="" style=" max-width: 570px; height: 200px;">
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg"
                alt=""
                class="w-full h-full object-cover rounded-lg"
              />
            </li>
            <li
              class=""
              style="max-width: 270px; height: 200px; margin-left: auto; margin-right: 30px; margin-top: -200px"
            >
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg"
                alt=""
                class="w-full h-full object-cover rounded-lg"
              />
            </li>
            <li
              class=""
              style="max-width: 270px; height: 200px; margin-top: -200px"
            >
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg"
                alt=""
                class="w-full h-full object-cover rounded-lg"
              />
            </li>
          </ul>
        </div>
      </section>
      <section
        class="w-full h-64 opacity-50"
        style="background: #87D038"
      ></section>
      <section class="h-64">
        <div>
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Your story starts with us.
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  This is a simple example of a Landing Page you can build using
                  Tailwind Starter Kit. It features multiple CSS components
                  based on the Tailwindcss design system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-solar />
  </div>
</template>

<script>
import HeaderSolar from "@/components/Solar/Header.vue";
import FooterSolar from "@/components/Solar/Footer.vue";
// import Swiper from "@/components/Swiper.vue";
import Swiper from "swiper/js/swiper.esm.bundle";

export default {
  name: "Solar",
  components: {
    HeaderSolar,
    FooterSolar
    // Swiper
  },
  data() {
    return {
      items: [
        {
          img:
            "https://fsmedia.imgix.net/5e/5e/f4/bf/2683/4fd9/a3bd/a0848637a9df/shutterstock662045977jpg.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&dpr=2&h=325&w=650",
          code: "12 februrary 2020",
          title: "dfjsdkjfksdjf",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, reiciendis eaque inventore, hic consequatur at facilis voluptate minima optio neque expedita libero dicta fuga! Eius reprehenderit blanditiis, dolor autem itaque alias quis repellendus enim quibusdam libero?"
        },
        {
          img:
            "https://fsmedia.imgix.net/5e/5e/f4/bf/2683/4fd9/a3bd/a0848637a9df/shutterstock662045977jpg.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&dpr=2&h=325&w=650",
          code: "12 februrary 2020",
          title: "dfjsdkjfksdjf",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, reiciendis eaque inventore, hic consequatur at facilis voluptate minima optio neque expedita libero dicta fuga! Eius reprehenderit blanditiis, dolor autem itaque alias quis repellendus enim quibusdam libero?"
        },
        {
          img:
            "https://fsmedia.imgix.net/5e/5e/f4/bf/2683/4fd9/a3bd/a0848637a9df/shutterstock662045977jpg.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&dpr=2&h=325&w=650",
          code: "12 februrary 2020",
          title: "dfjsdkjfksdjf",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, reiciendis eaque inventore, hic consequatur at facilis voluptate minima optio neque expedita libero dicta fuga! Eius reprehenderit blanditiis, dolor autem itaque alias quis repellendus enim quibusdam libero?"
        }
      ]
    };
  },
  mounted() {
    new Swiper(".blog-slider", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      autoplay: {
        delay: 4000
      },
      // mousewheel: {
      //   invert: true
      // },
      // autoHeight: true,
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true
      },
      on: {
        init: function() {
          console.log("swiper initialized");
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.blog-slider {
  width: 95%;
  position: relative;
  max-width: 800px;
  // margin: auto;
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
    margin: 180px auto;
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
      .blog-slider__img {
        img {
          opacity: 1;
          transition-delay: 0.3s;
        }
      }
      .blog-slider__content {
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
    height: 300px;
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
