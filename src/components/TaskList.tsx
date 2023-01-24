import styles from './TaskList.module.css'

import { Task } from "./Task"

interface task {
  description: string;
  concluded: boolean
}

interface TaskListProps {
  tasks: task[];
  onDeleteTask: (taskToDelete: string) => void;
  onConcludeTask: (taskToConclude: string) => void;
}

export function TaskList({tasks, onDeleteTask, onConcludeTask}: TaskListProps) {
  const tasksCounter = tasks.length

  const concludedTasksCounter = tasks.reduce((acumulador, task) =>
    task.concluded == true ? acumulador + 1 : acumulador + 0
  , 0)


  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <span className={styles.titleLeft}>Tarefas criadas <span className={styles.counterSpan}>{tasksCounter}</span></span>
        <span className={styles.titleRight}>Concluídas <span className={styles.counterSpan}>{concludedTasksCounter} de {tasksCounter}</span></span>
      </header>
      <ul>
        {
          tasks.map(task => {
            return (
              <Task
                concluded={task.concluded}
                description={task.description}
                key={task.description}
                onDeleteTask={onDeleteTask}
                onConcludeTask={onConcludeTask}
              />
            ) 
          })
        }
      </ul>
    </div>
  )
}