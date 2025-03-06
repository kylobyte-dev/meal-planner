import { CreateRecipeButton } from "./create-recipe/CreateRecipeButton";
import { RecipesList } from "./RecipesList";

export function RecipePage() {
  return (
    <div>
      <h1>Recipes</h1>
      <CreateRecipeButton />
      <RecipesList />
    </div>
  )
}