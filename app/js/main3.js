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
        homepage: function () {
            // this.$router.go('homepage');
        },
        homecenter: function () {
            // this.$router.go('homecenter');
        }
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
            sdActiver1: false,
            dui1: false,
            abc: false

        }
    },
    template: "#seek",
    methods: {
        grabble: function () {
            this.$router.replace('/list1/flightList');
        },
        ticInquires: function () {
            this.$router.replace('/home/homepage');

        },
        oneway: function () {
            this.sdActivel = true;
            this.sdActiver = false;
            this.sdActivel1 = true;
            this.sdActiver1 = false;
            this.dui1 = false;
        },
        goback: function () {
            this.sdActivel = false;
            this.sdActiver = true;
            this.sdActivel1 = true;
            this.sdActiver1 = false;
            this.dui1 = false;

        },
        business: function () {
            this.sdActivel1 = true;
            this.sdActiver1 = false;
            this.dui1 = false;

        },
        privately: function () {
            this.sdActivel1 = false;
            this.sdActiver1 = true;
            this.dui1 = false;

        },
        dui: function () {
            this.dui1 = !this.dui1;
        },
        top1: function () {
            this.abc = !this.abc;

        },
        transitions: { //定义所有动画名称
            bounce: {
                enterClass: 'bounceInDown',
                leaveClass: 'zoomOutRight'
            }
        }

    }
});
//机票列表组件
var List1 = Vue.extend({
    data() {
        return {
            listActive1: true,
            listActive2: false,
            listActive3: false,

            todos: [{
                    a: "从早到晚",
                    p: "flightList"
                },
                {
                    a: "价格",
                    p: "cost"
                },
                {
                    a: "航班筛选",
                    p: "filtrate"
                }
            ],
            clic: "aa"
        }
    },
    template: "#list1",
    methods: {
        prev: function () {
            this.$router.go('/seek');
        },
        funs1: function ($index, $todo) {
            this.listActive1 = true;
            this.listActive2 = false;
            this.listActive3 = false;


        },

        funs2: function ($index, $todo) {
            this.listActive1 = false;
            this.listActive2 = true;
            this.listActive3 = false;

        },
        funs3: function ($index, $todo) {
            //    this.listFooterActive =! this.listFooterActive;
            this.listActive1 = false;
            this.listActive2 = false;
            this.listActive3 = true;

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
            return {}
        },
        component: Home,
        subRoutes: {
            'homepage': {
                component: {
                    template: '#homepage',
                    data() {
                        return {
                            sd: ["单程", "往返"]
                        }
                    },
                    methods: {
                        domAirTic: function () {
                            this.$router.replace('/seek');
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
            'homecenter': {
                component: {
                    data() {
                        return {
                            msg: "111"
                        }
                    },
                    template: '#homecenter',
                    methods: {
                        fun: function () {
                            this.$router.replace('/list1/flightList');
                        }
                    }
                }
            }
        }

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
        component: List1,

        subRoutes: {
            'flightList': {
                component: {
                    template: '#flightList',
                    data() {
                        return {
                            todos: [{
                                    timem: "00:10",
                                    timee: "03:10",
                                    text1: '北京-河北',
                                    text2: '',
                                    text3: '¥113',
                                },
                                {
                                    timem: "09:30",
                                    timee: "13:10",
                                    text1: '北京-河北',
                                    text2: '',
                                    text3: '¥613',
                                },
                                {
                                    timem: "06:10",
                                    timee: "18:10",
                                    text1: '北京-河北',
                                    text2: '违',
                                    text3: '¥913',
                                },
                                {
                                    timem: "08:40",
                                    timee: "12:10",
                                    text1: '北京-河北',
                                    text2: '',
                                    text3: '¥313',
                                },
                                {
                                    timem: "00:10",
                                    timee: "06:10",
                                    text1: '北京-河北',
                                    text2: '',
                                    text3: '¥6113',
                                },
                                {
                                    timem: "10:10",
                                    timee: "16:20",
                                    text1: '北京-河北',
                                    text2: '',
                                    text3: '¥513',
                                }
                            ]
                        }
                    },
                    methods: {

                        clic: function ($index) {
                            for (var index = 0; index < this.todos.length; index++) {
                                console.log(typeof this.todos[index].text3.slice(1))

                            }

                            this.$router.go('/list1/serviceProvider');
                        }
                    }
                }
            },
            'serviceProvider': {
                component: {
                    data() {
                        return {
                            msg: "111"
                        }
                    },
                    template: '#serviceProvider',
                    methods: {
                        fun: function () {
                            // this.$router.replace('/list1/flightList');
                        }
                    }
                }
            },
            'cost': {
                component: {
                    data() {
                        return {
                            msg: ""
                        }
                    },
                    template: '#cost',
                    methods: {
                        fun: function () {
                            alert(1)
                        }
                    }
                }
            },
            'filtrate': {
                component: {
                    data() {
                        return {
                            msg: ""
                        }
                    },
                    template: '#filtrate'
                }
            }
        }
    },
    'listsub': {
        component: Listsub
    }
});
//5. 启动路由
router.start(App, '#app');
//6. 跳转
router.redirect({
    '/': 'home/homepage'
});