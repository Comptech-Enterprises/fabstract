"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/PageIntro";
import { GALLERY_FILES, gallerySrc } from "@/data/gallery";

interface PostData {
  id: number;
  file: string;
  location: string;
  initialLikes: number;
  caption: string;
  tags: string[];
  timeAgo: string;
  verified?: boolean;
}

const POSTS: PostData[] = [
  {
    id: 1,
    file: GALLERY_FILES[0],
    location: "Fabstract Studio, New Delhi",
    initialLikes: 248,
    caption:
      "Precision circular knitting in full rhythm. Crafting premium luxury cotton jersey with zero compromise on drape and feel.",
    tags: ["#fabstract", "#knits", "#sustainablefashion", "#textiles", "#madeinindia"],
    timeAgo: "2 HOURS AGO",
    verified: true,
  },
  {
    id: 2,
    file: GALLERY_FILES[1],
    location: "Sector 63, Noida Manufacturing Unit",
    initialLikes: 412,
    caption:
      "Empowered hands shaping global fashion. Over 60% of our skilled floor artisans are women leading daily production lines.",
    tags: ["#womeninapparel", "#ethicalmanufacturing", "#fairtrade", "#craftsmanship"],
    timeAgo: "5 HOURS AGO",
    verified: true,
  },
  {
    id: 3,
    file: GALLERY_FILES[2],
    location: "Quality Assurance & Sampling Lab",
    initialLikes: 189,
    caption:
      "Five-stage garment QA in progress. Real-time seam stress testing and shade consistency before export packing.",
    tags: ["#qualitycontrol", "#garmentmanufacturing", "#apparelquality", "#exportquality"],
    timeAgo: "1 DAY AGO",
    verified: true,
  },
  {
    id: 4,
    file: GALLERY_FILES[3],
    location: "Clean Energy Apparel Hub",
    initialLikes: 531,
    caption:
      "100% natural rooftop daylighting across our cutting floor. Reducing energy consumption while enhancing stitch precision.",
    tags: ["#greenfactory", "#sustainability", "#cleanenergy", "#ecofriendly"],
    timeAgo: "2 DAYS AGO",
    verified: true,
  },
  {
    id: 5,
    file: GALLERY_FILES[4],
    location: "Miyawaki Micro-Forest, NCR",
    initialLikes: 620,
    caption:
      "Our native urban micro-forest growing tall. Committed to ecological regeneration and giving back to our local community.",
    tags: ["#miyawaki", "#urbanforest", "#biodiversity", "#planetfirst"],
    timeAgo: "3 DAYS AGO",
    verified: true,
  },
  {
    id: 6,
    file: GALLERY_FILES[5],
    location: "Fabric Sourcing & Organic Weaves",
    initialLikes: 374,
    caption:
      "GOTS-certified organic cotton weaves freshly arrived from the dye house. Pure, hypoallergenic, and ethically sourced.",
    tags: ["#organiccotton", "#gotscertified", "#circularfashion", "#ecotextiles"],
    timeAgo: "4 DAYS AGO",
    verified: true,
  },
  {
    id: 7,
    file: GALLERY_FILES[6],
    location: "Specialized Assembly Line 03",
    initialLikes: 295,
    caption:
      "Master tailors assembling intricate woven summer silhouettes for our European brand partners.",
    tags: ["#wovenapparel", "#summerfashion", "#exportapparel", "#handcrafted"],
    timeAgo: "5 DAYS AGO",
    verified: true,
  },
  {
    id: 8,
    file: GALLERY_FILES[7],
    location: "Automated Spreading & CAD Cutting",
    initialLikes: 460,
    caption:
      "Automated CAD cutting tables in action, cutting fabric waste down to minimal margins.",
    tags: ["#smartfactory", "#cadcutting", "#zerowaste", "#modernapparel"],
    timeAgo: "6 DAYS AGO",
    verified: true,
  },
  {
    id: 9,
    file: GALLERY_FILES[8],
    location: "Finishing & Export Packaging",
    initialLikes: 512,
    caption:
      "Final inspection complete, barcodes attached, and ready for shipment to 45+ countries worldwide.",
    tags: ["#exportready", "#globalreach", "#apparelsupply", "#fashionlogistics"],
    timeAgo: "1 WEEK AGO",
    verified: true,
  },
];

function InstagramCard({ post }: { post: PostData }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.initialLikes);
  const [saved, setSaved] = useState(false);
  const [showHeartBurst, setShowHeartBurst] = useState(false);
  const [copied, setCopied] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  // Double tap to like
  const handleDoubleTap = () => {
    if (!liked) {
      setLiked(true);
      setLikesCount((c) => c + 1);
    }
    setShowHeartBurst(true);
    setTimeout(() => setShowHeartBurst(false), 900);
  };

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount((c) => c - 1);
    } else {
      setLiked(true);
      setLikesCount((c) => c + 1);
      setShowHeartBurst(true);
      setTimeout(() => setShowHeartBurst(false), 900);
    }
  };

  // Share homepage only
  const handleShare = async () => {
    const homeUrl = typeof window !== "undefined" ? window.location.origin : "https://fabstract.in";
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Fabstract Clothing India",
          text: "Discover Fabstract — ethical & high-fashion garment export manufacturing.",
          url: homeUrl,
        });
      } catch {
        navigator.clipboard.writeText(homeUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } else {
      navigator.clipboard.writeText(homeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    setComments((prev) => [...prev, commentInput.trim()]);
    setCommentInput("");
  };

  return (
    <article className="bg-white border border-[#dbdbdb] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-full">
      {/* ── Post Header ── */}
      <div>
        <div className="flex items-center justify-between px-3.5 sm:px-4 py-3 border-b border-[#efefef]">
          <div className="flex items-center gap-2.5">
            {/* Avatar Ring */}
            <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shrink-0">
              <div className="w-full h-full rounded-full bg-white p-[1px] overflow-hidden">
                <img
                  src="/logo-mark.png"
                  alt="Fabstract avatar"
                  className="w-full h-full object-cover rounded-full bg-navy"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-xs text-[#262626] leading-none hover:underline cursor-pointer">
                  fabstract.official
                </span>
                {post.verified && (
                  <svg className="w-3 h-3 text-[#0095f6]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                )}
              </div>
              <span className="text-[10px] text-[#737373] leading-tight mt-0.5 truncate max-w-[150px] sm:max-w-[180px]">
                {post.location}
              </span>
            </div>
          </div>

          {/* Options / Share Icon */}
          <button
            onClick={handleShare}
            className="text-[#262626] hover:text-[#737373] p-1 transition-colors cursor-pointer"
            title="Share home page"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="6" cy="12" r="1.5" />
              <circle cx="18" cy="12" r="1.5" />
            </svg>
          </button>
        </div>

        {/* ── Post Media with Double-Tap Heart Animation ── */}
        <div
          className="relative w-full aspect-square bg-[#fafafa] select-none cursor-pointer overflow-hidden"
          onDoubleClick={handleDoubleTap}
        >
          <img
            src={gallerySrc(post.file)}
            alt={post.caption}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Big Heart Animation on Double Tap / Like */}
          <AnimatePresence>
            {showHeartBurst && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
                exit={{ scale: 1.3, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
              >
                <svg
                  className="w-20 h-20 sm:w-24 sm:h-24 text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)] fill-[#ff3040]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Action Buttons Row ── */}
        <div className="px-3.5 sm:px-4 pt-3 pb-1.5 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            {/* Like Button */}
            <button
              onClick={toggleLike}
              className="cursor-pointer active:scale-75 transition-transform duration-150"
              aria-label={liked ? "Unlike" : "Like"}
            >
              {liked ? (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: [0.8, 1.3, 1] }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5 fill-[#ff3040] text-[#ff3040]" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </motion.div>
              ) : (
                <svg
                  className="w-5 h-5 text-[#262626] hover:text-[#737373] transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              )}
            </button>

            {/* Comment Button */}
            <button
              onClick={() => document.getElementById(`comment-input-${post.id}`)?.focus()}
              className="text-[#262626] hover:text-[#737373] transition-colors active:scale-90 cursor-pointer"
              aria-label="Comment"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>

            {/* Share Button (Shares Home Page Only) */}
            <button
              onClick={handleShare}
              className="text-[#262626] hover:text-[#737373] transition-colors active:scale-90 relative cursor-pointer"
              aria-label="Share home page"
              title="Share Homepage"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>

              {/* Tooltip confirmation */}
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: -24 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-1 left-1/2 -translate-x-1/2 bg-[#262626] text-white text-[10px] font-medium py-0.5 px-2 rounded-md shadow-md whitespace-nowrap z-30"
                  >
                    Link copied!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={() => setSaved(!saved)}
            className="text-[#262626] hover:text-[#737373] transition-colors active:scale-90 cursor-pointer"
            aria-label="Save"
          >
            {saved ? (
              <svg className="w-5 h-5 fill-[#262626] text-[#262626]" viewBox="0 0 24 24">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            )}
          </button>
        </div>

        {/* ── Likes Count ── */}
        <div className="px-3.5 sm:px-4 text-xs font-semibold text-[#262626]">
          {likesCount.toLocaleString()} likes
        </div>

        {/* ── Caption & Tags ── */}
        <div className="px-3.5 sm:px-4 pt-1 pb-2 text-xs text-[#262626] leading-relaxed">
          <span className="font-semibold mr-1.5">fabstract.official</span>
          <span className="line-clamp-3">{post.caption}</span>
          <div className="mt-1 flex flex-wrap gap-1">
            {post.tags.slice(0, 3).map((t) => (
              <span key={t} className="text-[#00376b] text-[11px]">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── User Comments ── */}
        {comments.length > 0 && (
          <div className="px-3.5 sm:px-4 space-y-1 pb-2 text-xs text-[#262626]">
            {comments.slice(-2).map((c, i) => (
              <div key={i} className="truncate">
                <span className="font-semibold mr-1.5">visitor</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        )}

        {/* ── Timestamp ── */}
        <div className="px-3.5 sm:px-4 pb-2.5">
          <span className="text-[10px] tracking-wider uppercase text-[#8e8e8e] font-medium">
            {post.timeAgo}
          </span>
        </div>
      </div>

      {/* ── Add Comment Input Bar ── */}
      <form
        onSubmit={handleAddComment}
        className="border-t border-[#efefef] px-3.5 sm:px-4 py-2 flex items-center gap-2 mt-auto"
      >
        <input
          id={`comment-input-${post.id}`}
          type="text"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          placeholder="Add a comment..."
          className="w-full text-xs bg-transparent border-0 focus:outline-none placeholder-[#8e8e8e] text-[#262626]"
        />
        {commentInput.trim() && (
          <button
            type="submit"
            className="text-[#0095f6] hover:text-[#00376b] font-semibold text-xs cursor-pointer transition-colors"
          >
            Post
          </button>
        )}
      </form>
    </article>
  );
}

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fafafa] pt-24 sm:pt-28 pb-20">
        {/* Intro header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8 text-center sm:text-left">
          <p className="text-teal text-xs tracking-[0.25em] uppercase font-semibold mb-2">
            Visual Journal
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy font-medium">
            Instagram Feed
          </h1>
          <p className="mt-3 text-navy/70 text-base max-w-2xl leading-relaxed">
            Live glimpses from our production floors, sustainable processes, and artisanal craft in real time.
          </p>
        </div>

        {/* ── Multi-Column Grid of Complete Instagram Post Cards ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {POSTS.map((post) => (
              <InstagramCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
