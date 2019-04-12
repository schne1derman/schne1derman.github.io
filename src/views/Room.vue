<template>
  <div>
    <h5>Desk</h5>
    <b-button-group size="sm">
      <b-button
        v-for="(btn, idx) in buttons"
        :key="idx"
        :pressed.sync="btn.state"
        variant="primary"
      >
        {{ btn.caption }}
      </b-button>
    </b-button-group>
    <p>Pressed States: <strong>{{ btnStates }}</strong></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myToggle: false,
      buttons: [
        { caption: "Under Bed", state: false },
        { caption: "Left Corner", state: false },
        { caption: "Right Corner", state: false },
        { caption: "Middle", state: false }
      ]
    };
  },
  computed: {
    btnStates() {
      return this.buttons.map(btn => btn.state);
    }
  }
};
</script>
