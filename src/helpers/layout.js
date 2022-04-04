export const BUTTON_TYPES = Object.freeze({
  DIGIT: 0,
  OPERATOR: 1,
  FUNCTION: 2
})

export const BUTTON_LABELS = Object.freeze({
  AC: 'AC',
  PLUS_MINUS: '∓',
  PERCENTAGE: '%',
  DIVIDE: '÷',
  MULTIPLY: 'x',
  PLUS: '+',
  MINUS: '-',
  EQUAL: '=',
  PERIOD: '.'
})

export const calcButtons = [
  {
    label: BUTTON_LABELS.AC,
    className: 'btn btn-secondary',
    type: BUTTON_TYPES.FUNCTION
  },
  {
    label: BUTTON_LABELS.PLUS_MINUS,
    className: 'btn btn-secondary text-lg ',
    type: BUTTON_TYPES.FUNCTION
  },
  {
    label: BUTTON_LABELS.PERCENTAGE,
    className: 'btn btn-secondary',
    type: BUTTON_TYPES.FUNCTION
  },
  {
    label: BUTTON_LABELS.DIVIDE,
    className: 'btn btn-primary text-lg',
    type: BUTTON_TYPES.OPERATOR
  },
  {
    label: '7',
    className: 'btn btn-dark',
    type: BUTTON_TYPES.DIGIT
  },
  {
    label: '8',
    className: 'btn btn-dark',
    type: BUTTON_TYPES.DIGIT
  },
  {
    label: '9',
    className: 'btn btn-dark',
    type: BUTTON_TYPES.DIGIT
  },
  {
    label: BUTTON_LABELS.MULTIPLY,
    className: 'btn btn-primary text-lg',
    type: BUTTON_TYPES.OPERATOR
  },
  {
    label: '4',
    className: 'btn btn-dark',
    type: BUTTON_TYPES.DIGIT
  },
  {
    label: '5',
    className: 'btn btn-dark',
    type: BUTTON_TYPES.DIGIT
  },
  {
    label: '6',
    className: 'btn btn-dark',
    type: BUTTON_TYPES.DIGIT
  },
  {
    label: BUTTON_LABELS.MINUS,
    className: 'btn btn-primary text-lg',
    type: BUTTON_TYPES.OPERATOR
  },
  {
    label: '1',
    className: 'btn btn-dark',
    type: BUTTON_TYPES.DIGIT
  },
  {
    label: '2',
    className: 'btn btn-dark',
    type: BUTTON_TYPES.DIGIT
  },
  {
    label: '3',
    className: 'btn btn-dark',
    type: BUTTON_TYPES.DIGIT
  },
  {
    label: BUTTON_LABELS.PLUS,
    className: 'btn btn-primary text-lg',
    type: BUTTON_TYPES.OPERATOR
  },
  {
    label: '0',
    className: 'btn btn-dark-lg',
    type: BUTTON_TYPES.DIGIT
  },
  {
    label: BUTTON_LABELS.PERIOD,
    className: 'btn btn-dark',
    type: BUTTON_TYPES.FUNCTION
  },
  {
    label: BUTTON_LABELS.EQUAL,
    className: 'btn btn-primary text-lg',
    type: BUTTON_TYPES.FUNCTION
  }
]
