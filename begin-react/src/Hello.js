import React from 'react'

function Hello({ color, name }) {
    return <div style={{ color: color }}>hello! {name}</div>
}

Hello.defaultProps = {
    name: '이름 없음'
}

export default Hello
