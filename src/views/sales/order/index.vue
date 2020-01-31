<template>
  <div id="online-order" class="normal-content">
    <div class="search-row">
      <div class="left">
        <a-select v-model="queryForm.platform" allow-clear placeholder="订单来源">
          <a-select-option value="京东">京东</a-select-option>
          <a-select-option value="拼多多">拼多多</a-select-option>
          <a-select-option value="淘宝">淘宝</a-select-option>
          <a-select-option value="线下">线下</a-select-option>
          <a-select-option value="亚马逊">亚马逊</a-select-option>
          <a-select-option value="其它">其它</a-select-option>
        </a-select>
        <a-input v-model="queryForm.id" allow-clear placeholder="请输入订单号" />
      </div>
      <div class="right">
        <a-button type="primary" @click="getListFn">查询</a-button>
        <a-button @click="resetQueryForm">清空</a-button>
      </div>
    </div>
    <div class="btn-row">
      <a-button type="primary">新增订单</a-button>
    </div>
    <a-table
      :data-source="tableData"
      bordered
      row-key="id"
      :pagination="page"
    >
      <a-table-column title="订单号" data-index="id" />
      <a-table-column title="商品名" data-index="name" />
      <a-table-column title="单价" data-index="price" />
      <a-table-column title="数量" data-index="quantity" />
      <a-table-column title="总价" data-index="sum" />
      <a-table-column title="订单来源" data-index="platform" />
      <a-table-column title="操作" fixed="right" width="110px">
        <template slot-scope="row">
          <a @click="editFn(row)">修改</a>
          <a-divider type="vertical" />
          <a>删除</a>
        </template>
      </a-table-column>
    </a-table>
    <router-view />
  </div>
</template>

<script>
import { getList } from './api'

export default {
  data() {
    return {
      queryForm: {
        id: '',
        platform: undefined
      },
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
    this.getListFn()
  },
  methods: {
    resetQueryForm() {
      this.queryForm = {}
      this.getListFn()
    },
    getListFn() {
      getList(this.queryForm).then(res => {
        this.tableData = res.list
      })
    },
    editFn(row) {
      this.$router.push({
        name: 'homePage',
        params: { row }
      })
    }
  }
}
</script>
