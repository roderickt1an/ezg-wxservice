<template>
  <div>
    <van-row v-if="!allInvoice.length" style="margin-top:35vh">
      <center @click="create_invoice">
        <van-icon name="add-o" style="color:#952f2a;font-size:30px"/>
        <p style="padding-top:10px">新增发票申请</p>
      </center>
    </van-row>
    <van-row v-else>
      <van-loading style="top:5vh;left:45vw" v-if="loading"></van-loading>
      <van-row v-else>
        <van-cell-group>
          <van-list v-for="(item, index) in allInvoice" :key="index">
            <div>
              <van-cell :title="item.enterprise_name" :value="item.invoice_content" :label="item.invoice_status + ' - ' + item.express_type" />
            </div>
          </van-list>
          <center style="line-height:3em">- 这里是底部 -</center>
        </van-cell-group>
      </van-row>
    </van-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      allInvoice: [

      ],
      loading: false
    }
  },
  methods: {
    get_data(){
      let _self = this
      let url = `api/store/customer/customerInvoiceList`
      let config = {
        params:{
          page: 1,
          pageSize: 1000,
          sortField: "id",
          type: "1"
        }
      }

      function success(res){
        _self.allInvoice = res.data.data.rows
        for(let i = 0; i<_self.allInvoice.length; i++){
          if(_self.allInvoice[i].invoice_status == "applied"){
            _self.allInvoice[i].invoice_status = "未处理"
          }else if(_self.allInvoice[i].invoice_status == "executing"){
            _self.allInvoice[i].invoice_status = "处理中"
          }else if(_self.allInvoice[i].invoice_status == "finished"){
            _self.allInvoice[i].invoice_status = "已完成"
          }else{
            _self.allInvoice[i].invoice_status = "已取消"
          }
        }
      }

      this.$Get(url, config, success)
    },
    create_invoice(){
      this.$router.push({
        name: "invoiceCreate"
      })
    }
  },
  created(){
    let _self = this
    _self.get_data()
    console.log(document.title)
  }
}
</script>

