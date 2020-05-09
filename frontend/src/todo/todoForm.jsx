import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, clear, search, description } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, description } = this.props
        return (
            <div role='form' className='pb-5'>
                <div className="col-md-12">
                    <div className="input-group">
                        <input type="text" id="description" className="form-control"
                            autoComplete="off"
                            placeholder="Adicione sua tarefa"
                            onChange={this.props.changeDescription}
                            onKeyUp={this.keyHandler}
                            value={this.props.description}
                        />
                        <div className="input-group-append">
                            <IconButton style='primary mb-0 mr-0' icon='plus' tooltip="Adicionar" onClick={() => add(description)} />
                            <IconButton style='info mb-0 mr-0' icon='search' tooltip="Pesquisar" onClick={search} />
                            <IconButton style='dark mb-0 mr-0' icon='close' tooltip="Limpar" onClick={this.props.clear} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)