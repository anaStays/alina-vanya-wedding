import { useState, useEffect } from 'react'
import EnvelopePage from './pages/EnvelopePage/EnvelopePage'
import InvitePage from './pages/InvitePage/InvitePage'
import styles from './App.module.css'

export default function App() {
  const [page, setPage] = useState('envelope')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className={styles.loader}>
        <p className={styles.loaderText}>И & А</p>
      </div>
    )
  }

  return (
    <>
      {page === 'envelope' && <EnvelopePage onComplete={() => setPage('invite')} />}
      {page === 'invite' && <InvitePage />}
    </>
  )
}