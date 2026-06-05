import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id:"01",
    title: "الكورس ده مناسب لو أنا ببدأ من الصفر؟",
    content:"أكيد 👍الكورس معمول لأي حد معندوش أي خبرة في الـ Data Analysis، وهتمشي خطوة خطوة لحد ما تقدر تشتغل على مشاريع بنفسك"  
  },
  {
    id:"02",
    title: "هتعلم إيه في الكورس؟",
    content: "هتتعلم Excel و SQL و Power BI، Python وكمان Data Cleaning و Data Modeling و DAX و Data Visualization وكل اللي محتاجه عشان تبدأ في المجال بشكل صح."
  },
  {
    id:"03",
    title: "هل الكورس فى تطبيق عملي ولا كله نظري؟",
    content: "معظم الكورس عملي، وهتشتغل على Tasks ومشاريع وبيانات حقيقية عشان تطبق كل حاجة بإيدك."
  },
  {
    id:"05",
    title: " هل بعد الكورس أقدم على شغل؟",
    content:"الكورس هيديك المهارات والمشاريع اللي محتاجها عشان تبدأ تبني Portfolio قوي وتكون جاهز للتقديم على فرص تدريب أو شغل في المجال."
  },
  {
    id:"06",
    title: "هل فى شهادة بعد ما أخلص الكورس ؟",
    content:"أيوة ✅هتحصل على Certificate من Kian Academy بعد إتمام الكورس"
  },
  {
    id:"07",
    title:"ينفع أشتغل Freelance بعد الكورس؟",
    content: "أكيد 🌍مع المشاريع والخبرة العملية اللي هتاخدها هتكون قادر تبدأ تعرض خدماتك وتشتغل مع عملاء على منصات الـ Freelancing."
  },
  {
    id:"08",
    title: " إيه الفرق بين Data Analysis و Data Science؟",
    content: "ببساطة الـ Data Analysis بيخليك تفهم البيانات وتحللها وتطلع منها Insights، أما الـ Data Science فبيكون فيه Machine Learning و AI وحاجات متقدمة أكتر. وعشان كده الـ Data Analysis هو أفضل نقطة تبدأ منها",
  },
  {
    id:"09",
    title: "محتاج لابتوب إمكانياته عالية؟",
    content: "لا أي لابتوب بإمكانيات متوسطة هيكون كافي جدًا إنك تشتغل عليه أثناء الكورس."
  },
  {
    id:"10",
    title: "هعرف أعمل إيه بعد ما أخلص؟",
    content:"هتعرف تنظف البيانات، وتحللها، وتكتب SQL Queries، وتبني Dashboards احترافية باستخدام Power BI، وتستخرج Insights تساعد الشركات تاخد قرارات أفضل."
  },
  {
    id:"11",
    title: "أعمل أى لو وقفت في أي حاجة أثناء الكورس؟",
    content:"متقلقش هتلاقي دعم ومتابعة معاك أثناء الرحلة التعليمية، ولو واجهتك مشكلة هنساعدك تحلها."
  },
  {
    id:"12",
    title: "ليه أتعلم Data Analysis أصلًا؟",
    content:"لأنها من أكتر المهارات المطلوبة حاليًا في سوق العمل، وبتفتحلك فرص شغل كتير سواء في شركات أو Freelancing، وكمان تعتبر بداية قوية جدًا لأي حد حابب يدخل مجال البيانات."
  },
  {
    id:"04",
    title: "هتعلم أعمل Dashboards زى الى بشوفها على LinkedIn ?",
    content: "اكيد طبعاً هتتعلم تبني Dashboards احترافية وتفاعلية وتعرض البيانات بشكل يخلي أي حد يفهمها بسهولة."
  },
];

export default function Accordion() {
  const [active, setActive] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
      <div dir="rtl" className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-5xl mx-auto">
        {faqData.map((item, index) => (
        <div
          key={item.id}
          className="h-fit overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="flex w-full items-center justify-between px-6 py-5 text-right cursor-pointer"
          >
            <span className="text-lg font-semibold text-white">
              {item.title}
            </span>

            <motion.div
              animate={{ rotate: active === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="text-white/70" />
            </motion.div>
          </button>

          <AnimatePresence>
            {active === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p
                  className="
                    px-6 pb-5
                    text-right
                    text-white/70
                    leading-loose
                    break-words
                    [unicode-bidi:plaintext]
                  "
                >
                  {item.content}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}