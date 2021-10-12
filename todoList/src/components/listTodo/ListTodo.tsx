import React from 'react';
import TodoItem from './TodoItem';
type newListTodo = {
  todoLists: { text: string; active: boolean }[];
  onToggle: (index: number) => void;
};
const TodoList: React.FC<newListTodo> = ({ todoLists, onToggle }) => {
  return (
    <ul className='list-unstyled'>
      {todoLists.map(
        (item: { text: string; active: boolean }, index: number) => (
          <TodoItem
            key={index}
            todoItem={item}
            onToggle={onToggle.bind(null, index)}
          />
        )
      )}
    </ul>
  );
};
export default TodoList;
