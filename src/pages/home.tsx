import Cardhome from "../components/cardhome";
import Management from "../assets/management.png";
import Mana from "../assets/mana.png";
import { useTheme } from "../theme/themeContext";

// Constants moved to separate object for better organization
const SITE_DATA = {
  categories: [
    { label: "Business", icon: "📊", id: "business" },
    { label: "Development", icon: "💻", id: "development" },
    { label: "Language", icon: "🗣️", id: "language" },
    { label: "Marketing", icon: "📢", id: "marketing" },
    { label: "Finance", icon: "💰", id: "finance" },
    { label: "Design", icon: "🎨", id: "design" },
  ],

  advantages: [
    {
      id: "relevant-skills",
      title: "Relevant Skill Set",
      description:
        "Build industry-relevant skills through hands-on projects and real-world applications that employers value.",
    },
    {
      id: "growth-mindset",
      title: "Growth Mindset",
      description:
        "Develop a continuous learning approach with personalized feedback and adaptive learning paths.",
    },
    {
      id: "mentoring",
      title: "1-on-1 Mentoring",
      description:
        "Get personalized guidance from industry experts who provide career advice and technical support.",
    },
    {
      id: "hiring-partners",
      title: "Hiring Partners",
      description:
        "Connect directly with our network of hiring partners and access exclusive job opportunities.",
    },
  ],

  services: [
    {
      id: "cv-resume",
      title: "CV & Resume Prep",
      description:
        "Professional resume writing and optimization to help you stand out to potential employers.",
      icon: "https://img.freepik.com/free-vector/curriculum-vitae-concept-illustration_114360-8965.jpg",
    },
    {
      id: "interview-coaching",
      title: "Interview Coaching",
      description:
        "Comprehensive interview preparation including mock interviews and personalized feedback.",
      icon: "https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg",
    },
    {
      id: "buddy-system",
      title: "Buddy System",
      description:
        "Pair up with experienced professionals for ongoing support and networking opportunities.",
      icon: "https://img.freepik.com/free-vector/teamwork-concept-illustration_114360-1459.jpg",
    },
    {
      id: "career-opportunity",
      title: "Career Opportunities",
      description:
        "Access curated job listings and career advancement opportunities in your field.",
      icon: "https://img.freepik.com/free-vector/career-growth-concept-illustration_114360-8397.jpg",
    },
  ],

  courses: [
    {
      id: "web-development",
      image: "https://img.freepik.com/free-photo/online-blog_53876-123696.jpg",
      title: "Web Development Bootcamp",
      description:
        "Master modern web development with React, Node.js, and full-stack technologies.",
    },
    {
      id: "data-science",
      image:
        "https://img.freepik.com/free-photo/data-analysis-concept_53876-120310.jpg",
      title: "Data Science & Analytics",
      description:
        "Learn data analysis, machine learning, and visualization techniques.",
    },
    {
      id: "digital-marketing",
      image:
        "https://img.freepik.com/free-photo/digital-marketing-concept_53876-119419.jpg",
      title: "Digital Marketing Mastery",
      description:
        "Comprehensive digital marketing strategies and campaign management.",
    },
    {
      id: "ui-ux-design",
      image:
        "https://img.freepik.com/free-photo/ui-ux-representations-with-smartphone_23-2150201872.jpg",
      title: "UI/UX Design",
      description:
        "Create stunning user interfaces and exceptional user experiences.",
    },
  ],
};

// Custom hook for theme-aware styling
const useThemeStyles = () => {
  const { theme } = useTheme();

  return {
    background: theme === "dark" ? "bg-gray-900" : "bg-gray-50",
    cardBackground: theme === "dark" ? "bg-gray-800" : "bg-white",
    textPrimary: theme === "dark" ? "text-gray-100" : "text-gray-900",
    textSecondary: theme === "dark" ? "text-gray-300" : "text-gray-600",
    textMuted: theme === "dark" ? "text-gray-400" : "text-gray-500",
    border: theme === "dark" ? "border-gray-700" : "border-gray-200",
    shadow: theme === "dark" ? "shadow-gray-900/20" : "shadow-gray-900/10",
  };
};

// Hero Section Component
type StylesProps = {
  background?: string;
  cardBackground: string;
  textPrimary: string;
  textSecondary: string;
  textMuted?: string;
  border?: string;
  shadow?: string;
};

const HeroSection = ({ styles }: { styles: StylesProps }) => (
  <section
    className={`${styles.cardBackground} rounded-xl p-8 shadow-lg ${styles.border} border`}
  >
    <div className="flex flex-col lg:flex-row items-center gap-8">
      <div className="flex-1 space-y-4">
        <nav aria-label="Breadcrumb">
          <p className={`text-sm ${styles.textMuted} flex items-center gap-2`}>
            <span>Home</span>
            <span>/</span>
            <span className="font-medium">Bootcamp</span>
          </p>
        </nav>
        <div className="space-y-2">
          <h1
            className={`text-4xl lg:text-5xl font-bold ${styles.textPrimary} leading-tight`}
          >
            Bootcamp Program
          </h1>
          <p className={`text-lg ${styles.textSecondary} max-w-2xl`}>
            Transform your career with our intensive, industry-focused bootcamp
            programs designed to get you job-ready in months, not years.
          </p>
        </div>
      </div>
      <div className="flex-1 max-w-md lg:max-w-lg">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl transform rotate-3 opacity-20" />
          <img
            src={Management}
            alt="Students collaborating in bootcamp program"
            className="relative rounded-xl w-full h-80 object-cover shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

// Categories Section Component
const CategoriesSection = ({ styles }: { styles: StylesProps }) => (
  <section className="py-12">
    <h2
      className={`text-2xl font-semibold ${styles.textPrimary} text-center mb-8`}
    >
      Explore Categories
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
      {SITE_DATA.categories.map((category) => (
        <button
          key={category.id}
          className={`group flex flex-col items-center p-4 rounded-lg transition-all duration-200 hover:scale-105 hover:bg-blue-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${styles.cardBackground}`}
          aria-label={`Browse ${category.label} courses`}
        >
          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
            {category.icon}
          </div>
          <span
            className={`text-sm font-medium ${styles.textSecondary} group-hover:text-blue-600`}
          >
            {category.label}
          </span>
        </button>
      ))}
    </div>
  </section>
);

// Advantages Section Component
const AdvantagesSection = ({ styles }: { styles: StylesProps }) => (
  <section className="py-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2
            className={`text-3xl lg:text-4xl font-bold ${styles.textPrimary} leading-tight`}
          >
            The Advantages of Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Upskill Program
            </span>
          </h2>
          <p className={`text-lg ${styles.textSecondary}`}>
            Our comprehensive approach ensures you're not just learning, but
            truly prepared for your next career move.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SITE_DATA.advantages.map((advantage) => (
            <div key={advantage.id} className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <span className="text-green-600 text-lg">✓</span>
              </div>
              <div className="space-y-1">
                <h3 className={`font-semibold ${styles.textPrimary}`}>
                  {advantage.title}
                </h3>
                <p
                  className={`text-sm ${styles.textSecondary} leading-relaxed`}
                >
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl transform translate-x-6 translate-y-6 -z-10 opacity-30" />
        <div className="relative">
          <img
            src={Mana}
            alt="Professional development and upskilling"
            className="rounded-3xl w-full h-96 object-cover shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

// Courses Section Component
const CoursesSection = ({ styles }: { styles: StylesProps }) => (
  <section className="py-16">
    <div className="text-center mb-12">
      <h2
        className={`text-3xl lg:text-4xl font-bold ${styles.textPrimary} mb-4`}
      >
        Featured Bootcamp Programs
      </h2>
      <p className={`text-lg ${styles.textSecondary} max-w-2xl mx-auto`}>
        Choose from our carefully curated programs designed by industry experts
        to give you the skills employers want.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {SITE_DATA.courses.map((course) => (
        <Cardhome
          key={course.id}
          Image={course.image}
          Title={course.title}
          Description={course.description}
        />
      ))}
    </div>
  </section>
);

// Services Section Component

const ServicesSection = ({ styles }: { styles: StylesProps }) => (
  <section className={`py-16 ${styles.cardBackground}`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2
          className={`text-3xl lg:text-4xl font-bold ${styles.textPrimary} mb-4`}
        >
          Career Support Services
        </h2>
        <p className={`text-lg ${styles.textSecondary} max-w-2xl mx-auto`}>
          Beyond learning, we provide comprehensive career support to ensure
          your success in the job market.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {SITE_DATA.services.map((service) => (
          <div
            key={service.id}
            className="group flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg focus-within:ring-2 focus-within:ring-blue-500"
          >
            <div className="mb-6 relative">
              <img
                src={service.icon}
                alt={`${service.title} service illustration`}
                className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <h3 className={`text-xl font-bold ${styles.textPrimary} mb-3`}>
              {service.title}
            </h3>
            <p className={`${styles.textSecondary} leading-relaxed`}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Main Home Component
const Home = () => {
  const styles = useThemeStyles();

  return (
    <main className={`min-h-screen ${styles.background}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-8">
          <HeroSection styles={styles} />
        </div>

        {/* Categories Section */}
        <CategoriesSection styles={styles} />

        {/* Advantages Section */}
        <AdvantagesSection styles={styles} />

        {/* Courses Section */}
        <CoursesSection styles={styles} />
      </div>

      {/* Services Section - Full Width */}
      <ServicesSection styles={styles} />
    </main>
  );
};

export default Home;

// const [products, setProducts] = useState<
//     { id: number; image: string; title: string; price: number }[]
//   >([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("https://fakestoreapi.com/products");
//       setProducts(response.data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//     }
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   if (loading) {
//     return <h2>Loading products...</h2>;
//   }
//   if (error) {
//     return <h2>Error: {error}</h2>;
//   }
