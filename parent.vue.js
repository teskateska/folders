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
        //{
        //          optionGroupId: 2222,
        //          name: "option grp",
        //          category: "option group",
        //},
      ],
      items: [
        {
          id: 1,
          name: "Roman Empire",
          category: "assembly",
          isExpanded: true,
          optionGroupId: null,
          parentId: null,
        },
        {
          id: 2,
          name: "Foundation",
          category: "assembly",
          optionGroupId: null,
          parentId: 1,
        },
        {
          id: 3,
          name: "Founding of Rome",
          category: "assembly",
          optionGroupId: null,
          parentId: 2,
        },
        {
          id: 4,
          name: "753 BCE - Romulus and Remus",
          category: "assembly",
          optionGroupId: null,
          parentId: 3,
        },
        {
          id: 5,
          name: "Roman Kingdom",
          category: "assembly",
          optionGroupId: null,
          parentId: 1,
        },
        {
          id: 6,
          name: "753 BCE - 509 BCE",
          category: "assembly",
          optionGroupId: null,
          parentId: 5,
        },
        {
          id: 7,
          name: "Roman Republic",
          category: "assembly",
          optionGroupId: null,
          parentId: 1,
        },
        {
          id: 8,
          name: "509 BCE - 27 BCE",
          category: "assembly",
          optionGroupId: null,
          parentId: 7,
        },
        {
          id: 9,
          name: "Punic Wars",
          category: "assembly",
          optionGroupId: null,
          parentId: 7,
        },
        {
          id: 10,
          name: "First Punic War (264-241 BCE)",
          category: "assembly",
          optionGroupId: null,
          parentId: 9,
        },
        {
          id: 11,
          name: "Second Punic War (218-201 BCE)",
          category: "assembly",
          optionGroupId: null,
          parentId: 9,
        },
        {
          id: 12,
          name: "Third Punic War (149-146 BCE)",
          category: "assembly",
          optionGroupId: null,
          parentId: 9,
        },
        {
          id: 13,
          name: "Roman Empire",
          category: "assembly",
          optionGroupId: null,
          parentId: 1,
        },
        {
          id: 14,
          name: "27 BCE - 476 CE (Western)",
          category: "assembly",
          optionGroupId: null,
          parentId: 13,
        },
        {
          id: 15,
          name: "27 BCE - 1453 CE (Eastern)",
          category: "assembly",
          optionGroupId: null,
          parentId: 13,
        },
        {
          id: 16,
          name: "Julio-Claudian Dynasty",
          category: "assembly",
          optionGroupId: null,
          parentId: 13,
        },
        {
          id: 17,
          name: "Augustus (27 BCE - 14 CE)",
          category: "assembly",
          optionGroupId: null,
          parentId: 16,
        },
        {
          id: 18,
          name: "Tiberius (14-37 CE)",
          category: "assembly",
          optionGroupId: null,
          parentId: 16,
        },
        {
          id: 19,
          name: "Caligula (37-41 CE)",
          category: "assembly",
          optionGroupId: null,
          parentId: 16,
        },
        {
          id: 20,
          name: "Claudius (41-54 CE)",
          category: "assembly",
          optionGroupId: null,
          parentId: 16,
        },
        {
          id: 21,
          name: "Nero (54-68 CE)",
          category: "assembly",
          optionGroupId: null,
          parentId: 16,
        },
        {
          id: 22,
          name: "Five Good Emperors",
          category: "assembly",
          optionGroupId: null,
          parentId: 13,
        },
        {
          id: 23,
          name: "Nerva (96-98 CE)",
          category: "assembly",
          optionGroupId: null,
          parentId: 22,
        },
        {
          id: 24,
          name: "Trajan (98-117 CE)",
          category: "assembly",
          optionGroupId: null,
          parentId: 22,
        },
        {
          id: 25,
          name: "Hadrian (117-138 CE)",
          category: "assembly",
          optionGroupId: null,
          parentId: 22,
        },
        {
          id: 26,
          name: "Antoninus Pius (138-161 CE)",
          category: "assembly",
          optionGroupId: null,
          parentId: 22,
        },
        {
          id: 27,
          name: "Marcus Aurelius (161-180 CE)",
          category: "assembly",
          optionGroupId: null,
          parentId: 22,
        },
        {
          id: 28,
          name: "Crisis of the Third Century",
          category: "assembly",
          optionGroupId: null,
          parentId: 13,
        },
        {
          id: 29,
          name: "235-284 CE",
          category: "assembly",
          optionGroupId: null,
          parentId: 28,
        },
        {
          id: 30,
          name: "Diocletian and Tetrarchy",
          category: "assembly",
          optionGroupId: null,
          parentId: 13,
        },
        {
          id: 31,
          name: "284-305 CE",
          category: "assembly",
          optionGroupId: null,
          parentId: 30,
        },
        {
          id: 32,
          name: "Constantine and Christianity",
          category: "assembly",
          optionGroupId: null,
          parentId: 13,
        },
        {
          id: 33,
          name: "306-337 CE",
          category: "assembly",
          optionGroupId: null,
          parentId: 32,
        },
        {
          id: 34,
          name: "Edict of Milan (313 CE)",
          category: "assembly",
          optionGroupId: null,
          parentId: 32,
        },
        {
          id: 35,
          name: "Fall of Western Roman Empire",
          category: "assembly",
          optionGroupId: null,
          parentId: 13,
        },
        {
          id: 36,
          name: "476 CE - Odoacer deposes Romulus Augustulus",
          category: "assembly",
          optionGroupId: null,
          parentId: 35,
        },
        {
          id: 37,
          name: "Eastern Roman Empire (Byzantine)",
          category: "assembly",
          optionGroupId: null,
          parentId: 13,
        },
        {
          id: 38,
          name: "Justinian I (527-565 CE)",
          category: "assembly",
          optionGroupId: null,
          parentId: 37,
        },
        {
          id: 39,
          name: "Fall of Constantinople",
          category: "assembly",
          optionGroupId: null,
          parentId: 37,
        },
        {
          id: 40,
          name: "1453 CE - Ottoman conquest",
          category: "assembly",
          optionGroupId: null,
          parentId: 39,
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
        isExpanded: false,
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
