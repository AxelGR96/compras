<template>
<nav class="bg-blue-400 border-gray-200 px-2 sm:px-4 py-5 rounded dark:bg-gray-800">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <div>
      <a  class="flex items-center" target="_blank">
        <img :src="logo" class="w-36 mr-3" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white" style="color:black">Compras</span>
    </a>
    </div>

    <div>
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-28 md:mt-0 md:text-lg md:font-medium">

        <li>
          <router-link to="/">Ordenes</router-link>
        </li>
        <li>
          <router-link to="/buy">Comprar</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data: () => ({
    logo: require('../assets/compra.png')
  })
}
</script>
