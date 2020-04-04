import Vue from 'vue'
import App from './App.vue'

//引入路由框架
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//重置样式引入
import './assets/styles/reset.css';
//引入字体样式
import './assets/fonts/iconfont.css';

//路由配置
import router from './router';

//axiosutils
import './utils/axiosUtil';

Vue.config.productionTip = false;

Vue.use(ElementUi);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
