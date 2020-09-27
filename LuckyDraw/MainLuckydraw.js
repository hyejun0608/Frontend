import React from 'react'
import './MainLuckydraw.scss'
import Artwork from 'assets/images/artwork@3x.png'
import LuckyDrawTable from './LuckyDrawTable'

const MainLuckydraw = () => {
  return (
    <div className="Background-box">
      <div className="contents">
        <div className="Lucky-Draw-Area">
          <img src={Artwork} className="Artwork" alt="artwork" />
          <LuckyDrawTable />
        </div>
      </div>
    </div>
  )
}

export default MainLuckydraw