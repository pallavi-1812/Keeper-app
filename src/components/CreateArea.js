import React, { useState } from "react";

function CreateArea(props) {

    const [notes, setNotes] = useState({
        title: "",
        content: ""
    });

    function changeNote(event) {
        const { name, value } = event.target;
        setNotes((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function addNotes(event) {
        props.onAdd(notes);
        event.preventDefault();
        setNotes({
            title: "",
            content: ""
        });
    }

    return (
        <div>
            <form>
                <input name="title" placeholder="Title" value={notes.title} onChange={changeNote} />
                <textarea name="content" value={notes.content} placeholder="Take a note..." rows="3" onChange={changeNote} />
                <button onClick={addNotes}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
