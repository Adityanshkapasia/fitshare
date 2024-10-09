import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Dumbbell } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center flex items-center justify-center">
            <Dumbbell className="mr-2" /> FitShare
          </CardTitle>
          <CardDescription className="text-center">
            Connect with fitness enthusiasts and share your workout routines
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4">
            Join our community to track your progress, get inspired, and motivate others on their fitness journey.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/feed">Get Started</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}