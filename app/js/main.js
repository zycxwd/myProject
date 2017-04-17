//1. 准备一个根组件
var App = Vue.extend();

//2. Home News组件都准备
//查询组件
var Seek = Vue.extend({
    data() {
        return {
            msg: "submit",
            user: "",
            password: ""
        }
    },
    template: "#seek",
    methods: {
        fun: function () {
            // this.$router.replace('/list1');
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
            this.$router.replace('/seek/business');
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
    'seek': {
        component: Seek,
        subRoutes: {
            'business': {
                component: {
                    template: '#business',
                    data(){
                        return {
                            sd:["单程","往返"]
                        }
                    },
                    methods: {
                         fun: function () {
                            this.$router.replace('/list1');
                        },
                        scli: function () {
                            alert(1)
                        },
                        dcli: function () {
                            console.log(this.$router)
                        }
                    }
                }
            },
            'private': {
                component: {
                    data(){
                        return{
                            msg:"111"
                        }
                    },
                    template: '#private',
                    methods: {
                        fun: function () {
                            this.$router.replace('/list1');
                        }
                    }
                }
            }
        }
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
    '/': 'seek/business'
});
