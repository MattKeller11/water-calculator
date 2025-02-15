'use client'

import { Select } from '../ui/select'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { HeightInput } from './HeightInput'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { calculateWaterIntake } from './helpers'

export const formSchema = z.object({
  weight: z.string().refine(val => !isNaN(Number(val)) && Number(val) > 0, {
    message: 'Weight is required.',
  }),
  activity: z.string().optional(),
  activityLocation: z.string().optional(),
  environment: z.string().optional(),
  height: z.number().optional(),
  age: z.string().optional(),
})

export const InputsCard = () => {
  const [waterIntake, setWaterIntake] = useState(0)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weight: '',
      activity: '',
      activityLocation: undefined,
      environment: undefined,
      height: undefined,
      age: '',
    },
  })

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    const waterIntakeResult = calculateWaterIntake(data)
    setWaterIntake(waterIntakeResult)

    gtag('event', 'calculate_click', {
      event_category: 'Calculate',
      event_label: 'Water Intake Calculation',
      value: waterIntakeResult,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Water Calculator</CardTitle>
        <CardDescription>
          Fill in the details below to get your recommended daily water intake.
        </CardDescription>
      </CardHeader>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Form {...form}>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col space-y-2">
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Weight</FormLabel>
                      <FormControl>
                        <Input placeholder="lbs" type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <p className="pt-3 italic">Optional inputs</p>
              <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
                <div className="flex flex-col space-y-2">
                  <FormField
                    control={form.control}
                    name="activity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Activity Minutes Per Day</FormLabel>
                        <FormControl>
                          <Input placeholder="minutes" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="environment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Living Environment</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select environment" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Living Environment</SelectLabel>
                              <SelectItem value="tropical">Tropical</SelectItem>
                              <SelectItem value="hot">Hot</SelectItem>
                              <SelectItem value="temperate">Temperate</SelectItem>
                              <SelectItem value="cold">Cold</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input placeholder="years" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <HeightInput form={form} onChange={() => {}} />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="w-full">Calculate</Button>
          </CardFooter>
        </Form>
      </form>

      {waterIntake > 0 && (
        <div>
          <p className="items-center justify-center pb-3 text-center text-2xl">
            At least: {waterIntake} ounces ({(waterIntake / 12).toFixed(1)} cups)
          </p>
          <div className="pb-4 pl-6 text-left">
            <p>Modern studies suggest a guideline closer to:</p>
            <ul className="list-inside list-disc text-left">
              <li>
                <span className="font-bold">Men:</span> 15.5 cups (186 oz)
              </li>
              <li>
                <span className="font-bold">Women:</span> 11.5 cups (138 oz)
              </li>
            </ul>
          </div>
        </div>
      )}
    </Card>
  )
}

InputsCard.displayName = 'InputsCard'
