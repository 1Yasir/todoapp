import {useState} from 'react'
import './TodoList.css'

function TodoList() {
    const [inputVal , setInputVal] = useState("");
    const [taskContent , setTaskContent] = useState([]);

    function handelInput(e){
        setInputVal(e.target.value);

    }
    function addTask(){
        if(inputVal !== "")
        setTaskContent([...taskContent , inputVal]);
        setInputVal("");
    }

    function remove(id) {
        const newArr = [...taskContent]; 
        newArr.splice(id, 1); 
        setTaskContent(newArr); 
      }

  return (
    <>
    <div className='container'>
        <div className='todolist'>
            <div className='inputFiled'>
                <input type='text' value={inputVal} placeholder='Add Task' onChange={handelInput} />
                <button type='button' id='addtask' onClick={addTask}>addTask</button>
            </div>
            <div className='list'>
                <ul>
                    {
                        taskContent.map((task , index) => 
                         <li key={index}> <h4>{task}</h4> <button type='button' onClick={()=> remove(index)}>&minus;</button> </li>
                        )
                    }
                </ul>
            </div>
        </div>
    </div>

    </>
  )
}

export default TodoList