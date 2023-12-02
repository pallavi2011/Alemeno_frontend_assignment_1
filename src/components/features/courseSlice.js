import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



const initialState = {
  courses: [],
  course:null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get courses
export const getAllCourses = createAsyncThunk(
  'courses/getAll',
  async () => {
    return  await fetch("http://localhost:3030/courses")
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  

     }
)

export const getCourseById = createAsyncThunk(
  'course/getCourseById',
  async (id) => {
    return  await fetch("http://localhost:3030/courses/"+id)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  

     }
)


export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCourses.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.courses = action.payload
      })
      .addCase(getAllCourses.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getCourseById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCourseById.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.course = action.payload
      })
      .addCase(getCourseById.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = courseSlice.actions
export default courseSlice.reducer