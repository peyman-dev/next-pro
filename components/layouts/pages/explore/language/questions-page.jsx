"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { memo } from "react";
import GroupBy from "@/components/_ui/group-by";
import Filter from "@/components/_ui/filter";
import { Sidebar, SidebarItem } from "@/components/_ui/sidebar";
import { QuestionCard } from "@/components/_ui/cards";
import { followLanguage, unfollowLanguage } from "@/app/actions";
import { ArrayLengthProvider } from "@/components/_ui/empty-lists";
import { toast } from "react-toastify";
import useUserStore from "@/utils/stores/user-store";
import classNames from "classnames";
import { UserRoundMinus, UserRoundPlus } from "lucide-react";

const groups = [
  {
    id: crypto.randomUUID(),
    title: "همه",
    type: "ALL",
  },
  {
    id: crypto.randomUUID(),
    title: "درحال ترند",
    type: "TRENDING",
  },
  {
    id: crypto.randomUUID(),
    title: "جدیدترین ها",
    type: "NEWEST",
  },
];

const NotFound = ({ URL }) => (
  <button
    onClick={() => redirect(`/explore/languages/${URL}/ask`)}
    className="text-white font-YekanBakh-Heavy bg-blue-500 hover:bg-opacity-90 px-5 h-10 rounded-md duration-150 focus-within:ring-4"
  >
    ایجاد پرسش
  </button>
);

const Button = ({ isFollowed, fn }) => {
  const styles = classNames(
    "w-full h-10 rounded-md duration-150 flex items-center justify-center gap-2 text-sm font-YekanBakh-Bold text-white hover:bg-opacity-90 focus-within:ring-4",
    {
      "bg-red-600 ring-red-500/40": isFollowed,
      "bg-blue-500 ring-blue-500/40": !isFollowed,
    }
  );

  const action = () => {
    isFollowed ? fn.unfollow() : fn.follow();
  };

  return (
    <button onClick={action} className={styles}>
      {isFollowed ? (
        <>
          <UserRoundMinus className="size-5 mb-1" />
          <span>لغو دنبال کردن</span>
        </>
      ) : (
        <>
          <UserRoundPlus className="size-4 mb-1" />
          <span>دنبال کردن</span>
        </>
      )}
    </button>
  );
};

const AskButton = memo(({ URL }) => {
  return (
    <Link
      className="max-w-max px-5 h-10 flex-center focus-within:ring-4 ring-zinc-900/50 rounded-md bg-zinc-950 text-white font-YekanBakh-Bold"
      href={`/explore/languages/${URL}/ask`}
    >
      ایجاد پرسش
    </Link>
  );
});

const QuestionsPage = memo(({ lang, followedByUser }) => {
  const store = useUserStore();
  const user = store.getUser();

  const [groupBy, setGroupBy] = React.useState(groups[0]);

  const followAction = async () => {
    const res = await followLanguage(lang.shortName);
    if (!res.success) return toast.error(res.message);

    window.location.reload();
  };

  const unfollowAction = async () => {
    const res = await unfollowLanguage(lang._id);

    if (!res.success)
      return toast.error(res.message, {
        autoClose: 1100,
      });

    window.location.reload();
  };

  const actions = {
    follow: followAction,
    unfollow: unfollowAction,
  };

  if (lang) {
    const authors = lang.questions.map((quest) => quest.author);

    return (
      <main className="flex container my-10 mx-auto  gap-10">
        <section className="w-full p-0 m-0">
          <div className="w-full flex justify-between">
            <GroupBy
              options={groups}
              activeGroup={groupBy}
              setActiveGroup={setGroupBy}
            />
            <AskButton URL={lang.shortName} />
          </div>
          <section className="mt-10 space-y-4">
            <ArrayLengthProvider
              NotFoundRedirector={<NotFound URL={lang.shortName} />}
              items={lang.questions}
            >
              {lang.questions.map((quest, id) => (
                <QuestionCard question={quest} key={id} />
              ))}
            </ArrayLengthProvider>
          </section>
        </section>
        <Sidebar>
          <SidebarItem>
            <p className="font-YekanBakh-Bold">تگ های محبوب</p>
            <div className="mt-4 flex-wrap text-xs font-YekanBakh-Medium child:px-2 child:py-0.5 child:rounded-2xl child:bg-zinc-100 child:text-zinc-700 flex items-center gap-2">
              <Link href="/tags">HTML</Link>
              <Link href="/tags">CSS</Link>
              <Link href="/tags">JavaScript</Link>
              <Link href="/tags">React</Link>
              <Link href="/tags">Vue</Link>
              <Link href="/tags">Angular</Link>
              <Link href="/tags">Node.js</Link>
            </div>
          </SidebarItem>
          <SidebarItem>
            <p className="font-YekanBakh-Bold">مشارکت کنندگان</p>
            <div className="mt-2">
              {authors.map((author, id) => (
                <div
                  key={id}
                  className="h-10 rounded-md border flex items-center gap-2 px-5"
                >
                  <p>{author.fullname}</p>
                </div>
              ))}
            </div>
          </SidebarItem>
          <SidebarItem>
            <p className="font-YekanBakh-Bold mb-2">دنبال کردن دسته بندی</p>

            <Button isFollowed={followedByUser} fn={actions} />
          </SidebarItem>
        </Sidebar>
      </main>
    );
  } else {
    return <div></div>;
  }
});

export default QuestionsPage;
