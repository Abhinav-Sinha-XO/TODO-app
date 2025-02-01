export function Todos({todos}){
  const todoStyle = {
    border: '1px solid #ddd',
    margin: '10px',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  };

  const titleStyle = {
    color: '#333',
    fontSize: '1.5rem',
    marginBottom: '8px'
  };

  const descStyle = {
    color: '#666',
    fontSize: '1rem',
    marginBottom: '12px'
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return <div>
    {todos.map((todo) => {
      return <div key={todo.id} style={todoStyle}>
        <h1 style={titleStyle}>{todo.title}</h1>
        <h2 style={descStyle}>{todo.description}</h2>
        <button style={buttonStyle}>
          {todo.completed === true ? "Completed" : "Mark as Completed"}
        </button>
      </div>
    })}
  </div>
}