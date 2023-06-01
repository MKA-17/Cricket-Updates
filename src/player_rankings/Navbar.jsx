import React from 'react'

export default function Navbar() {
  return (
    <div>
      <br />
<nav className="navbar navbar-expand-lg bg-lightgreen">
  <div className="my-3"></div> {/* Space above navbar */}
  <div className="container-fluid">
    <div className="navbar-brand">ICC Player Rankings</div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-4 text-start">
        <a className="nav-link text-white fs-5" href="/playersRankings/test">Test</a>
      </div>
      <div className="col-4 text-center border-start border-end">
        <a className="nav-link text-white fs-5" href="/playersRankings/odi">ODI</a>
      </div>
      <div className="col-4 text-end">
        <a className="nav-link text-white fs-5" href="/playersRankings/t20i">T20I</a>
      </div>
    </div>
  </div>
  <div className="my-3"></div> {/* Space below navbar */}
</nav>

    </div>
  )
}
