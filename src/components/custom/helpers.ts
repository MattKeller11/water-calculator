import { formSchema } from './InputsCard'
import * as z from 'zod'

export const calculateWaterIntake = (factors: z.infer<typeof formSchema>): number => {
  const { weight, activity, environment, age, height } = factors

  const baselineWater = Number(weight) * 0.5

  let additionalWater = 0
  if (activity) {
    additionalWater = (Number(activity) / 30) * 12
  }

  let envMultiplier = 1.0
  if (environment === 'tropical') {
    envMultiplier = 1.25
  } else if (environment === 'hot') {
    envMultiplier = 1.2
  } else if (environment === 'cold') {
    envMultiplier = 1.1
  }

  let finalWaterIntake = (baselineWater + additionalWater) * envMultiplier

  if (age !== undefined) {
    finalWaterIntake = Number(age) >= 56 ? finalWaterIntake * 1.1 : finalWaterIntake
  }

  if (height !== undefined) {
    if (height < 60) {
      finalWaterIntake *= 0.95
    } else if (height > 74) {
      finalWaterIntake *= 1.05
    } else {
      finalWaterIntake *= 1
    }
  }

  return Math.round(finalWaterIntake)
}
