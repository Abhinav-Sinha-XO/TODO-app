import { useState } from "react";

export function CreateTodo(props) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  return (
    <div style={{
      maxWidth: "400px",
      margin: "0 auto",
      padding: "20px",
      textAlign: "center"
    }}>
      <input 
        type="text" 
        placeholder="title" 
        style={{
          padding: "8px",
          width: "100%",
          marginBottom: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc"
        }}
        onChange={function(e){
          setTitle(e.target.value)
        }} 
      />
      <input 
        type="text" 
        placeholder="description" 
        style={{
          padding: "8px",
          width: "100%",
          marginBottom: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc"
        }}
        onChange={function(e){
          setDescription(e.target.value)
        }} 
      />
      <button 
        style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
        onClick={()=>{
          fetch("http://localhost:3000/todo",{
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description
            }),
            headers: {
              "Content-type": "application/json"
            }
          })
          .then(async function(res){
            const json = await res.json();
          })
        }}>Add a todo</button>
    </div>
  );
}