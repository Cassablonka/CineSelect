export const validateFields = (e: string, p: string) => {
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)
  if (!emailRegex) {
    return 'Please enter valid email address'
  }
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      p,
    )
  if (!passwordRegex) {
    return 'Your password must be min of 8 characters, with 1 uppercase, 1 special character and 1 number'
  }
  return null
}
