export interface Article {
  id: string
  title: string
  url: string
}

export interface Category {
  id: string
  name: string
  playlist_url: string
  articles: Article[]
  icon?: 'book' | 'pencil' | 'coins' | 'health'
  youtube_video_id?: string
}

export interface HomeData {
  phrase: string
  contact_email: string
  contact_phone: string
  whatsApp: string
  instagram_url?: string
  twitter_url?: string
  facebook_url?: string
  youtube_url?: string
}
