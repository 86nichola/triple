import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from 'routes/Home'
import MyBooking from 'routes/MyBooking'

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-bookings" element={<MyBooking />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
