/* eslint-disable react/prop-types */

const FormInput = (props) => {

    const {placeholder, width} = props

  return (
    <>
        <input type="text" name="" id="" placeholder={placeholder} className={` ${width} bg-white border-2 border-slate-500 outline-none focus:border-blue-500 rounded-md px-2 py-2 text-lg `}/>
    </>
  )
}

export default FormInput