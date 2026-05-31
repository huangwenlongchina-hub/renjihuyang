import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import LetterSection from "../components/LetterSection";
import PhotoFrame from "../components/PhotoFrame";
import SubPageLayout from "../components/SubPageLayout";

export const metadata: Metadata = {
  title: "成为护院人 · 人鸡互养",
  description: "寻找仍愿意认真对待生命的人。",
};

function ProseScreen({
  eyebrow,
  title,
  children,
  closing,
  button,
  bg = "rice",
}: {
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  closing?: ReactNode;
  button?: { label: string; href: string };
  bg?: "rice" | "cream";
}) {
  return (
    <section className={bg === "cream" ? "bg-cream" : "bg-rice"}>
      <div className="section-inner section-pad">
        <div className="mx-auto max-w-xl">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="heading-section mb-12">{title}</h2>
          <div className="space-y-7 body-prose">{children}</div>
          {closing ? (
            <p className="mt-12 text-sm leading-[2.3] tracking-[0.1em] text-brown/55">
              {closing}
            </p>
          ) : null}
          {button ? (
            <div className="mt-10">
              <Link href={button.href} className="btn-warm">
                {button.label}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default function JoinPage() {
  return (
    <SubPageLayout>
      <main className="bg-rice text-brown">
        {/* Hero */}
        <section className="relative min-h-[88vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(20,18,15,0.2) 0%, rgba(20,18,15,0.32) 100%), url('/images/home-background.png')",
            }}
          />
          <div className="hero-mist-text relative flex min-h-[inherit] items-end">
            <div className="section-inner w-full section-pad text-white">
              <p className="mb-10 text-[10px] tracking-[0.45em] text-white/50">
                成为护院人
              </p>
              <h1 className="mb-12 max-w-3xl text-3xl font-medium leading-[1.2] tracking-[0.02em] md:text-4xl lg:text-[2.5rem]">
                让更多鸡，
                <br />
                重新回到阳光下。
              </h1>
              <div className="mb-10 max-w-2xl body-lead !text-white/70">
                <p className="mb-6">我们真正想寻找的，不是加盟商。</p>
                <p className="text-white/75">而是：仍愿意认真对待生命的人。</p>
              </div>
              <p className="max-w-xl text-sm leading-[2.4] tracking-[0.1em] text-white/45">
                也许你的院子，
                <br />
                会成为下一座善院子。
              </p>
            </div>
          </div>
        </section>

        <div className="section-rest bg-rice" aria-hidden />

        <ProseScreen
          eyebrow="已有院子"
          title="如果你已经拥有一个院子"
          closing="让善良的院子，继续存在。"
          button={{ label: "推荐我的院子", href: "/letter" }}
          bg="rice"
        >
          <p>也许：你已经在山里养鸡很多年。</p>
          <p>
            也许：你一直不舍得：
            <br />
            把鸡关进笼子。
          </p>
          <p>
            也许：你也相信：
            <br />
            鸡应该属于阳光、土地、竹林与院子。
          </p>
          <p>但这些真正好的鸡蛋，却始终很难被看见。</p>
          <p>我们希望：帮助真正善待鸡的人，重新被城市家庭找到。</p>
        </ProseScreen>

        <div className="section-rest bg-cream" aria-hidden />

        <LetterSection
          eyebrow="善院子"
          title="什么样的院子，可以成为「善院子」"
          imageSrc="/images/yards-aying.jpg"
          imagePosition="right"
          bg="cream"
        >
          <p>我们不追求规模。我们更在意：鸡是否真正自由生活。</p>
          <p>例如：</p>
          <ul className="space-y-2 text-sm leading-[2.1] text-brown/60">
            <li>· 鸡不终身笼养</li>
            <li>· 可见阳光</li>
            <li>· 有泥土活动区</li>
            <li>· 有树荫与沙浴区</li>
            <li>· 鸡群可以自由活动</li>
            <li>· 母鸡可以带小鸡</li>
            <li>· 人长期陪伴鸡群</li>
          </ul>
          <p>真正的善院子，不是标准化工厂。而是一种人与生命长期共处的关系。</p>
          <p className="border-t border-gold/20 pt-8 text-base leading-[2] tracking-[0.08em] text-gold/85">
            人以岁月护其生，
            <br />
            鸡以金汤报其诚。
          </p>
        </LetterSection>

        <div className="section-rest bg-rice" aria-hidden />

        <ProseScreen
          eyebrow="回乡"
          title="如果你想回乡，慢慢养鸡"
          closing="土地，仍在等待愿意回来的人。"
          bg="rice"
        >
          <p>这些年，越来越多人开始意识到：真正值得长期信赖的食物，无法只来自工业体系。</p>
          <p>
            也许你也曾想过：
            <br />
            回到山里，慢慢养一群鸡，守护一座院子。
          </p>
          <p>
            我们希望：未来能够慢慢形成一座座真正的人鸡互养院子。让更多年轻人，重新回到土地。
          </p>
        </ProseScreen>

        <div className="section-rest bg-cream" aria-hidden />

        <section className="bg-cream">
          <div className="section-inner section-pad">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
              <div className="max-w-xl">
                <p className="eyebrow">城市</p>
                <h2 className="heading-section mb-12">城市中的护持人</h2>
                <div className="space-y-7 body-prose">
                  <p>并不是每个人都能回到山里。但每个人都可以成为：护持善院子继续存在的人。</p>
                  <p>
                    每一次选择，都在决定：什么样的生产方式，能够继续活下去。
                  </p>
                  <p>你支持的不只是鸡蛋。而是一种：人与生命重新恢复善意的关系。</p>
                </div>
                <p className="mt-12 text-sm leading-[2.3] tracking-[0.1em] text-brown/55">
                  一顿早餐，
                  <br />
                  也是一种投票。
                </p>
              </div>
              <PhotoFrame
                src="/images/breakfast.jpg"
                aspectClass="aspect-[4/5] lg:aspect-[3/4]"
              />
            </div>
          </div>
        </section>

        <div className="section-rest bg-rice" aria-hidden />

        <ProseScreen
          eyebrow="同路人"
          title="成为护院人"
          button={{ label: "写一封山中来信", href: "/letter" }}
          bg="rice"
        >
          <p>如果你：</p>
          <ul className="space-y-2 text-sm leading-[2.1] text-brown/60">
            <li>· 已经拥有一个真正的鸡院子</li>
            <li>· 想慢慢开始养鸡</li>
            <li>· 愿意记录鸡群与院子的生活</li>
            <li>· 相信人与生命之间应长期共生</li>
          </ul>
          <p>欢迎写信给我们。我们会认真阅读每一封来信。</p>
        </ProseScreen>

        <div className="section-rest bg-cream" aria-hidden />

        <section className="bg-cream">
          <div className="section-inner section-pad">
            <div className="mx-auto max-w-xl text-center">
              <p className="eyebrow">护院人之约</p>
              <h2 className="heading-section mb-12">护院人之约</h2>
              <div className="space-y-7 body-prose text-center">
                <p>我们相信：真正的院子，无法靠流量催生。</p>
                <p>真正的善意，也无法被工业化复制。</p>
                <p>
                  因此：我们宁愿慢一点。也希望：每一座加入的院子，都真正善待生命。
                </p>
                <p>这份关系，会比增长更重要。</p>
              </div>
              <p className="mt-14 text-lg font-medium leading-[1.7] tracking-[0.06em] text-gold/85">
                慢，
                <br />
                才可能长久。
              </p>
            </div>
          </div>
        </section>

        <section className="bg-rice">
          <div className="section-inner section-pad">
            <div className="mx-auto max-w-3xl py-8 text-center md:py-16">
              <h2 className="mb-10 text-2xl font-medium leading-[1.35] text-brown md:text-3xl lg:text-[2rem]">
                让更多鸡，
                <br />
                重新回到院子里。
              </h2>
              <p className="body-lead mx-auto max-w-lg">
                也让更多人，
                <br />
                重新回到人与土地的关系里。
              </p>
              <p className="mt-20 text-[10px] tracking-[0.45em] text-brown/30">
                山风 · 晨光
              </p>
            </div>
          </div>
        </section>
      </main>
    </SubPageLayout>
  );
}
