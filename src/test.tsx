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

const Test: FunctionComponent<TestProps> = (props) => {
  return (
    <>
      <div>{ props.title } { props.desc }</div>
    </>
  )
}

Test.propTypes = {
  desc: PropTypes.string.isRequired
}


export default Test;