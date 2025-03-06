import { useForm } from "@tanstack/react-form"
import { IngredientsList } from "./IngredientsList"
import { StepsList } from "./StepsList"

type Recipe = {
  name: string,
  ingredients: Array<string>
}

export function RecipeForm() {
  const form = useForm({
    defaultValues: {
      name: '',
      ingredients: [],
    } as Recipe,
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value)
    },
  })
  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        void form.handleSubmit()
      }}
    >
      <form.Field
        name="name"
        children={(field) => (
          <>
            <label htmlFor={field.name}>Recipe Name </label>
            <input
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {/* <FieldInfo field={field} /> */}
          </>
        )}
      />
      <h3>Ingredients</h3>
      <IngredientsList />
      <h3>Steps</h3>
      <StepsList />
    </form>
  )
}