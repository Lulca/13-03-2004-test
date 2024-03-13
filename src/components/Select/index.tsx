import { forwardRef } from 'react'

function Select(props, ref) {
  return <select ref={ref} {...props} />
}

const ForwardedSelect = forwardRef(Select)

export default ForwardedSelect