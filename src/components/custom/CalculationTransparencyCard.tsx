'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

export const CalculationTransparencyCard = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card>
      <CardHeader className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between">
          <CardTitle>How it&apos;s calculated</CardTitle>
          {isOpen ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
        </div>
      </CardHeader>
      {isOpen && (
        <CardContent>
          <div>
            <p className="mb-2">We estimate your daily water needs based on several factors:</p>
            <ul className="mb-4 ml-6 list-disc">
              <li>
                <strong>Weight:</strong> Your weight is the starting point.
              </li>
              <li>
                <strong>Activity:</strong> More activity means more water.
              </li>
              <li>
                <strong>Environment:</strong> Hot or dry climates require more water.
              </li>
              <li>
                <strong>Age:</strong> We make a small adjustment for older adults.
              </li>
              <li>
                <strong>Height:</strong> We make a small adjustment for very tall or short
                individuals.
              </li>
            </ul>
            <p className="mb-4">
              We use these factors in a simple calculation to give you a personalized
              recommendation.
            </p>
            <p className="mb-4">
              This is just an estimate. Individual needs vary, so please consult a healthcare
              professional for personalized advice.
            </p>
          </div>
        </CardContent>
      )}
    </Card>
  )
}

CalculationTransparencyCard.displayName = 'CalculationTransparencyCard'
