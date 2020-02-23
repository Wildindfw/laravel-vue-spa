<template>
  <div class="relative text-gray-500">
    <!-- bg-center -->
    <div
      class="absolute bottom-0 w-full h-full bg-cover"
      style="background-image: url(/img/solar-footer-dark.jpg)"
    >
      <!-- style="background-image: url(/img/solar-footer.jpg)" -->
      <!-- id="blackOverlay" -->
      <!-- <span
        class="w-full h-full absolute top-0 left-0 opacity-50 bg-black"
      ></span> -->
    </div>
    <div class="relative flex flex-col">
      <div class="footer-top container flex flex-col items-center text-center">
        <!-- <img src="@/assets/img/blue.png" alt="" class="w-40 m-4" /> -->
        <span class="text-4xl text-white m-4">УкрСпецТехніка</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, reiciendis eaque inventore, hic consequatur at facilis
          voluptate minima optio neque expedita libero dicta fuga! Eius
          reprehenderit blanditiis, dolor autem itaque alias quis repellendus
          enim quibusdam libero? Mollitia enim modi quod necessitatibus sapiente
          ad ut perferendis provident sequi porro dolorum explicabo similique,
          saepe, error quis rem ab praesentium excepturi distinctio in.
        </p>
        <ul class="flex">
          <li class="m-2">
            <a href="" class="text-4xl text-red-700"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li class="m-2">
            <a href="" class="text-4xl text-blue-500"
              ><i class="fab fa-facebook"></i
            ></a>
          </li>
          <!-- <li class="w-10 h-10 m-2">
            <a href=""
              ><img src="@/assets/img/facebook.png" alt=""></i
            ></a>
          </li>
          <li class="w-10 h-10 m-2">
            <a href=""
              ><img src="@/assets/img/youtube.png" alt=""></i
            ></a>
          </li>
          <li class="w-10 h-10 m-2">
            <a href=""
              ><img src="@/assets/img/instagram.png" alt=""></i
            ></a>
          </li> -->
        </ul>
      </div>
      <hr class="w-full my-4 opacity-25" />
      <div class="footer-main container my-4">
        <div class="flex">
          <div class="w-4/12">
            <span class="block mb-2 text-white text-lg font-bold"
              >Контакти</span
            >
            <span class="block mb-2">м.Хмельницький вул Проскурівська</span>
            <ul>
              <li class="flex items-baseline mb-2">
                <i class="fas fa-phone-alt"></i>
                <a href="tel:+380670000000" class="ml-2">+38 067 000 00 00</a>
              </li>
              <li class="flex items-baseline mb-2">
                <i class="fas fa-envelope"></i>
                <a href="mailto:brand@gmail.com" class="ml-2"
                  >brand@gmail.com</a
                >
              </li>
              <li class="flex items-baseline mb-2">
                <i class="fab fa-viber"></i>
                <a href="tel:+0670000000" class="ml-2">067 000 00 00</a>
              </li>
            </ul>
          </div>
          <div class="flex justify-between w-3/12">
            <div>
              <span class="block mb-2 text-lg text-white font-bold">Меню</span>
              <ul>
                <li class="mb-2">
                  <a href="">Головна</a>
                </li>
                <li class="mb-2">
                  <a href="">Новини</a>
                </li>
                <li class="mb-2">
                  <a href="">Про компанію</a>
                </li>
                <li class="mb-2">
                  <a href="">Послуги</a>
                </li>
                <li class="mb-2">
                  <a href="">Каталог</a>
                </li>
              </ul>
            </div>
            <div>
              <span class="block mb-2 text-lg text-white font-bold"
                >Наші роботи</span
              >
              <ul>
                <li class="mb-2">
                  <a href="">Головна</a>
                </li>
                <li class="mb-2">
                  <a href="">Про нас</a>
                </li>
                <li class="mb-2">
                  <a href="">Товары</a>
                </li>
                <li class="mb-2">
                  <a href="">Новини</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-4/12"></div>
        </div>
      </div>
      <hr class="w-full my-4 opacity-25" />
      <div class="footer-bottom container text-center mb-4">
        <p>
          УкрСпецТехніка &copy; 2020 Energy Technology Co., LTD.All Rights
          Reserved
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer-img {
  background: url(/img/solar-footer2.jpg) no-repeat;
  background-size: cover;
}
</style>
