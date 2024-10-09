"use client"

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react'

const posts = [
  {
    id: 1,
    user: { name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=1' },
    content: 'Just finished an intense chest workout! 💪',
    bodyPart: 'Chest',
    likes: 15,
    comments: 3,
  },
  {
    id: 2,
    user: { name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=2' },
    content: 'Leg day never gets easier, but the results are worth it! 🦵',
    bodyPart: 'Legs',
    likes: 22,
    comments: 5,
  },
]

export default function Feed() {
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const handleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Fitness Feed</h1>
      {posts.map(post => (
        <Card key={post.id}>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={post.user.avatar} alt={post.user.name} />
                <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{post.user.name}</CardTitle>
                <Badge>{post.bodyPart}</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => handleLike(post.id)}
              className={likedPosts.includes(post.id) ? "text-blue-500" : ""}
            >
              <ThumbsUp className="mr-2 h-4 w-4" />
              {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
            </Button>
            <Button variant="ghost" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              {post.comments}
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}