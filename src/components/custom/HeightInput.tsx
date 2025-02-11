'use client'

import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { UseFormReturn } from 'react-hook-form'
import { formSchema } from './InputsCard'
import * as z from 'zod'

export const HeightInput = ({
  onChange,
  form,
}: {
  onChange: (heightInInches: number) => void
  form: UseFormReturn<z.infer<typeof formSchema>>
}) => {
  const [feet, setFeet] = useState('')
  const [inches, setInches] = useState('')

  const handleHeightChange = (newFeet: string, newInches: string) => {
    const totalInches = (parseInt(newFeet) || 0) * 12 + (parseInt(newInches) || 0)
    onChange(totalInches)
  }

  return (
    <FormField
      control={form.control}
      name="height"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Height</FormLabel>
          <FormControl>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Select
                  onValueChange={value => {
                    setFeet(value)
                    handleHeightChange(value, inches)
                    field.onChange(
                      value ? (parseInt(value) || 0) * 12 + (parseInt(inches) || 0) : undefined
                    )
                  }}
                  value={feet}
                >
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="ft" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 4 }, (_, i) => i + 4).map(ft => (
                      <SelectItem key={ft} value={ft.toString()}>
                        {ft} ft
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  onValueChange={value => {
                    setInches(value)
                    handleHeightChange(feet, value)
                    field.onChange(
                      feet ? (parseInt(feet) || 0) * 12 + (parseInt(value) || 0) : undefined
                    )
                  }}
                  value={inches}
                >
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="in" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => i).map(inch => (
                      <SelectItem key={inch} value={inch.toString()}>
                        {inch} in
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

HeightInput.displayName = 'HeightInput'
