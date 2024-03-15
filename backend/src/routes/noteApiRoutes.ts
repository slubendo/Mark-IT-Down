import express, { Request, Response } from 'express';
import { createNote, deleteNote, noteId, noteList, updateNote } from '../db/queries/note-queries';

export const noteRoutes = express.Router();



noteRoutes.get('/list/all', async (req: Request, res: Response): Promise<void> => {
    const note = await noteList()
    if ('error' in note) {
        res.json({ error: note.error });
    } else {
        const noteSet = new Set(note);
        res.json({ note: Array.from(noteSet) });
    }
});

noteRoutes.get('/:id', async (req: Request, res: Response): Promise<void> => {
    let id = parseInt(req.params.id)
    const note = await noteId(id)
    res.json({ note })
});


noteRoutes.post('/create', async (req: Request, res: Response): Promise<void> => {
    let note = req.body.note
    let notebook = req.body.notebook
    await createNote(note, notebook)
    res.send(`new Note created`)
});

noteRoutes.put('/:id', async (req: Request, res: Response): Promise<void> => {
    let id = parseInt(req.params.id)
    let note = req.body.note
    let noteInfo = await updateNote(id, note)
    res.json({ noteInfo });
});

noteRoutes.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    let id = parseInt(req.params.id)
    await deleteNote(id)
    res.json(`note ${id} deleted`)
});