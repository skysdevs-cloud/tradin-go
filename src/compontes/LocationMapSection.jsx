export default function LocationMapSection() {
  return (
    <section className="w-full overflow-hidden rounded-3xl">
      <div className="relative h-[450px] w-full">
        <iframe
          title="Company Location"
          src="https://maps.google.com/maps?q=26.839435,75.800900&z=14&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
