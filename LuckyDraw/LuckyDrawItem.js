import React from 'react'

function LuckyDrawItem({ curWinner, ix, schoolName, grade, class: _class, number }) {
  return (
    <div className={`table__list${curWinner === ix + 1 ? ' new' : ''}`}>
      <div>
        <span>{ix + 1}</span>
      </div>
      <div>
        <span className="school">{schoolName}</span>
      </div>
      <div>
        <span className="grade">{grade}</span>
      </div>
      <div>
        <span className="class">{_class}</span>
      </div>
      <div>
        <span className="number">{number}</span>
      </div>
    </div>
  )
}

export default LuckyDrawItem