import { FunctionComponent } from "react";
import PropTypes from 'prop-types'

interface TestProps {
  title: string;
  desc: string;
}

const TestInteerface = (props: TestProps) => {
  return (
    <>
      <div>{ props.title } { props.desc }</div>
    </>
  )
}

TestInteerface.propTypes = {
  desc: PropTypes.string.isRequired
}


export default TestInteerface;