

import styles from "./styles";


import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Calculator from "./Calculator"

function App() {

  
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [edit, setEdit] = useState(null);
 

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));


if (storedTodos && storedTodos.length) {
      setTodos(storedTodos);
    }
  },
   []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);






   const handleSubmit = (e) => 
   
   {
    e.preventDefault();
    
      if (inputValue){
      setTodos([...todos, inputValue]);
      setInputValue('');
    }


  };

  const handleEdit = (index) => {
    setEdit(index);
    setInputValue(todos[index]);


  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && edit !== null) {
      const newTodos = [...todos];
      newTodos[edit] = inputValue.trim();
      setTodos(newTodos);
      setEdit(null);
      setInputValue('');

    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    
    <div className="container mx-auto my-5 px-4 bg-lime-200 shadow-2xl">
      <div className=' grid grid-col gap-1 justify-center'>
      <h1 className="text-3xl font-bold mb-5 text-black">Todo List</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex mb-3">
          <input
            type="text"
            placeholder="🖊️ Add task.."
            className="border border-gray-400 rounded-lg py-2 px-3       mr-2"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />


          <button
            type="submit" className="bg-blue-300 text-white rounded-lg px-3 py-2"
          >
            Add
          </button>
        </div>
      </form>

      </div>

      <ul className="ml-8 ">
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center py-2 ">
            {edit === index ? (
              <form onSubmit={handleEditSubmit}>
                <input
                  type="text"  placeholder="Edit task"  className="border border-gray-400 py-2 mr-6"
                  value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                />
                 {/* <TextField
              
              
          
          id="outlined-disabled"
          
          defaultValue=""
          value={inputValue}
          type="text"
      
        /> */}
        
                <button className="bg-blue-500 rounded-lg  text-white  px-4 py-1 mr-2 shadow-xl ml-1 -mt-10">
                  Save
                </button>
                <button
                  className="bg-gray-400 text-white rounded-lg px-3 py-1"
                  onClick={() => {
                    setEdit(null);
                    setInputValue('');  
                  }}
                >
                  Cancel
                </button>
              </form>
            ) : (
              <div className='flex flex-nowrap  flex-row justify-center items-center gap-2 ml-80 '>
                <div>
                {/* <span className="text-white ">{todo}</span> */}
                <TextField
                // sx={{ input: { color: 'secondary' } }} 
                fontColor="white"
          disabled
          id="outlined-disabled"
          // label="Disabled"
          defaultValue=""
          value={todo}
      
        />
                </div>
             
                <div>
                <button
                  className="bg-yellow-500 text-white rounded-lg px-4 py-1 mr-2 shadow-xl"
                  onClick={() => handleEdit(index)}
                >
                 Edit
                </button>
                {/* <button
                  className="bg-yellow-500 text-white rounded-lg px-3 py-1 mr-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button> */}
                </div>
                <div>
                <button
                  className="bg-red-500 text-white rounded-lg px-3 py-1 mr-2"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
                </div>
                </div>
              
            )}
          </li>
           ))}
                 </ul>
              </div>
          );
           }
          
           

          //  mubi("pro rider")
          //  const val=[1,2,3]
          //  val.forEach( function (val){
          //   console.log("hrllo")
          //  }
          //  )
          //  function mubi(val){
          //   console.log("i am mubi",val);

          //  }
          //  const fn =(val)=>{
          //   console.log("i am a" )
          //   return val;
          //  }
          //  fn(val)

          // const fnn =()=>{
          //   return {
          //     a:1,
          //     b:2
          //   }
          // }
          // const val=fnn()
          // console.log(val)


          // const obj={
          //   a:2,
          //   b:3,
          //   myfunction:function(){
          //     return this.a + this.b;
          //   }
          // }

          // console.log(obj.myfunction())
      //     const myObject= {
      //       a:222, b:2433,
      //       c: ()=>{
      //         console.log(this)
      //       }
      //     };
      //     myObject.c=myObject.c.bind(myObject)
        
      //  var k= myObject.c;
      //  k();
      // function one() {
      //    var a=[
      //     100
      //    ]
         
      //    two(a);
      //    console.log(a[0],"one")
      // }
      // function two(a) {

      //   a[0]=a[0]+2;
      //   console.log(a[0],"two");
      // }
      // one();


  //     var obj ={
  //       a:1,
  //       b:2,c:"hai "
  //     }
  //      console.log(obj)

      
  //     var object ={
  //       ...obj 
  //     }
  // console.log(object,"hjkl")     
  
  
  // var a=[1,2,3,4,5]
  // var b=[ ...a]


  // console.log(a,"a")
  // console.log(b,"b")

  // const obj1 ={
  //   name :"mubi",
  //   age:"28",
  //   place:"malappuram"
  // }

  // function myfunction(){
  //   const  name =obj1.name;
  //   const place=obj1.place;
  //   console.log(name,place,"nmae amd place")
  // }
  // myfunction()

  <Calculator/>

  
           export default App;
