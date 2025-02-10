import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <header>
        <h1 className={cn('text-4xl font-bold')}>Am I Drinking Enough Water?</h1>
      </header>
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button>
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy now
            </a>
          </Button>
          <Button>Primary</Button>
          <Button variant={'secondary'}>Secondary</Button>
          <Button variant={'destructive'}>Destructive</Button>
          <Button variant={'ghost'}>Ghost</Button>
          <Button variant={'outline'}>outline</Button>
          <Button variant={'link'}>link</Button>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"></footer>
    </div>
  )
}
