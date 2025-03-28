<script lang="ts">
  import { Card, Tabs, TabItem as Tab } from "flowbite-svelte";
  let title = "Glittering Cavern";
  let src = "/glitteringCavern.png";
</script>

<span>
  <h1>{title}</h1>
  <div style={"display: flexBox"}>
    <div class="flex justify-center">
      <img
        {src}
        alt="map"
        class="object-cover rounded-lg"
        style={"width:40%"}
      />
      <Card
        class="scroll-card flex justify-right"
        style={"width:25%; height: 25%"}
      >
        <Tabs class="tab-group" tabStyle="full">
          <Tab open class="tab-item h5" title="Z2">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Skeleton Landing: Read as players enter
            </h5>
            <Card class="scroll-card">
              A voice from the darkness whispers with the dry rattle of death
              and malice. “By mistake or by foolishness, you have come too far.
              Your soul will be used to feed my endlessness.”
            </Card>
            If the two skeletons here have remained hidden behind the column, add:
            <Card class="scroll-card">
              Out of the darkness, two human skeletons move forward, armed and
              armored. Their ligaments and bones creak and twist in with
              unforgettable sounds.
            </Card>
            The voice is created by a magic mouth spell Zaldara cast on the south
            wall of this area. It is triggered whenever a creature enters this area.
            Ceiling. The ceiling is 15 feet high in this area.
          </Tab>
          <Tab class="tab-item" title="Z3">
            <h5
              class="tab-header"
            >
              Z3: Glittering Ooze Lair
            </h5>
            <Card class="scroll-card">
              The sound of dripping water grows more rapid here. Drops hit the
              ground so frequently, it’s almost as if the stalactites are
              creating a light rain. In the north wall, there’s an opening 10
              feet above the ground big enough for a crouched human.
            </Card>
            <p>
              A <b>glittering ooze</b> disguised as a stalactite clings to the ceiling,
              waiting for a character to walk beneath it so it can attack.
              <br/>
              <b>Ceiling.</b> The ceiling is 15 feet high in this area. Crawlspace. A
              successful DC 15 Strength (Athletics) check is required to climb
              the wet wall to get into the area where the gray ooze likes to
              feast on its victims. There are half-dissolved bones scattered in
              the space.
              <br/>
              <b>Wet Floor.</b> Each time a creature moves more than half
              its speed across the floor of this area, it must succeed on a DC
              10 Dexterity (Acrobatics) check or fall prone. 
            <br/>
              <b>Treasure.</b> A character who searches through the bones in the crawlspace finds a
              half-dissolved lead case that holds 10 +1 bolts.
            </p>
          </Tab>
          <Tab class="tab-item" title="Z4">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Z4: Description
            </h5>
            <p>
              A hidden chamber lies beyond the glittering cavern. The chamber
              contains a treasure chest protected by a magical trap. A
              successful DC 15 Intelligence (Arcana) check reveals the trap and
              how to disable it.
            </p>
          </Tab>
        </Tabs>
      </Card>
    </div>
  </div>
  <br />
  <br />
  <div class="flex justify-between">
    <span style="width: 40%; padding-left:10%">
      <Card>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Notes for player activity
        </h5>
        <ul>
          <li>Any players without dark vision will not be able to see.</li>
          <li>
            If a player cretes a light source(Either through spells, or lighting
            a torch) they will see glimmering coming from the stairway on the
            south western side.
          </li>
          <br />
          <br />
          <li>
            <span class="font-bold">Skull Door</span>. The door that leads to
            area Z12 is locked and trapped. A detect magic spell reveals the
            door radiates an aura of necromancy magic. A successful DC 15
            Intelligence (Arcana) check recognizes the trap for what it is and
            reveals how to disable it. The trap is triggered when a creature
            that is not undead touches the door, an attempt to pick the door’s
            lock fails, or the door is attacked. The skull’s eyes emit a line of
            necrotic energy that is 15 feet long and 5 feet wide that shoots
            down the stairs. Each creature in the line must succeed on a DC 10
            Constitution saving throw or gain one level of exhaustion. Creatures
            that fail this saving throw by 5 or more gain two levels of
            exhaustion. Scratching out both the skull’s eyes with a weapon or
            tool disables the trap.
          </li>
        </ul>
      </Card>
    </span>
    <span style="width: 40%; padding-right: 10%;">
      <Card>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Dungeon Flow
        </h5>
        <ul>
          <li>Going to the north with lead the players to the dungeon</li>
          <li>
            Going south west will lead players to the glittering cavern. Combat
            will start unless sneaking. If players cause a lot of commotion or
            take too long, the skeletons in the glittering cavern will
            investigate. Those with passive perception of 13 or higher will hear
            the skeletons approach.
          </li>
        </ul>
      </Card>
    </span>
  </div>
</span>

<style>
  :global(.tab-group) {
    width: 100%;
  }

  :global(.tab-item) {
    flex: 1; /* Make each tab header take equal space */
    text-align: center; /* Center-align the text */
  }

  /* Scroll container styling */
  :global(.scroll-card) {
    background: #fdf5e6; /* Light parchment color */
    border: 2px solid #8b4513; /* Dark brown border for an aged look */
    border-radius: 15px; /* Rounded edges to mimic a scroll */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
    padding: 20px; /* Add spacing inside the card */
    font-family: "Papyrus", "Cursive", serif; /* Fantasy-style font */
    color: #4b2e2e; /* Dark brown text color */
    background-image: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
    background-size: cover; /* Subtle texture for the parchment */
  }

  /* Add a decorative border effect */
  :global(.scroll-card::before),
  :global(.scroll-card::after) {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    /* border: 2px solid #8b4513; */
    border-radius: 15px;
    top: 5px;
    left: 5px;
    z-index: -1;
    opacity: 0.5;
  }

  /* Add a curled edge effect */
  :global(.scroll-card::after) {
    top: -5px;
    left: -5px;
  }

  /* Optional: Style headings for a fantasy look */
  :global(.scroll-card h5) {
    font-family: "Uncial Antiqua", serif; /* Fantasy-style font for headings */
    font-size: 1.5rem;
    text-align: center;
    color: #8b4513; /* Darker brown for headings */
    margin-bottom: 10px;
  }

  /* Optional: Style list items for better readability */
  :global(.scroll-card ul) {
    list-style-type: none;
    padding-left: 20px;
  }

  :global(.scroll-card li) {
    margin-bottom: 10px;
  }
</style>
