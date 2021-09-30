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
            <input type="text" value={search} placeHolder="movie/series" onChange={changehandler}/><br /><br />
            <input type="submit" name="search" value="search"/> <br/><br />
          </form>
          <div className="row">
            {data.map(movie =>
            <div className="col-md-4">
              <div class="card" style={{"width":"18rem"}}>
                <img src={movie.Poster} class="card-img-top" alt={movie.Title} />
                <div class="card-body">
                  <h4 class="card-title">{movie.Title}</h4>
                  <a href={movie.Poster} className="btn btn-primary" download >Download poster</a>
                </div>
              </div>
            </div> 
              )}
          </div>
        </center>
    </div>
  )
}

export default App


