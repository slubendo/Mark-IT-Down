import { db, eq, desc } from "../index"
import { notebooks } from "../schema/notebooks"

export async function notebooksList() {
    try {
        const note = db
            .select({
                id:notebooks.id,
                notebook: notebooks.notebook, 
            })
            .from(notebooks)
        if (note) {
            return note
        } else {
            return { "error": "cannot find note" }
        }
    } catch (err) {
        return { "error": "cannot find note" }
    }
}

export async function notebookId(id: number) {
    try {
        const note = db
            .select({
                id: notebooks.id,
                notebook: notebooks.notebook,
                createdAt: notebooks.createdAt,
            })
            .from(notebooks)
            .where(eq(notebooks.id, id))
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

export async function createNotebook(notebook: string) {
    const createdNotebook = await db.insert(notebooks).values({ notebook })
}


export async function updateNotebook(notebookId: number, notebook: string) {
    const updatedNotebook = await db.update(notebooks).set({ notebook }).where(eq(notebooks.id, notebookId))
}

export async function deleteNotebook(notebookId: number) {
    const deletedNotebook = await db.delete(notebooks).where(eq(notebooks.id, notebookId))
}

export type Note = Awaited<ReturnType<typeof notebookId>>
