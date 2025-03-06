import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/recipes/$recipeId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/recipes/$recipeId/edit"!</div>
}
