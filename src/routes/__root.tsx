import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/recipes" className="[&.active]:font-bold">
          Recipes
        </Link>{' '}
        <Link to="/meal-planner" className="[&.active]:font-bold">
          Meal Planner
        </Link>{' '}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})