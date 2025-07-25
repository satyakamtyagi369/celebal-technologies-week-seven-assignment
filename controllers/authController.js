const jwt = require('jsonwebtoken');

//credentials ko match karne ke liye hardcoded users array
const users = [{ username: 'celebal', password: 'celebal123' }];

exports.login = (req, res) => {
  const { username, password } = req.body;

  console.log('Login attempt:', username, password);

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign(
    { username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
};
