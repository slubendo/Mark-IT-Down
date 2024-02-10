import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path'
import { noteRoutes } from './routes/noteApiRoutes';
import { notebookRoutes } from './routes/notebookApiRoutes';




const app = express();
app.use(express.static(path.join(__dirname, 'static')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/note", noteRoutes)
app.use("/api/notebook", notebookRoutes)


const PORT = 8000;

app.get('/', (req: Request, res: Response): void => {
    const indexPath = path.join(__dirname, './static/index.html');
    // res.sendFile(indexPath);
    res.send("Hello");
});



app.listen(PORT, () => console.log(`server should be running at http://localhost:${PORT}/`))