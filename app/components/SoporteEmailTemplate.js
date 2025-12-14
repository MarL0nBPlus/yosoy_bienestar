import * as React from 'react';

export const SoporteEmailTemplate = ({ nombre, apellido, correo, mensaje, telefono }) => (
  <div className='bg-black flex gap-4 p-4'>
    <div>
      <img src="./images/fone-two.png" alt="" />
    </div>
    <div>
      <h3 className='text-white text-[18px]'>Nuevo correo de contacto de {nombre} {apellido}</h3>
      <p className='text-white text-[14px]'><strong>Email:</strong> {correo}</p>
      <p className='text-white text-[14px]'><strong>Teléfono:</strong> {telefono}</p>
      <p className='text-white text-[14px]'><strong>Mensjae:</strong> {mensaje}</p>
    </div>
  </div>
);