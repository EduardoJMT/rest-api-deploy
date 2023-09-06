const z = require('zod')

const movieSchema = z.object({
  title: z.string({
    required_error: 'El título es requerido',
    invalid_type_error: 'El título debe ser un string'
  }).min(1).max(100),
  year: z.number().int().min(1888).max(2023),
  director: z.string().min(1).max(100),
  duration: z.number().int().min(1).max(600),
  poster: z.string().url(),
  genre: z.array(z.string().min(1).max(50)).min(1).max(10),
  rate: z.number().min(0).max(10)
})

function validateMovie (object) {
  return movieSchema.safeParse(object)
}

function validatePartialMovie (object) {
  return movieSchema.partial().safeParse(object)
}

module.exports = {
  validateMovie,
  validatePartialMovie
}
