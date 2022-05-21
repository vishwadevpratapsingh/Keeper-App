import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {

const [clickState,setState]=useState(false);

function ZoomClick(){
  setState(true);
}


  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
   


    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
       { clickState?
        <input
          name="title"
          onChange={handleChange}
          
          value={note.title}
          placeholder="Title"
        />:null}
       <textarea
          name="content"
          onChange={handleChange}
          onClick={ZoomClick}
          value={note.content}
          placeholder="Take a note..."
          rows={clickState?3:1}
        />
        <Zoom in={clickState}>
        <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
