<template>
  <div class="hello">
    <a-breadcrumb :routes="routes">
      <template slot="itemRender" slot-scope="{route, params, routes, paths}">
      <span>
        {{route.breadcrumbName}}
      </span>
      </template>
    </a-breadcrumb>
    <br/>
    {{$route.path}}
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
      const {lang} = this.$route.params
      return {
        basePath: ``,
        routes: [
          {
            path: 'home',
            breadcrumbName: '首页'
          },
          {
            path: '',
            breadcrumbName: '一级面包屑'
          },
          {
            path:'hello',
            breadcrumbName:'哈哈'
          }
        ],
      }
    },
    methods: {},
    watch: {}
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
