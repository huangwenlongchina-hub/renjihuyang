import type { Metadata } from "next";
import type { ReactNode } from "react";
import PageHero from "../components/PageHero";
import SubPageLayout from "../components/SubPageLayout";

export const metadata: Metadata = {
  title: "人鸡契约 · 人鸡互养",
  description: "人以岁月护其生，鸡以金汤报其诚。",
};

function ProseBlock({
  eyebrow,
  title,
  children,
  bg = "rice",
}: {
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  bg?: "rice" | "cream";
}) {
  return (
    <section className={bg === "cream" ? "bg-cream" : "bg-rice"}>
      <div className="section-inner section-pad">
        <div className="mx-auto max-w-xl">
          {eyebrow ? <p className="eyebrow text-center">{eyebrow}</p> : null}
          <h2 className="heading-section mb-12 text-center">{title}</h2>
          <div className="space-y-7 body-prose text-center">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default function ContractPage() {
  return (
    <SubPageLayout>
      <main className="bg-rice text-brown">
        <PageHero
          eyebrow="人鸡契约"
          title="人鸡契约"
          subtitle={
            <>
              以岁月为誓，
              <br />
              以金汤为盟。
            </>
          }
          footnote={
            <span className="text-gold/90">
              人以岁月护其生，
              <br />
              鸡以金汤报其诚。
            </span>
          }
          tone="brown"
        />

        <div className="section-rest bg-cream" aria-hidden />

        <ProseBlock bg="cream" title="这不是被发明的条款。">
          <p>而是被重新拾起的古老承诺。</p>
          <p>
            自古以来，
            <br />
            人予鸡以庇护，
            <br />
            鸡予人以滋养。
          </p>
          <p>非施舍，非剥削。</p>
          <p>
            而是生命与生命之间，
            <br />
            平等而温柔的盟约。
          </p>
        </ProseBlock>

        <div className="section-rest bg-rice" aria-hidden />

        <ProseBlock eyebrow="人之诺" title="人之诺" bg="rice">
          <p>
            我愿以一方院子，
            <br />
            为鸡群遮风避雨。
          </p>
          <p>
            给它们阳光，
            <br />
            给它们泥土，
            <br />
            给它们奔跑的空间，
            <br />
            给母鸡带小鸡的权利。
          </p>
          <p>
            不笼养。
            <br />
            不催肥。
            <br />
            不夺其性。
          </p>
          <p>我以岁月，护其一生。</p>
        </ProseBlock>

        <div className="section-rest bg-cream" aria-hidden />

        <ProseBlock eyebrow="鸡之礼" title="鸡之礼" bg="cream">
          <p>
            鸡在院子里，
            <br />
            奔跑过，
            <br />
            恋爱过，
            <br />
            被母亲带大，
            <br />
            也带过自己的小鸡。
          </p>
          <p>
            它完成一生，
            <br />
            以鸡蛋，
            <br />
            以陪伴，
            <br />
            以金黄的鸡汤，
            <br />
            回报人的守护。
          </p>
          <p>这不是工业品。</p>
          <p>
            这是生命与生命之间，
            <br />
            最朴素的回响。
          </p>
        </ProseBlock>

        <div className="section-rest bg-rice" aria-hidden />

        <ProseBlock eyebrow="护持人" title="护持人之诺" bg="rice">
          <p>我愿意以公平的价格，支持真正善待鸡的人。</p>
          <p>
            我知道：
            <br />
            每一次选择，
            <br />
            都在决定什么样的生产方式能活下去。
          </p>
          <p>我接受这份食物，也接受这份关系。</p>
        </ProseBlock>

        <section className="bg-dawn/40">
          <div className="section-inner section-pad">
            <div className="inscription-block">
              <p className="inscription-line text-gold/90">
                人以岁月护其生，
                <br />
                鸡以金汤报其诚。
              </p>
              <p className="mt-14 text-sm leading-[2.4] tracking-[0.14em] text-brown/50">
                此契约，
                <br />
                以天地为证，
                <br />
                以院子为印，
                <br />
                三方共守，
                <br />
                生生不息。
              </p>
            </div>
          </div>
        </section>
      </main>
    </SubPageLayout>
  );
}
