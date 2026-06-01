import Link from "next/link";
import PhotoFrame from "./components/PhotoFrame";
import SiteHeader from "./components/SiteHeader";
import {
  brandPromiseClosing,
  brandPromiseLines,
  breakfastLetters,
  industrialFate,
  labReports,
  lifeTimeline,
  courtyardLegacy,
  ourGoals,
  products,
  readyToCookDefaults,
  readyToCookSteps,
  safetyStandards,
  subscriptionClosing,
  subscriptionPlans,
  todayJournal,
  todayPhenology,
  tribeLadder,
  trustQuote,
  wuyishanLetters,
  yardFate,
  yardStandards,
  yardTiers,
} from "./lib/home-content";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="bg-rice text-brown">
        {/* Hero */}
        <section className="relative min-h-[100svh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(20,18,15,0.18) 0%, rgba(20,18,15,0.30) 100%), url('/images/home-background.png')",
            }}
          />
          <div className="relative z-10 flex min-h-screen items-center">
            <div className="mx-auto w-[92%] max-w-7xl">
              <div className="hero-mist-text mx-auto max-w-3xl text-center text-white">
                <p className="mb-12 text-[10px] tracking-[0.5em] text-white/55">
                  人鸡互养
                </p>
                <h1 className="mb-10 text-4xl font-medium leading-[1.12] tracking-[0.02em] md:mb-12 md:text-5xl lg:text-[3.25rem]">
                  用鸡院子
                  <br />
                  取代鸡笼子
                </h1>
                <div className="mb-12 text-lg leading-[2.2] text-white/88 md:mb-14 md:text-xl md:leading-[2.15]">
                  <p>让每一只鸡拥有阳光、土地与家庭</p>
                  <p className="mt-4">让每一个家庭拥有长期安心的食物</p>
                </div>
                <div className="mb-16 text-base leading-[2.25] text-dawn/95 md:text-lg">
                  我们不只是卖鸡蛋。
                  <br />
                  我们希望让更多鸡离开鸡笼，重新回到阳光下。
                </div>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                  <Link href="#courtyard" className="btn-quiet-light">
                    了解鸡院子
                  </Link>
                  <Link href="#subscribe" className="btn-quiet-light">
                    加入阳光早餐计划
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-[10px] tracking-[0.4em] text-white/40">
            让鸡重新回到阳光下
          </div>
        </section>

        {/* 一座院子的三十年 */}
        <section id="mission" className="bg-rice scroll-mt-16">
          <div className="section-inner section-pad">
            <header className="mb-16 max-w-2xl md:mb-20">
              <p className="eyebrow">岁月</p>
              <h2 className="heading-section mb-8">
                {courtyardLegacy.title}
              </h2>
              <div className="space-y-2 body-lead">
                {courtyardLegacy.subtitle.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </header>
            <p className="yard-legacy-prelude">{courtyardLegacy.prelude}</p>
            <div className="yard-legacy-list">
              {courtyardLegacy.items.map((item) => (
                <article key={item.label} className="yard-legacy-item">
                  <p className="yard-legacy-value">{item.value}</p>
                  <p className="yard-legacy-label">{item.label}</p>
                  <div className="yard-legacy-note">
                    {item.note.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="yard-legacy-epilogue">
              {courtyardLegacy.epilogue.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className="yard-legacy-closing">
              {courtyardLegacy.closing.map((line, i) => (
                <span key={line}>
                  {i > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </p>
          </div>
        </section>

        <div className="section-rest bg-cream" aria-hidden />

        {/* 两种命运 */}
        <section id="courtyard" className="grid min-h-0 scroll-mt-16 grid-cols-1 md:grid-cols-2">
          <div className="flex items-center bg-brown px-8 py-28 text-white md:px-16 md:py-36 lg:px-20">
            <div className="max-w-xl">
              <p className="eyebrow text-white/30">两种命运</p>
              <h2 className="mb-10 text-2xl font-medium leading-[1.2] md:text-3xl lg:text-[2rem]">
                工业鸡
              </h2>
              <ul className="fate-list space-y-1">
                {industrialFate.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center bg-dawn px-8 py-28 md:px-16 md:py-36 lg:px-20">
            <div className="max-w-xl">
              <p className="eyebrow">鸡院子里的鸡</p>
              <h2 className="mb-10 text-2xl font-medium leading-[1.2] md:text-3xl lg:text-[2rem]">
                完整的一生
              </h2>
              <ul className="fate-list space-y-1">
                {yardFate.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-rice py-24 md:py-32">
          <div className="section-inner text-center">
            <p className="text-xl font-medium leading-[1.65] tracking-[0.06em] text-brown/85 md:text-2xl md:leading-[1.55]">
              同样是一只鸡。
              <br />
              却可能拥有完全不同的一生。
            </p>
          </div>
        </section>

        <div className="section-rest bg-rice" aria-hidden />

        {/* 一只鸡的一生 */}
        <section className="bg-rice">
          <div className="section-inner section-pad !pt-0">
            <header className="mb-16 text-center md:mb-24">
              <p className="eyebrow">一生</p>
              <h2 className="heading-section">一只鸡的一生</h2>
            </header>
            <div className="life-timeline">
              {lifeTimeline.map((step, i) => (
                <div key={step} className="w-full">
                  {i > 0 ? <p className="life-timeline-arrow">↓</p> : null}
                  <p className="life-timeline-step">{step}</p>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-20 max-w-xl space-y-6 text-center body-prose md:mt-28">
              <p>在工业体系里，生命可能只有45天。</p>
              <p className="text-brown/80">
                在鸡院子里，生命有机会完整活过自己的一生。
              </p>
            </div>
          </div>
        </section>

        <div className="section-rest bg-cream" aria-hidden />

        {/* 鸡部落 */}
        <section className="bg-cream">
          <div className="section-inner section-pad !pt-0">
            <header className="mb-16 text-center md:mb-24">
              <p className="eyebrow">部落</p>
              <h2 className="heading-section">鸡部落</h2>
            </header>
            <div className="tribe-ladder">
              {tribeLadder.map((step, i) => (
                <div key={step} className="w-full">
                  {i > 0 ? <p className="tribe-ladder-arrow">↓</p> : null}
                  <p className="tribe-ladder-step">{step}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-20 max-w-lg text-center body-prose md:mt-28">
              我们不生产鸡。
              <br />
              我们守护一个鸡部落。
            </p>
          </div>
        </section>

        <div className="section-rest bg-rice" aria-hidden />

        {/* 今日鸡群 */}
        <section className="bg-rice">
          <div className="phenology-strip">
            <div className="section-inner">
              <p className="eyebrow mb-4">今日物候</p>
              <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:gap-10">
                <p className="text-sm tracking-[0.35em] text-gold/80">
                  当前节气 · {todayPhenology.term}
                </p>
                <p className="body-prose max-w-2xl text-sm md:text-base">
                  {todayPhenology.note}
                </p>
              </div>
            </div>
          </div>
          <div className="section-inner section-pad !pt-0">
            <p className="eyebrow">山居晨记</p>
            <h2 className="heading-section mb-3">今日鸡群</h2>
            <p className="mb-14 text-sm tracking-[0.2em] text-brown/45 md:mb-16">
              {todayJournal.subtitle}
            </p>
            <div className="grid grid-cols-1 items-stretch gap-16 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-7">
                <p className="mb-4 text-[10px] tracking-[0.35em] text-brown/35">
                  今日院子影像
                </p>
                <PhotoFrame
                  src="/images/today-flock.jpg"
                  aspectClass="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]"
                >
                  <div className="absolute inset-x-0 bottom-0 z-20 p-8 md:p-10">
                    <p className="text-[10px] tracking-[0.4em] text-white/60">
                      武夷山 · 阿英的院子
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-[2] text-white/80">
                      慢记录，非实时监控
                    </p>
                  </div>
                </PhotoFrame>
              </div>
              <div className="flex flex-col justify-center lg:col-span-5">
                <div className="mb-12">
                  <p className="mb-4 text-[10px] tracking-[0.35em] text-brown/35">
                    今日一句
                  </p>
                  <p className="mountain-journal-quote">
                    {todayJournal.dailyLine}
                  </p>
                </div>
                <dl className="journal-field">
                  <div>
                    <dt className="mb-2 text-[11px] tracking-[0.28em] text-brown/40">
                      山中天气
                    </dt>
                    <dd className="text-base leading-[2] text-brown/75">
                      {todayJournal.weather}
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-2 text-[11px] tracking-[0.28em] text-brown/40">
                      今日鲜蛋
                    </dt>
                    <dd className="text-lg leading-[2] text-brown/80">
                      {todayJournal.eggs} 枚
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-2 text-[11px] tracking-[0.28em] text-brown/40">
                      鸡群近况
                    </dt>
                    <dd className="text-base leading-[2] text-brown/75">
                      {todayJournal.status}
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-2 text-[11px] tracking-[0.28em] text-brown/40">
                      今日所见
                    </dt>
                    <dd className="text-base leading-[2] text-brown/75">
                      {todayJournal.activity}
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-2 text-[11px] tracking-[0.28em] text-brown/40">
                      晨记更新于
                    </dt>
                    <dd className="text-sm leading-[2] text-brown/50">
                      {todayJournal.updated}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <p className="mt-28 text-center text-sm leading-[2.5] tracking-[0.12em] text-brown/40 md:mt-36">
              看见真实，
              <br className="md:hidden" />
              才敢长期相信。
            </p>
          </div>
        </section>

        <div className="section-rest bg-cream" aria-hidden />

        {/* 善院子 */}
        <section className="bg-cream">
          <div className="section-inner section-pad !pt-0">
            <header className="mb-16 max-w-2xl md:mb-20">
              <p className="eyebrow">善院子</p>
              <h2 className="heading-section mb-8">
                不是所有院子，
                <br />
                都叫善院子
              </h2>
              <p className="body-lead">
                人鸡互养只接纳真正善待鸡的院子。
                <br className="hidden sm:inline" />
                我们用公开标准，让善被看见。
              </p>
            </header>
            <div className="mx-auto max-w-3xl">
              {yardTiers.map((tier) => (
                <article
                  key={tier.name}
                  className={
                    "featured" in tier && tier.featured
                      ? "yard-tier yard-tier-featured"
                      : "yard-tier"
                  }
                >
                  <p className="mb-4 text-[10px] tracking-[0.4em] text-gold/70">
                    {tier.level}
                  </p>
                  <h3 className="mb-4 text-base font-medium text-brown md:text-lg">
                    {tier.name}
                  </h3>
                  <p className="body-prose text-sm">{tier.desc}</p>
                  <div className="yard-rules">
                    <p className="mb-3 text-[10px] tracking-[0.3em] text-brown/35">
                      院子守则
                    </p>
                    <ul>
                      {tier.rules.map((rule) => (
                        <li key={rule}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <ul className="yard-standards">
              {yardStandards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <div className="section-rest bg-cream" aria-hidden />

        {/* 安全检测体系 */}
        <section id="trust" className="bg-cream scroll-mt-16">
          <div className="section-inner section-pad !pt-0">
            <header className="mb-14 max-w-2xl md:mb-20">
              <p className="eyebrow">检测</p>
              <h2 className="heading-section mb-6">
                长期安心的底层基础
              </h2>
              <p className="body-lead">
                善意不能代替安全。
                <br />
                信任必须建立在事实之上。
              </p>
            </header>
            <div className="safety-standard-grid mb-16 md:mb-20">
              {safetyStandards.map((item) => (
                <p key={item} className="safety-standard-item">
                  {item}
                </p>
              ))}
            </div>
            <div className="mb-10 flex justify-center">
              <a href="#reports" className="btn-warm">
                查看最新检测报告
              </a>
            </div>
            <div id="reports" className="mx-auto grid max-w-3xl grid-cols-1 gap-8 md:gap-10">
              {labReports.map((report) => (
                <article key={report.id} className="report-pdf-card">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[10px] tracking-[0.35em] text-brown/35">
                        PDF · 检测报告
                      </p>
                      <h3 className="mt-2 text-base font-medium text-brown md:text-lg">
                        {report.title}
                      </h3>
                    </div>
                    <span
                      className="shrink-0 border border-brown/10 px-3 py-1.5 text-[10px] tracking-[0.2em] text-brown/40"
                      aria-hidden
                    >
                      PDF
                    </span>
                  </div>
                  <dl>
                    <div>
                      <dt>检测日期</dt>
                      <dd>{report.date}</dd>
                    </div>
                    <div>
                      <dt>检测机构</dt>
                      <dd>{report.agency}</dd>
                    </div>
                    <div>
                      <dt>检测项目</dt>
                      <dd>{report.items}</dd>
                    </div>
                    <div>
                      <dt>检测结果</dt>
                      <dd>{report.result}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-16 max-w-xl text-center text-sm leading-[2.4] tracking-[0.1em] text-brown/50 md:mt-20">
              {trustQuote}
            </p>
          </div>
        </section>

        <div className="section-rest bg-rice" aria-hidden />

        <section className="bg-rice">
          <div className="section-inner section-pad !pt-0">
            <div className="conversion-panel">
              <p className="text-xl font-medium leading-[1.65] text-brown/80 md:text-2xl">
                真正的善，
                <br />
                不仅值得被看见，
                <br />
                也值得被支持。
              </p>
              <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
                <Link href="#shop" className="btn-warm">
                  购买母爱蛋
                </Link>
                <Link href="/yards" className="btn-quiet">
                  认养一个院子
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="section-rest bg-rice" aria-hidden />

        {/* 产品体系 */}
        <section id="shop" className="bg-rice scroll-mt-16">
          <div className="section-inner section-pad !pt-0">
            <header className="mb-12 max-w-2xl md:mb-16">
              <p className="eyebrow">食物与生命</p>
              <h2 className="heading-section mb-8">
                每一次选择，
                <br />
                都在为一种生产方式投票
              </h2>
              <p className="body-lead">
                不是按斤卖肉，而是礼敬一只完整活过的生命。
              </p>
            </header>
            <div className="mx-auto max-w-3xl">
              {products.map((product) => (
                <article key={product.name} className="product-catalog-item">
                  <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-12">
                    <div className="md:col-span-2">
                      <PhotoFrame
                        src={product.image}
                        aspectClass="aspect-[4/3]"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <p className="mb-3 text-[10px] tracking-[0.35em] text-brown/35">
                        {product.badge}
                      </p>
                      <h3 className="mb-4 text-lg font-medium text-brown md:text-xl">
                        {product.name}
                      </h3>
                      <p className="mb-1 text-base tracking-[0.06em] text-gold/90">
                        {product.priceMain}
                      </p>
                      <p className="mb-8 text-[11px] leading-[2] tracking-wide text-brown/45">
                        {product.priceSub}
                      </p>
                      <div className="space-y-5 body-prose">
                        {product.paragraphs.map((para) => (
                          <p key={para}>{para}</p>
                        ))}
                      </div>
                      <div className="mt-10 border-t border-brown/[0.06] pt-8">
                        <button type="button" className="btn-quiet">
                          预约了解
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rest bg-cream" aria-hidden />

        {/* 收到即可下锅 */}
        <section className="bg-cream">
          <div className="section-inner section-pad !pt-0">
            <header className="mb-14 max-w-2xl md:mb-20">
              <p className="eyebrow">便利</p>
              <h2 className="heading-section mb-6">收到即可下锅</h2>
              <p className="body-lead">为城市家庭做好最后一步。</p>
            </header>
            <div className="mx-auto max-w-xl space-y-6 body-prose">
              <p>所有慢养土鸡产品：</p>
              <ul className="space-y-2 text-sm leading-[2.1] text-brown/60">
                {readyToCookDefaults.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
              <p className="text-brown/80">收到即可下锅。</p>
            </div>
            <div className="life-timeline mx-auto mt-16 md:mt-20">
              {readyToCookSteps.map((step, i) => (
                <div key={step} className="w-full">
                  {i > 0 ? <p className="life-timeline-arrow">↓</p> : null}
                  <p className="life-timeline-step">{step}</p>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-16 max-w-lg space-y-5 text-center body-prose md:mt-20">
              <p>不需要砍刀。</p>
              <p>不需要处理羽毛。</p>
              <p>不需要复杂准备。</p>
              <p className="text-brown/80">我们替你完成。</p>
            </div>
          </div>
        </section>

        <div className="section-rest bg-rice" aria-hidden />

        {/* 安心承诺 */}
        <section className="bg-rice">
          <div className="section-inner section-pad !pt-0">
            <header className="mb-12 max-w-2xl md:mb-16">
              <p className="eyebrow">承诺</p>
              <h2 className="heading-section">安心承诺</h2>
            </header>
            <div className="mx-auto max-w-xl space-y-7 body-prose">
              {brandPromiseLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className="mx-auto mt-16 max-w-lg text-center text-xl font-medium leading-[1.65] text-brown/85 md:mt-20 md:text-2xl">
              {brandPromiseClosing.map((line, i) => (
                <span key={line}>
                  {i > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </p>
          </div>
        </section>

        <div className="section-rest bg-cream" aria-hidden />

        {/* 阳光早餐计划 */}
        <section id="subscribe" className="bg-cream scroll-mt-16">
          <div className="section-inner section-pad !pt-0">
            <header className="mb-16 max-w-2xl md:mb-20">
              <p className="eyebrow">长期安心</p>
              <h2 className="heading-section mb-8">阳光早餐计划</h2>
              <p className="body-lead">
                你订阅的不只是鸡蛋。
                <br />
                而是一份长期安心。
              </p>
            </header>
            <div className="subscription-plan-list">
              {subscriptionPlans.map((plan) => (
                <article
                  key={plan.name}
                  className={
                    "featured" in plan && plan.featured
                      ? "subscription-plan-row subscription-plan-row-featured"
                      : "subscription-plan-row"
                  }
                >
                  <h3 className="text-base font-medium text-brown md:text-lg">
                    {plan.name}
                  </h3>
                  <p className="mt-3 text-xl font-medium tracking-[0.04em] text-brown/90 md:text-2xl">
                    {plan.price}
                  </p>
                  <p className="subscription-daily">{plan.dailyCost}</p>
                  <p className="mt-5 body-prose text-sm">{plan.note}</p>
                </article>
              ))}
            </div>
            <div className="mx-auto mt-20 max-w-lg space-y-2 text-center md:mt-28">
              {subscriptionClosing.map((line) => (
                <p
                  key={line}
                  className="text-sm leading-[2.3] tracking-[0.1em] text-brown/55 md:text-base"
                >
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-16 flex justify-center md:mt-20">
              <button type="button" className="btn-warm">
                加入阳光早餐计划
              </button>
            </div>
          </div>
        </section>

        <div className="section-rest bg-rice" aria-hidden />

        {/* 早餐来信 */}
        <section className="bg-rice">
          <div className="section-inner section-pad !pt-0">
            <header className="mb-16 max-w-2xl md:mb-24">
              <p className="eyebrow">来信</p>
              <h2 className="heading-section mb-8">早餐来信</h2>
              <p className="body-lead">
                真实家庭的故事，不是五星评价。
                <br />
                是城市餐桌与山里院子之间，慢慢建立的信任。
              </p>
            </header>
            <div className="mx-auto max-w-2xl space-y-20 md:space-y-28">
              {breakfastLetters.map((letter) => (
                <article key={letter.title} className="slow-letter">
                  <p className="slow-letter-kind">城市家庭</p>
                  <div className="mb-6 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                    <h3 className="text-base font-medium text-brown md:text-lg">
                      {letter.title}
                    </h3>
                    <p className="text-[11px] tracking-[0.28em] text-brown/35">
                      {letter.date}
                    </p>
                  </div>
                  <p className="slow-letter-body">{letter.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rest bg-cream" aria-hidden />

        {/* 武夷山慢信 */}
        <section className="bg-cream">
          <div className="section-inner section-pad !pt-0">
            <header className="mb-16 max-w-2xl md:mb-20">
              <p className="eyebrow">武夷山</p>
              <h2 className="heading-section mb-8">来自武夷山的慢信</h2>
              <p className="body-lead">阿英每月来信。季节、鸡群、院子日常。</p>
            </header>
            <div className="mx-auto max-w-2xl space-y-12">
              {wuyishanLetters.map((letter) => (
                <article key={letter.month} className="letter-card">
                  <p className="mb-2 text-[10px] tracking-[0.35em] text-brown/35">
                    阿英 · {letter.month}
                  </p>
                  <h3 className="mb-8 text-base font-medium text-brown md:text-lg">
                    {letter.season}
                  </h3>
                  <dl className="space-y-6 text-sm leading-[2.2] text-brown/65">
                    <div>
                      <dt className="mb-2 text-[10px] tracking-[0.28em] text-brown/40">
                        鸡群故事
                      </dt>
                      <dd>{letter.flock}</dd>
                    </div>
                    <div>
                      <dt className="mb-2 text-[10px] tracking-[0.28em] text-brown/40">
                        院子日常
                      </dt>
                      <dd>{letter.yard}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rest bg-rice" aria-hidden />

        {/* 我们的目标 */}
        <section className="bg-rice">
          <div className="section-inner section-pad !pt-0">
            <header className="mb-14 max-w-2xl md:mb-20">
              <p className="eyebrow">目标</p>
              <h2 className="heading-section">我们的目标</h2>
            </header>
            <div className="mx-auto max-w-xl space-y-7 body-prose">
              {ourGoals.map((line) => (
                <p key={line} className={line.includes("希望") ? "text-brown/80" : undefined}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        <div className="section-rest bg-cream" aria-hidden />

        {/* 一同生活 */}
        <section id="join" className="bg-cream scroll-mt-16">
          <div className="section-inner section-pad !pt-0">
            <header className="mb-16 max-w-2xl md:mb-20">
              <p className="eyebrow">一同生活</p>
              <h2 className="heading-section mb-8">
                这不是我们的事，
                <br />
                是所有愿意认真对待生命的人的事
              </h2>
            </header>
            <div className="mx-auto max-w-3xl space-y-0">
              <article className="yard-tier">
                <p className="mb-4 text-[10px] tracking-[0.35em] text-brown/35">其一</p>
                <h3 className="mb-3 text-base font-medium text-brown md:text-lg">
                  订阅阳光早餐
                </h3>
                <p className="mb-6 body-prose text-sm">让长期安心，成为每天的习惯</p>
                <Link href="#subscribe" className="btn-text">
                  了解订阅计划
                </Link>
              </article>
              <article className="yard-tier">
                <p className="mb-4 text-[10px] tracking-[0.35em] text-brown/35">其二</p>
                <h3 className="mb-3 text-base font-medium text-brown md:text-lg">
                  认养一个鸡院子
                </h3>
                <p className="mb-6 body-prose text-sm">长期支持一座真实的善院子</p>
                <Link href="/yards" className="btn-warm">
                  找一个院子
                </Link>
              </article>
              <article className="yard-tier border-b-0 pb-0">
                <p className="mb-4 text-[10px] tracking-[0.35em] text-brown/35">其三</p>
                <h3 className="mb-3 text-base font-medium text-brown md:text-lg">
                  成为护院人
                </h3>
                <p className="mb-6 body-prose text-sm">若你有一座善待生命的院子</p>
                <Link href="/join" className="btn-text">
                  写一封山中来信
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* 最终收尾 */}
        <section className="bg-brown text-white">
          <div className="section-inner py-28 text-center md:py-40 lg:py-48">
            <p className="text-xl font-medium leading-[1.7] tracking-[0.1em] text-gold/90 md:text-2xl">
              人以岁月护其生
              <br />
              鸡以金汤报其诚
            </p>
            <p className="mx-auto mt-12 max-w-lg text-sm leading-[2.4] tracking-[0.1em] text-white/55 md:mt-16 md:text-base">
              让一个生命完整活过，
              <br />
              是我们对世界最温柔的坚持。
            </p>
            <div className="mt-20 border-t border-white/[0.08] pt-16 md:mt-24 md:pt-20">
              <p className="mb-6 text-[10px] tracking-[0.5em] text-white/40">人鸡互养</p>
              <h2 className="text-2xl font-medium leading-[1.35] text-white/95 md:text-3xl">
                用鸡院子
                <br />
                取代鸡笼子
              </h2>
            </div>
          </div>
        </section>

        <footer className="footer-literary bg-brown text-white">
          <div className="section-inner border-t border-white/[0.06] py-20 md:py-24">
            <div className="flex flex-col gap-12 md:flex-row md:gap-20 lg:gap-28">
              <nav aria-label="网站导航" className="md:flex-1">
                <p className="mb-4 text-[10px] tracking-[0.4em] text-white/25">寻</p>
                <ul className="space-y-2">
                  <li>
                    <a href="#mission">使命</a>
                  </li>
                  <li>
                    <a href="#shop">食物与生命</a>
                  </li>
                  <li>
                    <a href="#subscribe">阳光早餐</a>
                  </li>
                  <li>
                    <Link href="/yards">找院子</Link>
                  </li>
                  <li>
                    <Link href="/join">成为护院人</Link>
                  </li>
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
            <p className="mt-16 text-[11px] tracking-[0.2em] text-white/30 md:mt-20">
              © 2026 人鸡互养 RenJiHuYang
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
