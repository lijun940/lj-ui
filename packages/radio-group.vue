<template>
  <div class="hmradio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HmRadioGroup',
  props: {
    value: null
  },
  provide () {
    return {
      RadioGroup: this
    }
  }
}
</script>

<style>

</style>
