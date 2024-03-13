import { useForm } from "react-hook-form"

export const useIdentityForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  return {
    register,
    handleSubmit,
    errors
  }
}