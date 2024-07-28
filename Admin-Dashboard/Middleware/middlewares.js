const jwt = require('jsonwebtoken');

//exports.authPage = (permissions) => {
//    return (req, res, next) => {
 //       const userRole = req.session.user?.role; // Extract the role from the session
 //       if (permissions.includes(userRole)) {
  //          next();
   //     } else {
   //         return res.status(401).json("You don't have permission!");
   //     }
   // };
//};

exports.authPage = (permissions) => {
    return (req, res, next) => {
        const userRole = req.user?.role; // Extract the role from the decoded token
        if (permissions.includes(userRole)) {
            next();
        } else {
            return res.status(401).json("You don't have permission!");
        }
    };
};


exports.verifyToken = (req, res, next) => {
    //const authHeader = req.headers['Authorization'] || req.headers['authorization'];
    const LocalToken = req.cookies.jwtToken;

    if ( !LocalToken) {
        return res.status(403).json({ message: 'No token provided!' });
    }

    const token =  LocalToken;
    if (!token) {
        return res.status(403).json({ message: 'Invalid token format!' });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decodedToken; // Store the decoded token information in the request
        console.log(decodedToken);
        console.log("Token verified successfully");
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({ message: 'Failed to authenticate token!' });
    }
};

