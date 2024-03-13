
import { forwardRef } from 'react'

function Input(props, ref) {
  return <input ref={ref} {...props} />
}

const ForwardedInput = forwardRef(Input)

export default ForwardedInput