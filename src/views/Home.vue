<template>
  <div class="flex justify-center">
    <div class="mt-5">
      <img :src="logo" class="w-96 h-80" />
    </div>

  <div class="text-lg mt-5 ml-2 font-bold">
    Sistema de Administración de Ordenes
  </div>

  </div>

</template>

<script>

// @ is an alias to /src

export default {
  name: 'Home',

  data: () => ({
    logo: require('../assets/digital.jpg')
  })
}
</script>
