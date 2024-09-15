Vue.component("RecursiveList", {
  template: `
      <div>
          <v-list-item
            :class="padding"
            :key="item.id"
            :value="item.id"
          >
            <v-list-item-icon>
              <v-icon @click.prevent="handleExpand(item.id)">
                {{item.isExpanded ?  'mdi-menu-down' : 'mdi-menu-right'}}
              </v-icon>
              <v-icon class="pl-4">mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{item.name}}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-subtitle class="text-right">
                {{item.category}}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <template 
            v-if="hasChildren && item.isExpanded"
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
          </template>
        </template>
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
  data() {
    return {
      selectedItem: 1,
    };
  },
  methods: {
    handleExpand(id) {
      this.$emit("expand", id);
    },
  },
  computed: {
    children() {
      return this.items.filter((item) => item.parentId === this.item.id);
    },
    hasChildren() {
      return this.children.length;
    },
    padding() {
      return "pl-" + this.paddingScalar * 4;
    },
  },
});
