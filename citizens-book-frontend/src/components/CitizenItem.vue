<template>
  <ul
      v-if="citizens"
  >
    <li
        v-for="citizen of citizens"
        :key="citizen.name"
    >
      <span
          class="list-item-text tooltip"
      >
        {{ citizen.name }}
        <span class="tooltip__text">
          {{ citizen.city.data }} жителей
        </span>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CitizenItem",
  props: ["citizens"]
}
</script>

<style scoped>
.tooltip {
  position: relative;
  cursor: pointer;
}

.tooltip .tooltip__text {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  margin-left: 1rem;
}

.tooltip:hover .tooltip__text {
  visibility: visible;
}
</style>