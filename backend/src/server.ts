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


const PORT = 8001;

app.get('/', (req: Request, res: Response): void => {
    const index= path.join(__dirname, './app/index.html');
    res.render("index.html");
});



app.listen(PORT, () => console.log(`server should be running at http://localhost:${PORT}/`))