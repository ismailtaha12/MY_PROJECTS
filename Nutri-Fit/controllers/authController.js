// controllers/authController.js

const bcrypt = require('bcryptjs');
const User = require('../models/users');

exports.renderSigninSignup = (req, res) => {
    res.render("signin-signup");
  };
  

  exports.signup = async (req, res) => {
    const { username, password, email } = req.body;
     console.log("im in backend signup");

    try {
        // Validate input fields
        if (!username || !password || !email) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        const existingUseremail = await User.findOne({ email });
        if (existingUseremail) {
            return res.status(400).json({success: false, message: 'Email already exists.' });
        }
        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({success: false, message: 'username already exists.' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const user = new User({ username, password: hashedPassword, email });
        await user.save();

        res.status(201).json({ success: true, message: 'User created successfully' });
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};


exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        const user = await User.findOne({ username });
        if (!user) {
            console.log('im in existing not user');
            return res.status(400).json({ success: false, message: 'Invalid username or password' });
        }
        
        
        
        //const isMatch = await bcrypt.compare(password, user.password);
        // console.log('Password match result:', isMatch);
        //if (!isMatch) {
        //    console.log("in backend password bycrpt");
        //    return res.status(400).json({ success: false, message: 'Invalid username or password' });
        //}

        res.status(200).json({ success: true, message: 'Logged in successfully', user: user });
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};
