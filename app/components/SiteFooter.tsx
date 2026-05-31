import Link from "next/link";

const footerLinks = [
  { label: "关于我们", href: "/about" },
  { label: "人鸡契约", href: "/contract" },
  { label: "找院子", href: "/yards" },
  { label: "供养手记", href: "/journal" },
  { label: "母爱蛋", href: "/#shop" },
  { label: "加入我们", href: "/join" },
  { label: "写封信", href: "/letter" },
];

export default function SiteFooter() {
  return (
    <footer className="footer-literary bg-brown text-white">
      <div className="section-inner py-24 md:py-32 lg:py-40">
        <div className="mb-20 max-w-2xl md:mb-24">
          <h2 className="mb-10 text-2xl font-medium leading-[1.2] text-white/95 md:text-3xl lg:text-[2rem]">
            用鸡院子，
            <br />
            取代鸡笼子
          </h2>

          <p className="mb-12 text-lg font-medium leading-[1.5] text-gold/85 md:text-xl">
            将善，
            <br />
            注入食物
          </p>

          <div className="space-y-3 text-sm leading-[2.2] text-white/55 md:text-base">
            <p>让每一只鸡，都被善待</p>
            <p>让每一碗汤，都见阳光</p>
          </div>
        </div>

        <div className="flex flex-col gap-12 border-t border-white/[0.08] pt-12 md:flex-row md:gap-20 md:pt-14 lg:gap-28">
          <nav aria-label="网站导航" className="md:flex-1">
            <p className="mb-4 text-[10px] tracking-[0.4em] text-white/25">寻</p>
            <ul className="space-y-2">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:flex-1">
            <p className="mb-4 text-[10px] tracking-[0.4em] text-white/25">联系</p>
            <a href="mailto:hello@renjihuyang.com">hello@renjihuyang.com</a>
          </div>

          <div className="md:flex-1">
            <p className="mb-4 text-[10px] tracking-[0.4em] text-white/25">相逢</p>
            <ul className="space-y-2 text-[13px] leading-[2] text-white/55">
              <li>微信公众号：人鸡互养</li>
              <li>小红书：@人鸡互养</li>
              <li>抖音：@人鸡互养</li>
            </ul>
          </div>
        </div>

        <p className="mt-20 text-[11px] tracking-[0.2em] text-white/30 md:mt-24">
          © 2026 人鸡互养 RenJiHuYang
        </p>
      </div>
    </footer>
  );
}
