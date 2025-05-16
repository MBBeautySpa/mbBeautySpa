
import { Routes, Route } from 'react-router';
import Nav from '@/components/NavBar/Nav.tsx';
import items from '@/components/NavBar/Items.ts';
const App = () => {
  return (
    <div className="bg-pink-100 min-h-full min-w-full" id="app">
      <Nav children={(
        <Routes>
          {items.map((item) => (
            <Route key={item.url} path={item.url} element={<item.element />} />
          ))}
      </Routes>

      )}/>
    </div>

  )
}

export default App
