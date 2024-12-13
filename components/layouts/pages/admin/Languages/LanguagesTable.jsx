"use client";
import Link from "next/link";
import Director from "@/components/ui/link";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/_ui/table";

const LanguagesTable = ({ langs }) => {
  return (
    <>
      <Table>
        <TableCaption>لیست زبان های وبسایت</TableCaption>
        <TableHeader>
          <TableRow className="child:text-start">
            <TableHead>عنوان</TableHead>
            <TableHead>عنوان URL</TableHead>
            <TableHead>پرسش ها</TableHead>
            <TableHead>دنبال کنندگان</TableHead>
            <TableHead>وضعیت انتشار</TableHead>
            <TableHead className={"w-[240px]"}></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {langs.map((lang) => (
            <TableRow key={lang._id}>
              {console.log(lang)}
              <TableCell>
                <div className="flex justify-center items-center gap-2">
                  <span>
                    <img
                      src={lang.image}
                      className="size-8 rounded-full"
                      alt=""
                    />
                  </span>
                  <span>{lang.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <Link href={`/explore/languages/${lang.shortName}`}>
                  {lang.shortName}
                </Link>
              </TableCell>
              <TableCell>{lang.questions.length}</TableCell>
              <TableCell>{lang.followers.length}</TableCell>
              <TableCell className="select-none">
                {lang.isVisible ? (
                  <span className="text-sm px-3 py-1 rounded-md bg-emerald-600/10 text-emerald-600">
                    عمومی
                  </span>
                ) : (
                  <span className="text-sm px-3 py-1 rounded-md bg-red-600/10 text-red-600">
                    خصوصی
                  </span>
                )}
              </TableCell>
              <TableCell>
                <div className="flex child:px-4  text-sm child:py-1.5 child:rounded-md child:duration-150 gap-2 items-center justify-center w-[240px]">
                  <button className="focus-within:ring-4 !bg-indigo-700 !pt-2 ring-indigo-700/50">
                    پرسش ها
                  </button>
                  <Director href={`/admin/languages/${lang._id}`}>
                    ویرایش
                  </Director>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default LanguagesTable;
