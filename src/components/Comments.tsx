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
  BsTrash,
} from "react-icons/bs";

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
      avatar: "/images/haerin.jpg",
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
      avatar: "/images/haerin.jpg",
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

  const handleDelete = (id: number) => {
    startTransition(() => {
      setComments((prev) => prev.filter((c) => c.id !== id));
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-6">💬 Comments</h2>

      {isPending && (
        <p className="text-sm text-blue-500 mb-4 animate-pulse">
          Updating comments...
        </p>
      )}

      {comments.map((c) => (
        <div
          key={c.id}
          className="border-b pb-4 mb-4 flex justify-between items-start"
        >
          <div className="flex items-start gap-4">
            <Image
              src={c.avatar}
              alt={c.name}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-medium">{c.name}</p>
              <div className="flex items-center gap-1 text-yellow-500 text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < c.rating ? "text-yellow-500" : "text-gray-300"
                    }
                  />
                ))}
                <span className="text-gray-700 ml-1">
                  ({c.rating.toFixed(1)})
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{c.comment}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 text-right">
            <p className="text-sm text-gray-400">{c.date}</p>
            <button
              onClick={() => handleDelete(c.id)}
              className="text-red-500 text-sm"
              title="Delete"
            >
              <BsTrash />
            </button>
          </div>
        </div>
      ))}

      <h2 className="text-xl font-semibold mt-10 mb-4">📝 Add A Comment</h2>
      <form onSubmit={handleAddComment} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border px-4 py-2 rounded-md bg-gray-50"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border px-4 py-2 rounded-md bg-gray-50"
          />
        </div>

        <textarea
          placeholder="Search Anything..."
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
          rows={4}
          className="w-full border px-4 py-2 rounded-md bg-gray-50"
          required
        ></textarea>

        {/* Emoji Rating */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="font-medium">Rate The Usefulness Of The Article</p>
          <div className="flex items-center gap-4 text-xl">
            <button type="button" onClick={() => setEmojiRating(1)}>
              <BsEmojiFrown
                className={emojiRating === 1 ? "text-red-500" : ""}
              />
            </button>
            <button type="button" onClick={() => setEmojiRating(2)}>
              <BsEmojiNeutral
                className={emojiRating === 2 ? "text-yellow-500" : ""}
              />
            </button>
            <button type="button" onClick={() => setEmojiRating(3)}>
              <BsEmojiSmile
                className={emojiRating === 3 ? "text-blue-500" : ""}
              />
            </button>
            <button type="button" onClick={() => setEmojiRating(4)}>
              <BsEmojiLaughing
                className={emojiRating === 4 ? "text-green-500" : ""}
              />
            </button>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="submit"
            disabled={isPending}
            className="bg-black text-white px-6 py-2 rounded-md flex items-center gap-2"
          >
            <BsChatDots /> Send
          </button>
        </div>
      </form>
    </div>
  );
}
