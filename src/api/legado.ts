import { BookItem } from '@/types'
import { curl } from './curl'

export const reqBookshelf = () => {
  return curl<BookItem[]>('/getBookshelf')
}
