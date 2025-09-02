import { Routes, Route, Link } from 'react-router-dom'

function Home() { return <h1>Home</h1> }
function About() { return <h1>About</h1> }
function NotFound() { return <h1>404 – Not Found</h1> }

export default function App() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
