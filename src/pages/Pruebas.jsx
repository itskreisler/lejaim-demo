import React, { useEffect, useState } from 'react'
import { useActive } from '../hooks/use-active'
import { useJsonStringDateTime } from '../hooks/use-new-date'

const Pruebas = () => {
  const [active] = useActive(5000)

  return (
    <>
      <div className="grid">
        <div>
          Estas {!active && 'in'}activo

          <pre>
            {useJsonStringDateTime()}
          </pre>
        </div>
      </div>
      <div className="grid">
        <div>

        </div>
      </div>
    </>
  )
}

export default Pruebas
