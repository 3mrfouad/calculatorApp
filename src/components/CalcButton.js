import './CalcButton.css'

const CalcButton = props => {
  const { label, className, type, icon } = props.btn
  const { setPressedButton } = props
  return (
    <button
      onClick={() => setPressedButton({ label, type })}
      className={className}
    >
      {icon || label}
    </button>
  )
}

export default CalcButton
