import { Button } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";

export function CreateRecipeButton() {
  return (
    <Button>
      <Link to="/recipes/create">Add new recipe</Link>
    </Button>
  )
}