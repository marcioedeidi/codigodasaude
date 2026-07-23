// Tipos para formulário de contato
export interface ContactFormData {
  name: string
  whatsapp: string
  email: string
}

// Tipos para produtos
export interface Product {
  id: string
  title: string
  description: string
  image?: string
}

// Tipos para benefícios
export interface Benefit {
  id: string
  title: string
  description: string
  icon?: string
}

// Tipos para FAQ
export interface FAQItem {
  id: string
  question: string
  answer: string
}

// Tipos para retorno da API
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}
