export const validateEmail = (email: string): boolean => {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}

export const validatePassword = (senha: string): boolean => {
  return senha.length >= 6 && /[A-Z]/.test(senha) && /\d/.test(senha)
}
