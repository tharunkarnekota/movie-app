import React,{useState} from 'react'

const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);
  const changehandler = e =>{
    setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=263d22d8`).then(
      res => res.json()
    ).then(value => setData(value.Search))
  }
  return (
    <div>
      <center>
          <h2> Search Your Favorite movie</h2>
          <form onSubmit={submitHandler}>
            <input type="text" value={search} onChange={changehandler}/><br /><br />
            <input type="submit" name="search" />
          </form>
          {data.map(movie => <li>{movie.Title}</li>)}
        </center>
    </div>
  )
}

export default App


