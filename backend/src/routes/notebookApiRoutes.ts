import express, { Request, Response } from 'express';
import { createNotebook, deleteNotebook, notebookId, notebooksList, updateNotebook } from '../db/queries/notebook-queries';

export const notebookRoutes = express.Router();



notebookRoutes.get('/book/:id', async (req: Request, res: Response): Promise<void> => {
    let id = parseInt(req.params.id)
    const notebook = await notebookId(id)
    res.json({ notebook })
});

notebookRoutes.get('/list/all', async (req: Request, res: Response): Promise<void> => {
    const notebooks = await notebooksList()
        res.json(notebooks);
    }
);

notebookRoutes.post('/create', async (req: Request, res: Response): Promise<void> => {
    let notebook = req.body.notebook
    await createNotebook(notebook)
    res.send(`new Note created`)
});

notebookRoutes.put('/:id', async (req: Request, res: Response): Promise<void> => {
    let id = parseInt(req.params.id)
    let notebook = req.body.note
    let notebookInfo = await updateNotebook(id, notebook)
    res.json({ notebookInfo });
});

notebookRoutes.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    let id = parseInt(req.params.id)
    await deleteNotebook(id)
    res.json(`note ${id} deleted`)
});