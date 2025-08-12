export default function ComingSoon() {
  return (
    <div className="pt-28 flex flex-col items-center  min-h-screen bg-gradient-to-b from-black to-gray-600 text-white">
      <h1 className="text-8xl font-semibold ">Google Pixel 10.</h1>
      <h1 className="text-8xl font-semibold pb-9">Coming 21 August.</h1>
      <p className="text-3xl pt-4 font-medium text-gray-300 mb-6">
        Get the latest updates from Google Store, including the Pixel 10 series
        availability.
      </p>
      <p className="text-3xl py-4 font-medium text-gray-300 mb-6 max-w-6xl text-center">
        Plus, Google Store subscribers who are signed up by 19 August, 12.30 PM
        IST, will get an exclusive offer to use with Google Pixel 10, Pixel 10
        Pro, and Pixel 10 Pro XL phones.‡ The offer will be sent on the day that
        the phones are available for pre-order.
      </p>
      <button className="px-6 py-3 mb-7 text-2xl bg-[#a4c6ff] text-black font-medium rounded-full hover:bg-[#8cb0ee]">
        Sign up and Save
      </button>

      <div className="flex justify-center items-center pt-6xl">
        <video
          src="https://storage.googleapis.com/mannequin/blobs/f3810460-c611-4e14-bafe-23e7a84f4f3a.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="max-w-full h-auto rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.5)]"
        />
      </div>

      <div className="h-4xl"></div>
    </div>
  );
}
