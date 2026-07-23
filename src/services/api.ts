// Funções auxiliares para chamadas API

interface FetchOptions extends RequestInit {
  timeout?: number
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

class ApiError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

async function fetchWithTimeout(url: string, options: FetchOptions = {}) {
  const { timeout = 10000, ...fetchOptions } = options

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new ApiError(response.status, `HTTP ${response.status}`)
    }

    return response
  } finally {
    clearTimeout(timeoutId)
  }
}

export async function apiGet<T>(endpoint: string, options?: FetchOptions): Promise<T> {
  const response = await fetchWithTimeout(`${API_BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  return response.json()
}

export async function apiPost<T>(endpoint: string, data: unknown, options?: FetchOptions): Promise<T> {
  const response = await fetchWithTimeout(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    ...options,
  })
  return response.json()
}

export async function apiPut<T>(endpoint: string, data: unknown, options?: FetchOptions): Promise<T> {
  const response = await fetchWithTimeout(`${API_BASE_URL}${endpoint}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    ...options,
  })
  return response.json()
}

export async function apiDelete<T>(endpoint: string, options?: FetchOptions): Promise<T> {
  const response = await fetchWithTimeout(`${API_BASE_URL}${endpoint}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  return response.json()
}

export { ApiError }
