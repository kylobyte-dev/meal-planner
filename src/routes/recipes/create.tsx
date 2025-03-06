import { createFileRoute } from '@tanstack/react-router'
import { RecipeForm } from '../../components/recipe-form/RecipeForm'

export const Route = createFileRoute('/recipes/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>New Recipe</h1>
      <RecipeForm />
    </div>
  )
}
