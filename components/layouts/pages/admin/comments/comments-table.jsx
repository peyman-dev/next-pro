"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/_ui/table";
import React, { useEffect, useState } from "react";
import CommentRow from "./comment-row";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProvider,
} from "@/components/_ui/modal/modal";
import useModal from "@/utils/hooks/useModal";
import { removeComment } from "@/app/actions";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/_ui/ckeditor"), {
  ssr: false,
});

const CommentsTable = ({ comments }) => {
  const { isOpen, toggleModal, modalContent, setModalContent } = useModal();
  const [target, setTarget] = useState("");
  const [editor, setEditor] = useState("");

  const removeFn = async (target) => {
    setModalContent("REMOVE");
    setTarget(target);
    toggleModal();
  };

  const confirmRemove = async () => {
    const res = await removeComment(target._id);
    if (!res.ok) {
      return toast.error(res.message, {
        autoClose: 1250,
        onClose: () => {
          toggleModal();
        },
      });
    } else {
      window.location.reload();
    }
  };

  const editFn = (target) => {
    setModalContent("EDIT");
    setTarget(target);
    setEditor(target.content);
    toggleModal();
  };

  const infoFn = (data) => {
    setModalContent("INFO");
    toggleModal();
    setTarget(data);
    setEditor(data.content);
  };

  return (
    <>
      <section className="my-20 w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-start">کامنت</TableHead>
              <TableHead className="text-start">وضعیت</TableHead>
              <TableHead className="text-start">توسط</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comments.map((comment, index) => (
              <CommentRow
                fn={{ remove: removeFn, edit: editFn, info: infoFn }}
                data={comment}
                key={index}
              />
            ))}
          </TableBody>
        </Table>
      </section>
      <ModalProvider
        state={{
          isOpen,
          toggleModal,
        }}
      >
        {modalContent == "REMOVE" ? (
          <Modal>
            <ModalHeader title={"حذف کامنت"} />
            <ModalContent>
              <div className="flex-center">آیا از حذف کامنت اطمینان دارید؟</div>
            </ModalContent>
            <ModalFooter>
              <button
                onClick={confirmRemove}
                className="bg-sky-600 focus-within:ring-4"
              >
                تائید
              </button>
            </ModalFooter>
          </Modal>
        ) : modalContent == "EDIT" ? (
          <Modal>
            <ModalHeader title={"ویرایش کامنت"} />
            <ModalContent>
              <Editor
                key={target?._id || "default-key"}
                setValue={setEditor}
                value={editor} // استفاده از مقدار مدیریت‌شده
              />
            </ModalContent>
          </Modal>
        ) : (
          <Modal className={"w-[748px]"}>
            <ModalHeader title={"اطلاعات کامنت"} />
            <ModalContent className={"px-2 !py-10 "}>
              <div
                dir="ltr"
                className="flex py-3 rounded-md hover:bg-zinc-900/50 cursor-pointer select-none px-4 items-center gap-3"
              >
                <img
                  src={target?.user?.avatar}
                  alt={target?.user?.username}
                  className="size-12 rounded-full"
                />
                <div>
                  <p className="font-YekanBakh-Bold">
                    {target?.user?.fullname}
                  </p>
                  <p
                    dir="ltr"
                    className="text-sm font-YekanBakh-Medium text-zinc-500"
                  >
                    @{target?.user?.username}
                  </p>
                </div>
              </div>
              <section>
                <p className="text-sm text-zinc-300">محتوای کامنت:</p>

                <div
                  className="mx-auto prose prose-sm bg-zinc-900/70 rounded-lg border border-zinc-800 p-4 !text-white child:!text-white prose-strong:text-sky-500 prose-pre:![direction:_ltr] child:text-wrap w-full text-wrap prose-code:[direction:_ltr] sm:prose-base lg+:prose-base xl:prose-lg mt-2 2xl:prose-2xl dark:prose-invert prose-a:text-blue-400"
                  dangerouslySetInnerHTML={{ __html: target?.content }}
                ></div>
              </section>
              <div className="mt-5 pt-5">
                <p className="text-sm text-zinc-300">وضعیت نمایش:</p>
              </div>
            </ModalContent>
          </Modal>
        )}
      </ModalProvider>
    </>
  );
};

export default CommentsTable;
