Vue.component("todo-item", {
  props: ["todo"],
  template: `
          <v-list-item>
              <v-list-item-action>
                  <v-checkbox v-model="todo.done"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                  <v-list-item-title :class="{ 'text-decoration-line-through': todo.done }">
                      {{ todo.text }}
                  </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                  <v-btn icon @click="$emit('remove')">
                      <v-icon>mdi-delete</v-icon>
                  </v-btn>
              </v-list-item-action>
          </v-list-item>
      `,
});
