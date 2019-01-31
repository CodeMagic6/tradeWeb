<template>
  <div>
    <div class="head">
      <div class="wd">
        <div class="icon">
          <img style="width: 89px;height: 80px;"
            src="../images/webimages/logo/ico.jpg">
        </div>
        <div class="banben">
          <div v-for="(it, idx) in banben"
            :key="idx"
            :class="it.class">{{it.content}}</div>
        </div>
        <div class="phone">
          <img src="../images/phone.png"
            alt="">
        </div>
      </div>
    </div>
    <div class="menu">
      <div class="wd">
        <ul class="menu-con">
          <li v-for="(name, index) in navName"
            @click="$emit('switchTab', {name, index})"
            :key="index">
            {{name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import WebSettings from '../settings.js';
export default {
  data() {
    return {
      navName: ['Home', 'Products', 'About Us', 'Hot Selling', 'Contact Us'],
      WebSettings,
      baseUrl: '../',
      banben: [
        {
          class: 'es',
          content: 'Español'
        },
        {
          class: 'pu',
          content: 'Português'
        },
        {
          class: 'cn',
          content: 'BEIJING'
        },
        {
          class: 'ko',
          content: 'KOREA'
        },
        {
          class: 'jp',
          content: 'TOKYO'
        },
        {
          class: 'si',
          content: 'SINGAPORE'
        },
        {
          class: 'fra',
          content: 'FRANKFURT'
        },
        {
          class: 'en',
          content: 'UAE'
        },
        {
          class: 'am',
          content: 'NEWYORK'
        }
      ].reverse()
    };
  }
};
</script>

<style lang="scss" scoped>
/*=========================头部==================================*/
.head {
  clear: both;
  height: 129px;
}
.wd {
  position: relative;
  width: 1000px;
  margin: 0px auto;
  clear: both;
  .icon {
    position: absolute;
    left: 160px;
    top: 20px;
  }
}
.head .banben {
  clear: both;
  height: 20px;
  line-height: 20px;
  padding-top: 14px;
  > div {
    display: block;
    overflow: hidden;
    padding-left: 17px;
    float: right;
    margin-left: 5px;
  }
  .cn {
    background: url(../images/cn.jpg) no-repeat left center;
  }
  .ko {
    background: url(../images/hanguo.jpg) no-repeat left center;
  }
  .jp {
    background: url(../images/riben.jpg) no-repeat left center;
  }
  .si {
    background: url(../images/xinjiapo.jpg) no-repeat left center;
  }
  .fra {
    background: url(../images/faguo.jpg) no-repeat left center;
  }
  .en {
    background: url(../images/yingguo.jpg) no-repeat left center;
  }
  .am {
    background: url(../images/meiguo.jpg) no-repeat left center;
  }
  .es {
    background: url(../images/es.jpg) no-repeat left center;
  }
  .pu {
    background: url(../images/pu.jpg) no-repeat left center;
  }
}
.head .phone {
  clear: both;
  text-align: right;
  margin-top: 20px;
  height: 50px;
}
/*======================================导航===================================*/
.menu {
  clear: both;
  height: 44px;
  line-height: 44px;
  background: url(../images/m_bg.jpg) repeat-x;
  .menu-con {
    float: left;
    height: 44px;
    line-height: 44px;
    width: 765px;
    > li {
      cursor: pointer;
      float: left;
      width: 125px;
      height: 44px;
      text-align: center;
      color: #fff;
      font-size: 18px;
    }
  }
}
</style>