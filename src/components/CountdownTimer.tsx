import { useEffect, useState } from "react";
import { SubscribeButton } from "./SubscribeButton";
import { motion } from "framer-motion";

const STAGES = [
  {
    price: 4000,
    duration: 24,
    message: "العرض ينتهي خلال 24 ساعة",
  },
  {
    price: 4500,
    duration: 48,
    message: "العرض ينتهي خلال 48 ساعة",
  },
  {
    price: 5000,
    duration: 72,
    message: "العرض ينتهي خلال 72 ساعة",
  },
];

export function CountdownTimer() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [stage, setStage] = useState(0);

  useEffect(() => {
    const STORAGE_KEY = "offer-start-time";

    let startTime = localStorage.getItem(STORAGE_KEY);

    if (!startTime) {
      const now = Date.now();
      localStorage.setItem(STORAGE_KEY, String(now));
      startTime = String(now);
    }

    const start = Number(startTime);

    const updateTimer = () => {
      const now = Date.now();

      const passedHours = (now - start) / (1000 * 60 * 60);

      let currentStage = 0;

      if (passedHours >= 48) {
        currentStage = 2;
      } else if (passedHours >= 24) {
        currentStage = 1;
      } else {
        currentStage = 0;
      }

      setStage(currentStage);

      const target = start + STAGES[currentStage].duration * 60 * 60 * 1000;

      const diff = target - now;

      if (diff <= 0) {
        setTime({
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTime({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const Box = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-primary shadow-glow rounded-2xl w-20 h-20 md:w-28 md:h-28 flex items-center justify-center text-3xl md:text-5xl font-black text-primary-foreground tabular-nums">
        {String(value).padStart(2, "0")}
      </div>

      <span className="mt-2 text-sm md:text-base text-muted-foreground">{label}</span>
    </div>
  );

  return (
    <>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-card backdrop-blur-md border border-primary/30 rounded-3xl p-10 md:p-14 shadow-elegant relative overflow-hidden"
        >
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent font-bold text-xs tracking-wider uppercase mb-6">
            عرض محدود خصم يزيد عن 50%
          </span>
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-foreground">
            {STAGES[stage].message}
          </h3>
        </div>
        <div className="flex justify-center gap-4 md:gap-6 mb-10">
          <Box value={time.seconds} label="ثانية" />
          <Box value={time.minutes} label="دقيقة" />
          <Box value={time.hours} label="ساعة" />
        </div>
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />

          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold mb-8 text-foreground">الباقة الكاملة</h3>

            <div className="flex items-baseline justify-center gap-4 mb-2 flex-wrap">
              <span className="text-6xl md:text-7xl font-black text-foreground line-through decoration-red-500 decoration-4">
                8500
              </span>
              <span className="text-4xl md:text-5xl font-black text-red-500">
                {STAGES[stage].price}
              </span>
              <span className="text-xl font-bold text-red-500">جنيه</span>
            </div>
            <p className="text-muted-foreground mb-10 text-sm">دفعة واحدة — وصول مدى الحياة</p>

            <ul className="text-right max-w-sm mx-auto space-y-4 mb-10">
              {[
                "وصول مدى الحياة لكل المحتوى",
                "تحديثات مستقبلية مجاناً",
                "شهادة إتمام معتمدة",
                "مجتمع خاص للطلاب",
                "دعم فني مباشر",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-foreground text-sm">
                  <span className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-xs flex-shrink-0">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <SubscribeButton size="lg" />
          </div>
        </motion.div>
      </div>
    </>
  );
}
