import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/health', (_req, res) => res.json({ status: 'ok', mode: 'demo' }));
app.post('/api/auth/login', (req, res) => res.json({ user: { name: req.body.email?.split('@')[0] || 'Aarav', email: req.body.email || 'student@example.com' }, demo: true }));
app.post('/api/auth/register', (req, res) => res.json({ user: { name: req.body.name || 'Aarav', email: req.body.email || 'student@example.com' }, demo: true }));
app.listen(4000, () => console.log('Anvesha demo API running on http://localhost:4000'));
