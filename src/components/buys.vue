<template>
  <div>
     <table
      class="
        min-w-full
        mt-10
        divide-y divide-gray-200
        table-fixed
        dark:divide-gray-700
      "
    >
      <thead class="bg-gray-100 dark:bg-gray-700">
        <tr>
          <th
            scope="col"
            v-for="(head, index) in headers"
            :key="index"
            class="
              py-3
              px-6
              text-xs
              font-medium
              tracking-wider
              text-center text-gray-700
              uppercase
              dark:text-gray-400
            "
          >
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody
        class="
          bg-white
          divide-y divide-gray-200
          dark:bg-gray-800 dark:divide-gray-700
        "
      >
        <tr
          class="hover:bg-gray-100 dark:hover:bg-gray-700"
          v-for="row in orders"
          :key="row.id"
        >
          <td
            class="py-4 text-sm font-medium text-gray-900"
            v-for="(col, index) in headers"
            :key="index"
          >
            <span v-if="col == 'SKU'">{{ row.number }}</span>
            <span v-if="col == 'Nombre'">{{ row.name }}</span>
            <span v-if="col == 'Cantidad'">{{ row.items.length }}</span>
            <span v-if="col == 'Precio'">$ {{ row.totals.total }}</span>
            <span v-if="col == 'Actions'">

                  <button
                    class="
                    bg-green-400
                      mt-5
                      py-3
                      rounded
                      px-6
                      active:bg-indigo-300
                    "
                    @click="buy()"
                  >
                   Comprar Orden
                  </button>

            </span>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
export default {
  data: () => ({
    token:
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ',
    headers: ['SKU', 'Nombre', 'Cantidad', 'Precio', 'Actions'],
    orders: null
  }),
  methods: {
    ShowData () {
      const that = this
      axios
        .get('https://eshop-deve.herokuapp.com/api/v2/orders', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.token
          }
        })
        .then(function (response) {
        // handle success
          console.log(response)
          that.orders = response.data.orders
        })
        .catch(function (error) {
        // handle error
          console.log(error)
        })
        .then(function () {
        // always executed
        })
    },
    buy () {
      Swal.fire({
        title: '¿Desea comprar esta orden?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Comprar',
        denyButtonText: 'No comprar'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Compra exitosa!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Compra cancelada', '', 'warning')
        }
      })
    }
  },

  mounted () {
    this.ShowData()
  }
}
</script>
