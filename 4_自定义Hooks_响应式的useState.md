普通函数加入html(jsx语法)就是函数组件，但这个组件无状态(没有数据管理状态)
Hooks: 让组件具备数据管理的能力

+ Hooks的驱动条件：驱动条件 —— 会改变数据源，从而驱动整个数据状态，*通常用useState, useReducer作为驱动条件*，驱动整个自定义Hooks


自定义hooks的步骤：
1. 确定自定义Hooks的入参和出参
2. 优化方面优先考虑*useCreation*，函数优化使用useCallback
3. 保存值使用useLatest，复杂的存值用useRef高级用法处理
4. 最后使用ts优化类型


### useLatest
保证永远返回最新的值，可以避免闭包问题

### useMount
只在组件初始化执行的hook
### useUnmount
只在组件卸载时执行的hook
### useUnmountedRef
获取当前组件是否卸载

### useSafeState
useState的优化版，使用方法和useState一致。但在组件卸载后异步回调内的setState不再执行，这样可以避免因组件卸载后更新状态导致内存泄漏，可以解决useState的闭包问题

### useUpdate
强制组件重新渲染

### useCreation
强化useMemo和useRef，用法和useMemo一样，用于性能优化

### useReactive 
具备响应速度useState，可以动态地设置值
