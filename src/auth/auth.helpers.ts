
export const validatePassword = (senha: string): boolean => {
  return senha.length >= 6 && /[A-Z]/.test(senha) && /\d/.test(senha)
}
