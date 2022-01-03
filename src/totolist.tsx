import React, { useEffect, useState } from "react";
import { RouteComponentProps } from 'react-router';
import { AddButton, ListCard, ListContainer, TodoTitle, Tododescription, Container, ListHeading } from "./list.ts"
import { useNavigate } from 'react-router-dom';
import Edit from "./assets/icons8-edit.svg"
import { Todo } from "./types";

export const Todos: React.FC<RouteComponentProps> = (props) => {
    const navigate = useNavigate();
    const [Todos, setTodos] = useState([]);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todolist"));
        setTodos(todos);
    }, [])
    const gotoAddTodo = () => {
        navigate("/add", { state: { index: -1 } });
    }
    const editTodo = (index: number) => {
        navigate("/add", { state: { index: index } })
    }
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
        Todos[index].status = e.target.value;
        localStorage.setItem("todolist", JSON.stringify(Todos));
        const todos = JSON.parse(localStorage.getItem("todolist"));
        setTodos(todos);
    }
    return (
        <div>
            <div>
                <AddButton onClick={() => gotoAddTodo()}>Add Todo</AddButton>
            </div>
            <ListContainer>
                <ListHeading>Todo List</ListHeading>
                {
                    Todos !== null &&

                    Todos.map((data: Todo, index: number) => {
                        return (
                            <ListCard key={index}>
                                <Container>

                                    <TodoTitle>{data.title}</TodoTitle>
                                    <Tododescription>{data.description}</Tododescription>
                                </Container>

                                <select value={data.status} onChange={(e) => handleChange(e, index)}
                                    className={data.status === "complete" ? "completeStatus" :
                                        data.status === "InProcess" ? "inprogressStatus" : "normalStatus"}>
                                    <option value="Todo">Todo</option>
                                    <option value="complete">Complete</option>
                                    <option value="InProcess">InProcess</option>
                                </select>
                                <img src={Edit} alt="edit" className="edit-icon" onClick={() => editTodo(index)} />
                            </ListCard>
                        )
                    })
                }
            </ListContainer>
        </div>
    );
};

export default Todos;