import './App.css';
import { useState, useEffect } from 'react';
import Item from './components/item';
import axios from 'axios';

function App() {
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");
  const [dueDate, setDate] = useState("");
  const [todo, setTodo] = useState([]);
  const [isUpdating,setUpdating] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/get-todo").then((res) => setTodo(res.data)).catch((err) => console.log(err));
  });

  const addUpdate =()=>{
    if(isUpdating===""){
      axios.post("http://localhost:5000/save-todo",{text,desc,dueDate}).then((res) => {console.log(res.data);
        setText("");setDesc("");setDate("");
      }).catch((err) => console.log(err));
    }else{
      axios.post("http://localhost:5000/update-todo",{_id: isUpdating,text,desc,dueDate}).then((res) => {console.log(res.data);
        setText("");setDesc("");setDate("");
        setUpdating("");
      }).catch((err) => console.log(err));
    }
  }

  const deleteToDo = (_id)=>{
    axios.post("http://localhost:5000/delete-todo",{_id}).then((res) => {console.log(res.data);
      }).catch((err) => console.log(err));
  }

  const updateToDo =(_id,text,desc,dueDate)=>{
    setUpdating(_id);
    setText(text);
    setDesc(desc);
    setDate(dueDate);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

        <div className='top'>
          <input type="text" id="text" name="text" placeholder='Enter text' value={text} onChange={(event) => { setText(event.target.value) }} /><br />

          <input type="text" id="desc" name="desc" placeholder='Enter description' value={desc} onChange={(event) => { setDesc(event.target.value) }} /><br />

          <input type="date" id="dueDate" name="dueDate" value={dueDate} onChange={(event) => { setDate(event.target.value) }} />

          <div className='add' onClick={addUpdate}>{isUpdating?"Update":"Add"}</div>
        </div>

        <div className='list'>
          {todo.map(item=><Item key={item._id} text={item.text} desc={item.desc} dueDate={item.dueDate} remove={()=>deleteToDo(item._id)} update={()=>{updateToDo(item._id,item.text)}}/>)}
        </div>

      </div>
    </div>
  );
}

export default App;
