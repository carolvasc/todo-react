import React from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

import './todo.css';

export default props => (
    <div className="task-container">
            <div className="card">
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm />
                <TodoList />
            </div>
    </div>
)