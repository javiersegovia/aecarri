export interface Article {
  id: string
  title: string
  url: string
}

export interface Category {
  id: string
  name: string
  articles: Article[]
  icon?: 'book' | 'pencil' | 'coins' | 'health'
  youtube_video_id?: string
}

export interface HomeData {
  phrase: string
  contact_email: string
  contact_phone: string
}
