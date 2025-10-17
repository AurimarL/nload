import type { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
  },

  // serverExternalPackages: [
  //   '@libsql/client',
  //   '@libsql/win32-x64-msvc',
  //   'libsql',
  // ],
}

const exportedConfig: NextConfig = withPayload(nextConfig)

export default exportedConfig
