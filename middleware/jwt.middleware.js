// middleware/jwt.middleware.js

const { expressjwt: jwt } = require("express-jwt");

// Instantiate the JWT token validation middleware
const isAuthenticated = jwt({
  secret: process.env.SECRET,
  algorithms: ["HS256"],
  requestProperty: 'payload', 
  getToken: getTokenFromHeaders
});


// Function used to extracts the JWT token from the request's 'Authorization' Headers
function getTokenFromHeaders (req) {
  
  // Check if the token is available on the request Headers
  if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {

    // Get the encoded token string and return it
    const token = req.headers.authorization.split(" ")[1];
    return token;
  } 
  
  return null;
}

// Export the middleware so that we can use it to create a protected routes
module.exports = {
  isAuthenticated
}


// const jwt = require("jsonwebtoken");

// const isLoggedIn = async (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (!token || token === "null") {
//     return res.status(400).json({ message: "Token not found" });
//   }
 
//   try {
//     const tokenInfo = jwt.verify(token, process.env.SECRET);
//     req.user = tokenInfo;
//     next();
//   } catch (error) {
//     console.log(error.message, "Error.message")
//     return res.status(401).json(error);
//   }
  
// };

// module.exports = isLoggedIn;
