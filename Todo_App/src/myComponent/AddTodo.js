import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title.trim() || !desc.trim()) {
            alert("Please fill in both Title and Description.");
            return;
        }
        props.AddTodoData(title, desc);
        setTitle("");
        setDesc("");
    };

    return (
        <div className="container my-4">
            <h3 className="text-center mb-4">Add a New ToDo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="todoTitle" className="form-label">Title</label>
                    <input
                        type="text"
                        id="todoTitle"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter ToDo title"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="todoDesc" className="form-label">Description</label>
                    <input
                        type="text"
                        id="todoDesc"
                        className="form-control"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Enter ToDo description"
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-success">
                        Add ToDo
                    </button>
                </div>
            </form>
        </div>
    );
};
