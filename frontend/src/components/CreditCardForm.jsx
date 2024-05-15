import FormInput from "./FormInput";
import FormLabel from "./FormLabel";
import CreditCard from "./CreditCard";

const CreditCardForm = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div>
            <CreditCard />
          <div className="w-5/6 flex flex-col items-start gap-4">
            <p className="text-2xl font-semibold text-slate-600">
              Card details
            </p>
            <div>
              <FormLabel name={"Name on Card"} />
              <FormInput placeholder={"ex : A. V. Suraveera"} width={"w-80"} />
            </div>
            <div>
              <FormLabel name={"Card number"} />
              <FormInput placeholder={"xxxx xxxx xxxx xxxx"} width={"w-80"} />
            </div>
            <div className="flex gap-2">
              <div>
                <FormLabel name={"Expiry date"} />
                <FormInput placeholder={"mm/yy"} width={"w-24"} />
              </div>
              <div>
                <FormLabel name={"CVV"} />
                <FormInput placeholder={"XXX"} width={"w-20"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditCardForm;
