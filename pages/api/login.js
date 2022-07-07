export default function handler(req, res) {
  const { username, password } = req.body;
  const { method } = req;

  if (!username || !password) {
    return res.json({ status: 422, error: "Username and Password empty" });
  }

  switch (method) {
    case 'POST':
      if (username === 'admin' && password === 'password') {
        res.status(200).json({ status: 200, message: "Success Login" });
      } else {
        return res.json({ status: 422, error: "Username and Password not match" });
      }
      break;
  }
}
