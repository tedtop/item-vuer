<template>
  <div class="text-center">
    <b-button size="sm">Button</b-button>
    <b-modal ok-only>
      something in here
      <!-- <GmapMap
          class="gmap"
          :center="{ lat: 42, lng: 42 }"
          :zoom="7"
          map-type-id="terrain"
        /> -->
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "MapModal",
  props: {
    infoModalTitle: String,
    infoModalContent: String,
    button: Object
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `My title: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    showModal() {
      this.$root.$emit('bv::show::modal')
    },
    resetInfoModal() {
      this.infoModal.title = ""
      this.infoModal.content = ""
    },

  },
  mounted() {
    console.log('MapModal mounted')
    this.showModal()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin-bottom: 60px;
}
.gmap {
  width: 100%;
  height: 300px;
  margin-bottom: 60px;
}
</style>
