import React, { Suspense, type ReactNode } from 'react'

function LayoutCountry ({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      {children}
    </Suspense>
  )
}

export default LayoutCountry
