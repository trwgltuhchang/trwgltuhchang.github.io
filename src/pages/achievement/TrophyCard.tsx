import { motion } from "motion/react";
import { Trophy } from "lucide-react";
import type { Achievement } from "@/types";
import {
   MONO_FONT,
   CYAN,
   TEXT_PRIMARY,
   TEXT_SECONDARY,
   TEXT_MUTED,
} from "@/constants/theme";

interface TrophyCardProps {
   item: Achievement;
   index: number;
}

const PLACEMENT_COLORS: Record<string, string> = {
   "1st": "#fbbf24",
   "2nd": "#94a3b8",
   "3rd": "#d97706",
   "4th": TEXT_MUTED,
};

const getOrdinal = (value: string): string => {
   const number = Number(value);
   const lastTwoDigits = number % 100;

   if (lastTwoDigits >= 11 && lastTwoDigits <= 13) return `${number}th`;

   const suffix =
      ({ 1: "st", 2: "nd", 3: "rd" } as Record<number, string>)[number % 10] ??
      "th";

   return `${number}${suffix}`;
};

const splitTitle = (title: string): [string, string] => {
   const idx = title.indexOf(" - ");
   return idx >= 0 ? [title.slice(0, idx), title.slice(idx + 3)] : [title, ""];
};

const parsePlacement = (
   title: string,
): { rank: string; event: string; color: string } => {
   const [prefix, event] = splitTitle(title);

   if (prefix.startsWith("Rank ")) {
      return { rank: prefix, event, color: CYAN };
   }

   const numMatch = /^(\d+)/.exec(prefix);
   if (numMatch && prefix.includes("Place")) {
      const ordinal = getOrdinal(numMatch[1]);
      const color = PLACEMENT_COLORS[ordinal] ?? TEXT_MUTED;
      return { rank: ordinal, event, color };
   }

   return { rank: "", event: title, color: TEXT_MUTED };
};

const EXPO_EASE = [0.16, 1, 0.3, 1] as const;

const TrophyCard = ({ item, index }: TrophyCardProps) => {
   const { rank, event, color } = parsePlacement(item.title);

   return (
      <motion.a
         className="glass-card"
         href={item.url}
         target={item.url ? "_blank" : undefined}
         rel={item.url ? "noreferrer" : undefined}
         aria-label={item.url ? `View ${item.title}` : undefined}
         initial={{ opacity: 0, y: 25, scale: 0.97 }}
         whileInView={{ opacity: 1, y: 0, scale: 1 }}
         viewport={{ once: false, margin: "0px 0px -40px 0px" }}
         transition={{
            delay: index * 0.08,
            duration: 0.5,
            ease: EXPO_EASE,
         }}
         whileHover={{
            y: -4,
            boxShadow: `0 8px 30px ${color}25`,
            transition: { duration: 0.2 },
         }}
         style={{
            padding: "20px 22px",
            display: "flex",
            alignItems: "center",
            gap: 16,
            borderLeft: `3px solid ${color}`,
            cursor: item.url ? "pointer" : "default",
            textDecoration: "none",
         }}
      >
         {/* Rank / Placement */}
         <div
            style={{
               minWidth: 52,
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               flexShrink: 0,
            }}
         >
            {rank ? (
               <span
                  style={{
                     fontSize: rank.startsWith("Rank") ? 14 : 28,
                     fontWeight: 800,
                     fontFamily: MONO_FONT,
                     color,
                     lineHeight: 1,
                  }}
               >
                  {rank}
               </span>
            ) : (
               <Trophy size={24} style={{ color }} />
            )}
         </div>

         {/* Event details */}
         <div style={{ flex: 1, minWidth: 0 }}>
            <h4
               style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: TEXT_PRIMARY,
                  lineHeight: 1.4,
                  marginBottom: 4,
               }}
            >
               {event}
            </h4>
            <div
               style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexWrap: "wrap",
               }}
            >
               {item.organizer && (
                  <span
                     style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: TEXT_SECONDARY,
                     }}
                  >
                     {item.organizer}
                  </span>
               )}
               {item.date && (
                  <span
                     style={{
                        fontSize: 11,
                        fontFamily: MONO_FONT,
                        color: TEXT_MUTED,
                     }}
                  >
                     {item.date}
                  </span>
               )}
            </div>
         </div>

         {/* Type tag */}
         {item.type && (
            <span
               style={{
                  fontSize: 10,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color,
                  padding: "3px 8px",
                  borderRadius: 4,
                  border: `1px solid ${color}25`,
                  background: `${color}08`,
                  flexShrink: 0,
               }}
            >
               {item.type}
            </span>
         )}
      </motion.a>
   );
};

export default TrophyCard;
