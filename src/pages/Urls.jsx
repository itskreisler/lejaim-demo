import React from 'react'
import Home from '@/pages/Home.jsx'
import Noticias from '@/pages/Noticias.jsx'

const pathTitle = ([path, title]) => { return { path, title } }
const PATHS = {
  URL_DEFAULT: pathTitle(['/', 'Inicio']),
  URL_NOTICIAS: pathTitle(['/noticias', 'Noticias']),
  URL_SERVICIOS: pathTitle(['/servicios', 'Servicios']),
  URL_QS: pathTitle(['/quienes-somos', 'Quiénes somos']),
  URL_CONTACTO: pathTitle(['/contacto', 'Contacto'])
}
const appPages = [
  {
    title: PATHS.URL_DEFAULT.title,
    url: PATHS.URL_DEFAULT.path,
    Component: () => <Home/>
  },
  {
    title: PATHS.URL_NOTICIAS.title,
    url: PATHS.URL_NOTICIAS.path,
    Component: () => <Noticias/>
  },
  {
    title: PATHS.URL_SERVICIOS.title,
    url: PATHS.URL_SERVICIOS.path,
    Component: () => <></>
  },
  {
    title: PATHS.URL_QS.title,
    url: PATHS.URL_QS.path,
    Component: () => <></>
  },
  {
    title: PATHS.URL_CONTACTO.title,
    url: PATHS.URL_CONTACTO.path,
    Component: () => <></>
  }
]
export { appPages, PATHS }
