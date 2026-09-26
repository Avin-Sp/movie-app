function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#0f0f0f] px-6">
      <div className="text-center">

        <p className="text-8xl font-bold text-red-600">
          404
        </p>

        <h1 className="mt-4 text-3xl font-bold text-white">
          Page Not Found
        </h1>

        <p className="mt-3 text-gray-400">
          The page you're looking for doesn't exist.
        </p>

      </div>
    </section>
  );
}

export default NotFound;