import React from 'react'

export default ({...props}) =>
    <a href={`${props.href}`} >
        <i className={`fa fa-${props.className}`}></i> {props.title}
    </a>