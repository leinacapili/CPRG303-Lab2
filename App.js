import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTask] = useState([
    { task_name: 'Do laundry', task_id: '1' },
    { task_name: 'Go to gym', task_id: '2' },
    { task_name: 'Walk dog', task_id: '3' },
  ]);

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
