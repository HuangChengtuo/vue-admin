<template>
  <div id="online-order">
    <a-table
      :data-source="tableData"
      bordered
      row-key="id"
      :pagination="page"
      :scroll="{x:800}"
    >
      <a-table-column title="订单号" data-index="id" />
      <a-table-column title="商品名" data-index="name" />
      <a-table-column title="单价" data-index="price" />
      <a-table-column title="数量" data-index="quantity" />
      <a-table-column title="总价" data-index="sum" />
      <a-table-column title="订单来源" data-index="source" />
      <a-table-column title="操作" fixed="right" width="110px">
        <template slot-scope="row">
          <a @click="editFn(row)">修改</a>
          <a-divider type="vertical" />
          <a>删除</a>
        </template>
      </a-table-column>
    </a-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      tableData: [],
      page: {
        showTotal: total => '共 ' + total + ' 条',
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ['10', '30', '50']
      }
    }
  },
  created() {
    axios.get('/onlineOrder/list').then(res => {
      console.log(res.data)
      this.tableData = res.data
    })
  },
  methods: {
    editFn(row) {
      this.$router.push({
        name: 'home',
        params: {row}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>