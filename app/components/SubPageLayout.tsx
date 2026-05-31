import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function SubPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <div className="pt-[3.75rem]">{children}</div>
      <SiteFooter />
    </>
  );
}
