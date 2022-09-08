import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
const Home = () => {
  const [ifSend, setIfSend] = useState(false)
  const { register, formState: { errors }, watch, handleSubmit } = useForm({ defaultValues: { email: '' } })
  const onSubmit = (data) => {
    console.log(data)
    setIfSend(true)
    setTimeout(() => {
      setIfSend(false)
    }, 2000)
  }
  return (
    <>
      <div className="grid">
        <div>
          <article>
            <header>¿Quienes somos?</header>
            <p style={{ textAlign: 'justify' }}>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </p>
          </article>
        </div>
        <div>
          <div className="grid">
            <div>
              <article>
                <header>Redes sociales</header>
                <ul>
                  {[
                    {
                      title: 'Twitter',
                      url: 'https://www.twitter.com/itskreisler'
                    },
                    { title: 'TikTok', url: 'https://www.tiktok.com/@itskreisler' }
                  ].map(({ url, title }, index) => (
                    <li
                      style={{ textAlign: 'center', listStyle: 'none' }}
                      key={index}
                    >
                      <a
                        href={url}
                        target="_blank"
                        title={title}
                        rel="noreferrer"
                        data-tooltip={url}
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
          <div className="grid">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid">
                  <div>
                    <label htmlFor="email">Se uno de los primeros en enterarte!</label>
                    <input type='email' {...register('email')} placeholder='Correo electrónico' autoComplete='off' required />
                  </div>
                  <div style={{ marginTop: 'auto' }}>
                    <button className='success' type="submit">Suscribirme</button>
                  </div>
                </div>
                <div className="grid">
  <div>{ifSend && (<span>Gracias por suscribirte</span>)}</div>
</div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
