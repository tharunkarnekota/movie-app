import React,{useState} from 'react'

const App = () => {
  const [search,setSearch] = useState("");
  const changehandler = e =>{
    setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    console.log(search);
  }
  return (
    <div>
      <center>
          <h2> Search Your Favorite movie</h2>
          <form onSubmit={submitHandler}>
            <input type="text" value={search} onChange={changehandler}/><br /><br />
            <input type="submit" name="search" />
          </form>
        </center>
    </div>
  )
}

export default App


