"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import {
  BsEmojiSmile,
  BsEmojiFrown,
  BsEmojiLaughing,
  BsEmojiNeutral,
  BsChatDots,
} from "react-icons/bs";
import Heading from "./common/image/Heading";
import { InputLabel } from "./common/image/InputLabel";

interface Comment {
  id: number;
  name: string;
  email: string;
  comment: string;
  rating: number;
  avatar: string;
  date: string;
}

export default function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      name: "Kang Haerin",
      email: "haerin@example.com",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      rating: 5,
      avatar: "/icon/icon1.png",
      date: "22 Jul 2022",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
    rating: 0,
  });

  const [emojiRating, setEmojiRating] = useState<number>(0);
  const [isPending, startTransition] = useTransition();

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.comment) return;

    const newComment: Comment = {
      id: Date.now(),
      ...form,
      rating: emojiRating || 4,
      avatar: "/icon/icon2.png",
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    startTransition(() => {
      setComments((prev) => [newComment, ...prev]);
      setForm({ name: "", email: "", comment: "", rating: 0 });
      setEmojiRating(0);
    });
  };

  // const handleDelete = (id: number) => {
  //   startTransition(() => {
  //     setComments((prev) => prev?.filter((c) => c?.id !== id));
  //   });
  // };

  return (
    <div className="w-full mx-auto px-4 py-12">
      <Heading title="Comments" />
      {isPending && (
        <p className="text-sm text-blue-500 mb-4 animate-pulse">
          Updating comments...
        </p>
      )}

      {comments?.map((el) => (
        <div
          key={el?.id}
          className="border-b border-[#DEDEDE] pb-6 mb-4 flex justify-between items-start"
        >
          <div className="flex items-start gap-4">
            <div className="size-14 relative">
              <Image
                src={el?.avatar || "/icon/icon2.png"}
                alt={el?.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium">{el.name}</p>
              <div className="flex items-center gap-1 text-[#FFBB00] text-sm">
                {Array?.from({ length: 5 })?.map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < el.rating ? "text-[#FFBB00]" : "text-gray-300"
                    }
                  />
                ))}
                <span className="text-gray-700 ml-1">
                  ({el?.rating.toFixed(1)})
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{el?.comment}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 text-right">
            <p className="text-sm font-semibold text-[#757575]">{el?.date}</p>
            {/* <button
              onClick={() => handleDelete(el?.id)}
              className="text-red-500 text-sm"
              title="Delete"
            >
              <BsTrash />
            </button> */}
          </div>
        </div>
      ))}

      <Heading title="Add A Comment" />
      <form onSubmit={handleAddComment} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-between gap-4">
            <div>
              <InputLabel title="Name" />
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full  border-nonepx-4 py-2 rounded-md bg-gray-50"
                required
              />
            </div>
            <div>
              <InputLabel title="Email" />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border-none px-4 py-2 rounded-md bg-gray-50"
              />
            </div>
          </div>
          <div>
            <InputLabel title="Comment" />
            <textarea
              placeholder="Search Anything..."
              value={form.comment}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
              className="w-full h-[78%]  border-none px-4 py-2 rounded-md bg-gray-50"
              required
            />
          </div>
        </div>

        {/* Emoji Rating */}
        <div className="flex items-center p-2 rounded bg-gray-50 justify-between flex-wrap gap-4">
          <p className="font-medium">Rate The Usefulness Of The Article</p>
          <div className="flex text-sm items-center gap-4">
            <button
              type="button"
              className={`${emojiRating === 1 ? "bg-[#FF0412] text-white gap-2 px-3 py-1 flex items-center rounded-2xl" : "text-[#FF0412]"}`}
              onClick={() => setEmojiRating(1)}
            >
              <BsEmojiFrown />
              {emojiRating == 1 ? " Very bad" : ""}
            </button>
            <button
              type="button"
              className={`${emojiRating === 2 ? "bg-[#FF6700] text-white gap-2 px-3 py-1 flex items-center rounded-2xl" : "text-[#FF6700]"}`}
              onClick={() => setEmojiRating(2)}
            >
              <BsEmojiNeutral />
              {emojiRating == 2 ? "Bad" : ""}
            </button>
            <button
              type="button"
              className={`${emojiRating === 3 ? "bg-[#FFB416] text-white gap-2 px-3 py-1 flex items-center rounded-2xl" : "text-[#FFB416]"}`}
              onClick={() => setEmojiRating(3)}
            >
              <BsEmojiSmile />
              {emojiRating == 3 ? "Average" : ""}
            </button>
            <button
              type="button"
              className={`${emojiRating === 4 ? "bg-[#00BA5C] text-white gap-2 px-3 py-1 flex items-center rounded-2xl" : "text-[#00BA5C]"}`}
              onClick={() => setEmojiRating(4)}
            >
              <BsEmojiLaughing />
              {emojiRating == 4 ? "Good" : ""}
            </button>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="submit"
            disabled={isPending}
            className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <BsChatDots /> Send
          </button>
        </div>
      </form>
    </div>
  );
}
