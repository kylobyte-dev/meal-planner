import { Link } from "@tanstack/react-router";

export function RecipesList() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/recipes/$recipeId" className="[&.active]:font-bold" params={{ recipeId: '123' }}>
            Pancakes
          </Link></li>
      </ul>
    </div>
  )
}