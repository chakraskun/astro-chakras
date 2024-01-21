import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function MyAvatar() {
  return (
    <Avatar className='h-24 w-24'>
      <AvatarImage src="../public/chakras.jpeg" alt="chakras" />
      <AvatarFallback>CAK</AvatarFallback>
    </Avatar>
  )
}
