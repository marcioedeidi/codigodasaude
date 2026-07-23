// Função para validar um formulário de contato
export interface ValidationErrors {
  [key: string]: string[]
}

export function validateContactForm(data: {
  name: string
  whatsapp: string
  email: string
}): ValidationErrors {
  const errors: ValidationErrors = {}

  if (!data.name || data.name.trim().length < 3) {
    errors.name = ['Nome deve ter pelo menos 3 caracteres']
  }

  if (!data.whatsapp || !/^\d{10,15}$/.test(data.whatsapp.replace(/\D/g, ''))) {
    errors.whatsapp = ['WhatsApp inválido']
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = ['Email inválido']
  }

  return errors
}

// Função para verificar se um objeto está vazio
export function isEmpty(obj: Record<string, any>): boolean {
  return Object.keys(obj).length === 0
}

// Função para comparar dois objetos
export function isEqual(a: any, b: any): boolean {
  return JSON.stringify(a) === JSON.stringify(b)
}
