import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SkillNet - Decentralized exam Platform",
    short_name: "SkillNet",
    description: "SkillNet is a revolutionary exam platform leveraging blockchain technology, AI proctoring, and NFT-based certificate minting for secure, transparent, and verifiable academic records..",
    start_url: "/",
    display: "standalone",
    background_color: "#1e293b",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}