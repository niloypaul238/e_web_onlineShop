import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com'   
        
      },{
        protocol: "https",
        hostname: "preview.colorlib.com",
      },{
        protocol:"https",
        hostname:'images.unsplash.com'
      }
    ],
    
  },
};

export default nextConfig;
