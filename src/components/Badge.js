import React from 'react'
import PropTypes from 'prop-types'


const Badge = props => {
  return (
<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{props.children}</span>
  )
}



export default Badge