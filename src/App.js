import React from "react";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-12 text-center'>
      <h1 className='fw-bold'>FEEDUITEUN APPS</h1>
      <hr className='w-75 mx-auto'/>
      <h2 className='fw-bold'>Rp.1.500.000,-</h2>
      <span className='title-md'>sisa uang kamu tersisa 75% lagi</span>
      <div className='row'>
      <div className='col-6'>
      <div className='card-wrapper p-4'>
       <div className='icon-wrapper mb-1'><i class="bi bi-wallet2"></i>
<span className='title-sm'>pemasukan</span>
<h3 className='fw-bold'>Rp.2000.000,-</h3><span className='title-sm text-ungu fw-bold'>50</span>
<span className='title-sm'>transaksi</span>
<div className='row'>
 <div className='col-6'>
  <div className='card-wrapper p-4'>
    <div className='icon-wrapper mb-1'>
      <i class="bi bi-cash-stack"></i>
<span  className='title-sm'>pengeluaran</span>
<h3 className='fw-bold'>Rp.500.000,-</h3><span className='title-sm text-ungu fw-bold'>50</span>
<span className='title-sm'>transaksi</span>
</div></div></div></div>
</div></div></div>
</div></div></div></div>


  );
}
}
export default App;
