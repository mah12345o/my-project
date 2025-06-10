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
  BsEmojiHeartEyes,
} from "react-icons/bs";
import Heading from "./common/image/Heading";
import { InputLabel } from "./common/image/InputLabel";
import { Comment } from "@/Interface";

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
    <div
      style={{
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            marginRight: "6px",
            marginBottom: "2px",
            height: "10px",
            width: "4px",
            backgroundColor: "#000000",
            borderRadius: "102px",
          }}
        />
        <Heading title="Comments" />
      </div>
      {isPending && (
        <p
          style={{
            fontSize: "0.875rem",
            color: "#3B82F6",
            marginBottom: "1rem",
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        >
          Updating comments...
        </p>
      )}

      {comments?.map((el) => (
        <div
          key={el?.id}
          style={{
            borderBottom: "1px solid #DEDEDE",
            width: "100%",
            paddingBottom: "1.5rem",
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "1rem",
            }}
          >
            <div
              style={{
                minHeight: "3.5rem",
                minWidth: "3.5rem",
                position: "relative",
              }}
            >
              <Image
                src="/icon/icon2.png"
                alt={el?.name}
                fill
                style={{
                  borderRadius: "9999px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ width: "100%" }}>
              {/* <div className="flex sm:justify-between sm:flex-row flex-col"> */}
              <div
                className="user-date-column"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <p style={{ fontWeight: 500 }}>{el?.name}</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      color: "#FFBB00",
                      fontSize: "0.875rem",
                    }}
                  >
                    {Array?.from({ length: 5 })?.map((_, i) => (
                      <FaStar
                        key={i}
                        style={{
                          color: i < el?.rating ? "#FFBB00" : "#D1D5DB", // yellow (#FFBB00) or gray (#D1D5DB)
                        }}
                      />
                    ))}
                    <span style={{ color: "#374151", marginLeft: "0.25rem" }}>
                      ({el?.rating.toFixed(1)})
                    </span>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#757575",
                  }}
                >
                  {el?.date}
                </p>
              </div>
              <p
                style={{
                  color: "#4B5563",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                }}
              >
                {el?.comment}
              </p>
            </div>
          </div>
          {/* <div className="flex flex-col items-end gap-1 text-right"></div> */}
        </div>
      ))}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            marginRight: "6px",
            marginBottom: "2px",
            height: "10px",
            width: "4px",
            backgroundColor: "#000000",
            borderRadius: "102px",
          }}
        />
        <Heading title="Add A Comment" />
      </div>

      <form onSubmit={handleAddComment}>
        {/* <div className="grid grid-1 sm:grid-cols-2 gap-4"></div> */}
        <div className="comment-inputs">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <div>
              <InputLabel title="Name" />
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{
                  width: "100%",
                  border: "none",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  borderRadius: "0.375rem",
                  backgroundColor: "#F9FAFB",
                }}
                required
              />
            </div>
            <div>
              <InputLabel title="Email" />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{
                  width: "100%",
                  border: "none",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  borderRadius: "0.375rem",
                  backgroundColor: "#F9FAFB",
                }}
              />
            </div>
          </div>
          <div className="comment-textarea-stye">
            <InputLabel title="Comment" />
            <textarea
              placeholder="Search Anything..."
              value={form.comment}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
              style={{
                width: "100%",
                height: "78%",
                border: "none",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                borderRadius: "0.375rem",
                backgroundColor: "#F9FAFB",
              }}
              required
            />
          </div>
        </div>

        {/* Emoji Rating */}
        <div className="rating-btn-submit-btn-grp">
          <div className="rating-btns">
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
            >
              Rate The Usefulness Of The Article
            </p>
            <div
              style={{
                display: "flex",
                fontSize: "0.875rem",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <button
                type="button"
                className={emojiRating === 1 ? "active-btn" : "inactive-btn"}
                onClick={() => setEmojiRating(1)}
              >
                <BsEmojiFrown />
                {emojiRating == 1 ? " Very bad" : ""}
              </button>
              <button
                type="button"
                className={
                  emojiRating === 2 ? "active-btn-2" : "inactive-btn-2"
                }
                onClick={() => setEmojiRating(2)}
              >
                <BsEmojiNeutral />
                {emojiRating == 2 ? "Bad" : ""}
              </button>
              <button
                type="button"
                className={
                  emojiRating === 3 ? "active-btn-3" : "inactive-btn-3"
                }
                onClick={() => setEmojiRating(3)}
              >
                <BsEmojiSmile />
                {emojiRating == 3 ? "Average" : ""}
              </button>
              <button
                type="button"
                className={
                  emojiRating === 4 ? "active-btn-4" : "inactive-btn-4"
                }
                onClick={() => setEmojiRating(4)}
              >
                <BsEmojiHeartEyes />
                {emojiRating == 4 ? "Nice" : ""}
              </button>
              <button
                type="button"
                className={
                  emojiRating === 5 ? "active-btn-5" : "inactive-btn-5"
                }
                onClick={() => setEmojiRating(5)}
              >
                <BsEmojiLaughing />
                {emojiRating == 5 ? "Good" : ""}
              </button>
            </div>
          </div>

          <button type="submit" disabled={isPending} className="submit-btn">
            <BsChatDots /> Send
          </button>
        </div>
      </form>
    </div>
  );
}
