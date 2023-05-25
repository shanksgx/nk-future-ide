import { type FC, useState } from 'react'
import { Button } from '@arco-design/web-react'

const App: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button type="primary">Hello Arco</Button>
      </div>
    </>
  )
}

export default App
