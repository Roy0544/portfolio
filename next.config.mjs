/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  transpilePackages: ['@splinetool/react-spline', '@splinetool/runtime'],
};

export default nextConfig;
