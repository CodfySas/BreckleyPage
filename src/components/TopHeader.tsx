import React from 'react';

const TopHeader: React.FC = () => {

  return (
    <header className="bg-[#1d3e6d] shadow-lg sticky top-0 z-50">
      <div className=" text-xs mx-auto px-4 p-2 !text-white text-right flex justify-end gap-10 sm:px-6 lg:px-8">
        <a target='_blank' href='https://sabpadres.ibs.edu.co/login.aspx?ReturnUrl=%2f' className='cursor'>Portal estudiantes</a>
        <a target='_blank' href='https://berckley.phidias.co/'>Phidias</a>
        <a target='_blank' href='https://zonapagos.com/pagosn2/LoginCliente'>PSE</a>
      </div>
    </header>
  );
};

export default TopHeader;