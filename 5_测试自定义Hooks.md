<!--
 * @Author: LeonardoSya 2246866774@qq.com
 * @Date: 2023-12-12 16:14:58
 * @LastEditors: LeonardoSya 2246866774@qq.com
 * @LastEditTime: 2023-12-13 18:54:25
 * @FilePath: \React\深入理解React Hooks\5_测试自定义Hooks.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
单元测试
单元：函数/模块/组件  单元的基本特征：输入不变返回相同的输出, 越容易写单元测试的软件，模块化结构越好，各模块之间的耦合越弱

# Jest

+ describe
`describe(name,  fn)`  name: 测试套件的名字  fn: 测试套件的回调函数

+ it / test
`it(name, fn, timeout)` name: 测试用例的名字  fn: 测试用例的回调函数   timeout: 超时时间, 默认5s

+ afterAll 和 beforeAll
afterAll：所有的测试用例执行完后执行的方法，如果传入的回调函数返回值是 promise 或者 generator，Jest 会等待 promise resolve 再继续执行。
beforeAll： 与 afterAll 相反， 所有的测试用例执行之前执行的方法。
`afterAll(fn, timeout)`

+ afterEach 和 beforeEach
afterEach：与 afterAll 相比，afterEach 可以在每个测试完成后都运行一遍。
beforeEach：beforeEach 可以在每个测试完成之前都运行一遍。
`afterEach(fn, timeout)`

+ + Expect 断言
expect(value)	要测试一个值进行断言的时候，首先使用 expect 对值进行包裹
not         	用于测试相反的结果，也就是不等于
toBeUndefined	用于检查变量是否未定义，也就是说，只会匹配 undefined，比如说上面的  sum 返回的结果明显不是 undefined，如果使用，则会报错
toBeDefined	    与 toBeUndefined 相反，必须匹配有值的情况
toBe	        使用 Object.is 来进行比较，严格的比较，需要注意的是，如果进行浮点数的比较，要使用 toBeCloseTo，可以理解为 ===
toEqual(value)	用于对象的深度，它一般比较的是对象的值，而并非对象本身
toMatch(regexpOrString)	用来检查字符串是否匹配，可以是正则表达式或者字符串
toContain(item)	用来判断 item 是否在一个数组中，也可以用于字符串的判断
toBeNull(value)	只匹配 null
toBeUndefined(value)	只匹配 undefined
toBeGreaterThan(number)	大于
toBeGreaterThanOrEqual(number)	大于等于
toBeLessThan(number)	小于
toBeLessThanOrEqual(number)	小于等于

# 覆盖率报告：
npm run test --coverage(可选，增加覆盖率报告文件)

