import React from 'react'
import _tw from 'twin.macro'
import { useRouter } from 'next/router'
import GoBack from 'src/components/UI/GoBack'
import { Container } from 'src/components/UI'
import { useQuery } from 'react-query'
import { Category } from '../../utils/types'

const IssueCategoryPage = () => {
  const { id } = useRouter().query

  const { data: category } = useQuery<Category>(`/categories/${id}`, {
    enabled: !!id,
  })

  return (
    <>
      <div
        tw="bg-black bg-no-repeat bg-center bg-cover mt-10 rounded-md h-96 w-full max-w-screen-2xl mx-auto"
        style={{
          height: '40vh',
          backgroundImage: `linear-gradient(rgba(40, 0, 70, .2), rgba(50, 0, 100, .35)), url(/images/people6.jpg)`,
        }}
      >
        <GoBack />
      </div>
      <Container tw="mt-10">
        {category && (
          <>
            <h1 tw="text-center text-5xl font-bold border border-black py-4">
              {category.name}
            </h1>

            {category.youtube_video_id && (
              <iframe
                title="Category Video"
                src={`https://www.youtube.com/embed/${category.youtube_video_id}`}
                tw="w-full h-full mt-10 flex-1"
                style={{
                  minHeight: '360px',
                }}
                frameBorder="0"
                allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            )}

            <div tw="prose">
              <ul tw="mt-10 text-lg text-justify pb-20 space-y-2">
                {category.articles.length ? (
                  category.articles.map(({ title, url }) => (
                    <li key={title}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        tw="block"
                      >
                        {title}
                      </a>
                    </li>
                  ))
                ) : (
                  <h3 tw="text-center">
                    Lo sentimos. Por ahora no hay artículos disponibles.
                  </h3>
                )}
              </ul>
            </div>
          </>
        )}
      </Container>
    </>
  )
}

// TODO: add static path to remove loaders and speed up the page

export default IssueCategoryPage
