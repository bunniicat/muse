import { useState } from 'react';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <div className='todo_container'>
      <form className='todo_form' onSubmit={handleSubmit}>
        <input
          className='todo_input'
          type='text'
          placeholder='Enter todo'
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button className='todo_btn' type='submit'>
          Add Todo
        </button>
      </form>

      <div className='todo_list'>
        {todos.map((todo, index) => (
          <div className='todo_item flex justify__sb align__c' key={index}>
            <p>{todo}</p>
            <button className='todo_delete' onClick={() => handleDelete(index)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
