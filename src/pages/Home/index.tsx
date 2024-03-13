import { Select } from "../../components"
import { IdentityForm } from "../../features"

export function Home() {
  const onSignUpFormSubmit = data => console.log('onSignUpFormSubmit', data)
  const onContactFormSubmit = data => console.log('onContactFormSubmit', data)

  return (
    <>
      <h1>Test task</h1>
      <h2>Sign Up form</h2>
      <IdentityForm onSubmit={onSignUpFormSubmit} />
      <h2>Contact form</h2>
      <IdentityForm onSubmit={onContactFormSubmit}>
        {register => (
          <Select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </Select>
        )}
      </IdentityForm>
    </>
  )
}