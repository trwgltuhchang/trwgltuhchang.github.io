import { Calendar, Users, Star, FolderGit2, Trophy } from "lucide-react";
import { MONO_FONT, TEXT_PRIMARY, TEXT_MUTED } from "@/constants/theme";
import type { CategoryColors, ProjectWithCategory } from "./portfolioConstants";

interface ProjectCardHeaderProps {
   data: ProjectWithCategory;
   colors: CategoryColors;
   isFeatured: boolean;
   isCollab: boolean;
}

const ProjectCardHeader = ({
   data,
   colors,
   isFeatured,
   isCollab,
}: ProjectCardHeaderProps) => (
   <>
      {/* Header: icon + title */}
      <div
         style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
            marginBottom: 12,
         }}
      >
         <div
            style={{
               width: 36,
               height: 36,
               borderRadius: 10,
               background: `${colors.bgAlpha}0.1)`,
               border: `1px solid ${colors.borderAlpha}0.2)`,
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               flexShrink: 0,
               marginTop: 2,
            }}
         >
            {isFeatured ? (
               <Star size={18} style={{ color: colors.accent }} />
            ) : (
               <FolderGit2 size={18} style={{ color: colors.accent }} />
            )}
         </div>
         <div style={{ minWidth: 0, flex: 1 }}>
            <h3
               style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: TEXT_PRIMARY,
                  lineHeight: 1.3,
               }}
            >
               {data.title}
            </h3>
            <div
               style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 6,
                  flexWrap: "wrap",
               }}
            >
               <span
                  style={{
                     display: "inline-flex",
                     alignItems: "center",
                     gap: 4,
                     fontSize: 11,
                     color: TEXT_MUTED,
                     fontFamily: MONO_FONT,
                  }}
               >
                  <Calendar size={10} style={{ flexShrink: 0 }} />
                  {data.date}
               </span>
               {(isCollab || (isFeatured && data.team)) && data.team && (
                  <span
                     style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: 11,
                        color: colors.accent,
                        fontFamily: MONO_FONT,
                     }}
                  >
                     <Users size={10} style={{ flexShrink: 0 }} />
                     {data.team}
                  </span>
               )}
            </div>
         </div>
      </div>

      {/* Featured badge */}
      {isFeatured && (
         <div
            style={{
               display: "inline-flex",
               alignItems: "center",
               gap: 4,
               padding: "3px 10px",
               borderRadius: 6,
               background: `${colors.bgAlpha}0.08)`,
               border: `1px solid ${colors.borderAlpha}0.15)`,
               fontSize: 10,
               fontWeight: 700,
               color: colors.accent,
               letterSpacing: "0.05em",
               textTransform: "uppercase",
               marginBottom: 12,
               alignSelf: "flex-start",
            }}
         >
            <Star size={10} />
            Featured
         </div>
      )}

      {/* Achievement badge */}
      {data.achievement && (
         <div
            style={{
               display: "inline-flex",
               alignItems: "center",
               gap: 6,
               padding: "6px 12px",
               borderRadius: 999,
               background:
                  "linear-gradient(135deg, rgba(255,214,10,0.28), rgba(255,184,0,0.18))",
               border: "1px solid rgba(255,214,10,0.6)",
               boxShadow:
                  "0 0 0 1px rgba(255,230,120,0.15) inset, 0 8px 24px rgba(255,196,0,0.18), 0 0 20px rgba(255,214,10,0.12)",
               fontSize: 11,
               fontWeight: 700,
               color: "#fff1a6",
               letterSpacing: "0.03em",
               textTransform: "uppercase",
               marginBottom: 12,
               alignSelf: "flex-start",
            }}
            aria-label={data.achievement}
         >
            <Trophy size={12} style={{ color: "#ffd60a", flexShrink: 0 }} />
            {data.achievement}
         </div>
      )}
   </>
);

export default ProjectCardHeader;
