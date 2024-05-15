/* eslint-disable react/prop-types */

const FormLabel = (props) => {

const {name} = props

  return (
    <>
        <label className="text-xs flex text-slate-700 pl-1">{name}</label>
    </>
  )
}

export default FormLabel