import { BUTTON_LABELS } from './layout'

/* Round calculations to 3 decimal points */

export const divide = (x, y) => {
  return Math.round((x * 1000) / y) / 1000
}

export const getResult = (x, op, y) => {
  let result

  switch (op) {
    case BUTTON_LABELS.PLUS:
      result = x + y
      break
    case BUTTON_LABELS.MINUS:
      result = x - y
      break
    case BUTTON_LABELS.MULTIPLY:
      result = x * y
      break
    case BUTTON_LABELS.DIVIDE:
      result = x / y
      break
    default:
  }
  return Math.round(result * 1000) / 1000
}
