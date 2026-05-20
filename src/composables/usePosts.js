import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.oluwasetemi.dev/main-api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export function usePosts() {
  const fetchPosts = async (params = {}) => {
    const defaultParams = {
      all: 'false',
      page: '1',
      limit: '10',
      category: '',
      status: 'PUBLISHED',
      search: '',
      sort: 'DESC',
      ...params,
    }

    try {
      const { data } = await apiClient.get('/posts', { params: defaultParams })
      return data
    } catch (error) {
      throw error
    }
  }

  const fetchPostById = async (id) => {
    try {
      const { data } = await apiClient.get(`/posts/${id}`)
      return data
    } catch (error) {
      throw error
    }
  }

  return {
    fetchPosts,
    fetchPostById,
  }
}
