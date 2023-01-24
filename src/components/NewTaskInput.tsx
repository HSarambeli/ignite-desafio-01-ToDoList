import { useState, ChangeEvent, FormEvent } from 'react';

import styles from './NewTaskInput.module.css';
import {PlusCircle} from 'phosphor-react'

interface task {
  concluded: boolean;
  description: string 
}

interface NewTaskInputProps {
  onCreateTask: (taskDescription: task) => void;
}


export function NewTaskInput({onCreateTask}: NewTaskInputProps) {
  const [inputText, SetInputText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    let newTask = {
      concluded: false,
      description: inputText
    }

    event.preventDefault();

    onCreateTask(newTask);
    SetInputText('');
  }

  function handleWritingNewTask(event: ChangeEvent<HTMLInputElement>) {
    SetInputText(event.target.value)
  }


  return (
    <form className={styles.form} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        placeholder='Adicione uma nova tarefa'
        onChange={handleWritingNewTask}
        value={inputText}
      />
      <button type='submit'>
        Criar
        <span>
          <PlusCircle/>
        </span>
      </button>
    </form>
  )
}