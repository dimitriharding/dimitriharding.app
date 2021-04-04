export function apiRequest(path, method = 'GET', data) {
  return fetch(`/api/${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
    },
    body: data ? JSON.stringify(data) : undefined,
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.status === 'error') {
        // Automatically signout user if accessToken is no longer valid

        throw CustomError(response.code, response.message)
      } else {
        return response.data
      }
    })
}

// Create an Error with custom message and code
export function CustomError(code, message) {
  const error = new Error(message)
  return { ...error, code }
}
