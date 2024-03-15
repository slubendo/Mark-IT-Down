import { db, eq, desc } from "../index"
import { notes } from "../schema/notes"
import { notebooks } from "../schema/notebooks"



export async function noteList() {
    try {
        const note = db
            .select({
                id: notes.id,
                note: notes.note,
                title: notes.title,
                notebookId: notes.notebookId,
                createdAt: notes.createdAt,

                notebook: {
                    id: notebooks.id,
                    notebook:notebooks.notebook
                }
            })
            .from(notes)
            .fullJoin(notebooks, eq(notebooks.id, notes.notebookId))

        if (note) {
            return note
        } else {
            return { "error": "cannot find note" }
        }
    } catch (err) {
        return { "error": "cannot find note" }
    }
}


export async function noteId(id: number) {
    try {
        const note = db
            .select({
                id: notes.id,
                note: notes.note,
                notebook: notes.notebookId,
                createdAt: notes.createdAt,
            })
            .from(notes)
            .where(eq(notes.id, id))
            .then((res) => res[0])
        if (note) {
            return note
        } else {
            return { "error": "cannot find note" }
        }
    } catch (err) {
        return { "error": "cannot find note" }
    }
}

export async function createNote(note: string, notebookId: number) {
    const createdNote = await db.insert(notes).values({ note, notebookId })
}


export async function updateNote(noteId: number, note: string) {
    const updatedNote = await db.update(notes).set({ note }).where(eq(notes.id, noteId))
}

export async function deleteNote(noteId: number) {
    const deletedNote = await db.delete(notes).where(eq(notes.id, noteId))
}

export type Note = Awaited<ReturnType<typeof noteId>>
