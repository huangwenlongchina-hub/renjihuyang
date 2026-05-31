import type { Metadata } from "next";
import LetterSection from "../components/LetterSection";
import PageHero from "../components/PageHero";
import SubPageLayout from "../components/SubPageLayout";

export const metadata: Metadata = {
  title: "关于我们 · 人鸡互养",
  description: "一念不忍，便是仁的萌芽。",
};

export default function AboutPage() {
  return (
    <SubPageLayout>
      <main className="bg-rice text-brown">
        <PageHero
          eyebrow="关于我们"
          title="为什么开始人鸡互养？"
          subtitle={
            <>
              因为我们越来越无法接受：
              <br />
              食物与生命之间，
              <br />
              只剩冰冷的工业关系。
            </>
          }
          footnote={
            <>
              我们想让鸡重新回到阳光下，
              <br />
              也想让食物重新回到温暖里。
            </>
          }
          tone="cream"
        />

        <div className="section-rest bg-rice" aria-hidden />

        <LetterSection
          eyebrow="山里"
          title={
            <>
              姐姐阿英，
              <br />
              用三十年守护一个鸡部落。
            </>
          }
          imageSrc="/images/about-aying.jpg"
          bg="rice"
        >
          <p>阿英住在山里。</p>
          <p>
            一座老房子，
            <br />
            一个院子，
            <br />
            一群鸡。
          </p>
          <p>她用三十年时间，守护着这个鸡部落。</p>
          <p>那里不是养殖场。那是她与鸡群共同生活的地方。</p>
          <p>
            院子里有竹林，
            <br />
            有溪流，
            <br />
            有泥土，
            <br />
            有晨光。
          </p>
          <p>母鸡会带小鸡，鸡群会自由活动。</p>
          <p>
            鸡知道什么是风，
            <br />
            什么是阳光，
            <br />
            什么是春天。
          </p>
        </LetterSection>

        <div className="section-rest bg-cream" aria-hidden />

        <LetterSection
          eyebrow="城市与山"
          title={
            <>
              而创办人，
              <br />
              曾是一名航天工程师。
            </>
          }
          imageSrc="/images/about-founder.jpg"
          imagePosition="left"
          bg="cream"
        >
          <p>
            创办人曾长期从事航天、轨道交通、汽车、芯片等高可靠系统安全工作。
          </p>
          <p>
            他可以用工程方法，
            <br />
            守护火箭、列车、汽车与芯片的安全。
          </p>
          <p>却用了二十年时间，也没有真正为姐姐的土鸡蛋找到出路。</p>
          <p>
            一边是真正好的鸡蛋，
            <br />
            卖不出去。
          </p>
          <p>
            一边是城市里的家庭，
            <br />
            每天都在寻找真正安心的食物。
          </p>
        </LetterSection>

        <div className="section-rest bg-rice" aria-hidden />

        <section className="bg-rice">
          <div className="section-inner section-pad">
            <p className="eyebrow">发心</p>
            <h2 className="heading-section mb-12">
              这一切，
              <br />
              始于一念不忍。
            </h2>
            <div className="mx-auto max-w-lg space-y-7 body-prose">
              <p>不忍姐姐三十年的坚守被辜负。</p>
              <p>不忍真正的土鸡蛋，最后烂在院子里。</p>
              <p>不忍那些在笼子里沉默的鸡，一生没有见过阳光。</p>
              <p>这一念「不忍」，便是本平台的发心。</p>
            </div>
          </div>
        </section>

        <div className="section-rest bg-cream" aria-hidden />

        <section className="bg-cream">
          <div className="section-inner section-pad">
            <p className="eyebrow">我们所做</p>
            <h2 className="heading-section mb-12">我们不是在卖鸡蛋。</h2>
            <div className="mx-auto max-w-lg space-y-7 body-prose">
              <p>我们真正想做的，是让善待生命的人，能够活下去。</p>
              <p>让真正愿意慢慢养鸡的人，不再被冰冷的工业模式淘汰。</p>
              <p>让更多鸡，重新回到阳光下。</p>
              <p>让更多家庭，重新吃到有温度的食物。</p>
            </div>
          </div>
        </section>

        <section className="bg-rice">
          <div className="section-inner section-pad !pt-0">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-10 text-2xl font-medium leading-[1.35] text-brown md:text-3xl">
                这不是鸡蛋的问题。
              </h2>
              <p className="mb-12 text-lg font-medium text-brown/80">
                而是：人与生命关系的问题。
              </p>
              <p className="body-lead mx-auto max-w-xl">
                我们希望：
                <br />
                让鸡重新回到院子里，
                <br />
                让食物重新回到温暖里，
                <br />
                让人与生命之间，
                <br />
                重新恢复古老的善意。
              </p>
            </div>
          </div>
        </section>
      </main>
    </SubPageLayout>
  );
}
