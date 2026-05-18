import { useEffect, useState } from "react";

export function CountdownTimer() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const STORAGE_KEY = "countdown-end-time";

    // نجيب وقت النهاية القديم
    let endTime = localStorage.getItem(STORAGE_KEY);

    // لو أول زيارة للموقع
    if (!endTime) {
      const newEndTime = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, String(newEndTime));
      endTime = String(newEndTime);
    }

    const target = Number(endTime);

    const updateTimer = () => {
      const diff = target - Date.now();

      // لو الوقت خلص
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

  const Box = ({
    value,
    label,
  }: {
    value: number;
    label: string;
  }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-primary shadow-glow rounded-2xl w-20 h-20 md:w-28 md:h-28 flex items-center justify-center text-3xl md:text-5xl font-black text-primary-foreground tabular-nums">
        {String(value).padStart(2, "0")}
      </div>

      <span className="mt-2 text-sm md:text-base text-muted-foreground">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center gap-4 md:gap-6">
      <Box value={time.seconds} label="ثانية" />
      <Box value={time.minutes} label="دقيقة" />
      <Box value={time.hours} label="ساعة" />
    </div>
  );
}