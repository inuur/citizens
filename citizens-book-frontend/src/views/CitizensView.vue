<template>
  <div class="home">
    <DataList
        v-if="citizens"
        :data="citizens"
        :fields="fields"
        :depth="0"
    ></DataList>
  </div>
</template>

<script>
import DataList from "@/components/DataList";
export default {
  name: 'CitizensView',
  data() {
    return {
      citizens: null,
      fields: null
    }
  },
  components: {DataList},
  mounted() {
    fetch("http://localhost:3000/citizens").then(response => {
      return response.json()
    }).then(data => {
      this.citizens = data.citizens
      this.fields = data.meta.fields
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
