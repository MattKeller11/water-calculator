'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '../ui/textarea'
import { useState } from 'react'
import { submitForm } from '@/utils/formUtils'
import { useToast } from '@/hooks/use-toast'
import { Spinner } from './Spinner'

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
  message: HTMLTextAreaElement
}

interface FeedbackForm extends HTMLFormElement {
  readonly elements: FormElements
}

interface FormEvent extends React.FormEvent<HTMLFormElement> {
  target: FeedbackForm
}

interface FeedbackProps {
  isRenderedFromSidebar?: boolean
}

export const Feedback = ({ isRenderedFromSidebar }: FeedbackProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsLoading(true)

    const status = await submitForm(event, 'https://formspree.io/f/xvgzblgg')

    if (status === 'success') {
      toast({
        title: 'Success',
        description: 'Thank you for your feedback!',
        duration: 3000,
      })
    } else {
      toast({
        title: 'Error',
        description: 'There was an error submitting your feedback. Please try again.',
        duration: 3000,
        variant: 'destructive',
      })
    }

    setIsDialogOpen(false)
    setIsLoading(false)
  }

  return (
    <>
      <Dialog onOpenChange={setIsDialogOpen} open={isDialogOpen}>
        <DialogTrigger asChild>
          {isRenderedFromSidebar ? (
            <span>Feedback</span>
          ) : (
            <Button variant="outline">Feedback</Button>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Send Feedback</DialogTitle>
            <DialogDescription>
              Let us know how we can improve! Leave us a message and hit submit. Any and all
              feedback is appreciated!
            </DialogDescription>
          </DialogHeader>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid items-center gap-4">
                <Label htmlFor="email">Email</Label>
                <Input required id="email" name="email" type="email" />
              </div>
              <div className="grid items-center gap-4">
                <Label htmlFor="message">Message</Label>
                <Textarea required className="" id="message" name="message" />
              </div>
            </div>
            <DialogFooter>
              {isLoading ? (
                <Button className="w-full items-center" type="submit">
                  <Spinner />
                </Button>
              ) : (
                <Button className="w-full items-center" type="submit">
                  Submit
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

Feedback.displayName = 'Feedback'
