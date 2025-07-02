// import logo from './logo.svg';
import './App.css';
import Header from "./myComponent/Header";
import {Todos} from "./myComponent/Todos";
import {Footer} from "./myComponent/Footer";
import {AddTodo} from "./myComponent/AddTodo";
import About from './myComponent/About'
// import { Todo } from './myComponent/Todo';
import React, { useState ,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";




function App() {
  let TODOData;
  if(localStorage.getItem('todos')===null){
    TODOData=[]
    //localStorage.setItem('todos',[])
  }
  else{
    console.log(localStorage.getItem('todos'))
    // TODOData=localStorage.getItem('todos');
    TODOData = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("ON delete function called",todo)
    setTODO(todoList.filter((e)=>{
return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todoList));

    }

    const AddTodoData=(title,Desc)=>{
      console.log("data is",title,Desc);
      let Sno;
      if(todoList<=0){
         Sno=1;
      }
      else{
         Sno= todoList[todoList.length-1].Sno + 1
      }
      
      console.log("sno",Sno)
      const todo={
        Sno:Sno,
        title:title,
        Desc:Desc,
      }
      
      setTODO([...todoList,todo])

    }
    
  // }
  const [todoList, setTODO] = useState(TODOData)
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todoList));
  }, [todoList])
  //   {
  //     Sno:1,
  //     title:"Check",
  //     Desc:"CHECKING THE WHOLE THING"
  //   },
  //   {
  //     Sno:2,
  //     title:"Second Element",
  //     Desc:"Description of second element"
  //   }
  // ]);
  return (
    
    <>  
    <Router>

      
      <Header title="CS Todo" search="true" />
      <Switch>
          <Route exact path="/" render={()=>{
            return (
              <>
              <AddTodo AddTodoData={AddTodoData}/>
              <Todos todoList={todoList} onDelete={onDelete}/>
              </>
            )
          }}>            
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      
      <Footer/>
      </Router>
</>
  );
}

export default App;
