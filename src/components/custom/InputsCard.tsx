'use client'

import { Select } from '../ui/select'
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
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
    console.log(data)
    const waterIntakeResult = calculateWaterIntake(data)
    setWaterIntake(waterIntakeResult)
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
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
                    name="activityLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Activity Location</FormLabel>
                        <FormControl>
                          <RadioGroup onValueChange={field.onChange} value={field.value}>
                            <div className="flex space-x-4">
                              <RadioGroupItem id="indoor" value="indoor" />
                              <Label htmlFor="indoor">Indoor</Label>
                              <RadioGroupItem id="outside" value="outside" />
                              <Label htmlFor="outside">Outside</Label>
                              <RadioGroupItem id="mix" value="mix" />
                              <Label htmlFor="mix">Mix</Label>
                            </div>
                          </RadioGroup>
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
        </form>
      </Form>
      {waterIntake > 0 && (
        <p className="items-center justify-center pb-6 text-center text-2xl">
          Water Intake: {waterIntake} ounces ({Math.round(waterIntake / 12)} cups)
        </p>
      )}
    </Card>
  )
}

InputsCard.displayName = 'InputsCard'
