import ThemeInit from "@/components/ui/Themes/ThemeInit";
import "@/public/css/globals.css";
import AuthProvider from "@/utils/providers/AuthProvider";
import InitProvider from "@/utils/providers/InitProvider";
import ToastProvider from "@/utils/providers/ToastProvider";
import { Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "نکست‌پرو - کامیونیتی برنامه نویسان ",
  icons: {
    icon: '/images/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className="max-w-[848px] mx-auto">
        <Suspense fallback={<div className="w-full h-screen bg-black/50 backdrop-blur-sm flex items-center justify-center text-4xl font-black text-white right-0 top-0  fixed">
          درحال بارگذاری ...</div>}>
          <AuthProvider>
            <ThemeInit />
            <ToastProvider>
              <InitProvider>
                {children}
              </InitProvider>
            </ToastProvider>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}