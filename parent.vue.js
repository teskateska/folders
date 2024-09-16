Vue.component("parent", {
    template: `
        <v-sheet class="d-flex flex-column">
            <v-list>
                <v-divider></v-divider>
                <v-list-item class="justify-"> 
                    <v-list-item-content class="ml-16 font-weight-bold">
                        <v-list-item-subtitle>
                            Description
                        </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content 
                        class="text-right mr-4 font-weight-bold"
                    >
                        <v-list-item-subtitle>
                            Type
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item-group v-model="selectedMovingTo">
                    <recursive-list
                        v-for="item in rootItems"
                        :key="item.id"
                        :item="item"
                        :items="combinedItems"
                        @expand="handleExpand"
                    ></recursive-list>
                </v-list-item-group>
            </v-list>
            <div class="px-4 py-4" style="width: 100%; position: fixed; bottom: 0;">
                <v-btn
                    block
                    color="success" 
                    class="btnsubmit afBtn afBtn__fill af-success" 
                    :disabled="false" 
                    @click.prevent="handleSubmit()"
                >
                    {{ buttonText }}
                </v-btn>
            </div>
        </v-sheet>
        `,
    data() {
        return {
            selectedMovingFrom: 0,
            selectedMovingTo: 0,
            combinedItems: [],
            optionGroups: [
                {
                    optionGroupId: 2222,
                    name: "Option Group",
                    category: "Option Group",
                },
            ],
            items: [
                {
                    id: 1,
                    name: "fruit",
                    category: "assembly",
                    isExpanded: true,
                    optionGroupId: null,
                    parentId: null,
                },
                {
                    id: 1333,
                    name: "move fruit",
                    category: "assembly",
                    isExpanded: true,
                    optionGroupId: null,
                    parentId: null,
                },
                {
                    id: 2,
                    name: "animals",
                    category: "assembly",
                    optionGroupId: null,
                    parentId: 1,
                },
                {
                    id: 3,
                    name: "countries",
                    category: "assembly",
                    optionGroupId: null,
                    parentId: 2,
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
        isMovingOut() {
            return this.selectedMovingFrom === this.selectedMovingTo;
        },
        rootItems() {
            return this.combinedItems.filter(
                (item) => item.parentId === null && item.optionGroupId === null
            );
        },
        buttonText() {
            if (this.selectedMovingFrom) {
                if (this.isMovingOut) {
                    return "REMOVE ITEM";
                } else {
                    return "MOVE ITEM TO";
                }
            } else {
                return "SELECT AN ITEM";
            }
        },
    },
    methods: {
        handleExpand(id) {
            const target = this.combinedItems.find((item) => item.id === id);
            target.isExpanded = !target.isExpanded;
        },
        handleSubmit() {
            if (!this.selectedMovingFrom) {
                this.selectedMovingFrom = this.selectedMovingTo;
                this.selectedMovingTo = null;
                return;
            }

            const from = this.combinedItems.find(
                (item) => item.id === this.selectedMovingFrom
            );
            if (from.isOptionGroup) {
                alert("Wtf you cannot move an option group.");
                this.selectedMovingFrom = null;
                return;
            }
            console.log("moving ", from.id);

            const to = this.combinedItems.find(
                (item) => item.id === this.selectedMovingTo
            );
            console.log("to ", to.id);

            if (to.isOptionGroup) {
                if (this.isMovingOut) {
                    from.optionGroupId = null;
                } else {
                    from.optionGroupId = to.id;
                }
            } else {
                if (this.isMovingOut) {
                    from.parentId = null;
                } else {
                    from.parentId = to.id;
                }
            }

            console.log("Here the updated object", from);

            this.selectedMovingFrom = null;
            this.selectedMovingTo = null;
        },
    },
});
