<template>
  <div class="hello">
    <p>hello</p>
  </div>

</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello {
  }

  .user {
    margin: {
      top: 12px;
      left: 24px;
      right: 24px;
    };

    :hover {
      color: #1890ff;
    }
  }
</style>
