import { Heart } from "lucide-react";
import * as React from "react";
import { Puppy } from "../types";

export function LikeToggle({
  id,
  liked,
  setLiked,
}: {
  id: Puppy["id"];
  liked: Puppy["id"][];
  setLiked: React.Dispatch<React.SetStateAction<Puppy["id"][]>>;
}) {
  return (
    <button
      className="group"
      onClick={() => {
        if (liked.includes(id)) {
          setLiked(liked.filter((puppyId) => puppyId !== id));
        } else {
          setLiked([...liked, id]);
        }
      }}
    >
      <Heart
        className={
          liked.includes(id)
            ? "fill-pink-500 stroke-none"
            : "stroke-slate-200 group-hover:stroke-slate-300"
        }
      />
    </button>
  );
}
