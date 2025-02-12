'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ReferencesPopover } from './ReferencesPopover'

export const GeneralConsumptionCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Consumption Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion collapsible className="w-full" type="single">
          <AccordionItem value="water-consumption">
            <AccordionTrigger className="text-left">How much should you consume?</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>
                  <span className="font-bold">Men: </span>About 15.5 cups (3.7 liters) of fluids per
                  day.
                </li>
                <li>
                  <span className="font-bold">Women: </span>About 11.5 cups (2.7 liters) of fluids
                  per day.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="factors">
            <AccordionTrigger className="text-left">
              Which factors affect your consumption value?
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>
                  <span className="font-bold">Exercise: </span>If you sweat during activity, drink
                  extra water before, during, and after to stay hydrated.
                </li>
                <br />
                <li>
                  <span className="font-bold">Environment: </span>Hot, humid weather increases
                  sweating, while high altitudes can cause dehydration, both requiring extra fluids.
                </li>
                <br />
                <li>
                  <span className="font-bold">Overall Health: </span>Fever, vomiting, and diarrhea
                  cause fluid loss—drink more water or use oral rehydration as advised. Conditions
                  like bladder infections and kidney stones may also require extra fluids.
                </li>
                <br />
                <li>
                  <span className="font-bold">Pregnancy and breast-feeding: </span>Pregnant or
                  breastfeeding? You may need extra fluids to stay hydrated.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="enough-water">
            <AccordionTrigger className="text-left">
              How do I know if I&apos;m drinking enough?
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <p className="font-semibold">Your fluid intake is likely sufficient if:</p>
                <ul className="ml-4 list-inside list-disc">
                  <li>You rarely feel thirsty.</li>
                  <li>Your urine is light yellow or colorless.</li>
                </ul>
                <p className="mt-4">
                  A doctor or dietitian can help determine your daily water needs.
                </p>
                <p className="mt-4 font-semibold">
                  To stay hydrated and prevent dehydration, make water your primary beverage.
                  Consider drinking a glass of water:
                </p>
                <ul className="ml-4 list-inside list-disc">
                  <li>With and between meals.</li>
                  <li>Before, during, and after exercise.</li>
                  <li>Whenever you feel thirsty.</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="water-types">
            <AccordionTrigger className="text-left">What counts as water?</AccordionTrigger>
            <AccordionContent>
              <div>
                <p>
                  You don’t have to rely solely on water to stay hydrated—your diet plays a big role
                  too. Many fruits and vegetables, like{' '}
                  <span className="font-semibold">watermelon</span> and{' '}
                  <span className="font-semibold">spinach</span>, are made up almost entirely of
                  water.
                </p>

                <p className="mt-4">
                  Other beverages, such as <span className="font-semibold">milk, juice,</span> and{' '}
                  <span className="font-semibold">herbal teas</span>, also contribute to your fluid
                  intake. Even <span className="font-semibold">coffee</span> and{' '}
                  <span className="font-semibold">soda</span> provide hydration, despite their
                  caffeine content.
                </p>

                <p className="mt-4">
                  However, be mindful of sugary drinks like{' '}
                  <span className="font-semibold">soda, energy drinks,</span> and{' '}
                  <span className="font-semibold">sports drinks</span>, as they often contain excess
                  sugar and unnecessary calories.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex items-center">
          <p className="mt-2 text-sm italic">
            Responses are provided based on several references. For a full list, click the info
            icon.
          </p>
          <ReferencesPopover />
        </div>
      </CardContent>
    </Card>
  )
}

GeneralConsumptionCard.displayName = 'GeneralConsumptionCard'
