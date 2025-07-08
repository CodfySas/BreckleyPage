import React from 'react';

const TopHeader: React.FC = () => {

  return (
    <header className="bg-[#1d3e6d] shadow-lg sticky top-0 z-51">
      <div className=" text-xs mx-auto px-4 p-2 !text-white text-right sm:px-6 lg:px-8 flex justify-between">
        <div className='flex justify-start gap-3 md:gap-10 flex-wrap'>
          <p>317 429 9966 - (+57) 605 - 3195893</p>
          <p>berckley@ibs.edu.co</p>
        </div>
        <div className='flex justify-end gap-3 flex-wrap md:gap-10'>
          <a target='_blank' href='https://sabpadres.ibs.edu.co/login.aspx?ReturnUrl=%2f' className='cursor'>Portal estudiantes</a>
          <a target='_blank' href='https://berckley.phidias.co/'>Phidias</a>
          <a target='_blank' href='https://zonapagos.com/pagosn2/LoginCliente'>PSE</a>
        </div>

      </div>
    </header>
  );
};

export default TopHeader;