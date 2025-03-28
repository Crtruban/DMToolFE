<script lang="ts">
  import { Card, Tabs, TabItem as Tab } from "flowbite-svelte";
  let title = "Water Trap Chamber (Z11)";
  let src = "/waterTrap.png";
</script>

<span>
  <h1>{title}</h1>
  <div style={"display: flexBox"}>
    <div class="flex justify-center">
      <img
        {src}
        alt="map"
        class="object-cover rounded-lg"
        style={"width:20%;"}
      />
      <Card
        class="scroll-card flex justify-right"
        style={"width:25%; height: 25%"}
      >
        <Tabs class="tab-group" tabStyle="full">
          <Tab open class="tab-item h5" title="Z8">
            <h5 class="tab-header">Ghoul Hall</h5>
            <Card class="scroll-card">
              A strong mildew smell permeates this room. Green algae grows like
              moss from cracks in the walls, floor, and ceiling. A skeleton lies
              at the room’s center, its hand caught in a closed, steel trapdoor.
            </Card>
            <br /><br />
            Behind the shield are are two rusty <b>flying swords</b>
            that attack any creature that removes the shield from the wall. The two
            levels of this chamber are 10 feet apart and connected by the stairs.<br
            />
            <b>Treasure.</b> The shield on the wall is a shield of missile attraction
            that appears to be an arrowcatching shield.
          </Tab>
          <Tab class="tab-item" title="Z9">
            <h5 class="tab-header">Z9: Stairs Up</h5>
            <Card class="scroll-card">
              Stone stairs curl up in a spiral, completely filled with corpses.
              From the cries of battle, the ring of steel, and the scent of fire
              and blood, you know the battle upstairs rages as the Harpers take
              on the minions of Zaldara. The best way to help the Harpers is to
              stay down here and find the lich’s phylactery.
            </Card>
            <br />
            <p>
              The stair case is completely blocked off with corpses and gore.
              Players can certainly move the corpse to ascend the stairs, but
              this will be a fruitless effort. If this continues for more than
              neccesarry send a <b>Flesh Golem</b> or two emerging from the corpses
              to fight and hopefully deter players.
            </p>
          </Tab>
        </Tabs>
      </Card>
    </div>
  </div>
  <br />
  <br />
  <div class="flex justify-between">
    <span class="justify-center centered-element" style="width: 35%;">
      <Card class="scroll-card">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Dungeon Flow
        </h5>
        <ul>
          <li>
            If the players don't interact with the shield, they can continue
            onto Z11, AKA the Water Trap Room.
          </li>
        </ul>
      </Card>
      <br />
      <br />
    </span>
  </div>
</span>
