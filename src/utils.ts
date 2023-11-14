import slugify from "slugify"

export const normalize = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
export const generateSlug = (str) => slugify(str, { lower: true, replacement: '-', trim: true, strict: true })

