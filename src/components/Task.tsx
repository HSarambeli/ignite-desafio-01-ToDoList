import styles from './Task.module.css'
import { Trash, Check } from "phosphor-react"

interface TaskProps {
  concluded: boolean;
  description: string;
  onDeleteTask: (taskToDelete: string) => void;
  onConcludeTask: (taskToCOnclude: string) => void;
}

export function Task({concluded, description, onDeleteTask, onConcludeTask}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(description);
  }

  function handleConcludeTask() {
    onConcludeTask(description);
  }

  return (
    <li className={styles.task}>
      <button className={ concluded ? styles.checkedButton : styles.checkButton} onClick={handleConcludeTask}>
        <span>
          <Check weight='bold' />
        </span>
      </button>
      <p className={concluded ? styles.checkedDescription : ''}>{description}</p>
      <button className={styles.trashButton} onClick={handleDeleteTask}>
        <Trash />
      </button>
    </li>
  )
}