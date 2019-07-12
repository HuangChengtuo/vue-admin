<template>
  <div class="hello">
    hello!
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
      return {
        current: ['mail'],
        openKeys: ['sub1']
      }
    },
    methods: {
      handleClick(e) {
        console.log('click', e)
      },
      titleClick(e) {
        console.log('titleClick', e)
      },
    },
    watch: {
      openKeys(val) {
        console.log('openKeys', val)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
