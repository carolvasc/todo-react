import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './todoActions'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td className='tableActions'>
                    <IconButton style='success float-right' icon='check' tooltip="Finalizar" hide={todo.done}
                        onClick={() => props.markAsDone(todo)} />
                    <IconButton style='warning' icon='undo' tooltip="Voltar" hide={!todo.done} 
                        onClick={() => props.markAsPending(todo)} />
                    <IconButton style='danger' icon='trash-o' tooltip="Excluir" hide={!todo.done} 
                        onClick={() => props.remove(todo)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)