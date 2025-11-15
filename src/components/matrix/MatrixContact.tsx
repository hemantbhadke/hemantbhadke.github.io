import { useTheme } from "./ThemeProvider";
import { motion } from "motion/react";
import { Mail, Linkedin, Phone, MapPin, Send } from "lucide-react";

export function MatrixContact() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const contacts = [
    {
      icon: Mail,
      label: isDark ? "[EMAIL]" : "Email",
      value: "hemantrbhadke@gmail.com",
      href: "mailto:hemantrbhadke@gmail.com",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: Linkedin,
      label: isDark ? "[LINKEDIN]" : "LinkedIn",
      value: "hemantrbhadke",
      href: "https://www.linkedin.com/in/hemantrbhadke",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Phone,
      label: isDark ? "[PHONE]" : "Phone",
      value: "+91-9766670282",
      href: "tel:+919766670282",
      color: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-24 px-8 border-t-2 border-b-2 ${
        isDark
          ? "bg-[#1a1a1a] border-[#00ff41]"
          : "bg-gradient-to-br from-blue-50 to-purple-50 border-gray-200"
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className={`text-4xl md:text-5xl mb-6 ${
                isDark
                  ? "text-[#00ff41] [text-shadow:0_0_20px_rgba(0,255,65,0.8)] before:content-['>_']"
                  : "text-gray-900"
              }`}
            >
              {isDark ? "CONNECT.init" : "Let's Connect"}
            </h2>
            <p
              className={`text-lg ${
                isDark ? "text-[#39ff14]" : "text-gray-700"
              }`}
            >
              {isDark && <span className="mr-2">&gt;</span>}
              Open to new opportunities, collaborations, and connecting with
              fellow DevOps engineers
            </p>

            {/* Location */}
            <motion.div
              className={`mt-8 inline-flex items-center gap-2 px-6 py-3 ${
                isDark
                  ? "bg-[rgba(0,255,65,0.1)] border-2 border-[#00ff41] text-[#00ff41]"
                  : "bg-white shadow-lg rounded-lg text-gray-900"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <MapPin size={20} />
              <span>Amravati, Maharashtra, India</span>
            </motion.div>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={index}
                  href={contact.href}
                  target={contact.label.includes("LINKEDIN") || contact.label.includes("LinkedIn") ? "_blank" : undefined}
                  rel={contact.label.includes("LINKEDIN") || contact.label.includes("LinkedIn") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`p-6 text-center block relative group ${
                    isDark
                      ? "bg-transparent border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black hover:[box-shadow:0_0_30px_rgba(0,255,65,0.8)]"
                      : `bg-white rounded-xl shadow-lg hover:shadow-2xl`
                  } transition-all`}
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full ${
                      isDark
                        ? "bg-[#00ff41]/10 group-hover:bg-black"
                        : `bg-gradient-to-br ${contact.color} text-white shadow-lg`
                    }`}
                  >
                    <Icon size={28} />
                  </div>
                  <div
                    className={`mb-2 ${
                      isDark
                        ? "text-[#00ff41] group-hover:text-black"
                        : "text-gray-900"
                    }`}
                  >
                    {contact.label}
                  </div>
                  <div
                    className={`text-sm ${
                      isDark
                        ? "text-[#39ff14] group-hover:text-black/70"
                        : "text-gray-600"
                    }`}
                  >
                    {contact.value}
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.a
              href="mailto:hemantrbhadke@gmail.com"
              className={`inline-flex items-center gap-3 px-10 py-5 text-lg relative overflow-hidden group ${
                isDark
                  ? "border-2 border-[#00ff41] text-[#00ff41] before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[#00ff41] before:transition-[left] before:duration-300 hover:before:left-0 hover:text-black before:z-[-1] hover:[box-shadow:0_0_30px_rgba(0,255,65,0.8)]"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105"
              } transition-all`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={24} />
              <span>{isDark ? "[SEND_MESSAGE]" : "Send Me a Message"}</span>
            </motion.a>

            <p
              className={`mt-6 text-sm ${
                isDark ? "text-[#39ff14]" : "text-gray-600"
              }`}
            >
              {isDark && <span className="mr-2">&gt;</span>}
              Usually responds within 24 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}