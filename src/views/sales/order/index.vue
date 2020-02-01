<template>
  <div v-if="isIndex" id="online-order" class="normal-content">
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
        <a-select v-model="queryForm.state" allow-clear placeholder="订单状态">
          <a-select-option value="未发货">未发货</a-select-option>
          <a-select-option value="已发货">已发货</a-select-option>
          <a-select-option value="已收货">已收货</a-select-option>
        </a-select>
        <a-input v-model="queryForm.id" allow-clear placeholder="请输入订单号" />
      </div>
      <div class="right">
        <a-button type="primary" @click="getListFn">查询</a-button>
        <a-button @click="resetQueryForm">清空</a-button>
      </div>
    </div>
    <div class="btn-row">
      <a-button type="primary" @click="$router.push({name:'orderAdd'})">新增订单</a-button>
    </div>
    <a-table
      :data-source="tableData"
      bordered
      row-key="id"
      :pagination="page"
    >
      <a-table-column title="订单号" data-index="id" />
      <a-table-column title="商品名" data-index="goodsName" />
      <a-table-column title="单价" data-index="price" />
      <a-table-column title="数量" data-index="quantity" />
      <a-table-column title="总价" data-index="sum" />
      <a-table-column title="订单来源" data-index="platform" />
      <a-table-column title="订单状态" data-index="state" />
      <a-table-column title="操作" fixed="right" width="110px">
        <template slot-scope="row">
          <a @click="editFn(row)">修改</a>
          <a-divider type="vertical" />
          <a-popconfirm title="确认删除订单？" ok-text="确认" cancel-text="取消" @confirm="deleteFn(row)">
            <a>删除</a>
          </a-popconfirm>
        </template>
      </a-table-column>
    </a-table>
  </div>
  <router-view v-else />
</template>

<script>
import { getList } from './api'

export default {
  data() {
    return {
      isIndex: false,
      queryForm: {
        id: '',
        platform: undefined,
        state: undefined
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
    if (this.$route.name === 'order') {
      this.getListFn()
      this.isIndex = true
    }
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
        name: 'orderEdit',
        query: { id: row.id }
      })
    },
    deleteFn(row) {
      this.$message.success('删除成功')
      this.getListFn()
    }
  }
}
</script>
