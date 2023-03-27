/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "i.scdn.co"],
  },
  env: {
    SUPABASE_URL: "https://lycnmgrucuhwifljiwsw.supabase.co",
    SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5Y25tZ3J1Y3Vod2lmbGppd3N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1NzMzMTAsImV4cCI6MTk5NTE0OTMxMH0.Fq-bY7pg62NIaVu63LZZvy-eVjYaAHvuurLdM3QRYBU"
  },
}

module.exports = nextConfig