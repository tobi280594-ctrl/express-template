import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req: Request, res: Response) => {
    res.render('index', {
        title: 'Express + TypeScript + EJS',
        message: 'Welcome to your Express application!',
        features: [
            'Express.js with TypeScript',
            'EJS templating engine',
            'Static file serving',
            'Hot reload with ts-node-dev'
        ]
    });
});

app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
