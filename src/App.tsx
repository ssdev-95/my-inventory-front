import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/default'
import { Signin } from './pages/login'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
