import Support from "@/components/layouts/local/Support/Support";
import "./globals.css";
import Authentication from "@/utils/providers/Authentication";
import InitProvider from "@/utils/providers/InitProvider";
import ToastProvider from "@/utils/providers/ToastProvider";
import { Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import Loading from "@/components/_ui/loading";

export const metadata = {
  title: "نکست‌پرو - کامیونیتی برنامه نویسان ",
  icons: {
    icon: '/images/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl" suppressHydrationWarning>
      <body className=" mx-auto w-[90%] sm:w-full">
        <Suspense fallback={<Loading />}>
          <ToastProvider>
            <InitProvider>
              <Authentication>
                {children}
                <Support />
              </Authentication>
            </InitProvider>
          </ToastProvider>
        </Suspense>
      </body>
    </html>
  );
}