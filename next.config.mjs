/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // حالت Strict React برای باگ‌یابی بهتر
  // swcMinify: true,       // استفاده از SWC برای فشرده‌سازی سریع‌تر
  images: {
    domains: ['localhost', 'example.com'], // دامنه‌های مجاز برای تصاویر
  },
  // experimental: {
  //   appDir: true, // فقط اگر از App Router استفاده می‌کنی
  // },
};

export default nextConfig;
