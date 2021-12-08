## vue cli
```
vue cli
cli全称 command line interface (命令行接口工具)
```

## 关于不同版本的Vue
### vue.js 与 vue.runtime.xxx.js的区别
```
  (1).vue.js是完整版的Vue，包括：核心功能+模板解析器
  (2).vue.runtime.xxx.js是运行版的Vue，只有核心功能，没有模板解析器
```

### 不能使用template配置项的原因
> 因为vue.runtime.xxx.js，没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容


## vue.config.js配置文件
> 使用 vue inspect > output.js 可以查看Vue脚手架的默认配置
> 使用vue.config.js可以对脚手架进行个性化定制，详情见文档：https://cli.vuejs.org/zh/


## ref属性
```
  1.被用来给元素或子组件注册引用信息(id的替代者)
  2.应用在html标签上获取的是真实的DOM元素，应用在组件标签上是组件实例对象(vc)
  3.使用方式:
    打标识: <h1 ref="xxx">...</h1> 或 <School ref="xxx" />
    获取: this.$ref.xxx
```

## 配置项props
```
功能: 让组件接受外部传过来的参数
  (1).传递数据
      <Demo name="xxx">
  (2).接受数据
      第一种方式(只接收):
        props: ['name']

      第二种方式(接收并限制类型):
        props: {
          name: String
        }

      第三种方式(限制类型、限制必要性、指定默认值)
        props: {
          name: {
            type: String,    // 类型
            required: true,  // 必要性
            default: 'test'  // 默认值
          }
        }

备注: 1.props的优先级比data高
      2.props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实要修改props的数据，那么复制一份props的内容到data中，然后去修改data中的数据
```

## mixin(混入)
```
功能: 可以把多个组件共用的配置提取成一个混入对象
使用方式:
    第一步定义混合，例如:
      {
        data(){
          return{...}
        },
        methods: {},
        mounted(){},
        ...
        所有的配置都能在这里放
      }

    第二步使用混入，例如:
      (1).全局混入: Vue.mixin(xxx)
      (2).局部混入: mixins[xxx]

1.当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。比如，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
2.同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
```

## 插件
```
功能: 用于增强Vue
本质: 包含install方法的一个对象，install的第一个参数是Vue，第二个及以后的参数是插件使用者传递的数据

自定义一个插件:
  对象.install = function (Vue, options) {
    1.添加全局过滤器
    Vue.filter(...)

    2.添加全局指令
    Vue.directive(...)

    3.配置全局混入
    Vue.mixin(...)

    4.添加实例方法
    Vue.prototype.$myMethod = function () {}
    Vue.prototype.$myProperty = xxx
  }

使用插件
  Vue.use()
```