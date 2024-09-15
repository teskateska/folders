Vue.component("parent", {
  template: `
        <v-card class="d-flex flex-column" style="height: 100%">
          <v-list>
            <v-list-item-group
              v-model="selectedItem"
            >
              <recursive-list
                v-for="item in rootItems"
                :key="item.id"
                :item="item"
                :items="combinedItems"
                :parentId="parentId"
                @expand="handleExpand"
              ></recursive-list>
            </v-list-item-group>
          </v-list>
          <div class="px-4 py-4 mt-auto">
            <v-btn 
              block color="success" 
              class="btnsubmit afBtn afBtn__fill af-success" 
              :disabled="false" 
              @click.prevent="handleSubmit()"
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
      combinedItems: [],
      optionGroups: [
        {
          optionGroupId: 2222,
          name: "option grp",
          category: "option group",
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
          optionGroupId: null,
          parentId: null,
        },
        {
          id: 3,
          name: "child",
          category: "assembly",
          optionGroupId: null,
          parentId: 1,
        },
        {
          id: 4,
          name: "child of child!",
          category: "assembly",
          optionGroupId: null,
          parentId: 3,
        },
        {
          id: 5,
          name: "Option group child!!",
          category: "assembly",
          optionGroupId: 2222,
          parentId: null,
        },
        {
          id: 6,
          name: "this is a child of option group child",
          category: "assembly",
          optionGroupId: 2222,
          parentId: 5,
        },
      ],
    };
  },
  watch: {
    selectedItem() {
      console.log(this.selectedItem);
    },
  },
  mounted() {
    this.combinedItems = [
      ...this.items.map((item) => ({
        ...item,
        isExpanded: true,
        isOptionGroup: false,
      })),
      ...this.optionGroups.map((optionGroup) => ({
        id: optionGroup.optionGroupId,
        name: optionGroup.name,
        category: optionGroup.category,
        isExpanded: true,
        optionGroupId: null,
        isOptionGroup: true,
        parentId: null,
      })),
    ];
  },
  computed: {
    rootItems() {
      return this.combinedItems.filter(
        (item) => item.parentId === null && item.optionGroupId === null
      );
    },
  },
  methods: {
    handleExpand(id) {
      const target = this.combinedItems.find((item) => item.id === id);
      target.isExpanded = !target.isExpanded;
    },
    handleSubmit() {
      const target = this.combinedItems.find(
        (item) => item.id === this.selectedItem
      );
      console.log("moved to: ", target.name);
      console.log(
        target.isOptionGroup ? "its an option group" : "its an assembly"
      );
    },
  },
});
