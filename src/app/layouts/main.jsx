import React from 'react'
import useMockData from '../utils/mockData'

const Main = () => {
  const {error, initialize, progress, status} = useMockData()

  return (
    <div className="container mt-5">
      <h1>Main Page</h1>
      <h3>Data initialization in FireBase</h3>
      <ul>
        <li>Status: {status}</li>
        <li>Progress: {progress}%</li>
        {error && <li>Error: {error}</li>}
      </ul>
      <button className="btn btn-primary" onClick={() => initialize()}>
        {' '}
        Initialize
      </button>
    </div>
  )
}

export default Main