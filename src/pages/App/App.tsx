import Header from '@/components/Header/Header'
import BaseLayout from '@/Layout/BaseLayout'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
/**
 * 醒目启动后的全局展示界面，其余组件都作为子组件渲染展示
 */

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <BaseLayout/>
    </div>
  )
}

export default App
