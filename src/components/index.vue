<template class="App">
<div class="bg" >
     

     <el-card :body-style="{ padding: '0px' }" class="home" v-if="flag==1"> 
         <el-row class="title" v-if="flag==1">
           
            <font color="#48a2ff" class="title1" @click="longintitle()">登录</font> 
            <font color="gray" class="title2" @click="registerTitle()">注册 </font>
        </el-row>
        <el-form ref="form" v-model="form" label-width="120px" :rules="rules" >
            <el-row :gutter="20">
                
                <el-col :span="24" >   
                    <el-form-item  
                    class="context_txt"
                    label="用户名"
                    prop="username"
                    
                    >
                        <el-input id="username" v-model="form.username"  placeholder="请输入手机号码或用户名" /> 
                    </el-form-item >
                    <el-form-item  
                    class="context_txt"
                    label="密码"
                    prop="pwd"
                    >
                         <el-input id='pwd' type="password" v-model="form.pwd" placeholder="请输入密码"/>      
                    </el-form-item > 
                   
                    
                        
                   
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
        <el-form ref="form" v-model="form" label-width="120px" :rules="rules" >
            <el-row :gutter="20">
             
                <el-col :span="24" >   
                     <el-form-item
                     class="context_txt" 
                     label-width="120px"
                     prop="nickname" 
                     label="昵称"
                    >
                        <el-input id="nickname" type="text" v-model="form.nickname" placeholder="请输入您想要的昵称" /> 
                    </el-form-item>
                    
                    <el-form-item 
                    class="context_txt"
                     label-width="120px"
                    label="用户名"
                    prop="username"
                    >
                        <el-input id="username" type="text" v-model="form.username" placeholder="请输入手机号码或用户名" /> 
                    </el-form-item>
                    <el-form-item 
                    class="context_txt"
                    label="密码"
                    prop="pwd"
                    >
                         <el-input id='pwd' type="password" v-model="form.pwd" placeholder="请输入密码"/>      
                    </el-form-item> 
                   <el-form-item 
                   class="context_txt" 
                  label="确认密码"
                  prop="pwd2"
                   >
                         <el-input id='pwd2' type="password"  v-model="form.pwd2" @blur="rePwd()" placeholder="再次请输入密码"/>      
                    </el-form-item> 
                    <el-form-item
                     class="context_txt"
                     label="出生日期"
                     >


                            <el-date-picker
                                v-model="form.time"
                                type="date"
                                placeholder="选择日期"
                                width="120px"
                                
                                >
                            </el-date-picker>
                    
                    </el-form-item>
                          
                   
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
      var vm = this
      var checkName = (rules,value,callback) =>{
          

          value=vm.form.username
           console.log("value")
               console.log(value)
          if(!value){
            callback(new Error('请输入用户名'));
          }

      }
    var validatePwd = function(rules,value,callback){
        value = vm.form.pwd
        if(!value){
            callback(new Error('请输入密码'));
        }
    }

    var validatePwd2  =function(rules,value,callback){
        value = vm.form.pwd2
        if(!value){
            callback(new Error('请确认密码'));
        }if(vm.form.pwd!=vm.form.pwd2){
             callback(new Error('两次密码不一致'));
        }
        }
    var checkNickname = (rules, value,callback)=>{
        value = vm.form.nickname
        if(!value){
            callback(new Error('请输入昵称'))
        }
        if(vm.form.nickname.length<3){
            callback(new Error('昵称的长度必须大于3'))
        }
    }

    return {
      
      form:{
          nickname:"",
          username:"",
          pwd:"",
          pwd2:"",
          time:"",
          
      },
      value1: '',
      flag:'1',
     
       rules:{
        pwd: [
                { validator: validatePwd, trigger: 'blur' }
            ],
            pwd2: [
                { validator: validatePwd2, trigger: 'blur' }
            ],
            username: [
                { validator: checkName, trigger: 'blur' }
            ],
            nickname: [
                 { validator: checkNickname, trigger: 'blur' }
            ]
         },
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
         this.$router.push({ path:'/adminHome'  })
      },
      cancle(){
          console.log("cancle")
      },
    //   确认密码
    rePwd:function(){
         var vm = this;
        console.log("两次密码不一样")
       
        if(vm.form.pwd!=null){
            if(vm.form.pwd!=vm.form.pwd2){
                console.log( vm.pwdYanzheng.length)
            vm.pwdYanzheng[0].message="两次密码不一样";
             console.log( vm.pwdYanzheng[0].message)
            }

        }
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
