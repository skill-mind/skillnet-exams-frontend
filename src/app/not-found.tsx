'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NotFound() {
	const router = useRouter();

	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-4">
			<div className="flex flex-col items-center justify-center max-w-5xl mx-auto text-center mt-20">
				<div className="max-w-[350px]  flex justify-center mb-8">
					<Image
						src="/images/404.png"
						alt="404 Error"
						width={350}
						height={100}
						priority
					/>
				</div>

				<div className="space-y-3 text-center mb-10 font-kumbhSans">
					<h1 className="md:text-2xl text-xl font-semibold flex flex-col items-center justify-center text-white">
						<span className="mr-2">🚀 Oops!</span> You&apos;ve stumbled into the
						Metaverse&apos;s lost dimension!
					</h1>

					<p className="text-gray-300 font-normal text-base">
						Looks like this page is missing! <br className="flex md:hidden" />{' '}
						Let&apos;s get you back on track.
					</p>
				</div>
				<button
					onClick={() => router.back()}
					className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors"
				>
					Take me back
				</button>
			</div>
		</div>
	);
}
