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
                    :parentId="parentId"
                    @expand="handleExpand"
                  ></recursive-list>
                </v-list-item-group>
            </v-list>
            <v-btn 
              block color="success" 
              class="btnsubmit afBtn afBtn__fill af-success mx-4" 
              :disabled="false" 
              @click.prevent=""
              >
              {{ parentId === selectedItem ?
                  "REMOVE FROM ASSEMBLY" : "MOVE TO ASSEMBLY" }}
            </v-btn>
            </div>
        </v-card>
        `,
  data() {
    return {
      parentId: 4,
      selectedItem: 4,
      optionGroups: [
        {
          optionGroupId: 2222,
          name: "option grp",
          category: "option group",
          isExpanded: true,
        },
      ],
      items: [
        {
          id: 1,
          name: "parent",
          category: "assembly",
          isExpanded: true,
          optionGroupId: null,
          parentId: null,
        },
        {
          id: 2,
          name: "Bungus",
          category: "assembly",
          isExpanded: true,
          optionGroupId: null,
          parentId: null,
        },
        {
          id: 3,
          name: "child",
          category: "assembly",
          isExpanded: true,
          optionGroupId: null,
          parentId: 1,
        },
        {
          id: 4,
          name: "child of child!",
          category: "assembly",
          isExpanded: true,
          optionGroupId: null,
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
