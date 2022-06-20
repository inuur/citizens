<template>
  <ul class="citizen-sublist">
    <li
        v-for="item of data[fields[depth]]"
        :key="item.name"
    >
      <DataListItem
        :item="item"
      ></DataListItem>
      <DataList
          :depth="depth + 1"
          :data="item"
          :fields="fields"
      ></DataList>
    </li>
  </ul>
</template>

<script>
import DataListItem from "@/components/DataListItem";
export default {
  name: "DataList",
  components: {DataListItem},
  props: ["depth", "fields", "data"]
}
</script>

<style scoped>

</style>