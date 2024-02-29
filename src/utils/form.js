import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const useFormSubmit = (schema, defaultValues, call) => {
  const { handleSubmit, register, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = (data) => {
    setIsSubmitting(true)

    if (data) {
      call(data)
    }

    setIsSubmitting(false)
  }

  return { handleOnSubmit : handleSubmit(onSubmit), register, control, errors, isSubmitting }
}

export { useFormSubmit }