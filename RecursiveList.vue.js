Vue.component("RecursiveList", {
  template: `
      <div>
        <template
          v-for="(item, i) in rootItems"
        >
          <v-list-item
            v-for="(item, i) in rootItems"
            :class="padding"
            :key="item.id"
          >
              <v-list-item-icon>
                <v-icon @click.prevent="handleExpand(i)">
                  {{item.isExpanded ?  'mdi-menu-down' : 'mdi-menu-right'}}
                </v-icon>
              <v-icon class="pl-4">mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{item.name}}</v-list-item-title>
              </v-list-item-content>
            <v-list-item-content>
              <v-list-item-subtitle class="text-right">{{item.category}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <recursive-list
            :v-if="hasChildren(item.id)"
            :items="items"
            :parentId="item.id"
            :paddingScalar="paddingScalar + 1"
          >
          </recursive-list>
        </template>
      </div>
  `,
  props: {
    item: {
      type: Object,
      required,
    },
    items: {
      type: Array,
      default: [],
    },
    parentId: {
      type: Number,
      default: null,
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
      this.items[id].isExpanded = !this.items[id].isExpanded;
    },
    hasChildren(id) {
      return this.items.filter((item) => item.parentId == id).length;
    },
  },
  computed: {
    rootItems() {
      return this.items.filter((items) => items.parentId == this.parentId);
    },
    padding() {
      return "pl-" + this.paddingScalar * 4;
    },
  },
});
