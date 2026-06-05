import { motion } from "framer-motion";

import { SubscribeButton } from "@/components/SubscribeButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CountdownTimer } from "@/components/CountdownTimer";
import opinion from "@/assets/Testimonials/opinion.jpeg";
import opinion2 from "@/assets/Testimonials/opinion2.jpeg";
import opinion3 from "@/assets/Testimonials/opinion3.jpeg";
import opinion4 from "@/assets/Testimonials/opinion4.jpeg";
import opinion5 from "@/assets/Testimonials/opinion5.jpeg";
import opinion6 from "@/assets/Testimonials/opinion6.jpeg";
import opinion7 from "@/assets/Testimonials/opinion7.jpeg";
import opinion8 from "@/assets/Testimonials/opinion8.jpeg";
import opinion9 from "@/assets/Testimonials/opinion9.jpeg";
import Projects from "@/components/Projects";

// Project 1
import mainImage from "@/assets/Project_1/main-image.jpeg";
import subImage1 from "@/assets/Project_1/image_1.jpeg";
import subImage2 from "@/assets/Project_1/image_2.jpeg";
import subImage3 from "@/assets/Project_1/image_3.jpeg";
import subImage4 from "@/assets/Project_1/image_4.jpeg";
import subImage5 from "@/assets/Project_1/image_5.jpeg";
import subImage6 from "@/assets/Project_1/image_6.jpeg";
import subImage7 from "@/assets/Project_1/image_7.jpeg";

// Project 2
import mainImageProject_2 from "@/assets/Project_2/main-image-project_2.jpeg";
import subImageProject_2 from "@/assets/Project_2/image_1.jpeg";

// Project 3
import mainImageProject_3 from "@/assets/Project_3/main-image-project_3.jpeg";
import subImageProject_3 from "@/assets/Project_3/image_1.jpeg";

// Project 4
import mainImageProject_4 from "@/assets/Project_4/main-image-project_4.jpeg";
import { BarChart3, Database, FileSpreadsheet, FolderGit2, RefreshCw, TrendingUp } from "lucide-react";
import Accordion from "@/components/Accordion";

const courseTopics = [
  {
    icon: <FileSpreadsheet size={30} />,
    title: "Excel",
    desc: "Master spreadsheets, formulas, charts, and data organization professionally.",
  },
  {
    icon: <Database size={30} />,
    title: "Power Query & Pivot",
    desc: "Transform and analyze large datasets efficiently using advanced Excel tools.",
  },
  {
    icon: <BarChart3 size={30} />,
    title: "Power BI",
    desc: "Create interactive dashboards and professional business reports visually.",
  },
  {
    icon: <TrendingUp size={30} />,
    title: "Statistics",
    desc: "Learn statistical concepts used in real-world data analysis projects.",
  },
  {
    icon: <img width={'30px'} height={'30px'} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />,
    title: "Database SQL",
    desc: "Query, filter, and manage databases using SQL professionally.",
  },
  {
    icon: <Database size={30} />,
    title: "Database Objects",
    desc: "Understand tables, relations, views, and database structure fundamentals.",
  },
  {
    icon: <img width={'30px'} height={'30px'} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />,
    title: "Python Programming",
    desc: "Build strong programming foundations for automation and data analysis.",
  },
  {
    icon: <img width={'30px'} height={'30px'} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />,
    title: "Python Libraries",
    desc: "Analyze and visualize datasets using Pandas, NumPy, and Matplotlib.",
  },
  {
    icon: <FolderGit2 size={30} />,
    title: "Real Projects",
    desc: "Work on +5 real-world projects to build practical experience and strengthen your portfolio.",
  },
];

const whyLearn = [
  {
    id:"01",
    title: "High Demand Skill 📈",
    desc: "الـ Data Analysis من أكتر المهارات المطلوبة دلوقتي في سوق العمل، سواء في شركات Tech أو Marketing أو Sales أو حتى البنوك والشركات الكبيرة."
  },
  {
    id:"02",
    title: "Make Better Decisions 🎯",
    desc: "هتتعلم إزاي تحول الأرقام والبيانات لمعلومات مفيدة تساعد الشركات تاخد قرارات أدق وأذكى بدل ما تعتمد على التخمين."
  },
  {
    id:"03",
    title: "Strong Career Opportunities 💼",
    desc: "المجال ده فاتح فرص شغل كتير جدًا زي Data Analyst وBusiness Analyst وBI Analyst، وكمان مطلوب في شركات محلية وعالمية."
  },
  {
    id:"04",
    title: "Work With Real Data 📊",
    desc:"هتتعلم إزاي تتعامل مع بيانات حقيقية، تنظفها وتحللها وتطلع منها Insights تساعد في فهم البيزنس بشكل أفضل."
  },
  {
    id:"05",
    title: "Start Freelancing 🌍",
    desc:"تقدر تشتغل Freelance مع عملاء من أي مكان في العالم وتحوّل مهارة تحليل البيانات لمصدر دخل إضافي أو حتى شغل أساسي."
  },
  {
    id:"06",
    title: "Gateway To Data Science",
    desc: "لو نفسك تدخل عالم الداتا ساينس أو الماشين ليرننج أو الذكاء الإصطناعى فالداتا اناليسيز هى أفضل نقطة تبدأ منها مستقبلك"
  },
]
const testimonials = [
  {
    id:1,
    name: "نوال السيد",
    text: " بصراحه محتوى الكورس كان كويس اوى وفرق معايا كتير خصوصا التطبيق العملى وال Projects اللى اشتغلنا عليها..اتعلمنا نحلل الداتا اللى موجوده ب استخدام tools كتير ومختلفه وبتسهل علينا فهم الداتا وكتابة التقرير ف الاخر. بالنسبه للانستراكتور ف كان شرحه كويس وكان بيطبق معانا عملى ودا كان أفضل جزء وطبعا ارشح كورسات كيان كلها ل أى حد عموما 😍💜",
    image: opinion,
  },
  {
    id:2,
    name: "رويدا سمير العناني",
    text: "المكان كويس جدا واول مره روحت شوفت  المعامله وكانت كويسه جدا حتى طريقه الدفع بجد مش حاسه بالضغط ودي اكتر نقطه كنت قلقانه منها اوى اوىبس بجد المكان كويس والمعامله والناس ونضافه المكان بالنسبه لشرح البشمهندس معانا  بجد شرحه كويس جدا جدا وبيبسط الشرح بطريقه كويسه اوى واي حد بيغلط مبيزهقش وبيفضل معانا ف هو بصراحه مشاء الله عليه احسن من ميت دكتور جامعه 😂 وانى ارشح المكان لحد اكيد طبعا اى حد هيجى هيتعلم وهيفهم وهيبقى فاهم المجال كويس ❤️",
    image: opinion3,
  },
  {
    id:3,
    name: "عبدالسلام محمد عبدالسلام",
    text: "في مكان اسمه كيان بدأت الحكاية خطوة جديدة وحلم جوايا علم وخبرة في كل ثانية وطريق واضح للي جاي قدّاميا كورس داتا… مش بس كلام ده فهم وعلم ونظام تمام من أول خطوة لحد النهاية وأنا ماشي بثقة في كل بداية والفضل يرجع لمدرب مميز المهندس أحمد مادح، علمه محفّز بأسلوب سهل وقلب صبور يوصل المعلومة بكل سرور والأوبريشن دايمًا في تنظيم متابعة ودعم بشكل عظيم كل حاجة ماشية بحساب وده اللي يخلّي المكان ليه طابع خاص في كيان اتعلمت أكون أفهم وأحلل وأشوف الكون ولو حد بيسأل أروح فين هقول كيان… من غير نقاش",
    image: opinion4,
  },
  {
    id:4,
    name: "سارة شحاتة عبدالعظيم",
    text: "الكورس جميل جداً كل حاجة مدروسة وتحفة واكيد ارشح أنه ياخد الكورس في كيان",
    image: opinion2,
  },
  {
    id:5,
    name: "عمر اشرف محمد محمد",
    text: "الكورس كويس وبشمهندس احمد شرحه حلو وكيان رقم واحد ف الزقازيق",
    image: opinion5,
  },
  {
    id:6,
    name: "محمد صلاح",
    text: "ممتاز خصوصا مع بشمهندس احمد مادح وشكرا جدا لمتابعتكم معانا طول فترة الكورس",
    image: opinion6,
  },
  {
    id:7,
    name: "بسنت سامي حمدي محمد",
    text: "الكورس جميل جدا واستفادة كتير بصراحه وانتو من احسن الناس الي تعملت معاها  والمكان جميل  بصراحه",
    image: opinion7,
  },
  {
    id:8,
    name: "نورهان محمد سعد",
    text: "الكورس كويس جداً وكل حاجه مدروسه وتحفه واكيد ارشح انو ياخدوا الكورس ف كيان 😍",
    image: opinion8,
  },
  {
    id:9,
    name: "ابراهيم محمد ابراهيم",
    text: "بصراحه كل حاجه تمام والبشمهندس احمد مادح شرحو حلو والمعامله حلوه  والمكان كويس",
    image: opinion9,
  },
];

const stats = [
  { value: "+5000", label: "طالب" },
  { value: "+120", label: "ساعة محتوى" },
  { value: "+15", label: "مشروع عملي" },
  { value: "98%", label: "نسبة الرضا" },
];

const projects = [
  {
    id: 1,
    img: mainImage,
    subImages: [
      { id: 1, subImage: subImage1 },
      { id: 2, subImage: subImage2 },
      { id: 3, subImage: subImage3 },
      { id: 4, subImage: subImage4 },
      // {id:5 , subImage:subImage5},
      // {id:6 , subImage:subImage6},
      // {id:7 , subImage:subImage7}
    ],
  },
  { id: 2, img: mainImageProject_2, subImages: [{ id: 1, subImage: subImageProject_2 }] },
  { id: 3, img: mainImageProject_3, subImages: [{ id: 1, subImage: subImageProject_3 }] },
  { id: 4, img: mainImageProject_4 },
];

function SectionHeader({
  tag,
  title,
  subtitle,
}: {
  tag?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-16">
      {tag ? (
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-glow text-xs font-semibold tracking-wider uppercase mb-5">
          {tag}
        </span>
      ) : (
        ""
      )}
      <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-24 px-4 scroll-mt-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export default function Index() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/15 blur-[120px]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/40 backdrop-blur-md border border-border text-md font-medium text-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              خصم لفترة محدودة على دبلومة الـ Data Analysis عدد ساعات الكورس +120
            </span>
            <h1
              className="text-[31px] md:text-7xl lg:text-[74px] font-black mb-6 leading-[1.1] tracking-tight"
              style={{ lineHeight: "1.5" }}
            >
              <span className="text-foreground">حول الداتا لقرارات...وأبدأ كايريك فى الـ</span>{" "}
              <span className="text-gradient">Data Analysis</span>
              <br />
              <span className="text-foreground">من الصفر</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              اتـعلم Python و Excel و SQL و Power BI واشتغل على Projects حقيقية تؤهلك لسوق العمل و
              ال Freelancing.{" "}
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <SubscribeButton size="lg" />
              <a
                href="#content"
                className="px-8 py-4 rounded-full border border-border bg-card/30 backdrop-blur-md text-foreground hover:bg-card/60 transition-all font-semibold"
              >
                استكشف المحتوى
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-black text-gradient mb-1">
                    {s.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    {/* Why Start With Programming Fundamentals? */}
      <Section className="bg-card/20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="? Why Learn Data Analysis" subtitle="" />
          <div className="grid md:grid-cols-3 gap-6 mb-14" dir="ltr">
            {whyLearn.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-7 shadow-soft hover:border-primary/40 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm text-left leading-relaxed" dir="rtl">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <SubscribeButton />
        </div>
      </Section>

      {/* COURSE CONTENT */}
      <Section id="content">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Roadmap"
            title="What You’ll Learn"
            subtitle="خليك Data Analyst جاهز للشغل"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 text-left" dir="ltr">
            {courseTopics.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-7 hover:border-primary/40 transition-all shadow-soft"
              >
                <div className="text-sm font-mono text-primary-glow mb-4 tracking-wider">
                  {t.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary-glow transition-colors">
                  {t.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <SubscribeButton />
          </div>
        </div>
      </Section>
      
            {/* TESTIMONIALS */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Student Reviews"
            title="Real feedback from our students during their learning journey"
          />
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-7 shadow-soft"
              >
                <div className="text-accent text-lg mb-4 tracking-widest">★★★★★</div>
                <p className="text-foreground/85 mb-6 leading-relaxed text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-11 h-11 rounded-full overflow-hidden">
                    <img src={t.image} alt={t.name} />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">{t.name}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <SubscribeButton />
          </div>
        </div>
      </Section>
      
      {/* PROJECTS */}
      <Section className="bg-card/20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Student Projects"
            title="Projects Built By Our Students"
            subtitle="Real projects students build during the course "
          />
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-border shadow-elegant bg-card"
              >
                <Projects project={project} />
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <SubscribeButton />
          </div>
        </div>
      </Section>

      {/* WHY KIAN */}
      <Section className="bg-card/20" id="why-kian">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            tag="About Us"
            subtitle=""
            title="Kian Academy — Learn Tech Skills The Practical Way"
          />
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: "🎯",
                title: "منهج عملي 100%",
                desc: "تدريب عملى على مشاريع حقيقية خلال فترة الكورس بالإضافة إلى تدريب عملى لمدة شهرين فى شركات البرمجة",
              },
              {
                icon: "👨‍🏫",
                title: "مدربون محترفون ومينتورز متخصصون",
                desc: "فريق من المبرمجين أصحاب الخبرة في كبرى الشركات التقنية بالإضافة لمينتورز لمساعدتك خطوة بخطوة للوصول لأقصى إستفادة من الكورس.",
              },
              {
                icon: "🤝",
                title: "متابعة شخصية",
                desc: "كل طالب عندنا له اهتمام خاص ومتابعة مستمرة حتى الإحتراف بالإضافة لمتابعة مستمرة بعد إنتهاء الكورس.",
              },
              {
                icon: "🚀",
                title: "تأهيل لسوق العمل",
                desc: "نساعدك في بناء portfolio قوي والاستعداد لمقابلات الشركات.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-7 shadow-soft hover:border-primary/40 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-2xl p-8 mb-10">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              في <span className="text-gradient font-bold">أكاديمية كيان</span>، إحنا مش بنعلم برمجة
              بس — إحنا بنبني جيل جديد من المبرمجين القادرين على المنافسة محلياً وعالمياً. رسالتنا
              إن كل طالب يخرج من عندنا وعنده القدرة الحقيقية على تنفيذ مشاريع احترافية والدخول لسوق
              العمل بثقة.
            </p>
          </div>
          <div className="text-center">
            <SubscribeButton />
          </div>
        </div>
      </Section>

      {/* Q & A */}
      <Section className="relative min-h-screen  flex items-center justify-center px-4 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/15 blur-[120px]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto py-20 pt-0 pb-4">          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1
              className="text-2xl md:text-4xl font-black mb-6 leading-[1.1] tracking-tight"
              style={{ lineHeight: "1.5" }}
            >
              <span className="text-foreground">Start Your Programming Journey Today </span>
            </h1>
            <p className="text-lg md:text-[32px] text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              متضيعش وقت أكتر ، وابدأ دلوقت أبنى مستقبلك فى مجال الـ 
              Data Analysis مع
              <span> Kian Academy </span>
            </p>
            <Accordion/>
            <div className="text-center mt-10">
              <SubscribeButton />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-card/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-primary shadow-glow mb-8"
          >
            <svg
              className="w-12 h-12 text-primary-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          </motion.div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-glow text-xs font-semibold tracking-wider uppercase mb-5">
            ضماننا لك
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            ضمان استرداد 100%
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            بنضمنلك أنك هتعمل في الكورس اكتر من 5 مشاريع حقيقية ولو دا متنفذش هتسترد فلوسك بالكامل
            نهاية الكورس كمان زيادة عليه 1000 جنيه تعويضاً لوقتك
          </p>
          <SubscribeButton />
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing">
        <div className="max-w-3xl mx-auto">
          {/* <SectionHeader tag="عرض محدود" title="العرض ينتهي خلال" /> */}
          <div className="mb-14">
            <CountdownTimer />
          </div>
        </div>
      </Section>

      <footer className="text-center py-10 text-muted-foreground border-t border-border text-sm">
        © {new Date().getFullYear()} جميع الحقوق محفوظة
      </footer>
    </main>
  );
}
