/**
 * Password validator for login/register pages
 */

// has number
const hasNumber = (number) => /[0-9]/.test(number)

// has mix of small and capitals
const hasMixed = (number) => /[a-z]/.test(number) && /[A-Z]/.test(number)

// has special chars
const hasSpecial = (number) => /[!#@$%^&*)(+=._-]/.test(number)

// set color based on password strength
export const strengthColor = (count) => {
  if (count <= 0) return { label: 'short', color: '#d3d3d3' }
  if (count < 2) return { label: 'Poor', color: '#d9534f' }
  if (count < 3) return { label: 'Weak', color: '#f0ad4e' }
  if (count < 4) return { label: 'Normal', color: '#5bc0de' }
  if (count < 5) return { label: 'Good', color: '#5cb85c' }
  if (count < 6) return { label: 'Strong', color: '#5cb85c' }
  return { label: 'Poor', color: '#d9534f' }
}

// password strength indicator
export const strengthIndicator = (number) => {
  let strengths = 0
  if (number.length > 5) strengths += 1
  if (number.length > 7) strengths += 1
  if (hasNumber(number)) strengths += 1
  if (hasSpecial(number)) strengths += 1
  if (hasMixed(number)) strengths += 1
  return strengths
}
