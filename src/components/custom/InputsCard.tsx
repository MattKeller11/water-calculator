'use client'

import { Select } from '@radix-ui/react-select'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { HeightInput } from './HeightInput'
import { useState } from 'react'

type ActivityEnvironment = 'inside' | 'tropical' | 'hot' | 'temperate' | 'cold'

// enum ActivityEnvironmentEnum {
//   INSIDE: 1,
//   TROPICAL: 1.2,
//   HOT: 1.3,
//   TEMPERATE: 1.1,
//   COLD: 1.1,
//  }

export const InputsCard = () => {
  const [weight, setWeight] = useState(1)
  const [activity, setActivity] = useState(1)
  const [environment, setEnvironment] = useState()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ weight, activity, environment })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Water Details</CardTitle>
        <CardDescription>
          Fill in your details to calculate your daily water intake. If unsure, leave the fields
          blank or enter 0.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2">
              {/* Required Fields */}
              <Label htmlFor="weight">Weight</Label>
              <Input
                required
                id="weight"
                placeholder="lbs"
                type="number"
                value={weight}
                onChange={e => setWeight(Number(e.target.value))}
              />
              <Label htmlFor="activity">Activity Minutes Per Day</Label>
              <Input
                required
                id="activity"
                placeholder="minutes"
                type="number"
                value={activity}
                onChange={e => setActivity(Number(e.target.value))}
              />
              <Label>Activity Environment</Label>
              <Select required>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select environment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Environment</SelectLabel>
                    <SelectItem value="inside">Inside</SelectItem>
                    <SelectItem value="tropical">Tropical</SelectItem>
                    <SelectItem value="hot">Hot</SelectItem>
                    <SelectItem value="temperate">Temperate</SelectItem>
                    <SelectItem value="cold">Cold</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Optional Fields */}
              <p className="pt-4 italic">Optional inputs</p>
              <Label htmlFor="age">Age</Label>
              <Input id="age" placeholder="years" />
              <HeightInput onChange={() => {}} />
            </div>
          </div>
        </form>
        {/* Advanced options accordion */}
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* TODO: Spinner */}
        <Button className="w-full">Calculate</Button>
      </CardFooter>
    </Card>
  )
}

InputsCard.displayName = 'InputsCard'
