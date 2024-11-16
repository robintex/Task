<script>
    export let data;
  </script>
  
  <table class="table-auto w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Status</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      {#each data as pad}
        <tr>
          <td>{pad.full_name}</td>
          <td>{pad.status}</td>
          <td>{pad.location.region}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  