import { Suspense } from "react";

export const ArrayLengthProvider = ({
  children,
  items,
  NotFoundRedirector,
}) => {
  if (items.length) {
    return <Suspense fallback={<div> Loading ...</div>}>{children}</Suspense>;
  } else {
    return (
      <div className="w-full h-[80vh] flex items-center justify-center flex-col gap-4">
        <img src="/images/empty.png" alt="" />
        <div>
          <h3 className="text-2xl font-YekanBakh-Bold">
            متاسفانه چیزی برای نمایش وجود ندارد :(
          </h3>
        </div>
        {NotFoundRedirector}
      </div>
    );
  }
};
