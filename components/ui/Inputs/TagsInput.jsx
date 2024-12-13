"use client";
import useStyles from "@/utils/hooks/useStyles";
import React, { useEffect, useState } from "react";
import { MdError } from "react-icons/md";
import { toast } from "react-toastify";

const Tags = ({ tags, updateTags }) => {
  const removeTag = (e) => {
    console.log(tags);
    const targetTag = e.target.textContent;
    let updatedTags = tags.filter((tag) => tag !== targetTag);

    updateTags(updatedTags);
  };

  return (
    <div className="flex items-center gap-1 mt-2 justify-end">
      {tags?.map((element, key) => (
        <div
          tabIndex={1}
          className="text-xs focus-within:ring-2 dark:text-white ring-zinc-800/50 hover:bg-zinc-500/15 pt-1.5  px-2 py-1 rounded-3xl bg-zinc-500/10 text-zinc-800 font-YekanBakh-Medium cursor-pointer select-none"
          key={key}
          onClick={removeTag}
        >
          {element}
        </div>
      ))}
    </div>
  );
};

const Error = ({ show, message }) => {
  if (show) {
    return (
      <div className="flex my-2  rounded-md px-3 py-1.5 items-center gap-2 bg-red-600 text-red-100">
        <MdError />
        <span>{message}</span>
      </div>
    );
  }
};

const TagsInput = ({ tags, setTags, length }) => {
  const [inputVal, setInputVal] = useState("");
  const [lengthReached, setLengthReached] = useState(false);
  const { inputClasses } = useStyles();

  const handleChange = (event) => {
    const { code } = event;
    if (code == "Enter" && !lengthReached) {
      const isTagExistBefore = tags.some(
        (tag) => tag.toLowerCase() == inputVal.toLowerCase()
      );
      if (!isTagExistBefore) {
        setTags((prev) => [...prev, inputVal]);
        setLengthReached(false);
        return setInputVal("");
      } else {
        toast.error(` شما قبلا تگ ${inputVal} را وارد کرده اید !`);
        setInputVal("");
      }
    }
    if (lengthReached) {
      setInputVal("");
    }
  };

  useEffect(() => {
    let tagsLength = tags?.length;

    if (tagsLength == length) {
      setLengthReached(true);
      return;
    } else {
      setLengthReached(false);
    }
  }, [tags]);

  return (
    <>
      <input
        className={inputClasses + " [direction:_ltr]"}
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        onKeyUp={handleChange}
      />
      <Error
        show={lengthReached}
        message={`شما نمی‌توانید بیشتر از ${length} تگ وارد کنید!`}
      />
      <Tags tags={tags} updateTags={setTags} />
    </>
  );
};

export default React.memo(TagsInput);
