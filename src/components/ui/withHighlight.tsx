import { ReactNode } from "react";
import { Highlight } from "./Highlight";

/** Splits a plain-text title so the given phrase (or the last words) gets highlighted. */
export function withHighlight(title: ReactNode, highlight?: string | false): ReactNode {
  if (typeof title !== "string" || highlight === false) return title;

  let phrase = highlight && title.includes(highlight) ? highlight : undefined;
  if (!phrase) {
    const words = title.trim().split(/\s+/);
    if (words.length < 2) return title;
    phrase = words.slice(words.length > 4 ? -2 : -1).join(" ");
  }

  const index = title.lastIndexOf(phrase);
  if (index === -1) return title;

  return (
    <>
      {title.slice(0, index)}
      <Highlight>{phrase}</Highlight>
      {title.slice(index + phrase.length)}
    </>
  );
}
