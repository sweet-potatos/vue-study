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

## scoped样式
```
作用: 让样式在局部生效，防止冲突
写法: <style scoped>

<style scoped lang="less">
lang指定用那种预编译语言，如果不写<style>里面默认写css
```

## 总结todoListDemo
```
1.组件化编码流程:
  (1).拆分静态组件: 组件要按照功能点拆分，命名不要与html元素冲突
  (2).实现动态组件: 考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用:
      1).一个组件在用: 放在组件自身即可
      2).一些组件在用: 放在他们共同的父组件上(状态提升)
  (3).实现交互: 从绑定事件开始

2.props适用于:
  (1).父组件 ===> 子组件通信 (属性传递)
  (2).子组件 ===> 父组件通信 (父组件给子组件传递一个方法，子组件调用该方法)【数据在哪方法定义在哪】

3.使用v-model时要注意: v-model绑定的值不能是props传过来的，因为props是不可以修改的

4.props传过来的如果是对象，修改对象中的属性时Vue不会报错，但不推荐这样做
```

## webStorage
```
1.Window.sessionStorage和Window.localStorage统称为 webStorage

2.存储内容大小一般支持5MB左右(不同浏览器可能还不一样)

3.浏览器端通过Window.sessionStorage和Window.localStorage属性来实现本地存储机制

4.相关API:
  (1).xxxxxStorage.setItem('key', 'value')
    该方法接收一个键和值作为参数，会把键值对添加到存储中，如果健名存在，则更新其对应的值
  (2).xxxxxStorage.getItem('key')
    该方法接收一个键名作为参数，返回健名对应的值
  (3).xxxxxStorage.removeItem('key')
    该方法接收一个键名作为参数，并把该健名从存储中删除
  (4).xxxxxStorage.clear()
    该方法会清空存储中的所有数据

5.备注:
  (1).SessionStorage存储的内容会随着浏览器窗口关闭而消失
  (2).LocalStorage存储的内容，需要手动清除才会消失
  (3).xxxxxStorage.getItem('xxx')，如果xxx对应的value获取不到，那么getItem的返回值是null
```

## 组件自定义事件
```
1.一种组件间的通信方式，适用于: 子组件 =====> 父组件

2.使用场景: A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件回调在A中）

3.绑定自定义事件:
  (1).第一种方式，在父组件中: <Demo @passData="test" /> 或者 <Demo v-on:passData="test" />
  (2).第二种方式，在父组件中:
    <Demo ref="demo />
    ......
    mounted() {
      this.$refs.xxx.$on('passData', 回调)
    }
  (3).若想让自定义事件只能触发一次，可以使用once修饰符，或$once方法

4.触发自定义事件: this.$emit('passData', 数据)

5.解绑自定义事件: this.$off('passData')

6.组件上也可以绑定原生DOM事件，需要使用native修饰符

7.注意: 通过this.$refs.xxx.$on('passData', 回调)绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会有问题
```