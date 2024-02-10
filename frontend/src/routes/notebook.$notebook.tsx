import { useNavigate, createFileRoute } from "@tanstack/react-router";
import React from "react";

// @ts-ignore
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