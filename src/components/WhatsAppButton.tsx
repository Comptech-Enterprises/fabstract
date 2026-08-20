"use client";

import { useState, useEffect, useRef } from "react";

const QUESTIONS = [
  { id: "product", text: "Hi! 👋 What type of product are you looking for?", type: "options", options: ["Knitwear", "Woven Apparel", "Home Textiles", "Multiple Categories"] },
  { id: "quantity", text: "What's your estimated order quantity?", type: "options", options: ["500–2,000 units", "2,000–10,000 units", "10,000–50,000 units", "50,000+ units"] },
  { id: "timeline", text: "What's your target delivery timeline?", type: "options", options: ["< 30 days", "30–60 days", "60–90 days", "Flexible"] },
  { id: "company", text: "What's your company or brand name?", type: "text", placeholder: "e.g. Acme Clothing Co." },
  { id: "name", text: "And your name?", type: "text", placeholder: "Your full name" },
];

type Message = { from: "bot" | "user"; text: string };
type Answers = Record<string, string>;

function buildWhatsAppUrl(answers: Answers) {
  const lines = [
    "Hi Fabstract! Here's my enquiry:",
    "",
    `Product: ${answers.product ?? "—"}`,
    `Quantity: ${answers.quantity ?? "—"}`,
    `Timeline: ${answers.timeline ?? "—"}`,
    `Company: ${answers.company ?? "—"}`,
    `Name: ${answers.name ?? "—"}`,
    "",
    "Please get back to me. Thanks!",
  ];
  return `https://wa.me/911140524038?text=${encodeURIComponent(lines.join("\n"))}`;
}

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [input, setInput] = useState("");
  const [done, setDone] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: "bot", text: QUESTIONS[0].text }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function advance(userText: string, questionId: string) {
    const newAnswers = { ...answers, [questionId]: userText };
    setAnswers(newAnswers);
    const nextStep = step + 1;

    if (nextStep >= QUESTIONS.length) {
      setMessages(prev => [
        ...prev,
        { from: "user", text: userText },
        { from: "bot", text: "Perfect! 🎉 Tap below to send your enquiry to our team on WhatsApp." },
      ]);
      setDone(true);
    } else {
      setMessages(prev => [
        ...prev,
        { from: "user", text: userText },
        { from: "bot", text: QUESTIONS[nextStep].text },
      ]);
      setStep(nextStep);
    }
  }

  function handleOption(opt: string) { advance(opt, QUESTIONS[step].id); }

  function handleText() {
    if (!input.trim()) return;
    advance(input.trim(), QUESTIONS[step].id);
    setInput("");
  }

  const current = QUESTIONS[step];

  return (
    <>
      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm overflow-hidden flex flex-col border border-sand shadow-2xl"
          style={{ height: 480, background: "#F5ECDC" }}
        >
          {/* Header */}
          <div className="px-4 py-3 flex items-center gap-3 bg-sand">
            <div className="w-9 h-9 rounded-full bg-ink flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-cream">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-ink font-semibold text-sm leading-tight">Fabstract Team</p>
              <p className="text-taupe text-xs">Typically replies within 24hrs</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-taupe hover:text-ink transition-colors ml-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.from === "bot"
                    ? "bg-cream text-stone border border-sand rounded-tl-none"
                    : "bg-ink text-cream rounded-tr-none"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-sand bg-cream">
            {done ? (
              <a
                href={buildWhatsAppUrl(answers)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-ink text-cream font-semibold text-sm py-3 hover:bg-stone transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-cream">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Continue on WhatsApp
              </a>
            ) : current?.type === "options" ? (
              <div className="flex flex-wrap gap-2">
                {current.options!.map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleOption(opt)}
                    className="bg-cream border border-sand text-stone text-xs font-medium px-3 py-1.5 hover:bg-ink hover:text-cream hover:border-ink transition-colors"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleText()}
                  placeholder={current?.placeholder ?? "Type a message…"}
                  className="flex-1 bg-cream px-4 py-2 text-sm text-stone focus:outline-none border border-sand focus:border-ink transition-colors"
                />
                <button
                  onClick={handleText}
                  className="w-10 h-10 bg-ink flex items-center justify-center flex-shrink-0 hover:bg-stone transition-colors"
                >
                  <svg className="w-5 h-5 fill-cream" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-none shadow-lg bg-ink flex items-center justify-center"
      >
        {open ? (
          <svg className="w-6 h-6 fill-cream" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        ) : (
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-cream">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        )}
      </button>
    </>
  );
}
