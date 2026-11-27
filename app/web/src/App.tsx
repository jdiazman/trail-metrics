
import { useState, useEffect } from 'react'

function App() {

  const [apiStatus, setApiStatus] = useState<string | null>(null)
  // Dummy status check
  useEffect(() => {
    const fetchApiStatus = async () => {
      try {
        const response = await fetch(`/api/health`)
        const data = await response.json()
        setApiStatus(data.status)
      } catch (error) {
        console.error('Error fetching API status:', error)
        setApiStatus('Error')
      }
    }

    fetchApiStatus()
  }, [])
  return (
    <div className="App">
      <h1>Trail Metrics</h1>
      <p>API Status: {apiStatus}</p>
    </div>
  )
}

export default App