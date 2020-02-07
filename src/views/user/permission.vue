<template>
  <div id="permission" class="normal-content">
    <a-tree
      v-model="permission"
      checkable
      checkStrictly
      defaultExpandAll
      :replace-fields="replaceFields"
      :tree-data="treeData"
    >
      <template slot="path" slot-scope="scope">
        {{ scope }}
      </template>
    </a-tree>
    <div class="bottom-btn-row">
      <a-button html-type="submit" type="primary" @click="changePermission">保存</a-button>
    </div>
  </div>
</template>
<script>
import cookie from 'js-cookie'

export default {
  data() {
    return {
      permission: JSON.parse(cookie.get('permission')),
      replaceFields: { key: 'name' },
      treeData: JSON.parse(JSON.stringify(this.$router.options.routes))
    }
  },
  created() {
    this.validateArr(this.treeData)
    this.formatArr(this.treeData)
  },
  methods: {
    formatArr(arr) {
      for (const route of arr) {
        route.title = route.meta ? route.meta.title : ''
        if (route.children) {
          this.formatArr(route.children)
        }
      }
    },
    validateArr(arr) {
      let i = 0
      for (i = 0; i < arr.length; i++) {
        if (arr[i].show) {
          if (this.permission.includes('all')) {
            this.permission.push(arr[i].name)
          }
        } else {
          arr.splice(i, 1)
          i--
        }
      }
    },
    changePermission() {
      this.$message.success('权限修改成功')
      if (this.permission.checked) {
        cookie.set('permission', this.permission.checked)
      }
    }
  }
}
</script>
