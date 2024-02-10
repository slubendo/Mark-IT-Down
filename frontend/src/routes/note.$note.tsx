import { useNavigate, createFileRoute } from "@tanstack/react-router";
import React from "react";

// @ts-ignore
export const Route = createFileRoute('/note/$note')({
  component: Note,
})

function Note() {
  const { note } = Route.useParams()

  return (
    <>
    Note
    Post ID: {note}
    </>
  );
}  