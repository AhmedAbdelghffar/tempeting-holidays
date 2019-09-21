<template>
  <div class="hotel-list-items-tabs">
    <template>

      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>Item</v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>


        <v-expansion-panel>
          <v-expansion-panel-header>Item</v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>



        <v-expansion-panel>
          <v-expansion-panel-header ref="options" @click="setParentHeight('options')">Item</v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>



        <v-expansion-panel>
          <v-expansion-panel-header>Item</v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels>

    </template>
  </div>
</template>

<script>
  export default {
    name: "hotel-list-item-tabs",
    methods: {
      setParentHeight(ele) {
       let parent = this.$refs[ele].$el.closest('.hotel-card')
       let content = this.$refs[ele].$el.closest('.v-expansion-panel')
        parent.style.marginBottom = "100px"
      }
    }
  }
</script>

<style scoped>

</style>