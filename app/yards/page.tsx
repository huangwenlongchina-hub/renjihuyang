import type { Metadata } from "next";
import PhotoFrame from "../components/PhotoFrame";
import PageHero from "../components/PageHero";
import SubPageLayout from "../components/SubPageLayout";

export const metadata: Metadata = {
  title: "找院子 · 人鸡互养",
  description: "找到一座与你有缘的鸡院子。",
};

export default function YardsPage() {
  return (
    <SubPageLayout>
      <main className="bg-rice text-brown">
        <PageHero
          eyebrow="找院子"
          title="找到一座与你有缘的鸡院子"
          subtitle="地图上的每一个光点，都是一群鸡重新回到阳光下的地方。"
          tone="cream"
        />

        <div className="section-rest bg-rice" aria-hidden />

        <section className="bg-rice">
          <div className="section-inner section-pad !pt-0">
            <p className="eyebrow">鸡院子地图</p>
            <h2 className="heading-section mb-10">
              一座座鸡院子，
              <br />
              重新回到山水之间。
            </h2>
            <p className="body-lead mb-16 max-w-2xl">
              我们真正想做的，不是一家养鸡场。
              <br />
              而是一张慢慢生长的：中国鸡院子地图。
              <br />
              让更多真正善待鸡的人，能够被看见。
            </p>

            <div className="map-landscape rounded-sm">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 60%, rgb(196 146 42 / 0.08) 0%, transparent 70%),
                    repeating-linear-gradient(0deg, transparent, transparent 48px, rgb(43 36 29 / 0.03) 48px, rgb(43 36 29 / 0.03) 49px),
                    repeating-linear-gradient(90deg, transparent, transparent 48px, rgb(43 36 29 / 0.03) 48px, rgb(43 36 29 / 0.03) 49px)`,
                }}
                aria-hidden
              />
              <p className="absolute left-8 top-8 text-[10px] tracking-[0.4em] text-brown/25">
                山水 · 鸡院子地图
              </p>
              <div className="map-marker">
                <span className="inline-flex h-2.5 w-2.5 rounded-full border border-gold/50 bg-gold/35" />
                <div className="mt-4 min-w-[10rem] border border-brown/10 bg-cream/95 px-4 py-3 text-left shadow-none">
                  <p className="text-[10px] tracking-[0.3em] text-brown/40">
                    WY-001
                  </p>
                  <p className="mt-1 text-sm font-medium text-brown">
                    福建武夷山
                  </p>
                  <p className="text-xs text-brown/55">阿英的院子</p>
                  <p className="mt-1 text-[10px] tracking-wide text-gold/80">
                    共生善院子
                  </p>
                </div>
              </div>
              <p className="absolute bottom-8 right-8 max-w-[12rem] text-right text-[10px] leading-[2] tracking-[0.2em] text-brown/30">
                地图绘制中
                <br />
                更多院子将陆续标注
              </p>
            </div>
          </div>
        </section>

        <div className="section-rest bg-cream" aria-hidden />

        <section className="bg-cream">
          <div className="section-inner section-pad !pt-0">
            <p className="eyebrow">院子志</p>
            <article className="mx-auto max-w-3xl border-t border-brown/[0.08] pt-12">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <PhotoFrame
                    src="/images/yards-aying.jpg"
                    aspectClass="aspect-[4/5]"
                  />
                </div>
                <div className="flex flex-col justify-center lg:col-span-7">
                  <h3 className="mb-2 text-xl font-medium text-brown md:text-2xl">
                    阿英的院子
                  </h3>
                  <dl className="mb-8 space-y-3 text-sm text-brown/55">
                    <div className="flex gap-4">
                      <dt className="w-16 shrink-0 tracking-wide">地点</dt>
                      <dd>福建武夷山</dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="w-16 shrink-0 tracking-wide">守护人</dt>
                      <dd>阿英</dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="w-16 shrink-0 tracking-wide">等级</dt>
                      <dd className="text-gold/85">共生善院子</dd>
                    </div>
                  </dl>
                  <p className="mb-8 body-prose">
                    一座老房子，一方院子，一群被善待的鸡。
                    <br />
                    这里有竹林、溪流、泥土与晨光。
                  </p>
                  <div className="companion-note mb-8">
                    <p className="text-brown/55">成为护持人后，你会收到：</p>
                    <ul className="mt-3 space-y-2 text-brown/60">
                      <li>· 院子的四时变化</li>
                      <li>· 鸡群成长记录</li>
                      <li>· 来自武夷山的一封慢信</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <button type="button" className="btn-quiet">
                      查看院子
                    </button>
                    <button type="button" className="btn-warm">
                      成为护持人
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <div className="section-rest bg-rice" aria-hidden />

        <section className="bg-rice">
          <div className="section-inner section-pad !pt-0">
            <div className="mx-auto max-w-xl text-center">
              <p className="eyebrow">引荐</p>
              <h2 className="heading-section mb-10">
                也许你的身边，
                <br />
                也有一个善院子。
              </h2>
              <p className="body-lead mb-12">
                如果你认识真正善待鸡的人，
                <br />
                请把他们介绍给我们。
              </p>
              <p className="body-prose mb-14">
                我们希望：
                <br />
                让这些沉默的守护人，
                <br />
                被更多城市家庭看见。
              </p>
              <button type="button" className="btn-quiet">
                推荐一个鸡院子
              </button>
            </div>
          </div>
        </section>
      </main>
    </SubPageLayout>
  );
}
