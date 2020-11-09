import React from 'react'

export default function NotFound() {
  const browser = typeof window !== 'undefined' && window
  return browser && <p>Page not found</p>
}
