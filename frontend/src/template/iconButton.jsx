import React from 'react'
import If from './if'

export default props => (
    <If test={!props.hide}>
        <button className={'btn btn-' + props.style + ' mb-0 mr-0'}
            data-toggle="tooltip"
            data-placement="bottom"
            title={props.tooltip}
            onClick={props.onClick}
        >
            <i className={'fa fa-' + props.icon}></i>
        </button>
    </If>
)