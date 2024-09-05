import React, { useContext } from 'react'
import '../style.css'
import { ThemeContext } from '../ThemeContext'
export default function HeaderFunction(props) {

  // Context Api
  const {theme,toggleTheme}=useContext(ThemeContext);
  const styles={
    light:{
      background:"white",
      color:"black",
      padding:"2rem"
    },
    dark:{
      background:"black",
      color:"white",
      padding:"2rem"
    }
  }
  

  {/* start Header  */ }
  {/* 1.YOL(Styling) */ }
  {/* <header style={{color:'blue'}}></header> */ }

  {/* 2.YOL(Styling) */ }
  // const headerCss={
  //   "height":"50vh",
  //   "width":"100%",
  //   "background-color":"black",
  //   "color":"white",
  //   "padding-top":"5rem"
  // }

  return (
    <>
    <nav
      class="navbar fixed-top navbar-expand-md navbar-light bg-dark"
    >
      <div class="container">
        <a class="navbar-brand" href="#">{props.name}</a>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#" aria-current="page"
                >Home
                <span class="visually-hidden">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Dropdown</a
              >
              <div
                class="dropdown-menu"
                aria-labelledby="dropdownId"
              >
                <a class="dropdown-item" href="#"
                  >Action 1</a
                >
                <a class="dropdown-item" href="#"
                  >Action 2</a
                >
              </div>
            </li>
          </ul>
          <form class="d-flex my-2 my-lg-0">
            <input
              class="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
            
          </form>
          <button onClick={toggleTheme} className="btn btn-warning my-2 my-sm-0 ms-2"><i class="fa-solid fa-circle-half-stroke"></i></button>
        </div>
      </div>
    </nav>
    {/* end Nav  */}


      {/* start Header  */}
      {/* 1.YOL(Styling) */}
      {/* <header style={{color:'blue'}}></header> */}
      {/* 2.YOL(Styling) */}

      {/*3.YOL*/}
      <header className="backgroundExternal">
        <p className='specialParag'>React Eğitimi</p>
      </header>

      {/* <img src={background} alt="" srcset="" /> */}

      {/* end Header  */}
    </>
  )
}
