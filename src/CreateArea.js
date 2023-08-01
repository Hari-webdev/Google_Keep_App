import React, { useState } from 'react'
import {Add} from '@material-ui/icons';
import { Fab, Zoom} from "@material-ui/core";

const CreateArea = ({ addNote }) => {
    const [isExpanded, setIsExpanded] = useState(false);



    const [note, setNote] = useState({
        title:"",
        content:"",
    })



    const expand = () =>{
        setIsExpanded(true);
    }

    const handlechange = (e)=> {
        const {name,value}= e.target;
        setNote((preNote)=>{
            return {
                ...preNote,
                [name]:value
            };
        });

        console.log(name,value);
    };
 
    console.log(note);

    const submitNote = (e)=>{
        addNote(note);
        setNote({
            title: "",
            content: ""
        })
    }




  return (
    <div>
        <form className='create-note'>
            
            {isExpanded && <input name='title' placeholder='Title' onChange={handlechange} value={note.title} / > }
            
            <textarea  name='content' placeholder="Take a note..." row={isExpanded ? 3 : 1} value={note.content} onClick={expand
            } setNote={note.content} onChange={handlechange} /> 
            <Zoom in={isExpanded} >
                <Fab onClick={submitNote}>
                    <Add />
                </Fab>
            </Zoom>
        </form>
    </div>
  )
};

export default CreateArea;