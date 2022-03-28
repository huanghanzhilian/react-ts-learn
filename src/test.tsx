import { FunctionComponent } from "react";
import PropTypes from 'prop-types'

interface TestProps {
  title: string;
  desc: string;
}

const Test = (props: TestProps) => {
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