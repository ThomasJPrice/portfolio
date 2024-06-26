const CustomInput = ({ label, name, type, textArea }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-base font-medium">{label}</label>

      {!textArea ? 
      <input type={type} name={name} required className="w-full bg-background text-text outline-none border-b-[3px] border-b-solid border-b-[#c0c4cc] p-[1px] transitionAll focus:border-b-primary" />
      : 
      <textarea 
        type={type}
        name={name}
        required
        className="h-[100px] resize-none w-full bg-background text-text outline-none border-b-[3px] border-b-solid border-b-[#c0c4cc] p-[1px] transitionAll focus:border-b-primary"
      />}
    </div>
  )
}

export default CustomInput