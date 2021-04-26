<template>
  <div class="map">
    <!-- Map part with a map around everything -->
    <l-map ref="MapComponent"
    :zoom="zoom"
    :center="center"
    @update:zoom="zoomUpdated"
    @update:center="centerUpdated"
    @update:bounds="boundsUpdated"
    >
      <!-- Tile layer which is the actual map -->
      <l-tile-layer :url="url"></l-tile-layer>
      <!-- Polygon is the border around the park -->
      <l-polygon :lat-lngs="polygon.LatLngs" :color="polygon.color" ></l-polygon>
      <!-- Marker with popup for the activities -->
      <div v-for="c in content" :key="c.id">
        <l-marker :lat-lng="[c.latitude, c.longitude]" >
        <l-popup>
          <!-- Popup component -->
          <Popup :title="c.name" :description="c.description" :status="c.status" :queueTime="c.queueTime" :id="c.id" :activity="c" :type="'attractions'"></Popup>
        </l-popup>
      </l-marker>
      </div>
    </l-map>
  </div>
</template>

<script>
// Imports needed for leaflet
import { LMap, LTileLayer, LPolygon, LMarker, LPopup } from 'vue2-leaflet'
import L from 'leaflet'
import Popup from '../components/Popup.vue'

// Thing to get the markers to work
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  components: { LMap, LTileLayer, LPolygon, LMarker, LPopup, Popup },
  name: 'MapComponent',
  props: ['content'],
  data() {
    return {
      // Url for the map API
      url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoidmlrdmVzIiwiYSI6ImNrbmh3YWN2cTAxajUycG11bG1meWdmcDUifQ.MPLRtxErVxflXS225gW83Q',
      // Should remove, it is in the url since this doesn't work for some reason...
      accessToken: 'sk.eyJ1IjoidmlrdmVzIiwiYSI6ImNrbmh3YWN2cTAxajUycG11bG1meWdmcDUifQ.MPLRtxErVxflXS225gW83Q',
      // Zoom level of the map
      zoom: 16,
      // Central point of map (For now is Liseberg)
      center: [57.694974, 11.992999],
      // The amount of tiles to show
      tileSize: 512,
      // To get the 512 tiles to work since 256 is standard
      zoomOffset: -1,
      // Latlng and color for the border
      polygon: {
        LatLngs: [
          [57.697153, 11.992751],
          [57.696626, 11.988692],
          [57.692061, 11.992773],
          [57.692245, 11.994444],
          [57.693002, 11.994320],
          [57.693048, 11.995909],
          [57.692830, 11.996038],
          [57.693048, 11.996983],
          [57.695192, 11.996296],
          [57.695055, 11.994707],
          [57.696821, 11.993912],
          [57.697153, 11.992751]
        ],
        color: '#388659'
      }
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

<style scoped>
.map {
  height: 30em;
  margin: 0;
  padding: 0;
  width: 100%;
  z-index: 0;
}
</style>
