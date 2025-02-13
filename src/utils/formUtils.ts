import { FormEvent } from 'react'

export const submitForm = async (
  event: FormEvent,
  formAction: string
): Promise<'success' | 'error'> => {
  event.preventDefault()

  const form = event.target as HTMLFormElement
  const formData = new FormData(form)

  try {
    const response = await fetch(formAction, {
      method: form.method,
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Form submission error:', errorText)
      return 'error'
    }

    form.reset()
    return 'success'
  } catch (error) {
    console.error('Form submission error:', error)
    return 'error'
  }
}
