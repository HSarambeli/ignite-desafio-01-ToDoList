import { useState } from 'react';

import styles from './AppWrapper.module.css';

import { NewTaskInput } from "./NewTaskInput";
import { TaskList } from './TaskList';

interface task {
  concluded: boolean;
  description: string
}

export function AppWrapper() {
  const [tasks, setTasks] = useState<task[]>([]);

  function createTask(newTask: task) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.description != taskToDelete
    });

    setTasks(tasksWithoutDeletedOne);
  }

  function concludeTask(description: string) {
    const newTasksList = tasks.map(task => task.description === description ? {description: description, concluded: !task.concluded} : task);

    setTasks(newTasksList)
  }

  return (
    <div className={styles.wrapper}>
      <NewTaskInput onCreateTask={createTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onConcludeTask={concludeTask} />
    </div>
  )
}