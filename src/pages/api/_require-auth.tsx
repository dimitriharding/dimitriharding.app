// Middleware for requiring authentication and getting user
const requireAuth = (fn) => async (req, res) => {
  // Respond with error if no authorization header
  if (!req.headers['x-api-key']) {
    return res.status(401).send({
      status: 'error',
      message: 'Try again later!',
    })
  }

  if (req.headers['x-api-key'] === process.env.API_KEY) {
    // Get user from token and add to req object
    //req.user = fakeAuth.verifyAccessToken(accessToken)

    // Call route function passed into this middleware
    return fn(req, res)
  } else {
    console.log('_require-auth error')

    // If there's an error assume token is expired and return
    // auth/invalid-user-token error (handled by apiRequest in util.js)
    res.status(401).send({
      status: 'error',
      code: 'auth/invalid-api-token',
      message: 'Try again later!',
    })
  }
}

export default requireAuth
