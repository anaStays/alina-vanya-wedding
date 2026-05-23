import { useState } from 'react'
import GamePage from './pages/GamePage/GamePage'
import EnvelopePage from './pages/EnvelopePage/EnvelopePage'
import InvitePage from './pages/InvitePage/InvitePage'

export default function App() {
  const [page, setPage] = useState('invite')

  return (
    <>
      {/* {page === 'game' && <GamePage onComplete={() => setPage('envelope')} />}
      {page === 'envelope' && <EnvelopePage onComplete={() => setPage('invite')} />} */}
      {page === 'invite' && <InvitePage />}
    </>
  )
}