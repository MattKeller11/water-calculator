export const Calculator = () => {
  const bodyWeight = 180
  const baseline = bodyWeight * 0.5

  const activityMinutes = 30
  const additionalWater = (activityMinutes / 30) * 12

  const envMultiplier = 1
  // Indoors	1.0 (No change)
  // Tropical (Very Humid & Hot)	1.25
  // Hot & Dry	1.2
  // Temperate (Mild)	1.0 (No change)
  // Cold & Dry	1.1

  const final = (baseline + additionalWater) * envMultiplier

  const age = 56
  const ageAdjustment = age >= 56 ? final * 1.1 : 1

  // optional
  // Below 5'0" (152 cm): Reduce intake by 5% 0.95
  // Above 6'2" (188 cm): Increase intake by 5% 1.05
  const heightAdjustment = age >= 56 ? final * 1.1 : 1

  return (
    <div>
      <div>calculator</div>
    </div>
  )
}

Calculator.displayName = 'Calculator'
