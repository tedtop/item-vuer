<template>
  <div class="text-center">
    <h1>{{ title }}</h1>
    <div class="row d-flex justify-content-center">
      <div class="col-md-8">
        <GmapMap
          ref="topMapRef"
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
          show-empty
          striped
          :busy.sync="isBusy"
          :items="items"
          :fields="fields"
        >
          <template v-slot:cell(actions)="row">
            <b-button
              size="sm"
              @click="info(row.item, row.index, $event.target)"
            >
              Map
            </b-button>
          </template>
        </b-table>

        <b-modal
          :id="mapModal.id"
          :title="mapModal.title"
          @hide="resetInfoModal"
          ok-only
        >
          <GmapMap
            ref="modalMapRef"
            class="gmap"
            :center="{ lat: 42, lng: 42 }"
            :zoom="7"
            map-type-id="terrain"
          />
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { gmapApi } from 'gmap-vue';

export default {
  name: "RenderList",
  props: {
    title: String
  },
  computed: {
    google() {
      return gmapApi();
    }
  },
  updated() {
    console.log(this.$refs.modalMapRef);
    console.log(window.google.maps);

    this.$refs.modalMapRef.$mapPromise.then((map) => {
      window.google.maps.event.trigger(map, 'resize');
    });
  },
  data() {
    return {
      items: [
        { id: 1, lat: 42, long: 42 },
        { id: 2, lat: 42, long: 42 },
        { id: 3, lat: 42, long: 42 },
      ],
      isBusy: false,
      fields: [
        {
          key: "id",
          sortable: true,
          class: "text-left",
        },
        {
          key: "text",
          sortable: true,
          class: "text-left",
        },
        "lat",
        "long",
        {
          key: "actions",
          label: "Actions"
        }
      ],
      mapModal: {
        id: "map-modal",
        title: "",
        item: ""
      }
    }
  },
  methods: {
    // dataProvider() {
    //   this.isBusy = true;
    //   let promise = axios.get(process.env.VUE_APP_LIST_DATA_SERVICE);

    //   return promise.then((response) => {
    //     this.isBusy = false
    //     return response.data;
    //   }).catch(error => {
    //     this.isBusy = false;
    //     console.log(error);
    //     return [];
    //   })
    // },
    info(item, index, button) {
      this.mapModal.title = `Label: ${item.id}`;
      this.mapModal.item = item;
      this.$root.$emit("bv::show::modal", this.mapModal.id, button);
    },
    resetInfoModal() {
      this.mapModal.title = "";
      this.mapModal.content = "";
    },
  },
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
