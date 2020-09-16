import Vue from 'vue'
//从这里引入vant， 从main.js中在引入使用,没有export 所以main.js中直接引入没有按照解构的形式写
import {
    Button,
    Icon,
    TreeSelect,
    Image as VanImage,
    GoodsAction,
    GoodsActionIcon, 
    GoodsActionButton,
    Loading,
    Overlay,
    Sku,
    SubmitBar,
    Toast,
    SwipeCell,
    Card,
    Checkbox,
    Dialog,
    Empty,
    CheckboxGroup,
    Form,
    Field,
    Uploader,
    Swipe,
    SwipeItem,
    Lazyload,

} from 'vant'
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);
Vue.use(Icon);
Vue.use(TreeSelect);
Vue.use(VanImage);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Loading);
Vue.use(Overlay);
Vue.use(Sku);
Vue.use(SubmitBar);
Vue.use(SwipeCell);
Vue.use(Toast);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(Dialog);
Vue.use(Empty);
Vue.use(CheckboxGroup);
Vue.use(Form);
Vue.use(Field);
Vue.use(Uploader);
