<template>
  <div class="search grid grid-cols-12">
    <t-input
      @input="submitSearch"
      v-model="inputValue"
      placeholder="Search"
      name="my-input"
    />
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      inputValue: this.value,
    };
  },
  methods: {
    submitSearch() {
      this.$emit("input", this.inputValue);
    },
  },
};
</script>

<style lang="scss">
.search {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.search button {
  margin-left: 10px;
}
</style>



