import React from "react";

const TodoItem = ({ todo }) => {
    const { id, title } = todo;
    return (<div>
        <p>{id}.{title}</p>
    </div>);
}

export default TodoItem;