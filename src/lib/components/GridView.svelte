<script>
    export let data;
  </script>
  
  <div class="grid grid-cols-3 gap-4">
    {#each data as pad}
      <div class="p-4 border rounded">
        <h3>{pad.full_name}</h3>
        <p>Status: {pad.status}</p>
        <p>Region: {pad.location.region}</p>
      </div>
    {/each}
  </div>
  