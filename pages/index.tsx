import React, { FC, memo } from 'react'

interface IProps {
  children?: React.ReactNode
}

const App: FC<IProps> = () => {
  return <div>App</div>
}

export default memo(App)
