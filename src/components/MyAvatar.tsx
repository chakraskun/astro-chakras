import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function MyAvatar() {
  return (
    <Avatar className='h-24 w-24'>
      <AvatarImage src='https://avatars.githubusercontent.com/u/62203303?s=400&u=83f88bcb765c9db53b29b9385673fce13a52bc03&v=4' alt="chakras" />
      <AvatarFallback>CAK</AvatarFallback>
    </Avatar>
  )
}
