import { createFileRoute } from '@tanstack/react-router'
import { RecipePage } from '../../components/RecipePage'

export const Route = createFileRoute('/recipes/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <RecipePage />
  )
}
