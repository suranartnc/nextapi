import mongoose from 'mongoose'

const MovieSchema = new mongoose.Schema(
  {
    title: String,
  },
  { timestamps: true },
)

export default mongoose.model('Movie', MovieSchema)
