"use client";

export default function JournalForm() {
  return (
    <form
      className="space-y-10"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label className="block">
        <span className="mb-3 block text-[11px] tracking-[0.28em] text-brown/40">
          姓名
        </span>
        <input
          type="text"
          name="name"
          className="form-field"
          placeholder="如何称呼你"
        />
      </label>
      <label className="block">
        <span className="mb-3 block text-[11px] tracking-[0.28em] text-brown/40">
          所在城市
        </span>
        <input
          type="text"
          name="city"
          className="form-field"
          placeholder="你所在的城市"
        />
      </label>
      <label className="block">
        <span className="mb-3 block text-[11px] tracking-[0.28em] text-brown/40">
          你的故事
        </span>
        <textarea
          name="story"
          rows={6}
          className="form-field resize-none"
          placeholder="一碗汤、一颗蛋、一次院子里的遇见……"
        />
      </label>
      <button type="submit" className="btn-quiet">
        提交手记
      </button>
    </form>
  );
}
