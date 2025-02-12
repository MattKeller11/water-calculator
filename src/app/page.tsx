import { cn } from '@/lib/utils'
import { InputsCard } from '@/components/custom/InputsCard'
import { GeneralConsumptionCard } from '@/components/custom/GeneralConsumptionCard'
import { CalculationTransparencyCard } from '@/components/custom/CalculationTransparencyCard'
import { ModeToggle } from '@/components/custom/ModeToggle'

export default function Home() {
  return (
    <>
      <div className="fixed right-4 top-4 hidden sm:block">
        <ModeToggle />
      </div>
      <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
        <header className="text-center">
          <h1 className={cn('text-4xl font-bold')}>Am I Drinking Enough Water?</h1>
        </header>
        <main className="row-start-2 flex flex-col items-center gap-4">
          <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:items-start">
            <div className="w-full lg:w-2/3">
              <InputsCard />
            </div>
            <div className="w-full lg:w-1/3">
              <div className="mb-4">
                <GeneralConsumptionCard />
              </div>
              <CalculationTransparencyCard />
            </div>
          </div>
        </main>
        <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"></footer>
      </div>
    </>
  )
}
