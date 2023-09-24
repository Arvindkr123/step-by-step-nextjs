/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  redirects: async () => {
    return [
      {
        source: "/user",
        destination: "/",
        permanent: false,
      },
      {
        source: "/user/:userId",
        destination: "/",
        permanent: false,
      },
      {
        source: "/users",
        destination: "/",
        permanent: false,
      },
      {
        source: "/admin",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
