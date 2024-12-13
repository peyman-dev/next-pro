"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/_ui/table";

import { Edit, Trash } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import {
  ModalProvider,
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from "@/components/_ui/modal/modal";
import useModal from "@/utils/hooks/useModal";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const QuestionsRow = ({ questions, removeAction }) => {
  const { isOpen, toggleModal } = useModal();
  const [target, setTarget] = useState({});
  const [modalType, setModalType] = useState(null);
  const router = useRouter();
  const selectToRemove = (target) => () => {
    setModalType("REMOVE_QUESTION");
    setTarget(target);
    console.log(target);
    toggleModal();
  };

  const removeQuestion = async () => {
    toggleModal();
    try {
      const res = await removeAction(target._id);

      if (!res.ok) return toast.error(res.message);

      toast.success(res.message, {
        onClose: () => router.refresh(),
        autoClose: 1500,
      });
    } catch (error) {}
  };

  return (
    <>
      <Table
        style={{ direction: "rtl" }}
        className="p-4 [direction:_rtl] overflow-hidden mt-10 bg-white/10 rounded-md"
      >
        <TableHeader>
          <TableRow>
            <TableHead className="text-start px-4 w-[350px]">عنوان</TableHead>
            <TableHead className="text-start px-4">توسط</TableHead>
            <TableHead className="text-start px-4">انعام</TableHead>
            <TableHead className="text-start px-4">تاریخ ثبت</TableHead>
            <TableHead className="text-start px-4 w-[240px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {questions.map((quest) => (
            <TableRow key={quest._id}>
              <TableCell>
                <p className="w-[350px] line-clamp-1">{quest.title}</p>
              </TableCell>
              <TableCell>
                <Link
                  dir="ltr"
                  className="text-zinc-300"
                  href={`/profile/${quest.author?.username}`}
                >
                  @{quest.author?.username}
                </Link>
              </TableCell>
              <TableCell>
                <div>
                  {quest.bounty > 10000 ? (
                    <span></span>
                  ) : (
                    <span className="px-3 bg-red-600/10 text-red-500 border border-red-500/10 rounded-md">
                      ندارد
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell>{String(quest.createdAt).slice(0, 10)}</TableCell>
              <TableCell>
                <div className="flex child:flex child:px-3 child:h-10 child:duration-150 child-hover:bg-opacity-90 child:py-1.5 child:rounded-sm child:border child:items-center text-xs font-YekanBakh-Bold child:gap-1.5 items-center gap-1">
                  <button
                    onClick={selectToRemove(quest)}
                    className="bg-red-600 border-red-500"
                  >
                    <Trash className="size-4 mb-1" />
                    حذف
                  </button>
                  <Link
                    className="bg-indigo-600 !pb-2 border-indigo-500"
                    href={``}
                  >
                    <Edit className="size-4" />
                    بررسی
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableCaption>
          {questions.length} پرسش برای این زبان ثبت شده است
        </TableCaption>
      </Table>

      <ModalProvider
        state={{
          isOpen,
          toggleModal,
        }}
      >
        <Modal>
          {modalType == "REMOVE_QUESTION" && (
            <>
              <ModalHeader title={"حذف پرسش"} />
              <ModalContent>
                <div className="flex-center">
                  <p className="text-sm">
                    آیا از حذف پرسش
                    <span className="inline-block duration-150 hover:bg-teal-600/20 cursor-pointer px-2 py-1 rounded bg-teal-600/10 text-teal-600 mx-1">
                      {target.title}
                    </span>
                    اطمینان دارید؟
                  </p>
                </div>
              </ModalContent>
              <ModalFooter>
                <button
                  onClick={removeQuestion}
                  className="bg-emerald-600 hover:bg-opacity-90 focus-within:ring-4 ring-teal-600/30"
                >
                  تائید
                </button>
              </ModalFooter>
            </>
          )}
        </Modal>
      </ModalProvider>
    </>
  );
};

export default QuestionsRow;
