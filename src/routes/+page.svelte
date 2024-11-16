<script lang="ts">
  import { onMount } from 'svelte';
  import TableView from '$lib/components/TableView.svelte';
  import GridView from '$lib/components/GridView.svelte';  // Ensure GridView exists

  import Map from 'ol/Map';
  import View from 'ol/View';
  import TileLayer from 'ol/layer/Tile';
  import OSM from 'ol/source/OSM';
  import { Vector as VectorLayer } from 'ol/layer';
  import { Vector as VectorSource } from 'ol/source';
  import { Icon, Style } from 'ol/style';

  // State variables
  let data: any[] = [];
  let view: 'list' | 'grid' = 'list';
  let map: Map;

  // Fetch landing pad data from API
  async function fetchData() {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/landpads');
      const fetchedData = await response.json();
      data = fetchedData; // Set the data after fetching
      console.log(data); // Log the fetched data
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }

  // Initialize map with OpenLayers
  function initMap() {
    map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }

  // Load data and initialize map on component mount
  onMount(() => {
    fetchData();
    initMap();
  });
</script>

<!-- View Switch Buttons -->
<div class="flex justify-end mb-4">
  <button class="btn btn-primary" on:click={() => (view = 'list')}>List View</button>
  <button class="btn btn-secondary" on:click={() => (view = 'grid')}>Grid View</button>
</div>

<!-- Conditional Rendering for List and Grid View -->
{#if view === 'list'}
  <TableView {data} />
{:else}
  <GridView {data} />
{/if}

<!-- Map Container -->
<div id="map" class="w-full h-96"></div>

<style>
  #map {
    width: 100%;
    height: 400px; /* Adjust height as needed */
    border: 1px solid #ccc; /* Optional, for visibility */
  }
</style>

