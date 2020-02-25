const initState = {
  email: "john@doe.com",
  name: "John Doe",
  occupation: "Ninja",
  age: 27
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_EMAIL':
      return {
        ...state,
        email: action.payload
      }
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload
      }
    case 'CHANGE_OCCUPATION':
      return {
        ...state,
        occupation: action.payload
      }
    case 'CHANGE_AGE':
      return {
        ...state,
        age: action.payload
      }
    default:
      return state
  }
}

export default userReducer;