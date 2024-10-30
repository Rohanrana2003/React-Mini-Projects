import { useState, useEffect, useRef } from 'react'

export default function Second() {

  const [count, setCount] = useState(0);
 const intervalRef = useRef(null)

  const startCount = useCallback(() => {

    return setInterval(() => {

      if(count === 10) clearInterval(intervalRef.current)

      setCount(c => c + 1)
    }, 1000);

  }, [])

  useEffect(() => {
    startCount
  }, [])



  return (

    <div>
      <p>{count}</p>
    </div>
  )
}
