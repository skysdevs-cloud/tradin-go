const PageHeading = ({
  title = "Page Title",
  breadcrumb = "Home – Page",
  bgImage = "/images/about-bg.png",
}) => {
  return (
    <section className="max-w-[1540px] mx-auto relative h-[260px] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Overlay Shade */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          {title}
        </h1>

        <p className="mt-2 text-sm md:text-base text-gray-200">
          {breadcrumb}
        </p>
      </div>
    </section>
  );
};

export default PageHeading;
