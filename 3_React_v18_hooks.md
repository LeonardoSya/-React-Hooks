<!--
 * @Author: LeonardoSya 2246866774@qq.com
 * @Date: 2023-12-07 19:29:52
 * @LastEditors: LeonardoSya 2246866774@qq.com
 * @LastEditTime: 2023-12-07 20:42:31
 * @FilePath: \深入理解React Hooks\3_React_v18_hooks.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
### useSyncExternalStore
通过强制的同步状态更新，使得外部store可以支持并发读取

### useTransition
返回一个状态值表示过渡更新任务的等待状态，以及启动该过度更新任务的函数
`const [isPending, startTransition] = useTransition()`
isPending: 过度状态的标志，为true表示等待状态
startTransition: 可以将里面的任务变成过渡更新任务

### useDeferredValue
让状态滞后派生，与useTransition功能类似，不同点在于useDeferredValue将原值通过过渡任务得到新的值，useTransition是将紧急更新任务变为过渡任务(useD用来处理数据本身，useT用来更新处理更新函数)
`const deferredValue = useDeferred(value)`
value：接受一个可变的值，如useState创建的值
deferredValue：返回一个状态值表示滞后派生的值，当deferredValue为true时，表示滞后派生

这两个Hooks都是用来处理数据量大的数据，如输入框、散点图等，在少量数据时反而会降低效率
useT性能高于useD，建议使用useT


### useId
*流式渲染 streaming renderer*: 将整个模块进行拆分，让加载快的小模块先渲染，大的模块挂起，再逐步加载出大模块，提高渲染效果
useId解决了服务端和客户端注册组件的顺序不一致问题，保证流式渲染中id的稳定性
`const id = useId()`
