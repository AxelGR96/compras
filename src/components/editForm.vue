<template>
  <div>

    <TransitionRoot appear :show="edit" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="
                  w-full
                  max-w-md
                  transform
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  p-6
                  text-left
                  align-middle
                  shadow-xl
                  transition-all
                "
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Editar Orden
                </DialogTitle>
                <div class="mt-5">
                  <form class="w-full max-w-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          class="
                            block
                            uppercase
                            tracking-wide
                            text-gray-700 text-xs
                            font-bold
                            mb-2
                          "
                          for="sku"
                        >
                          SKU
                        </label>
                        <input
                          class="
                            appearance-none
                            block
                            w-full
                            bg-gray-200
                            text-gray-700
                            border
                            rounded
                            py-3
                            px-4
                            mb-3
                            leading-tight
                            focus:outline-none focus:bg-white
                          "
                          type="text"
                          required
                          v-model="item.number"
                        />
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label
                          class="
                            block
                            uppercase
                            tracking-wide
                            text-gray-700 text-xs
                            font-bold
                            mb-2
                          "
                          for="name"
                        >
                          Nombre
                        </label>
                        <input
                          class="
                            appearance-none
                            block
                            w-full
                            bg-gray-200
                            text-gray-700
                            border border-gray-200
                            rounded
                            py-3
                            px-4
                            leading-tight
                            focus:outline-none
                            focus:bg-white
                            focus:border-gray-500
                          "
                          id="grid-last-name"
                          type="text"
                          required
                          v-model="item.name"
                        />
                      </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          class="
                            block
                            uppercase
                            tracking-wide
                            text-gray-700 text-xs
                            font-bold
                            mb-2
                          "
                          for="sku"
                        >
                          Cantdiad
                        </label>
                        <input
                          class="
                            appearance-none
                            block
                            w-full
                            bg-gray-200
                            text-gray-700
                            border
                            rounded
                            py-3
                            px-4
                            mb-3
                            leading-tight
                            focus:outline-none focus:bg-white
                          "
                          type="text"
                          required
                          v-model="item.items"
                        />
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label
                          class="
                            block
                            uppercase
                            tracking-wide
                            text-gray-700 text-xs
                            font-bold
                            mb-2
                          "
                          for="name"
                        >
                          Precio
                        </label>
                        <input
                          class="
                            appearance-none
                            block
                            w-full
                            bg-gray-200
                            text-gray-700
                            border border-gray-200
                            rounded
                            py-3
                            px-4
                            leading-tight
                            focus:outline-none
                            focus:bg-white
                            focus:border-gray-500
                          "
                          id="grid-last-name"
                          type="text"
                          required
                          v-model="item.totals.total"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <div class="mt-4">
                  <button
                    type="button"
                    class="
                      inline-flex
                      justify-center
                      rounded-md
                      border border-transparent
                      bg-blue-100
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-blue-900
                      hover:bg-blue-200
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-blue-500
                      focus-visible:ring-offset-2
                    "
                    @click="closeModal"
                  >
                    Actualizar
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue'
export default {
  props: {
    edit: Boolean,
    data: Object
  },
  data: () => ({
    item: []
  }),
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionRoot,
    TransitionChild
  },
  methods: {
    closeModal () {
      this.$emit('close')
    }
  },
  mounted () {
    this.item = Object.assign({}, this.data)
    console.log('item', this.item)
  }
}
</script>
