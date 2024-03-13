import { UseFormRegister, FieldValues } from "react-hook-form"

export type IdentityFormProps = {
  onSubmit: (data: Record<string, string>) => void
  children?: ((register: UseFormRegister<FieldValues>) => React.ReactNode) | React.ReactNode
}