"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

const bodyParts = [
  "Chest", "Back", "Legs", "Shoulders", "Arms", "Core", "Full Body", "Cardio"
]

export default function CreatePost() {
  const [content, setContent] = useState('')
  const [bodyPart, setBodyPart] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the post data to your backend
    console.log({ content, bodyPart })
    // For now, we'll just redirect to the feed
    router.push('/feed')
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create a New Post</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="content">What's your workout?</Label>
              <Textarea
                id="content"
                placeholder="Share your workout routine or fitness achievement..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="bodyPart">Body Part</Label>
              <Select onValueChange={setBodyPart} value={bodyPart}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a body part" />
                </SelectTrigger>
                <SelectContent>
                  {bodyParts.map((part) => (
                    <SelectItem key={part} value={part}>{part}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" onClick={handleSubmit}>Post</Button>
      </CardFooter>
    </Card>
  )
}