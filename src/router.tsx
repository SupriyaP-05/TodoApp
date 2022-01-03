import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Todos } from './totolist.tsx';
import {AddTodoForm} from "./AddTodo.tsx";

class Routers extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Todos />} />
                    <Route path="/add" element={<AddTodoForm />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default (Routers);