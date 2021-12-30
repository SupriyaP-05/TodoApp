import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Weathers } from './totolist.tsx';
import {AddTodoForm} from "./AddTodo.tsx";

class Routers extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/list" element={<Weathers />} />
                    <Route path="/add" element={<AddTodoForm />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default (Routers);