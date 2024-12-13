import { ArrowUp, Bookmark, MessageSquare } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export const QuestionCard = ({ question }) => {
  const redirector = (URL) => redirect(`/explore/question/${URL}`);
  return (
    <article
      onClick={() => redirector(question._id)}
      className="flex transition-colors hover:border-zinc-400 px-10 select-none cursor-pointer rounded-sm border p-6 gap-4"
    >
      <div className="w-16">
        <button className="flex items-center justify-center flex-col gap-3">
          <span>
            <ArrowUp />
          </span>
          <span className="text-xl font-YekanBakh-Heavy">24</span>
        </button>
      </div>
      <div className="space-y-3 child:w-full w-full">
        <h3 className="text-xl font-YekanBakh-Bold">{question.title}</h3>
        <div
          className="font-YekanBakh-Medium text-zinc-500 line-clamp-2"
          dangerouslySetInnerHTML={{ __html: question.description }}
        ></div>
        <div className="text-xs child:px-3 child:rounded-3xl child:font-YekanBakh-Bold child:bg-zinc-200 gap-1 flex child:pt-0.5 flex-wrap">
          {question.tags.map((tag) => (
            <Link key={tag} href={`/explore/tag/${tag}`}>
              {tag}
            </Link>
          ))}
        </div>
        <div className="text-sm text-zinc-500 flex gap-5 font-YekanBakh-Bold child:flex child:items-center child:gap-2">
          <div>
            <MessageSquare className="size-3 mb-1" />
            <span>3 پاسخ</span>
          </div>
          <div>
            <Bookmark className="size-3 mb-1" />
            <span> 5 ذخیره شده</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export const Pricing = {
  Card: ({ children }) => (
    <article className="p-5 w-[380px] rounded-md border">{children}</article>
  ),
  Header: ({ plan, planCaption, price, expires }) => {
    return (
      <header>
        <div>
          <p className="text-lg font-YekanBakh-Bold">{plan}</p>
          <p className="font-YekanBakh-Regular text-zinc-500">{planCaption}</p>
        </div>
      </header>
    );
  },
};

export const UserAskedCard = ({ info, date }) => {
  return (
    <article className="!max-h-14 rounded-md flex items-center gap-4">
      <div className="max-h-max">
        <img src={info.avatar} alt={info.fullname} className="size-10" />
      </div>
      <div className="!space-y-0 !p-0 !m-0 child:!m-0 child:!p-0 child:max-h-max">
        <p className="text-lg font-YekanBakh-Bold">{info.fullname}</p>
        <span className="text-zinc-500 text-xs">{date}</span>
      </div>
    </article>
  );
};

export const ResponseCard = (data) => {
  console.log(data);
  return (
    <article className="border p-4 rounded-md prose-lg  font-YekanBakh-Medium text-zinc-700">
      <div className="flex items-center gap-3 text-sm">
        <img
          src={data.user.avatar}
          className="size-10 rounded-full"
          alt={data.user.fullname}
        />
        <div className="child:!my-0 child:!py-0">
          <p className="!space-y-0 child:!my-0 child:!py-0 ">
            <span className="font-bold text-base">{data.user.fullname}</span>
            <span className="text-xs font-black px-2 py-1 rounded-md bg-teal-600/10 text-teal-600 mr-2">
              {data.user.role}
            </span>
          </p>
          <p className="text-zinc-500 font-YekanBakh-Medium text-xs !mt-1">
            ایجاد شده در: {String(data?.createdAt).slice(0, 10)}
          </p>
        </div>
      </div>
      <div className="w-[93%] mr-auto !mt-0">
        <div
          dangerouslySetInnerHTML={{
            __html: data.content,
          }}
          className="data"
        ></div>
      </div>
    </article>
  );
};

export const LangCard = ({ gradientFrom, gradientTo, icon, ...data }) => {
  return (
    <article className="w-full rounded-lg overflow-hidden">
      <header
        className={`bg-gradient-to-br ${gradientFrom} ${gradientTo}`}
      ></header>
      <main></main>
      <footer></footer>
    </article>
  );
};
