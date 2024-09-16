Vue.component("RecursiveList", {
    template: `
      <div>
          <v-list-item
            :class="padding"
            :key="item.id"
            :value="item.id"
          >
            <v-list-item-icon @click.prevent="handleExpand(item.id)"
                class="mr-4"
            >
              <v-icon>
                {{item.isExpanded ?  'mdi-menu-down' : 'mdi-menu-right'}}
              </v-icon>
              <v-icon class="pl-2">
                {{item.isExpanded ? 'mdi-folder-open' : 'mdi-folder'}}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{item.name}}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title class="text-right">
                {{item.category}}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-expand-transition>
            <div 
              v-show="hasChildren && item.isExpanded"
            >
                <recursive-list 
                    v-for="child in children"
                    :key="child.id"
                    :item="child"
                    :items="items"
                    :paddingScalar="paddingScalar + 1"
                    @expand="handleExpand"
                >
              </recursive-list>
            </div>
          </v-expand-transition>
      </div>
  `,
    props: {
        item: {
            type: Object,
            required: true,
        },
        items: {
            type: Array,
            default: [],
        },
        paddingScalar: {
            type: Number,
            default: 1,
        },
    },
    methods: {
        handleExpand(id) {
            this.$emit("expand", id);
        },
    },
    computed: {
        children() {
            if (this.item.isOptionGroup) {
                return this.items.filter(
                    (item) =>
                        item.optionGroupId === this.item.id &&
                        item.parentId === null
                );
            } else {
                return this.items.filter(
                    (item) => item.parentId === this.item.id
                );
            }
        },
        hasChildren() {
            return this.children.length;
        },
        padding() {
            return "pl-" + this.paddingScalar * 4;
        },
    },
});
