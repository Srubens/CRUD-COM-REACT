import React from 'react'

export default ({...props}) =>
    <i className={`fa fa-${props.className}`}></i>
    // <a href={`${props.href}`} >
    // </a>