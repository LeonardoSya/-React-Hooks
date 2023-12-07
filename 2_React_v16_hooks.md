### useState
*定义变量，使其具备类组件的state，让函数式组件拥有更新视图的能力
`const [state, setState] = useState(initData)`
注意，当initData为函数时，会将函数的返回值作为初始值
注意，useState有点类似PureComponent，它会进行一个比较浅的比较，这导致了一个问题：如果对象作为initData直接传入时，并不会实时更新
    `const [..] = useState({num: 0})`
    `<div>{state.num}</div>`  // 不会实时更新UI


### useEffect
副作用，这个hook*弥补了函数式组件没有生命周期的缺陷*
`useEffect(() => { return destory }, deps)`
callback: *它会在下一次callback执行之前调用*，用于清除上次callback产生的副作用
deps: 依赖项

### useContext 
上下文，*设置全局共享数据*，使所有组件可跨层级实现共享
通过 CountContext.Provider 包裹的组件，才能通过 useContext 获取对应的值，useContext 获取 Provider 中保存的 value 值

### useReducer
功能类似Redux, 与 redux 最大的不同点在于它是单个组件的状态管理，组件通讯还是要通过 props。useReducer 相当于是 useState 的升级版，用来处理复杂的 state 变化
```js
const [state, dispatch] = useReducer(
    (state, action) => {},
    initialArg,
    init
)
```
Params:
- reducer: 最终返回值是新的state
- initialArg：初始默认值
- init：惰性初始化，可选值
Result:
- state
- dispatch: 用于派发更新的dispatchAction, 可以认为是setState

惰性初始化是一种延迟创建对象的手段，直到被需要的第一时间才去创建，这样做可以将用于计算 state 的逻辑提取到 reducer 外部，这也为将来对重置 state 的 action 做处理提供了便利。换句话说，如果有 init，就会取代 initialArg。

注意，在reducer中，如果返回的state和之前的state值相同，那么组件将不会更新


### useMemo 
判断是否满足当前的条件来决定是否执行callback。*它在依赖不变的情况下，会返回相同的引用*，避免子组件进行无意义的重复渲染
`const cacheData = useMemo(fn, deps)`
fn函数的返回值会作为缓存值
deps: 依赖项，通过数组的值进行fn的调用，如果发生改变则会得到新的缓存值
cacheData*即为fn的返回值*，如果deps的依赖值发生改变将重新执行fn，否则读取上一次缓存值


### useCallback 
与useMemo极其类似，唯一不同点在于useMemo返回是值，useCallback返回的是函数
注意: useCallback必须配合React.memo进行优化，否则性能会降低


### useRef
*获取当前元素的所有属性*，还能缓存数据
`const ref = useRef(initialValue)`
ref返回一个*current对象*，这个current属性就是ref对象需要获取的内容


### useImperativeHandle
暴露给父组件的值&函数
这个hook可以让不同的模块关联起来，让父组件调用子组件的方法
`useImperativeHandle(ref, createHandle, deps)`
ref: 父组件中获取子组件的引用
createHandle: 子组件中需要暴露给父组件的方法
deps: 依赖项，通过数组的值进行createHandle的调用，如果发生改变则会得到新的缓存值


### useLayoutEffect
与useEffect基本一致，但是它是同步执行的
useLayoutEffect: *在浏览器布局(layout)完成之后，页面绘制(paint)之前同步执行*，而*useEffect在浏览器绘制后异步执行*
这意味着useLayoutEffect**不会引起页面的重新渲染**，这使得它更适合需要立即同步获取布局信息 或 执行DOM操作的场景
另外，由于同步执行，callback可能会阻塞浏览器绘制
`useLayoutEffect(callback, deps)`