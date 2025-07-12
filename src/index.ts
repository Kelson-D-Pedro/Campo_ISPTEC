import app from './app';
import { createServer } from 'http';

// const PORT = process.env.PORT || 3000;
const server = createServer(app);

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

server.listen(PORT, "0.0.0.0" , () => {
    console.log(`Server is running on http://192.168.100.88:${PORT}`);
})
