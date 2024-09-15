Vue.component("parent", {
  template: `
        <v-card>
            <v-list>
                <v-list-item-group
                  v-model="selectedItem"
                >
                  <recursive-list
                    v-for="item in rootItems"
                    :key="item.id"
                    :item="item"
                    :items="items"
                    @expand="handleExpand"
                  ></recursive-list>
                </v-list-item-group>
            </v-list>
        </v-card>
        `,
  data() {
    return {
      selectedItem: 1,
      items: [
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
        {
          id: 4,
          name: "child of child!",
          category: "apple",
          isExpanded: false,
          parentId: 3,
        },
      ],
    };
  },
  watch: {
    selectedItem() {
      console.log(this.selectedItem);
    },
  },
  computed: {
    rootItems() {
      return this.items.filter((item) => item.parentId === null);
    },
  },
  methods: {
    handleExpand(id) {
      const target = this.items.find((item) => item.id === id);
      target.isExpanded = !target.isExpanded;
    },
  },
});
