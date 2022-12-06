import React from "react";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();

this.state = {
  sisaUang: 0,
  persentaseUang: 0,
  pemasukanUang: 0,
  pengeuaranUang: 0,
  transaksiIN: 0,
  transaksiOUT: 0,
  summary: [
    {
      deskripsi:'menerima gaji', 
      tanggal:'1 July 2022', 
      nominal:'1000000', 
      category:'IN'
    }, 
    {
      deskripsie:'beli kopi', 
      tanggal:'2 July 2022', 
      nominalo:'20000', 
      category:'OUT'
    }
  ]
}
}
  render() {
  return (
    <>
    <div className='container py-5'>
      <div className='row'>
        <div className='col-12 text-center'>
      <h1 className='fw-bold'>FEEDUITEN APPS</h1>
      <hr className='w-75 mx-auto'/>
      <h2 className='fw-bold'>Rp. {this.state.sisaUang},-</h2>
      <span className='title-md'>sisa uang kamu tersisa 75% lagi</span>
      </div>
      </div>

      <div className='row mt-4'>
      <div className='col-6'>
      <div className='card-wrapper p-4'>
       <div className='icon-wrapper mb-1'>
         <i class="bi bi-wallet2"></i>
         </div>
<span className='title-sm'>pemasukan</span>
<h3 className='fw-bold'>Rp. {this.statet.pengeluaranUang} ,-</h3>
<div>
<span className='title-sm text-ungu fw-bold'>50</span>
<span className='title-sm'> transaksi</span>
</div>
</div>
</div>

</div>
 <div className='col-6'>
  <div className='card-wrapper p-4'>
    <div className='icon-wrapper mb-1'>
      <i class="bi bi-cash-stack"></i>
      </div>
<span  className='title-sm'>pengeluaran</span>
<h3 className='fw-bold'>Rp.500.000,-</h3>
<div>
<span className='title-sm text-ungu fw-bold'>50</span><span className='title-sm'> transaksi</span>
</div>
</div>
</div>

</div>
<div className='row mt-5'>
  <div className='col-12 d-flex justify-content-between align-items-center'>
    <h4>Ringkasan Transaksi</h4>
    <div className='wtapper-button'>
      <button className='button btn-ungu px-3 py-2 me-2'>Pemasukan<i class="bi bi-plus-circle-fill"></i></button>
      <button className='button btn-pink px-3 py-2'>Pengeluaran<i class="bi bi-dash-circle-fill"></i></button>
      </div>
      </div>
      </div>

      <div className='row mt-4'>
        {this.state.summary.map{sum() => {
          return {
        <div className='col-12 d-flex justify-content-between align-items-center'>
      <div className='d-flex align-items-text'>
        <div className={sum.category === 'IN' ?  'icon-wrapper-IN : icon-wrapper-OUT'}>
          <i class={sum.category === 'IN' ? "bi bi-wallet2" : "bi bi-bag-dash"}></i>
            </div>
    <div className='transaction ms-3 d-flex flex-column'>
      <h6>{sum.deskripsi}</h6>
      <span className='title-sm'>{sum.tanggal}</span>
      
      </div>
      </div>
      
      <h5 className='text-money-In'>Rp. {sum.nominal} ,-</h5></div>
          }
        }} }
    
      </div>
      </div>     

</>
  );
}
}
export default App;