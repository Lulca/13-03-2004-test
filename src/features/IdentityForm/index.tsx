import { Button, Input } from "../../components"
import { PASSWORD_VALIDATION, USER_NAME_VALIDATION } from "../../validations"
import { IdentityFormProps } from "./types"
import { useIdentityForm } from "./useIdentityForm"

export function IdentityForm({ onSubmit, children }: IdentityFormProps) {
  const { handleSubmit, register, errors } = useIdentityForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("username", USER_NAME_VALIDATION)} />
      <p>{errors.username?.message}</p>
      <Input {...register("password", PASSWORD_VALIDATION)} />
      <p>{errors.password?.message}</p>
      {typeof children === "function" ? children(register) : children}
      <Button type="submit">Submit</Button>
    </form>
  )
}
