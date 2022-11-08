import { Container, Input, Button, Flex, Spacer, Item } from "./styles";

import { useState } from 'react';

function App() {

  const [task, setTask] = useState('');

  const [listTask,setListTask] = useState([])

  const handleAddTask = () =>{
    if(!task) return alert("Preencha uma tarefa");

    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    }
    setListTask([...listTask, newTask]);
    setTask("");
  }

  const handleRemoveTask = (id) => {
    const newList = listTask.filter(task => task.id !== id);
    setListTask(newList);
  }

  const handleCheckTask = (id,checked) =>{
    const index = listTask.findIndex(task => task.id == id);
    const newList = listTask;
    newList[index].checked = !checked;
    setListTask([...newList]);
  }

  return (
    <Container>
      <h1 className="title">
        TODO LIST
      </h1>
      <Spacer />

      <Flex direction="row">
        <Input value={task} placeholder="Digite sua tarefa" onChange={(e) => setTask(e.target.value)} />
        <Button onClick={handleAddTask} >Adicionar</Button>
      </Flex>
      <Spacer margin="16px" />

      <ul>
        
        {listTask.map((task) => (
          <>
          <Item checked={task.checked} key={task.id} >
            <p>{task.task}</p>
            <Flex direction="row">
              <button onClick={()=> handleCheckTask(task.id,task.checked)}>
                <i className='bx bx-check' />
              </button>
              <button onClick={()=>handleRemoveTask(task.id)}>
                <i className='bx bx-trash' />
              </button>
            </Flex>
          </Item>
          <Spacer margin="12px" />
          </>
        ))}
      </ul>

    </Container>
  )
}

export default App
