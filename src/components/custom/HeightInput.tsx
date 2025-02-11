'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const HeightInput = ({ onChange }: { onChange: (heightInInches: number) => void }) => {
  const [feet, setFeet] = useState('')
  const [inches, setInches] = useState('')

  const handleHeightChange = (newFeet: string, newInches: string) => {
    const totalInches = (parseInt(newFeet) || 0) * 12 + (parseInt(newInches) || 0)
    onChange(totalInches)
  }

  return (
    <div className="flex flex-col gap-2">
      <Label>Height</Label>
      <div className="flex gap-2">
        {/* Feet Input */}
        <Select
          onValueChange={value => {
            setFeet(value)
            handleHeightChange(value, inches)
          }}
        >
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="ft" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 4 }, (_, i) => i + 4).map(
              (
                ft // Range: 4ft - 7ft
              ) => (
                <SelectItem key={ft} value={ft.toString()}>
                  {ft} ft
                </SelectItem>
              )
            )}
          </SelectContent>
        </Select>

        {/* Inches Input */}
        <Select
          onValueChange={value => {
            setInches(value)
            handleHeightChange(feet, value)
          }}
        >
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="in" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 12 }, (_, i) => i).map(
              (
                inch // Range: 0 - 11 inches
              ) => (
                <SelectItem key={inch} value={inch.toString()}>
                  {inch} in
                </SelectItem>
              )
            )}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

HeightInput.displayName = 'HeightInput'
