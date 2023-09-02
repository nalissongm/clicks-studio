'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination } from 'swiper'
import { Message } from '../Message'

type MessageType = {
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

interface CarouselProps {
  messages: MessageType[]
}

export function MessageSlide({ messages }: CarouselProps) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {messages.map((message, index) => (
          <SwiperSlide key={index}>
            <Message client={message.client} message={message.message} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
