<template class="App">
<div class="bg" >
     

     <el-card :body-style="{ padding: '0px' }" class="home" v-if="flag==1"> 
         <el-row class="title" v-if="flag==1">
           
            <font color="#48a2ff" class="title1" @click="longintitle()">登录</font> 
            <font color="gray" class="title2" @click="registerTitle()">注册 </font>
        </el-row>
        <el-form ref="form" v-model="form" label-width="120px" >
            <el-row :gutter="20">
                <el-col :span="8">
                      <div class="context_txt">
                        <label class="label">用户名</label>
                    </div>
                    <div class="context_txt">
                        <label class="label">密码</label>
                    </div>
                    
                </el-col>
                <el-col :span="16" >   
                    <div class="context_txt">
                        <el-input id="username" v-model="form.username"  placeholder="请输入手机号码或用户名" /> 
                    </div>
                    <div class="context_txt">
                         <el-input id='pwd' type="password" v-model="form.pwd" placeholder="请输入密码"/>      
                    </div> 
                   
                    
                        
                   
                </el-col>
            </el-row>
            <div>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                    <el-button @click="cancle()" style="margin-left:50px">取消</el-button>
                    
            </div>
            <div class="forget">
                 <a href=""  >忘记密码?</a>
                 <a href=""  style="margin-left:10px">去注册</a>
            </div>
                   
         </el-form>
    </el-card>

 <el-card :body-style="{ padding: '0px' }" class="home" v-if="flag==2"> 
         <el-row class="title" v-if="flag==2">
           
            <font color="gray" class="title1" @click="longintitle()">登录</font> 
            <font color="48a2ff" class="title2"   @click="registerTitle()">注册 </font>
        </el-row>
        <el-form ref="form" v-model="form" label-width="120px" >
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="context_txt">
                        <label class="label">昵称</label>
                    </div>
                      <div class="context_txt">
                        <label class="label">用户名</label>
                    </div>

                    <div class="context_txt">
                        <label class="label">密码</label>
                    </div>
                    <div class="context_txt">
                        <label class="label">确认密码</label>
                    </div>
                    <div class="context_txt">
                        <label class="label">出生日期</label>
                    </div>
                    
                </el-col>
                <el-col :span="16" >   
                     <div class="context_txt">
                        <el-input id="nickname" type="text" v-model="form.nickname" placeholder="请输入您想要的昵称" /> 
                    </div>
                    <div class="context_txt">
                        <el-input id="username" type="text" v-model="form.username" placeholder="请输入手机号码或用户名" /> 
                    </div>
                    <div class="context_txt">
                         <el-input id='pwd' type="password" v-model="form.pwd" placeholder="请输入密码"/>      
                    </div> 
                   <div class="context_txt">
                         <el-input id='pwd2' type="password"  v-model="form.pwd2" placeholder="再次请输入密码"/>      
                    </div> 
                     <div class="context_txt">
                            <el-date-picker
                                v-model="form.time"
                                type="date"
                                placeholder="选择日期"
                                width="100%"
                                >
                            </el-date-picker>
                     </div>             
                   
                </el-col>
            </el-row>
            <div>
                    <el-button type="primary" @click="onSubmit">注册</el-button>
                    <el-button @click="cancle()" style="margin-left:50px">取消</el-button>
                    
            </div>
          
                   
         </el-form>
    </el-card>




     
       
     

</div>

  


  

</template>


<script>
export default {
  name: 'Home',
  data () {
    return {
      
      form:{
          nickname:"",
          username:"",
          pwd:"",
          pwd2:"",
          time:""
      },
      value1: '',
      flag:'1',
    }
  },
  methods:{
      longintitle:function(){
          var vm=this
          vm.flag=1;
          console.log("hahah")
      },
      registerTitle:function(form){
            var vm=this
          vm.flag=2;
           console.log("xixix")
           console.log(vm.form)
      },
         onSubmit:function(){
               var vm=this
        console.log('submit!');
        console.log(vm.form)
         this.$router.push({ path:'/admin/adminHome'  })
      },
      cancle(){
          console.log("cancle")
      }
  }
}
</script>

<style>
.App{
    width: 100%;
     background-image: url("../assets/bg.jpg")
}
.title{
    width: 30%;
    margin: auto;
    
}

.home{
    width: 30%;
    margin-top: 5%;
    float: right;
    margin-right: 15%;
    padding-bottom: 2%;
    padding-top: 2%;
    
}

.context_txt{
    width: 80%;
    margin:20px auto;
    height: 40px;
    float: left;
    
}
.context_txt .label{
    font-size: 18px;
    line-height: 40px;
    float: right     
}
.title1{
    font-size: 25px;

}
.title2{
    font-size: 25px;
    margin-left: 10px
}
.forget{
    margin-top: 20px
}

.bg{
    width: 100%;
    height: 800px;
   
    margin: -60px auto;
   
    background-color: #7171c6
   
}
</style>
