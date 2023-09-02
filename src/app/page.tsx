import { BsArrowDownCircle } from 'react-icons/bs'
import { BiRightArrowAlt } from 'react-icons/bi'
import { IM_Fell_French_Canon as ImFellFrenchCanon } from 'next/font/google'

import { Button } from '@/components/Button/Button'
import { Header } from '@/components/Header/Header'
import { Portrait } from '@/components/Portrait'
import Image from 'next/image'
import { MessageSlide } from '@/components/MessageSlide'
import { getPrismicClient } from '@/services/prismic'

type contentData = {
  data?: {
    slogan?: [
      {
        type: string
        text: string
        spans: []
      },
    ]
    banner?: {}
    insta_url?: []
    whats_number?: []
    about_text?: []
    about_images?: [
      {
        image: {
          dimensions: {
            width: number
            height: number
          }
          alt: string
          url: string
        }
        alt: [
          {
            type: 'paragraph'
            text: string
            spans: string
          },
        ]
      },
    ]
    portifolio_images?: [
      {
        image: {
          dimensions: {
            width: number
            height: number
          }
          alt: string
          url: string
        }
        alt: [
          {
            type: 'paragraph'
            text: string
            spans: string
          },
        ]
      },
    ]
    messages?: [
      {
        avatar: {
          dimensions: {
            width: number
            height: number
          }
          alt: string
          url: string
        }
        name: [
          {
            text: string
          },
        ]
        message: [
          {
            text: string
          },
        ]
      },
    ]
  }
}

const imFellFC = ImFellFrenchCanon({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export default async function Home() {
  const prismic = getPrismicClient()
  const content: contentData = {
    ...(await prismic?.getByType('content'))?.results[0],
  }

  const portfolioImage = content.data?.portifolio_images
    ? [...content.data.portifolio_images]
    : null

  const messages = content.data?.messages
    ? content.data.messages.map((message) => ({
        client: {
          avatar: {
            src: message.avatar.url,
            width: message.avatar.dimensions.width,
            height: message.avatar.dimensions.height,
          },
          name: 'cliente',
        },
        message: message.message[0].text,
      }))
    : null

  return (
    <main className="flex flex-col items-center">
      <section
        id="home"
        className="flex flex-col justify-between items-center p-10 w-full h-screen banner bg-no-repeat bg-center bg-cover"
      >
        <Header />
        <div className="flex flex-col items-center text-center gap-8 space-y-8 > * + * mt-8">
          <h2 className={`text-zinc-200 text-4xl ${imFellFC.className}`}>
            {content.data?.slogan?.[0].text}
          </h2>
          <div>
            <Button>Solicitar orçamento</Button>
          </div>
        </div>
        <BsArrowDownCircle className="text-3xl text-zinc-200" />
      </section>

      <section
        id="about"
        className="flex items-center max-w-clicksUI-x gap-12 py-28"
      >
        <div className="max-w-md">
          <h1 className="font-bold text-4xl text-clicksUI-gold-900">
            Click{"'"}s Estúdio
          </h1>
          <p className="text-zinc-300 py-[18px]">
            {content.data?.about_images?.[0].alt[0].text}
          </p>
          <Button variant="secondary">
            Saber mais <BiRightArrowAlt className="text-2xl" />
          </Button>
        </div>
        <div className="flex gap-6">
          <Portrait
            w={318}
            h={508}
            src={portfolioImage ? portfolioImage[0].image.url : ''}
            className="object-clicksUI-left"
          />
          <div className="flex flex-col gap-6">
            <Portrait
              w={213}
              h={212}
              src={
                content.data?.about_images
                  ? content.data.about_images[0].image.url
                  : ''
              }
            />
            <Portrait
              w={318}
              h={271}
              src={portfolioImage ? portfolioImage[1].image.url : ''}
            />
          </div>
        </div>
      </section>

      <section id="portfolio" className="text-center">
        <h1 className="text-zinc-200 font-bold text-3xl pb-12">Portfólio</h1>
        <div className="flex gap-5 max-w-clicksUI-screen pb-24">
          <div className="flex flex-col gap-5">
            <Portrait
              w={455}
              h={493}
              src={portfolioImage ? portfolioImage[0].image.url : ''}
            />
            <Portrait
              w={456}
              h={253}
              src={portfolioImage ? portfolioImage[1].image.url : ''}
            />
          </div>
          <div className="flex flex-col gap-5">
            <Portrait
              w={321}
              h={303}
              src={portfolioImage ? portfolioImage[2].image.url : ''}
            />
            <Portrait
              w={321}
              h={440}
              src={portfolioImage ? portfolioImage[3].image.url : ''}
            />
          </div>
          <div className="flex flex-col gap-5">
            <Portrait
              w={525}
              h={406}
              src={portfolioImage ? portfolioImage[4].image.url : ''}
            />
            <Portrait
              w={525}
              h={341}
              src={portfolioImage ? portfolioImage[5].image.url : ''}
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center bg-clicksUI-green-900 w-full py-14 gap-7">
        <div className="max-w-clicksUI-x w-full relative z-0">
          <Image
            src="/quot.svg"
            alt=""
            width={329}
            height={257.22}
            className="absolute right-0"
          />
        </div>
        <h1 className="text-zinc-200 font-bold text-3xl pb-12s">
          Nossos Clientes
        </h1>
        {messages && <MessageSlide messages={[...messages]} />}
      </section>
    </main>
  )
}
