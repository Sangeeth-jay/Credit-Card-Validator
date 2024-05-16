import { useState } from "react";
import FormLabel from "./FormLabel";
import CreditCard from "./CreditCard";

const CreditCardForm = () => {

  const [cardDetails, setCardDetails] = useState({
    name : "Full Name",
    number : "0000 0000 0000 0000",
    expiry : "mm/yy",
    cvv : "CVV"
  });

  const handleChange = (event) => {
    setCardDetails({...cardDetails, [event.target.name]: event.target.value });
    console.log(cardDetails);
  }

  

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="absolute top-1/4 border-2 border-slate-200 px-10 pt-28 pb-10 rounded-xl">
          <div className="w-5/6 flex flex-col items-start gap-4">
            <p className="text-2xl font-semibold text-slate-600">
              Card details
            </p>
            <div>
              <FormLabel name={"Name on Card"} />
              <input onChange={handleChange} type="text" name="name" id="" placeholder="ex : A. V. Suraveera" className="w-80 bg-white border-2 border-slate-400 outline-none focus:border-blue-500 rounded-md px-2 py-2 text-lg "/>
            </div>
            <div>
              <FormLabel name={"Card number"} />
              <input onChange={handleChange} type="text" name="number" id="" placeholder="xxxx xxxx xxxx xxxx" className="w-80 bg-white border-2 border-slate-400 outline-none focus:border-blue-500 rounded-md px-2 py-2 text-lg "/>
            </div>
            <div className="flex gap-2">
              <div>
                <FormLabel name={"Expiry date"} />
                <input onChange={handleChange} type="text" name="expiry" id="" placeholder="mm/yy" className="w-20 bg-white border-2 border-slate-400 outline-none focus:border-blue-500 rounded-md px-2 py-2 text-lg "/>
              </div>
              <div>
                <FormLabel name={"CVV"} />
                <input onChange={handleChange} type="text" name="cvv" id="" placeholder="XXX" className="w-20 bg-white border-2 border-slate-400 outline-none focus:border-blue-500 rounded-md px-2 py-2 text-lg "/>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-4">
            <button className="w-40 h-10 bg-green-500 text-white rounded-md hover:bg-green-600 duration-200 hover:font-semibold active:scale-95">
              Check Validity
            </button>
          </div>
        </div>
        <div className="relative bottom-1/4">
          <CreditCard name={cardDetails.name} number={cardDetails.number} expiry={cardDetails.expiry} cvv={cardDetails.cvv} />
        </div>
      </div>
    </>
  );
};

export default CreditCardForm;
