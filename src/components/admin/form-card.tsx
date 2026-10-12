
type AdminFormCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function AdminFormCard({
  title,
  children,
}: AdminFormCardProps) {
  return (
    <section className="w-full rounded-[28px] bg-[#F7F7F7] p-6 sm:p-8">
      <h1 className="mb-6 rounded-full bg-white px-4 py-4 text-center text-lg font-bold text-black">
        {title}
      </h1>

      {children}
    </section>
  );
}
