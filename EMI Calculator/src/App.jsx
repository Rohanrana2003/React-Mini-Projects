import { useState } from 'react'
import { tenureData } from './data/Tenure';
import './App.css'

function App() {

  const [asset, setAsset] = useState(0);
  const [rate, setRate]   = useState(10);
  const [fee, setFee]     = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);


  const calculateEMI = (downpayment) =>{
    if(!asset) return;

    const loanAmount = asset - downpayment;
    const rateOfInterest = rate/100;
    const numOfYears = tenure/12;

    const EMI = (loanAmount * rateOfInterest * (1 + rateOfInterest)** numOfYears)
                /((1 + rateOfInterest)**numOfYears - 1);

        return Number(EMI/12).toFixed(0);
  }

  const calculateDP = (emi) =>{
    if(!asset) return;

  }


  const updateEmi = (e) =>{
    if(!asset) return;

    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));

    const emi = calculateEMI(dp);
    setEmi(emi);

  }

  const updateDownPayment = (e) =>{
    if(!asset) return;

    const emi = Number(e.target.value);
    setEmi(dp.toFixed(0));

    const dp = calculateDP(emi);
    setDownPayment(dp);
  }


  

  return ( 
  <>
    <div className="body">

      <h1>EMI Calculator</h1>


      <div className="total-cost">

        <h4>Total Cost of Asset</h4>
        <input type="number" id='totalCost' value={asset} onChange={(e)=>setAsset(e.target.value)}/>
        
      </div>


      <div className="interest-rate">

        <h4>Interest Rate (in %)</h4>
        <input type="number" id='interestRate' value={rate} onChange={(e)=>setRate(e.target.value)}/>

      </div>


      <div className="processing-fee">

        <h4>Processing Fee (in %)</h4>
        <input type="number" id='processingFee' value={fee} onChange={(e)=>setFee(e.target.value)}/>

      </div>


      <div className="down-payment">

        <h4>Down Payment</h4>
        <h4>Total Down Payment - </h4>
        <input type="range" id='downPayment' value={downPayment} min={0} max={asset} onChange={updateEmi}/>

        <div className="dp-data range">
          <label>0%</label>
          <b>{downPayment}</b>
          <label>100%</label>
        </div>

      </div>


      <div className="loan-Month">

        <h4>Loan Per Month</h4>
        <h4>Total Loan Amount - </h4>
        <input type="range" id='loanMonth' value={emi} min={calculateEMI(asset)} max={calculateEMI(0)} onChange={updateDownPayment}/>

        <div className="loan-data range">
          <label>{calculateEMI(asset)}</label>
          <b>{emi}</b>
          <label>{calculateEMI(0)}</label>
        </div>

      </div>

      <div className="tenureContainer">
        {
          tenureData.map((x)=>(
            <button className={`tenure ${x === tenure ? 'selected':""}`}  onClick={()=>setTenure(x)} key={x}>{x}</button>
          ))
        }
      </div>


    </div>
  </>
  )
}

export default App
