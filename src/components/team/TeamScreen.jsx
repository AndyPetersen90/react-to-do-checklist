import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import Brady from './Brady'
import Andrew from './Andrew'

const TeamScreen = () => {
  return (
    <div>
        <h1>Our Team</h1>
        <h2>Pick a Team Member</h2>
        <Link to="/team/brady">
            <button>Brady</button>
        </Link>
        <Link to="/team/andrew">
            <button>Andrew</button>
        </Link>
        <Routes>
            <Route path="brady" element={<Brady />} />
            <Route path="andrew" element={<Andrew />} />
        </Routes>

    </div>
  )
}

export default TeamScreen