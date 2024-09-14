Vue.component("parent", {
  template: `
        <v-card>
            <v-list>
                <v-list-item-group
                  v-model="selectedItem"
                >
                  <recursive-list
                      :items="list"
                  ></recursive-list>
                </v-list-item-group>
            </v-list>
        </v-card>
        `,
  data() {
    return {
      selectedItem: 1,
      list: [
        {
          id: 1,
          name: "parent",
          category: "cool person",
          isExpanded: false,
          parentId: null,
        },
        {
          id: 2,
          name: "Bungus",
          category: "fluppas",
          isExpanded: false,
          parentId: null,
        },
        {
          id: 3,
          name: "child",
          category: "apple",
          isExpanded: false,
          parentId: 1,
        },
      ],
    };
  },
});
