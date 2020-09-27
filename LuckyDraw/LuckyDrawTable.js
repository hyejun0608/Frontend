import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import LuckyDrawItem from './LuckyDrawItem'
import { getWinnerList } from 'utils/apis'
import { useStores } from 'stores'
import './LuckyDrawTable.scss'

const LuckyDrawTable = observer(() => {
  // const {
  //   userStore: { socket },
  // } = useStores()
  const {
    luckyStore: { winner },
  } = useStores()
  const [data, setData] = useState(Array(10).fill({}))
  // const [curWinner, setCurWinner] = useState(0)

  useEffect(() => {
    getWinnerList().then((data) => {
      setData([...data])
    })

    // if (socket) {
    //
    //   socket.on('winner', (info) => {
    //     setCurWinner(info.lucky_flag)
    //     setData((prev) => [
    //       ...prev.slice(0, info.lucky_flag - 1),
    //       {
    //         school_name: info.school_name,
    //         grade: info.grade,
    //         class: info.class,
    //         number: info.number,
    //         student_name: info.student_name,
    //       },
    //       ...prev.slice(info.lucky_flag),
    //     ])
    //   })
    //   return () => socket.disconnect()
    // }
  }, [winner])
  // console.log('data', data)

  return (
    <div className="table">
      <div className="table__flist">
        <div />
        <div>
          <span>학교</span>
        </div>
        <div>
          <span>학년</span>
        </div>
        <div>
          <span>반</span>
        </div>
        <div>
          <span>번호</span>
        </div>
      </div>
      {data.map((data, ix) => {
        return (
          <LuckyDrawItem
            curWinner={winner}
            ix={ix}
            schoolName={data.school_name}
            grade={data.grade}
            class={data.class}
            number={data.number}
            key={ix}
          />
        )
      })}
    </div>
  )
})

export default LuckyDrawTable