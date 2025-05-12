import { Heart, LoaderCircle } from "lucide-react";
import * as React from "react";
import { Puppy } from "../types";
import { useState } from "react";

export function LikeToggle({ puppy }: { puppy: Puppy }) {
  const [pending, setPending] = useState(false);

  return (
    <button
      className="group"
      onClick={() => {
        setPending(true);

        /*        setTimeout(() => {
                  if (liked.includes(id)) {
                    setLiked(liked.filter((puppyId) => puppyId !== id));
                  } else {
                    setLiked([...liked, id]);
                  }
                  setPending(false);
                }, 1500);*/
      }}
    >
      {pending ? (
        <LoaderCircle className="animate-spin stroke-slate-300" />
      ) : (
        <Heart
          className={
            puppy.likedBy.includes(1)
              ? "fill-pink-500 stroke-none"
              : "stroke-slate-200 group-hover:stroke-slate-300"
          }
        />
      )}
    </button>
  );
}
