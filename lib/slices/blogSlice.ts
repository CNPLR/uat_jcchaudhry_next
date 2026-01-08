// slices/blogSlice.ts
import { createSlice, createAsyncThunk, PayloadAction, createAction } from '@reduxjs/toolkit'
import apiPath from '../apiPath'
import { IBlog } from '../stores/types/blog'

export interface IApiResponse {
 data: IBlog[]
 success: boolean
}

interface BlogState {
  blogs: IApiResponse
  selectedBlog: IBlog | null
  loading: boolean
  error: string | null
}

const initialState: BlogState = {
  blogs: {data: [], success: false},
  selectedBlog: null,
  loading: false,
  error: null,
}


export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async () => {
    const response = await fetch(`${apiPath}blog/`)
    if (!response.ok) throw new Error('Failed to fetch blogs')
    return response.json()
  }
)

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {// NEW: Select blog from existing list
    selectBlogBySlug: (state, action: PayloadAction<string>) => {
      const blog = state.blogs.data.find((blog: IBlog) => blog.slug === action.payload)
      state.selectedBlog = blog || null
    },
    // Optional: Clear selection
    clearSelectedBlog: (state) => {
      state.selectedBlog = null
    },
    resetBlogs: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchBlogs.fulfilled, (state, action: PayloadAction<IApiResponse>) => {
        state.loading = false
        state.blogs = action.payload
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })
  },
})

export const { 
  selectBlogBySlug, 
  clearSelectedBlog, 
  resetBlogs 
} = blogSlice.actions

export const selectAllBlogs = (state: { blogs: BlogState }) => state.blogs.blogs

export const selectSelectedBlog = (state: { blogs: BlogState }) => state.blogs.selectedBlog

export const selectBlogBySlugSelector = (blogSlug: string) => 
  (state: { blogs: BlogState }) => 
    state.blogs.blogs.data.find(blog => blog.slug === blogSlug) || null

export const selectBlogsLoading = (state: { blogs: BlogState }) => state.blogs.loading

export const selectBlogsError = (state: { blogs: BlogState }) => state.blogs.error

export default blogSlice.reducer
