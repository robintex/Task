<script>
    import { Doughnut } from 'flowbite-svelte';
    export let data;
  
    const successRate = data.map(pad => ({
      label: pad.full_name,
      value: (pad.successful_landings / pad.attempted_landings) * 100
    }));
  </script>
  
  <Doughnut {data} />
  