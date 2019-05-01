import http from './index'

const getNews = async () => {
  return await http.get('/news')
}

export default getNews
