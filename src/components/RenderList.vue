<template>
  <div class="text-center">
    <h1>{{ msg }}</h1>
    <div class="row d-flex justify-content-center">
      <div class="col-md-8">
        <GmapMap
          class="gmap"
          :center="{ lat: 42, lng: 42 }"
          :zoom="7"
          map-type-id="terrain"
        />
        <b-table
          bordered
          dark
          fixed
          hover
          striped
          :fields="colNames"
          :items="listData"
        ></b-table>

        <b-button v-b-modal.modalPopover>Show Modal</b-button>

        <b-modal id="modalPopover" title="Map View" ok-only> </b-modal>
      </div>
    </div>
  </div>
</template>

<script>

console.log(process.env.VUE_APP_GOOGLE_API_KEY);

import Vue from "vue";
import axios from "axios";

import { TablePlugin } from "bootstrap-vue";
Vue.use(TablePlugin);

import * as VueGoogleMaps from 'gmap-vue';
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_API_KEY,
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  }
});

export default {
  name: "RenderList",
  props: {
    msg: String,
  },
  data: function () {
    return {
      colNames: [
        {
          key: "id",
          sortable: true,
          tdClass: "text-left",
          thClass: "text-left",
        },
        {
          key: "text",
          sortable: true,
        },
        "lat",
        "long",
      ],
      listData: [],
    };
  },
  mounted() {
    axios.get(process.env.VUE_APP_LIST_DATA_SERVICE).then((response) => {
      this.listDataString = JSON.stringify(response.data, null, "\t");
      this.listData = response.data;
      console.log(this.listDataString);
      return response; // multiline arrow function must return
    });
  },
};
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
