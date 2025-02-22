import React, { FC, memo, useEffect, useState } from 'react'

interface IProps {
  countDown: number
  onEnd: () => void
}

const CountDown: FC<IProps> = ({ countDown, onEnd }) => {
  const [time, setTime] = useState(countDown)
  useEffect(() => {
    let timer = setInterval(() => {
      if (time === 0) {
        onEnd && onEnd()
        clearInterval(timer)
      }
      setTime(time - 1)
    }, 1000)

    // 返回一个清理函数
    return () => {  
      clearInterval(timer)
    }
  }, [time, onEnd])
  return <div>{`${time}s 后重试`}</div>
}

export default memo(CountDown)
