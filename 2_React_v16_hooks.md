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