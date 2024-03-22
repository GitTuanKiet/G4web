import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'react-toastify'

const useFormSubmit = (schema, defaultValues, call) => {
  const { handleSubmit, register, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = (data) => {
    setIsSubmitting(true)

    const check = Object.keys(data).every((key) => data[key] === defaultValues[key])

    if (check) {
      toast.info('Không có gì thay đổi')
      setIsSubmitting(false)
      return
    }

    if (data) {
      call(data)
    }

    setIsSubmitting(false)
  }

  return { handleOnSubmit : handleSubmit(onSubmit), register, control, errors, isSubmitting }
}

export { useFormSubmit }