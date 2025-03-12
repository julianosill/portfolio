import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NODE_ENV: z.string(),
    APP_URL: z.string().url(),
    HYGRAPH_API: z.string().url(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    APP_URL: process.env.APP_URL,
    HYGRAPH_API: process.env.HYGRAPH_API,
  },
})
