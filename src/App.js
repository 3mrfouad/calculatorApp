import { useLayoutEffect, useState } from 'react'
import { calcButtons } from './helpers/layout'
import './App.css'
import CalcButton from './components/CalcButton'
import { BUTTON_LABELS, BUTTON_TYPES } from './helpers/layout'
import { divide, getResult } from './helpers/math'
function App() {
  const [currOperand, setCurrOperand] = useState('0')
  const [prevOperand, setPrevOperand] = useState()
  const [operator, setOperator] = useState()
  const [pressedButton, setPressedButton] = useState({})
  const [shouldExpectNewOperand, setShouldExpectNewOperand] = useState(false)

  const handleOnDigitBtnPress = () => {
    setCurrOperand(prevState =>
      prevState === '0' || shouldExpectNewOperand
        ? pressedButton.label
        : prevState + pressedButton.label
    )
    setShouldExpectNewOperand(false)
  }

  const handleOnOperatorBtnPress = () => {
    /* if prevOperand present, user is performing continuous calculations */
    if (prevOperand) {
      const result = getResult(prevOperand, operator, parseFloat(currOperand))
      setCurrOperand(result.toString())
      setPrevOperand(result)
      setShouldExpectNewOperand(true)
    } else {
      setPrevOperand(parseFloat(currOperand))
      setShouldExpectNewOperand(true)
    }
    setOperator(pressedButton.label)
  }

  const handleOnACPress = () => {
    setCurrOperand('0')
    setPrevOperand(undefined)
  }

  const handleOnPlusMinusPress = () => {
    setCurrOperand(prevState => (-1 * parseFloat(prevState)).toString())
  }

  const handleOnPeriodPress = () => {
    if (shouldExpectNewOperand) {
      setCurrOperand('0.')
      setShouldExpectNewOperand(false)
    } else if (!currOperand.includes('.'))
      setCurrOperand(currOperand + pressedButton.label)
  }

  const handleOnPercentagePress = () => {
    setCurrOperand(prevState => divide(prevState, 100).toString())
  }

  const handleOnEqualPress = () => {
    if (
      prevOperand === undefined ||
      operator === undefined ||
      currOperand === undefined
    )
      return
    const result = getResult(prevOperand, operator, parseFloat(currOperand))
    setCurrOperand(result.toString())
    setPrevOperand(undefined)
    setShouldExpectNewOperand(true)
    setOperator(undefined)
  }

  const handleOnFunctionBtnPress = () => {
    switch (pressedButton.label) {
      case BUTTON_LABELS.AC:
        handleOnACPress()
        break
      case BUTTON_LABELS.PLUS_MINUS:
        handleOnPlusMinusPress()
        break
      case BUTTON_LABELS.PERIOD:
        handleOnPeriodPress()
        break
      case BUTTON_LABELS.PERCENTAGE:
        handleOnPercentagePress()
        break
      case BUTTON_LABELS.EQUAL:
        handleOnEqualPress()
        break
      default:
    }
  }

  useLayoutEffect(() => {
    switch (pressedButton.type) {
      case BUTTON_TYPES.DIGIT:
        handleOnDigitBtnPress()
        break
      case BUTTON_TYPES.OPERATOR:
        handleOnOperatorBtnPress()
        break
      case BUTTON_TYPES.FUNCTION:
        handleOnFunctionBtnPress()
        break
      default:
    }
  }, [pressedButton])

  return (
    <div className="App">
      <p className="calcDisplay">{currOperand}</p>
      <section className="buttonsGrid">
        {calcButtons.map((btn, i) => (
          <CalcButton key={i} btn={btn} setPressedButton={setPressedButton} />
        ))}
      </section>
    </div>
  )
}

export default App
