function Input(props) {
  return (
    <input type="text"
      placeholder={props.placeholder}
      className="border border-slate-300 outline-slate-40 px-4 py-2 rounded-md"
      {
        ...props
      }
    />
  )
}

export default Input