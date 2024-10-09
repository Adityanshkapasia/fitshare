"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const userProfile = {
  name: "Jane Doe",
  avatar: "https://i.pravatar.cc/150?img=5",
  bio: "Fitness enthusiast | Personal Trainer | Nutrition Specialist",
  stats: {
    posts: 42,
    followers: 1024,
    following: 256
  },
  recentWorkouts: [
    { id: 1, title: "Intense Chest Workout", bodyPart: "Chest" },
    { id: 2, title: "Leg Day Madness", bodyPart: "Legs" },
    { id: 3, title: "Back and Biceps", bodyPart: "Back" },
  ]
}

export default function Profile() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
              <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">{userProfile.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{userProfile.bio}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <div className="text-center">
              <p className="font-bold">{userProfile.stats.posts}</p>
              <p className="text-sm text-muted-foreground">Posts</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{userProfile.stats.followers}</p>
              <p className="text-sm text-muted-foreground">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{userProfile.stats.following}</p>
              <p className="text-sm text-muted-foreground">Following</p>
            </div>
          </div>
          <Button className="w-full">Edit Profile</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Workouts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {userProfile.recentWorkouts.map(workout => (
              <li key={workout.id} className="flex justify-between items-center">
                <span>{workout.title}</span>
                <Badge>{workout.bodyPart}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}