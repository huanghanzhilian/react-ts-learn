import { FunctionComponent } from "react";
import PropTypes from 'prop-types'


// 类型别名: type
type TestProps = {
  title: string;
  desc: string;
}

type PlusType = (x: number, y: number) => number

let sum: PlusType = (x: number, y: number) => x + y

// 交叉类型 '&'
interface IName {
  name: string
}
type IPerson = IName & { age: number }
let person: IPerson = { name: 'hello', age: 12 } // 同时要有两个接口中的定义的数据

// 联合类型 '|'
let numberOrString: number | string // numberOrString 为 number 或 string 类型
type FavoriteNumber = string | number

let sum1 = '1'
let sum2 = 1

// 类型断言
/**
 * 
 * @param input 联合类型
 * @returns 返回长度
 * 使用类型断言来帮助取得length
 */
function getLength(input: number | string) {
  // 如果input作为string（匹配得知是字符串）
  const str = input as string
  if (str.length) {
    return str.length
  } else {
    // 如果input作为number（匹配得知是数）
    const number = input as number
    return number.toString().length
  }
}

const sum3 = getLength('test')

// Partial 的实现
interface KeysTest{
  name: string;
  age: number
}

// keyof
type Keys = keyof KeysTest
// ===
// type Keys = 'name' | 'age'
let key: Keys = 'age'
console.log(key)

// lookup types
type NameType = KeysTest['name']
let sname: NameType = '1'
console.log(sname)

// mapped types
type TestFor = {
  // Indexable type 可索引类型 不确定类型
  // 使用in 循环起来
  [key in Keys]: any
}

type KeysTestOpt = {
  [key in Keys]?: KeysTest[key]
}


type Person = {
  name: string,
  age: number
}
type Partial<T> = {
  [P in keyof T]?: T[P];
};

const xiaoming: Partial<Person> = {}

// type 类型别名
// 定义 类型别名 Partial
// <T>传入一个范型 进行操作
// {} 返回一个新的类型 这个类型由两个部分组成 一个是键，一个是值
// key： [P in keyof T] keyof把对象类型的键值取出来形成一个联合类型
// type PersonKeys = keyof Person // type PersonKeys = "name" | "age"
// P 定义范型P 遍历 "name" | "age"联合类型
// ? 作为可先的键
// T[P] 是值


// extends 进行泛型约束
// 作用是判断一个类型是否满足另一个类型的约束。

interface IWithLength {
  length: number
}

function echoWithArr<T extends IWithLength>(arg: T): T {
  console.log(arg.length) // 将来传入的参数中，不一定有length。于是需要 extends 进行约束：传入的之中，必须有 length 属性
  return arg;
}

const arrs = echoWithArr([1, 2, 3])
const str = echoWithArr('fghj')
const obj = echoWithArr({length: 1})

// extends 条件类型关键字
type NonType<T> = T extends null | undefined ? never : T // 假如泛型参数 T 为 null 或 undefined, 返回 never；否则返回 T
// NonType<T> 变为条件类型：是什么类型，看传入的泛型 T 的类型。
let demo1: NonType<number> // demo1 的类型是 number
let demo2: NonType<null> // demo1 的类型是 never

const TypeTest: FunctionComponent<TestProps> = (props) => {
  return (
    <>
      <div>{ props.title } { props.desc }</div>
    </>
  )
}

TypeTest.propTypes = {
  desc: PropTypes.string.isRequired
}


export default TypeTest;