import * as React from 'react';

export const SoporteEmailTemplate = ({ nombre, apellido, correo, mensaje, telefono }) => (


  <div className='max-w-4xl mx-auto m-4'>
    <table className='bg-[#C6A87C80] w-full'>
      <tbody>
        <tr>
          <td className="p-4">
            <img className="inline-block" src="/images/logo_mail.png" alt="logo" />
          </td>
          <td className="p-4">
            <div className="inline-block text-right">
              <a className="inline-block ml-4" href="#"><img className="max-h-[18px]" src="/images/facebook.svg" alt="social" /></a>
              <a className="inline-block ml-4" href="#"><img className="max-h-[18px]" src="/images/insta.svg" alt="social" /></a>
              <a className="inline-block ml-4" href="#"><img className="max-h-[18px]" src="/images/twit.svg" alt="social" /></a>
              <a className="inline-block ml-4" href="#"><img className="max-h-[18px]" src="/images/in.svg" alt="social" /></a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div className='p-4 border'>
      <h3 className='text-[18px]'>Correo enviado por {nombre} {apellido} desde el sitio web de <strong>Yo Soy Bienestar</strong></h3>
      <br />
      <hr />
      <br />
      <p className='text-[14px]'><strong>Email:</strong> {correo}</p>
      <p className='text-[14px]'><strong>Teléfono:</strong> {telefono}</p>
      <br />
      <p className='text-[14px]'><strong>Mensaje:</strong> {mensaje}</p>
    </div>
  </div>

);