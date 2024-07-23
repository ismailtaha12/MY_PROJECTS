exports.authPage = (permissions) => {
    return (req, res, next) => {
        const userRole = req.session.user?.role; // Extract the role from the session
        if (permissions.includes(userRole)) {
            next();
        } else {
            return res.status(401).json("You don't have permission!");
        }
    };
};

