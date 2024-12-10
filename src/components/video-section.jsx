export function VideoSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">See Us in Action</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Watch our team of experts tackle various garage door projects</p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl mt-8">
          <div className="aspect-video">
            {/* <iframe className="w-full h-full rounded-lg shadow-lg" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Tolbert Garage Door Services" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            <video src="https://video.wixstatic.com/video/ce12da_b5eeca56b1554e13a5f220fcaacdeaa7/720p/mp4/file.mp4" controls loop />
          </div>
        </div>
      </div>
    </section>
  );
}
