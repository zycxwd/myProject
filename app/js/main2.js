//1. 准备一个根组件
var App = Vue.extend();

//2. Home News组件都准备
//查询组件

var Home = Vue.extend({
    data() {
        return {
           
        }
    },
    template: "#home",
    methods: {
       
    }
});
var Seek = Vue.extend({
    data() {
        return {
            msg: "submit",
            user: "",
            password: "",
            sdActivel: true,
            sdActiver: false,
            sdActivel1: true,
            sdActiver1: false

        }
    },
    template: "#seek",
    methods: {
        fun: function () {
            this.$router.replace('/list1');
        },
        oneway: function () {
            this.sdActivel = true;
            this.sdActiver = false;
            this.sdActivel1 = true;
            this.sdActiver1 = false;
        },
        goback: function () {
            this.sdActivel = false;
            this.sdActiver = true;
            this.sdActivel1 = true;
            this.sdActiver1 = false;
        },
        business: function () {
            this.sdActivel1 = true;
            this.sdActiver1 = false;
        },
        privately: function () {
            this.sdActivel1 = false;
            this.sdActiver1 = true;
        }
    }
});
//机票列表组件
var List1 = Vue.extend({

    data() {
        return {
            todos: [{
                    text1: '北京-天津',
                    text2: '违',
                    text3: '¥1113',
                },
                {
                    text1: '北京-河北',
                    text2: '',
                    text3: '¥6113',

                },
                {
                    text1: '北京-太原',
                    text2: '',
                    text3: '¥813',
                },
                {
                    text1: '北京-河北',
                    text2: '',
                    text3: '¥6113',
                },
                {
                    text1: '北京-河北',
                    text2: '',
                    text3: '¥6113',
                },
                {
                    text1: '北京-河北',
                    text2: '',
                    text3: '¥6113',
                },
                {
                    text1: '北京-河北',
                    text2: '违',
                    text3: '¥6113',
                },
                {
                    text1: '北京-河北',
                    text2: '',
                    text3: '¥6113',
                },
                {
                    text1: '北京-河北',
                    text2: '',
                    text3: '¥6113',
                },
                {
                    text1: '北京-河北',
                    text2: '',
                    text3: '¥6113',
                },
                {
                    text1: '北京-河北',
                    text2: '',
                    text3: '¥6113',
                }
            ]
        }
    },
    template: "#list1",
    methods: {
        prev: function () {
            this.$router.replace('/seek');
        },
        clic: function () {
            this.$router.replace('/listsub');
        }
    }
});
//机票详情组件
var Listsub = Vue.extend({
    template: "#listsub",
    methods: {
        fun: function () {
            console.log(this)
        }
    }
});
//3. 准备路由
var router = new VueRouter();
//4. 关联
router.map({
    'home': {
        data() {
            return {
            }
        },
        component: Home
    },
    'seek': {
        data() {
            return {
                sdActive: true
            }
        },
        component: Seek
    },
    'list1': {
        component: List1
    },
    'listsub': {
        component: Listsub
    }
});
//5. 启动路由
router.start(App, '#app');
//6. 跳转
router.redirect({
    '/': 'home'
});