import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function MyAvatar() {
  return (
    <Avatar className='h-32 w-32'>
      <AvatarImage  src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CAK</AvatarFallback>
    </Avatar>
  )
}
