"use client";

import { motion } from "motion/react";
import { Mail, User, MessageSquare, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section className="relative w-full min-h-screen bg-sky-950 py-32 px-4 md:px-12 lg:px-24 flex items-center justify-center overflow-hidden z-20">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-400/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-300/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-900/50 backdrop-blur-sm mb-6 shadow-sm">
            <Mail size={16} className="text-sky-300" />
            <span className="text-sm font-medium tracking-wider text-sky-200 uppercase">
              Contact Me
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
            Let's build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">
              together
            </span>
          </h2>
          <p className="text-sky-200 text-lg md:text-xl font-light max-w-2xl mx-auto break-keep">
            새로운 프로젝트나 협업에 대해 이야기하고 싶으신가요? 언제든 편하게
            메시지를 남겨주세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[50px] rounded-br-[15px] shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_0_20px_rgba(255,255,255,0.05)] relative overflow-hidden"
        >
          {/* subtle inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-300/30 to-transparent" />

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Input */}
              <div className="space-y-2 group">
                <label className="text-sm font-medium text-sky-200 flex items-center gap-2 transition-colors group-focus-within:text-sky-400">
                  <User size={16} /> Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="홍길동"
                    className="w-full bg-sky-950/50 border border-sky-400/30 rounded-[20px] rounded-br-[6px] px-4 py-3 text-white placeholder-sky-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all font-light shadow-sm"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2 group">
                <label className="text-sm font-medium text-sky-200 flex items-center gap-2 transition-colors group-focus-within:text-sky-400">
                  <Mail size={16} /> Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full bg-sky-950/50 border border-sky-400/30 rounded-[20px] rounded-br-[6px] px-4 py-3 text-white placeholder-sky-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all font-light shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-2 group">
              <label className="text-sm font-medium text-sky-200 flex items-center gap-2 transition-colors group-focus-within:text-sky-400">
                <MessageSquare size={16} /> Message
              </label>
              <div className="relative">
                <textarea
                  rows={5}
                  placeholder="메시지를 입력해주세요..."
                  className="w-full bg-sky-950/50 border border-sky-400/30 rounded-[24px] rounded-br-[8px] px-4 py-3 text-white placeholder-sky-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all font-light resize-none shadow-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-400 hover:to-blue-400 text-white font-medium py-4 rounded-[20px] rounded-br-[6px] shadow-[0_4px_15px_rgba(14,165,233,0.3)] transition-all border border-sky-300/30"
            >
              <Send size={18} />
              <span>Send Message</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
