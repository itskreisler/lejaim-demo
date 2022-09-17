import React from 'react'
import Home from '@/pages/Home.jsx'
import Noticias from '@/pages/Noticias.jsx'
import NoticiasId from '@/pages/NoticiasId.jsx'
import Servicios from '@/pages/Servicios.jsx'
import QuienesSomos from '@/pages/QuienesSomos.jsx'
import Contacto from '@/pages/Contacto.jsx'

const pathTitle = ([path, title]) => { return { path, title } }
const PATHS = {
  URL_DEFAULT: pathTitle(['/', 'Inicio']),
  URL_NOTICIAS: pathTitle(['/noticias', 'Noticias']),
  URL_NOTICIAS_ID: pathTitle(['/noticias/:noticiaId', '']),
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
    title: PATHS.URL_NOTICIAS_ID.title,
    url: PATHS.URL_NOTICIAS_ID.path,
    Component: () => <NoticiasId/>
  },
  {
    title: PATHS.URL_SERVICIOS.title,
    url: PATHS.URL_SERVICIOS.path,
    Component: () => <Servicios/>
  },
  {
    title: PATHS.URL_QS.title,
    url: PATHS.URL_QS.path,
    Component: () => <QuienesSomos/>
  },
  {
    title: PATHS.URL_CONTACTO.title,
    url: PATHS.URL_CONTACTO.path,
    Component: () => <Contacto/>
  }
]
export { appPages, PATHS }
