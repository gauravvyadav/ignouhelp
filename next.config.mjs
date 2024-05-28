/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false

    config.resolve.extensionAlias = {
      ".js": [".js", ".ts", ".tsx"],
    }

    return config
  },
}

export default nextConfig
