import { Link } from "@tanstack/react-router";

export function CreateRecipeButton() {
  return (
    <button>
      <Link to="/recipes/create">Add new recipe</Link>
    </button>
  )
}