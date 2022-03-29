import { FunctionComponent } from "react";


import myFetch from 'myFetch'

myFetch.get('/api').then(res => {
  console.log(res)
}).catch(err => {
  console.log('err', err)
})


type TestProps = {
  title: string;
  desc: string;
}

myFetch<TestProps>('api', 'GET').then(res => {
  
})


const Test = (props: TestProps) => {
  return (
    <>
      <div>hello</div>
    </>
  )
}

export default Test;