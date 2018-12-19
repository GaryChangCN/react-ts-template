import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './style.less'
import Child from './child'

class Index extends React.Component<any, any> {
    render () {
        return (
            <div className="div">
                <h2>
                    Hello
                </h2>
                <Child/>
            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('app'))
