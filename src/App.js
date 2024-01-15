import React,{useState} from 'react'

function App() {

  const [data, setData ] = useState([]);

  const [inputvalue , setInputvalue ] = useState('');


  const [editIndex, setEditindex] = useState(null);


  const changeHandler =(e)=>{
    setInputvalue(e.target.value)
  }

  const submitHandler =()=>{

    if(editIndex !==null){
      const updatedData = [...data];
      updatedData[editIndex] = inputvalue;
      setData(updatedData)
    }{
      setData([...data,inputvalue ])
    }

    setInputvalue('')
   
  }

  const deleteHandler =(index)=>{
     const deletedTodo = data.filter((_,i)=>i !==index);
     setData(deletedTodo);
     setEditindex(null)
  }

    const updateHandler =(index)=>{
      setInputvalue(data[index]);
          setEditindex(index)
    }


   return (
    <div>
      <input type="text" value={inputvalue} onChange={changeHandler} />
      <button onClick={submitHandler}>{editIndex !==null ? "update" :"add"}</button>

      {
        data && data.map((item,index)=>{
              return (
                <div key={index}>
                  {item}
                  <button onClick={()=>deleteHandler(index)}>delete</button>
                  <button onClick={()=>updateHandler(index)}>update</button>


                </div>
              )  
        })
      }
    </div>
  )
}

export default App