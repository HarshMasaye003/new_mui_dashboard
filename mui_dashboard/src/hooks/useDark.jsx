import { useEffect, useState } from 'react'

const useDark = () => {
  const [dark, setDark] = useState(true)

  const toggledark = () => {
    setDark(!dark)
  }

  useEffect(() => {
    const localdark = localStorage.getItem('dark')
    if (localdark) {
      setDark(localdark)
    }
  }, [])

  return {
    dark,
    toggledark,
  }
}

export default useDark