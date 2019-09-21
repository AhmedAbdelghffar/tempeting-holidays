<template>
    <v-navigation-drawer
            app
            persistent
            v-model="drawerToggle"
            mobile-break-point="991"
            width="260"
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">
                    Application
                </v-list-item-title>
                <v-list-item-subtitle>
                    subtext
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>



        <v-list
                dense
                nav
        >
            <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.link"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props: {
          drawer: {
            type: Boolean,
            default: () => {
              return true
            }
          }
        },
        data () {
            return {
                items: [
                    { title: 'Home', icon: 'dashboard', link:'/' },
                    { title: 'About', icon: 'question_answer', link:'/about' }
                ],
                drawerToggle: true
            }
        },
      watch: {
          drawer() {
            this.drawerToggle = !this.drawerToggle
          }
      }
    }
</script>

<style scoped>

</style>