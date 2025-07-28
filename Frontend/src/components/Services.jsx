import { motion } from "framer-motion";

const services = [
  {
    icon: "🖌️",
    title: "Branding",
    subtitle:
      "We craft iconic brands with purpose and personality.\nExperience 2x more brand recall.",
  },
  {
    icon: "💻",
    title: "Web Development",
    subtitle:
      "Responsive, blazing fast websites.\nBoost your site speed by 3x.",
  },
  {
    icon: "🔑",
    title: "Marketing Strategy",
    subtitle: "Unlock powerful growth campaigns.\nAchieve 4x customer reach.",
  },
];

export default function Service() {
  return (
    <div className="relative py-16 bg-black text-white">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My Services
        </h2>
        {services.map((service, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              className="relative w-full flex flex-col items-center group">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`w-[90%] md:w-[60%] p-6 rounded-2xl my-6 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl transition hover:shadow-[0_0_20px_#00f2ff88] 
                ${isLeft ? "self-start" : "self-end"} cursor-pointer`}>
                <motion.div
                  initial={{ rotate: -10 }}
                  whileHover={{ rotate: 0, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-4xl">
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mt-10 text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-green-300 mt-2 whitespace-pre-line leading-snug">
                  {service.subtitle}
                </p>
              </motion.div>

              {/* SVG Connector */}
              {idx < services.length - 1 && (
                <svg
                  className="absolute left-1/2 top-full -translate-x-1/2 h-24 w-20 z-0"
                  viewBox="0 0 100 100"
                  fill="none">
                  <motion.path
                    d={
                      isLeft
                        ? "M0,0 C50,50 50,50 100,100"
                        : "M100,0 C50,50 50,50 0,100"
                    }
                    stroke="url(#grad)"
                    strokeWidth="4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <defs>
                    <linearGradient
                      id="grad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%">
                      <stop offset="0%" stopColor="#00f2ff" />
                      <stop offset="100%" stopColor="#0aff95" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
