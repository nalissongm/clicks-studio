'user client'
import Image from 'next/image'

interface MessageProps {
  client: {
    avatar: {
      src: string
      width: number
      height: number
    }
    name: string
  }
  message: string
}

export function Message({ message, client }: MessageProps) {
  const urlAvatar = "url('" + client.avatar.src + "')"
  console.log(urlAvatar)

  return (
    <div className="flex gap-4 px-7 py-6 rounded bg-white max-w-clicksUI-msg z-50">
      <div
        id="avatar"
        style={{
          width: '60px',
          height: '60px',
          backgroundImage: urlAvatar,
        }}
        className="overflow-hidden rounded-full bg-cover bg-center"
      ></div>
      <div id="msg-content" className="flex flex-col flex-1 gap-2">
        <Image src="/quot_msg.svg" width={20} height={15.64} alt="" />
        <article className="flex flex-col gap-4">
          <p className="text-zinc-600">{message}</p>
          <h3 className="font-semibold">{client.name}</h3>
        </article>
      </div>
    </div>
  )
}
