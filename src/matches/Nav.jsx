import React from 'react'

export default function Nav({setRefresh, setSpinner}) {
  return (
    <div>
      <>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  .nav-container {\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n"
    }}
  />
  <div className="container nav-container">
    <nav className="navbar navbar-light bg-lightgreen">
      <span className="navbar-brand">Match List</span>
      <div className="refresh-box bg-lightblue">
        <button className="btn btn-primary" onClick={()=>{setRefresh((prev)=>{
            console.log(prev);
            setSpinner(true);
            return !prev})}}>Refresh</button>
      </div>
    </nav>
  </div>
</>

    </div>
  )
}
