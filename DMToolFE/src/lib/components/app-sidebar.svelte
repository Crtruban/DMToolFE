<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import {
        Columns4,
        Mountain,
        Trophy,
        FishSymbol,
        HandPlatter,
        Bone,
        Shield,
        Droplet,
        Sparkle,
        MapIcon,
    } from "@lucide/svelte/icons";
    import { Modal } from "flowbite-svelte";
    let clickOutsideModal = false;
    let placement: any;
    let open = false;
    let id: any;

    const setPlacement = () => {
        placement = "center"; // text in the button
        id = `center-modal`;
        open = !open;
    };

    let sections = [
        {
            title: "Dark Cavern",
            url: "darkCavern",
            icon: Mountain,
        },
        {
            title: "Glittering Cavern",
            url: "glitter",
            icon: Sparkle,
        },
        {
            title: "Dungeon",
            url: "dungeon",
            icon: Columns4,
        },
        {
            title: "Kraken Door",
            url: "krack",
            icon: FishSymbol,
        },
        {
            title: "Ghoul Dining Room / Blood Fountain",
            url: "ghoulRoom",
            icon: HandPlatter,
        },
        {
            title: "Ghoul Hall",
            url: "ghoulHall",
            icon: Bone,
        },
        {
            title: "Shield Hall",
            url: "shieldHall",
            icon: Shield,
        },
        {
            title: "Water Trap Chamber",
            url: "waterTrap",
            icon: Droplet,
        },
        {
            title: "Zaldara's Vault",
            url: "vault",
            icon: Trophy,
        },
    ];
    export { sections };
</script>

<Sidebar.Root>
    <Sidebar.Content>
        <Sidebar.Group>
            <Sidebar.GroupLabel>Zaldara's Dungeon</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
                <Sidebar.Menu>
                    {#each sections as item (item.title)}
                        <Sidebar.MenuItem>
                            <Sidebar.MenuButton>
                                {#snippet child({ props })}
                                    <a href={item.url} {...props}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                {/snippet}
                            </Sidebar.MenuButton>
                        </Sidebar.MenuItem>
                    {/each}
                </Sidebar.Menu>
            </Sidebar.GroupContent>
        </Sidebar.Group>
    </Sidebar.Content>
</Sidebar.Root>


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
