/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // recommended
  reactCompiler: true,    // your current setting
  // output: "export",       // ✅ enables static export to 'out/' folder
  images: {
    unoptimized: true,    // ✅ required for static export if using next/image
  },
};

module.exports = nextConfig;
