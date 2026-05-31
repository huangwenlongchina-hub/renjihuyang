import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import SubPageLayout from "../components/SubPageLayout";

export const metadata: Metadata = {
  title: "写封信 · 人鸡互养",
  description: "山中慢回信，欢迎写封信给我们。",
};

const contactItems = [
  { label: "微信公众号", value: "人鸡互养" },
  { label: "小红书", value: "@人鸡互养" },
  { label: "邮箱", value: "hello@renjihuyang.com", href: "mailto:hello@renjihuyang.com" },
  { label: "地址", value: "福建 · 武夷山" },
];

export default function LetterPage() {
  return (
    <SubPageLayout>
      <main className="bg-rice text-brown">
        <PageHero
          eyebrow="写封信"
          title={
            <>
              如果你也相信：
              <br />
              食物应该重新带有温暖
            </>
          }
          subtitle={
            <>
              <p className="mb-8">欢迎写封信给我们。</p>
              <p className="mb-6 text-brown/55">无论是：</p>
              <ul className="space-y-3 text-left text-brown/60 md:mx-auto md:max-w-sm">
                <li>寻找真正的鸡院子、</li>
                <li>分享早餐故事、</li>
                <li>推荐一个院子、</li>
                <li>成为护持人、</li>
                <li>或只是想谈谈人与生命的关系。</li>
              </ul>
              <p className="mt-10">我们都会认真阅读。</p>
            </>
          }
          tone="cream"
        />

        <div className="section-rest bg-rice" aria-hidden />

        <section className="bg-rice">
          <div className="section-inner section-pad !pt-0">
            <p className="eyebrow text-center">联络</p>
            <div className="mx-auto max-w-md border border-brown/[0.08] bg-cream/80 px-10 py-12 md:px-14 md:py-16">
              <dl className="space-y-10">
                {contactItems.map((item) => (
                  <div key={item.label}>
                    <dt className="mb-2 text-[10px] tracking-[0.35em] text-brown/35">
                      {item.label}
                    </dt>
                    <dd className="text-base font-normal tracking-wide text-brown/75 md:text-lg">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="transition-colors duration-500 hover:text-gold/90"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <div className="section-rest bg-cream" aria-hidden />

        <section className="bg-cream">
          <div className="section-inner section-pad !pt-0">
            <div className="mx-auto max-w-xl text-center">
              <p className="eyebrow">山中</p>
              <h2 className="heading-section mb-12">
                山中回信会慢一些。
              </h2>
              <div className="space-y-7 body-prose text-center">
                <p>因为这里不是客服中心。</p>
                <p>
                  院子里的生活，
                  <br />
                  需要先喂鸡、
                  <br />
                  扫院子、
                  <br />
                  照顾小鸡、
                  <br />
                  煮一锅鸡汤。
                </p>
                <p className="text-brown/75">
                  但每一封真正的来信，
                  <br />
                  都会被认真阅读。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SubPageLayout>
  );
}
