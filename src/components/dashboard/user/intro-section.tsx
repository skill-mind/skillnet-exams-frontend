import Link from "next/link"

export default function IntroSection() {
  return (
    <div className="bg-[#0f1631] rounded-lg p-8">
      <h1 className="text-2xl font-bold mb-4">New To SkillNet</h1>
      <p className="text-gray-300 mb-6">
        SkillNet Is Not Just An Exam Platform—It's A Game-Changer. Designed To Deliver Secure, Transparent, And
        Verifiable Academic Records, SkillNet Leverages Cutting-Edge Blockchain Technology, AI Proctoring, And NFT-Based
        Certificate Minting
      </p>
      <Link
        href="#"
        className="inline-block px-6 py-2 border border-gray-600 rounded-full text-sm hover:bg-gray-800 transition-colors"
      >
        Explore SkillNet
      </Link>
    </div>
  )
}
