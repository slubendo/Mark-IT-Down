import { useNavigate, createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute('/notebook/$notebook')({
  component: notebook,
})

function notebook() {
  const { notebook } = Route.useParams()

  return (
    <>
    notebook
    Post ID: {notebook}
    </>
  );
}  