import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContainer, SubmitButton, CardTitle } from "./list.ts";
import { AddTodo, Todo } from "./types.ts";

interface AddTodoFormProps {
    addTodo: AddTodo;
}
export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [result, setResult] = useState<Todo>({ title: "", description: "" });
    const [todolist, setTodolist] = useState(Array);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setCurrentIndex(location.state.index);
        const todos = JSON.parse(localStorage.getItem("todolist"));
        setTodolist(todos);
        if (currentIndex >= 0) {
            setResult(todolist[currentIndex]);
        }
    }, [currentIndex])

    const setTodo = (data: Todo) => {
        data.preventDefault();
        const title = data.target.title.value;
        const description = data.target.description.value;
        let NewObj = {
            title: title,
            description: description,
            status: "todo"
        }
        if (currentIndex >= 0) {
            todolist[currentIndex] = NewObj;
        } else {
            todolist.push(NewObj);
        }
        localStorage.setItem("todolist", JSON.stringify(todolist));
        navigate("/list");
    }

    return (
        <CardContainer>
            <Card>
                <CardTitle>Todo Details</CardTitle>
                <form onSubmit={setTodo}>
                    <input
                        required
                        placeholder="Todo Title"
                        className="input"
                        defaultValue={result.title}
                        name="title"
                    />
                    <textarea
                        required
                        placeholder="Description"
                        className="textareas"
                        defaultValue={result.description}
                        name="description"
                        rows={5}
                    />
                    <SubmitButton type="submit">Submit</SubmitButton>
                </form>
            </Card>
        </CardContainer>
    );
};