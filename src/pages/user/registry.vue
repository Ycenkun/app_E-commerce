<template>
  <div class="container">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-uploader v-model="fileList" :after-read="afterRead" max-count="1" />
      <van-field
        v-model="phone"
        name="phone"
        label="手机号"
        placeholder="请输入您的手机号"
        :rules="[
          { required: true, message: '手机号不能为空' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！' },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      phone: "",
      password: "",
      fileList: [],
    };
  },
  computed: {
    ...mapState("userStore", {
      pic: (state) => state.pic,
      regdata:state => state.regdata,
    }),
  },
  methods: {
    ...mapActions("userStore", ["getPic","register"]),
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
    this.getPic(file.file); //这里可以打印出来file来判断需要的值是否拿出来了
    },
    onSubmit(values) {
      this.register(values)//values是一个对象  包含username phone password  所以不需要额外在写一个对象
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  flex: 1;
}
</style>
