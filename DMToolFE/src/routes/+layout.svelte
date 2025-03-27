<script lang="ts">
    import "../app.css";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import AppSidebar from "$lib/components/app-sidebar.svelte";
    import { MapIcon } from "@lucide/svelte/icons";
    import { Modal, Button } from "flowbite-svelte";
    import { mount } from "svelte";
    let clickOutsideModal = $state(false);


    let mapHtml = "<img class=\"mapModal\" alt=\"Zaldara's Dungeon Map\" src={\"/map.png\"} />"



    let { children } = $props();
    let chapters = [
        {
            title: "Home",
            url: "",
        },
        {
            title: "Introduction",
            url: "intro",
        },
        {
            title: "Zaldara's Dungeon",
            url: "baseDungeon/darkCavern",
        },
        {
            title: "Dungeon Map",
            url: "map",
        },
        {
            title: "Combat Encounters",
            url: "combat",
        },
    ];
</script>

<nav>
    {#each chapters as chapter, index}
        <a href="/{chapter.url}">{chapter.title}</a>
    {/each}
    <Button on:click={() => {
        (clickOutsideModal = true)
        }}>
        <MapIcon />
        <span>Dungeon Map</span>
    </Button>
</nav>



<Modal
    title="Map"
    bind:open={clickOutsideModal} autoclose outsideclose
    placement="center"
    style={"width:40%; position: absolute;top: 80px;right: 0;border: 3px solid;" }
>
    <img class="mapModal" alt="Zaldara's Dungeon Map" src={"/map.png"} />
</Modal>
{@render children()}

<style>
    .mapModal {
        opacity: 0.5;
        transition: opacity 0.5s ease-out;
        -moz-transition: opacity 0.5s ease-out;
        -webkit-transition: opacity 0.5s ease-out;
        -o-transition: opacity 0.5s ease-out;
    }
    .mapModal:hover {
        opacity: 1;
    }
</style>
