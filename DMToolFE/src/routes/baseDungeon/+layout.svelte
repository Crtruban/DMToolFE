<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import AppSidebar from "$lib/components/app-sidebar.svelte";
   
    let { children } = $props();
  </script>
   

      {@render children?.()}
      <style>
       :global(h1) {
            padding-left: 20px
        }
        :global(.tab-group > .tab-item *) {
          font-weight: bold; /* Make the text bold for better visibility */
        color: white; /* Text color */
        text-shadow:
            -1px -1px 0 #000,
            /* Top-left shadow */ 1px -1px 0 #000,
            /* Top-right shadow */ -1px 1px 0 #000,
            /* Bottom-left shadow */ 1px 1px 0 #000; 
        }

        :global(.tab-group > .tab-item *):hover{
          background-color: #c7a870; 
        }
        </style>