<script setup>
import { ref } from "vue";
import { LMap, LTileLayer, LMarker } from "leaflet";

const zoom = ref(13);
const center = ref([6.3703, 2.3912]);
const searchQuery = ref("");
const searchResults = ref([]);
const selectedLocation = ref(null);

// Fonction pour rechercher une adresse avec OpenStreetMap Nominatim
const searchLocation = async () => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery.value}`
  );
  const data = await response.json();
  searchResults.value = data;
};

const selectLocation = (location) => {
  center.value = [location.lat, location.lon];
  selectedLocation.value = [location.lat, location.lon];
};
</script>

<template>
  <div>
    <input
      v-model="searchQuery"
      @keyup.enter="searchLocation"
      placeholder="Rechercher une boutique..."
      class="border p-2 w-full mb-2"
    />
    <ul v-if="searchResults.length">
      <li
        v-for="result in searchResults"
        :key="result.place_id"
        @click="selectLocation(result)"
        class="cursor-pointer p-1 hover:bg-gray-200"
      >
        {{ result.display_name }}
      </li>
    </ul>

    <LMap v-model:zoom="zoom" v-model:center="center" style="height: 500px; width: 100%">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <LMarker v-if="selectedLocation" :lat-lng="selectedLocation" />
    </LMap>
  </div>
</template>
