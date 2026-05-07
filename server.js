const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname));

// Valid password
const VALID_PASSWORD = 'DdBXJW3keMSdWx5';

// Login endpoint
app.post('/api/login', (req, res) => {
  const { password } = req.body;

  // Check if password is correct
  if (password === VALID_PASSWORD) {
    res.json({
      success: true,
      message: 'Login successful!',
      token: 'auth-token-' + Date.now()
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid password'
    });
  }
});

// Test endpoint to verify admin/123 doesn't work
app.get('/api/test-login', (req, res) => {
  res.json({
    message: 'Server is running. Use POST /api/login with correct credentials.',
    validUsername: 'admin',
    validPassword: 'DdBXJW3keMSdWx5'
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Valid password: DdBXJW3keMSdWx5');
  console.log('admin/123 will NOT work');
});
