import React from 'react'
import { Popover } from '../ui/popover'
import { Button } from '../ui/button'
import { PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { InfoIcon } from 'lucide-react'
import { ScrollArea } from '../ui/scroll-area'

export const ReferencesPopover: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="ghost">
          <InfoIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        className="w-80 border border-gray-700 bg-popover p-2 text-popover-foreground shadow-md"
      >
        <ScrollArea className={'[&>[data-radix-scroll-area-viewport]]:max-h-[300px]'}>
          <div className="grid gap-4">
            <div className="space-y-2">
              <h2 className="mb-2 text-lg font-semibold">References</h2>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  Office of Patient Education.{' '}
                  <span className="italic">
                    The heat is on! Precautions for people with diabetes during the summer months.
                  </span>{' '}
                  Mayo Clinic, 2018.
                </li>
                <li>
                  Auerbach PS, et al., eds.{' '}
                  <span className="italic">Dehydration and rehydration.</span> In:{' '}
                  <span className="italic">Auerbach&apos;s Wilderness Medicine.</span> 7th ed.
                  Elsevier; 2017.
                  <a className="text-blue-600 underline" href="https://www.clinicalkey.com">
                    ClinicalKey
                  </a>
                  . Accessed Oct. 9, 2020.
                </li>
                <li>
                  <a
                    className="text-blue-600 underline"
                    href="https://www.cdc.gov/healthywater/drinking/nutrition/index.html"
                  >
                    Water & nutrition
                  </a>
                  . U.S. Centers for Disease Control and Prevention. Accessed Oct. 2, 2020.
                </li>
                <li>
                  <a
                    className="text-blue-600 underline"
                    href="https://www.nationalacademies.org/our-work/dietary-reference-intakes-for-electrolytes-and-water"
                  >
                    Dietary reference intakes for electrolytes and water
                  </a>
                  . U.S. National Academies of Science, Engineering, and Medicine. Accessed Oct. 2,
                  2020.
                </li>
                <li>
                  Franklin BA.{' '}
                  <span className="italic">Exercise prescription and guidance for adults.</span>
                  <a
                    className="text-blue-600 underline"
                    href="https://www.uptodate.com/contents/search"
                  >
                    UpToDate
                  </a>
                  . Accessed Oct. 2, 2020.
                </li>
                <li>
                  <a
                    className="text-blue-600 underline"
                    href="https://wwwnc.cdc.gov/travel/yellowbook/2020/noninfectious-health-risks/high-altitude-travel-and-altitude-illness"
                  >
                    High-altitude travel & altitude illness
                  </a>
                  . U.S. Centers for Disease Control and Prevention. Accessed Oct. 2, 2020.
                </li>
                <li>
                  Bardosono S, et al.{' '}
                  <span className="italic">
                    Pregnant and breastfeeding women: Drinking for two.
                  </span>{' '}
                  Annals of Nutrition & Metabolism. 2017;
                  <a className="text-blue-600 underline" href="https://doi.org/10.1159/000462998">
                    doi:10.1159/000462998
                  </a>
                  .
                </li>
                <li>
                  Sterns RH.{' '}
                  <span className="italic">
                    Maintenance and replacement fluid therapy in adults.
                  </span>
                  <a
                    className="text-blue-600 underline"
                    href="https://www.uptodate.com/contents/search"
                  >
                    UpToDate
                  </a>
                  . Accessed Oct. 2, 2020.
                </li>
                <li>
                  Gordon B. <span className="italic">How much water do you need.</span> Academy of
                  Nutrition and Dietetics.
                  <a
                    className="text-blue-600 underline"
                    href="https://www.eatright.org/food/nutrition/healthy-eating/how-much-water-do-you-need"
                  >
                    EatRight
                  </a>
                  . Accessed Oct. 2, 2020.
                </li>
                <li>
                  <a
                    className="text-blue-600 underline"
                    href="https://www.choosemyplate.gov/ten-tips-make-better-beverage-choices"
                  >
                    10 tips: Make better beverage choices
                  </a>
                  . U.S. Department of Agriculture. Accessed Oct. 2, 2020.
                </li>
                <li>
                  Thomas DT, et al.{' '}
                  <span className="italic">
                    Position of the Academy of Nutrition and Dietetics, Dietitians of Canada, and
                    American College of Sports Medicine: Nutrition and athletic performance.
                  </span>{' '}
                  Medicine & Science in Sports & Exercise. 2016;
                  <a
                    className="text-blue-600 underline"
                    href="https://doi.org/10.1016/j.jand.2015.12.006"
                  >
                    doi:10.1016/j.jand.2015.12.006
                  </a>
                  .
                </li>
                <li>
                  Armstrong LE, et al.{' '}
                  <span className="italic">
                    Water intake, water balance, and the elusive daily water requirement.
                  </span>{' '}
                  Nutrients. 2018;
                  <a className="text-blue-600 underline" href="https://doi.org/10.3390/nu10121928">
                    doi:10.3390/nu10121928
                  </a>
                  .
                </li>
              </ul>
            </div>
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}

ReferencesPopover.displayName = 'ReferencesPopover'
