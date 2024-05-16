/* eslint-disable react/prop-types */
const CreditCard = (props) => {

const {name, number, expiry, cvv} = props

  return (
    <>
        <div className="flex flex-col justify-around bg-gradient-to-tl from-gray-700 via-20% to-gray-800 to-90% p-4 border border-white border-opacity-30 rounded-lg shadow-md w-80 h-52">
          <div className="flex flex-row items-center justify-between mb-3">
            <label className="text-sm text-slate-300 font-semibold pl-2 mb-3 flex-grow">
              {name}
            </label>
            <div className="pr-2">
              <div className="flex items-center justify-center relative w-14 h-9 bg-gray-800 border border-white border-opacity-20 rounded-md">
                <svg
                  className="text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#ff9800"
                    d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                  ></path>
                  <path
                    fill="#d50000"
                    d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                  ></path>
                  <path
                    fill="#ff3d00"
                    d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <label className="text-xl text-slate-300 font-semibol pl-2">
              {number}
            </label>
            <div className="flex flex-row justify-between">
              <label className=" text-sm text-slate-300 font-semibold pl-2">
                {expiry}
              </label>
              <label className=" text-sm text-slate-300 font-semibold pr-2">
                {cvv}
              </label>
            </div>
          </div>
        </div>
    </>
  );
};

export default CreditCard;
