  const nextConfig = {
    reactCompiler: true,

    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "img.magnific.com",
        },
      ],
    },
  };

  // So remotePatterns is basically you giving Next.js permission to use/optimize images from specific external websites.

  export default nextConfig;