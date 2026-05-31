import type { Metadata } from "next";
import JournalForm from "../components/JournalForm";
import PageHero from "../components/PageHero";
import SubPageLayout from "../components/SubPageLayout";

export const metadata: Metadata = {
  title: "供养手记 · 人鸡互养",
  description: "善意抵达餐桌后的回响。",
};

const entries = [
  {
    city: "上海",
    author: "一位母亲",
    text: "今天孩子第一次看见母鸡带小鸡。他站在院子边看了很久。回家路上，他问我：「妈妈，小鸡也有妈妈吗？」",
  },
  {
    city: "杭州",
    author: "一位护持人",
    text: "那锅鸡汤，没有放太多调料。但汤色金黄，喝下去很安静。",
  },
  {
    city: "北京",
    author: "一位读者",
    text: "我买的不是鸡蛋。我想支持一个更温暖的世界。",
  },
];

export default function JournalPage() {
  return (
    <SubPageLayout>
      <main className="bg-rice text-brown">
        <PageHero
          eyebrow="供养手记"
          title="供养手记"
          subtitle="这些文字，是善意抵达餐桌后的回响。"
          tone="cream"
        />

        <div className="section-rest bg-rice" aria-hidden />

        <section className="bg-rice">
          <div className="section-inner section-pad !pt-0">
            <p className="eyebrow">回响</p>
            <h2 className="heading-section mb-10">
              一碗汤，
              <br />
              一颗蛋，
              <br />
              一段心声。
            </h2>
            <div className="body-lead max-w-2xl space-y-6">
              <p>当食物重新带有温暖，人也会愿意把心里的话写下来。</p>
              <p>
                这里记录：护持人的感受，孩子第一次走进鸡院子的故事，收到母爱蛋后的早餐，以及一碗金黄鸡汤带来的安静时刻。
              </p>
            </div>
          </div>
        </section>

        <div className="section-rest bg-cream" aria-hidden />

        <section className="bg-cream">
          <div className="section-inner section-pad !pt-0">
            <ul className="mx-auto max-w-2xl space-y-10">
              {entries.map((entry, i) => (
                <li key={i} className="letter-card">
                  <p className="mb-6 text-[10px] tracking-[0.35em] text-brown/35">
                    {entry.city} · {entry.author}
                  </p>
                  <p className="body-prose text-brown/75">{entry.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="section-rest bg-rice" aria-hidden />

        <section className="bg-rice">
          <div className="section-inner section-pad !pt-0">
            <div className="mx-auto max-w-xl">
              <p className="eyebrow">写下你的手记</p>
              <h2 className="heading-section mb-10">留下你的手记</h2>
              <p className="body-lead mb-14">
                你写下的每一句话，
                <br />
                都会成为这份善意的回响。
              </p>

              <JournalForm />
            </div>
          </div>
        </section>
      </main>
    </SubPageLayout>
  );
}
