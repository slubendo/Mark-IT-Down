import express, { Request, Response } from 'express';
import { createNotebook, deleteNotebook, notebookId, notebooksList, updateNotebook } from '../db/queries/notebook-queries';

export const notebookRoutes = express.Router();



notebookRoutes.get('/:id', async (req: Request, res: Response): Promise<void> => {
    let id = parseInt(req.params.id)
    const note = await notebookId(id)
    res.json({ note })
});

notebookRoutes.get('/notebooks', async (req: Request, res: Response): Promise<void> => {
    const note = await notebooksList()
    if ('error' in note) {
        res.json({ error: note.error });
    } else {
        const noteSet = new Set(note);
        res.json({ note: Array.from(noteSet) });
    }
});

notebookRoutes.post('/create', async (req: Request, res: Response): Promise<void> => {
    let notebook = req.body.notebook
    await createNotebook(notebook)
    res.send(`new Note created`)
});

notebookRoutes.put('/:id', async (req: Request, res: Response): Promise<void> => {
    let id = parseInt(req.params.id)
    let notebook = req.body.note
    let noteInfo = await updateNotebook(id, notebook)
    res.json({ noteInfo });
});

notebookRoutes.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    let id = parseInt(req.params.id)
    await deleteNotebook(id)
    res.json(`note ${id} deleted`)
});