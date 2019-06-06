<template>
  <div
    class="ScrollBox"
    ref="scroll_box"
    v-infinite-scroll="() => getItems(numOfItems, currentPage)"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="200">
    <template v-if="data.length">
      <box
        v-for="item in data"
        :value="item.value"
        :id="item.id"
        :key="item.id"/>
    </template>
  </div>
</template>

<script>
  import { createMock, data } from "../mockData";

  export default {
    name: "ScrollBox",

    components: {
      Box: () => import("./Box")
    },

    data() {
      return {
        data: [],
        cachedData: [],
        busy: false,
        currentPage: 1,
        prevItemNum: 0,
        numOfItems: 5
      };
    },

    methods: {
      getItems(size, page) {
        this.busy = true;

        setTimeout(() => {
          let start, end;

          if (page === 1) {
            start = 0;
            end = size;
          } else {
            start = this.prevItemNum;
            end = this.prevItemNum + this.numOfItems;
          }

          let additionalData = page === 1 ? data.slice(start, end) : this.cachedData;
          this.data = [...this.data, ...additionalData];

          this.prefetchData(end, end + 5);
          this.changeHeight();

          this.busy = false;
          this.prevItemNum = end;
          this.currentPage += 1;
        }, 1000);
      },

      prefetchData(start, end) {
        this.cachedData = data.slice(start, end);
      },

      changeHeight() {
        let box = this.$refs.scroll_box;
        let height = box.clientHeight;

        box.style.height = `${height + 300}px`;
      }
    },

    beforeMount() {
      createMock();
      this.getItems(5, 1);
    }
  };
</script>

<style scoped>
  .ScrollBox {
    height: 1200px;
    width: 100%;
    margin: 0 auto;
  }
</style>