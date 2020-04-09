<template>
    <div style="width: 100%;height: 100%;" >
      账号验证中......
    </div>
</template>

<script>
    import {userVerify} from "../../api";

    export default {
        name: "verify",
        mounted() {
          let username = this.$route.params.username
          let uuid = this.$route.params.uuid
          userVerify({params:{username,uuid}}).then(res=>{
            if (res.code === '000000'){
              this.$router.push({
                name: 'login',
                params: {
                  source: 'verify'
                }
              })
            }else {
              this.$message.error(res.message)
            }
            console.log(res);

          })
        }
    }
</script>

<style scoped>

</style>
