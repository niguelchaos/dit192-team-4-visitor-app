<template>
  <div class="map">
    <l-map ref="MapComponent"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated">
      <l-tile-layer :url="url"></l-tile-layer>
    </l-map>

  </div>
</template>

<script>

export default {
  name: 'MapComponent',
  data() {
    return {
      url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoidmlrdmVzIiwiYSI6ImNrbmh3YWN2cTAxajUycG11bG1meWdmcDUifQ.MPLRtxErVxflXS225gW83Q',
      url2: '',
      accessToken: 'sk.eyJ1IjoidmlrdmVzIiwiYSI6ImNrbmh3YWN2cTAxajUycG11bG1meWdmcDUifQ.MPLRtxErVxflXS225gW83Q',
      zoom: 16,
      center: [57.694974, 11.992999],
      tileSize: 512,
      zoomOffset: -1
    }
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom
    },
    centerUpdated(center) {
      this.center = center
    },
    boundsUpdated(bounds) {
      this.bounds = bounds
    }
  }
}

</script>

<style>
.map {
  height: 30em;
  margin: 0;
  padding: 0;
  width: 100%;
  z-index: 0;
}
</style>
