<template>
  <div id="home" class="normal-content">
    <div>
      <img alt="avatar" class="avatar-img" :src="avatarImg">
      <div class="greeting">
        <div class="greeting-text">{{ greeting }}</div>
        <div class="greeting-text">text text text</div>
      </div>
    </div>
    <a-divider />
  </div>
</template>

<script>
import cookie from 'js-cookie'

export default {
  data() {
    return {
      avatarImg: require('@/assets/aqua.jpg'),
      nickname: cookie.get('nickname')
    }
  },
  computed: {
    greeting() {
      const hour = new Date().getHours()
      let text = ''
      switch (true) {
        case hour < 5:
          text = '凌晨好，'
          break
        case hour < 11:
          text = '早上好，'
          break
        case hour < 13:
          text = '中午好，'
          break
        case hour < 17:
          text = '下午好，'
          break
        case hour < 24:
          text = '晚上好，'
      }
      return text + this.nickname + '，工作辛苦了'
    }
  }
}
</script>

<style lang="scss">
#home {
  .avatar-img {
    $avatar-size: 80px;

    border-radius: $avatar-size / 2;
    height: $avatar-size;
    width: $avatar-size;
    margin-right: 20px;
    vertical-align: bottom;
  }

  .greeting {
    display: inline-block;

    &-text {
      line-height: 40px;

      &:first-child {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>
