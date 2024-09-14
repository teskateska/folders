Vue.component("todo-list", {
  template: `
          <div>
              <v-text-field
                  v-model="newTodo"
                  label="New Todo"
                  @keyup.enter="addTodo"
              ></v-text-field>
              <v-btn color="primary" @click="addTodo">Add Todo</v-btn>
              <v-list>
                  <todo-item
                      v-for="(todo, index) in todos"
                      :key="todo.id"
                      :todo="todo"
                      @remove="removeTodo(index)"
                  ></todo-item>
              </v-list>
          </div>
      `,
  data: function () {
    return {
      newTodo: "",
      todos: [
        { id: 1, text: "Learn Vue", done: false },
        { id: 2, text: "Learn Vuetify", done: false },
        { id: 3, text: "Build something awesome", done: false },
      ],
      nextTodoId: 4,
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodo.trim().length === 0) {
        return;
      }
      this.todos.push({
        id: this.nextTodoId++,
        text: this.newTodo,
        done: false,
      });
      this.newTodo = "";
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1);
    },
  },
});
