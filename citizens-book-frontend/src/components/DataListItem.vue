<template>
  <div>
    <div class="list-item-text">
      {{ item.name }}
    </div>
    <CitizenItem
        :citizens="item.citizens"
    ></CitizenItem>
  </div>
</template>

<script>
import CitizenItem from "@/components/CitizenItem";

export default {
  name: "DataListItem",
  components: {CitizenItem},
  props: ["item"]
}
</script>

<style scoped>

</style>