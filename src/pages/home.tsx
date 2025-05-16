import Cardhome from "../components/cardhome";
import Management from "../assets/management.png";
import Mana from "../assets/mana.png";
import { useTheme } from "../theme/themeContext";

const categories = [
  { label: "Business", icon: "📊" },
  { label: "Development", icon: "💻" },
  { label: "Language", icon: "🗣️" },
  { label: "Marketing", icon: "📢" },
  { label: "Finance", icon: "💰" },
  { label: "Design", icon: "🎨" },
];
const advantages = [
  {
    title: "Relevant Skill set",
    desc: "Learn ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    title: "Growth Mindset",
    desc: "Learn ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    title: "1-on-1 Mentoring",
    desc: "Learn ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    title: "Hiring Partners",
    desc: "Learn ipsum dolor sit amet consectetur adipiscing elit.",
  },
];
const services = [
  {
    title: "CV & Resume Prep",
    description:
      "Learn lorem ipsum dolor sit amet consectetur adipiscing elit.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-CKvRoDVUBfyNkDx1Bj_aZU6wdAUrwAJ5IZiNom3IYAlBtijvWQ0OrS2ea2z6-1xkeco&usqp=CAU", // Replace with actual icon/image path
  },
  {
    title: "Interview Coaching",
    description:
      "Learn lorem ipsum dolor sit amet consectetur adipiscing elit.",
    icon: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/181062386/original/0f56306daa425900550d4dd03d111a16f5784301/conduct-online-video-interview-coaching.jpg",
  },
  {
    title: "Buddy System",
    description:
      "Learn lorem ipsum dolor sit amet consectetur adipiscing elit.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogCKSTEK07JkYq82yMvZ_51FYVnQ6ZChk95pn8LFesZ0vCjNO1NJXzeWSAhnwgCMOGUk&usqp=CAU",
  },
  {
    title: "Career Opportunity",
    description:
      "Learn lorem ipsum dolor sit amet consectetur adipiscing elit.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgsBdX7haM6QESqvGZXOjBKEGwMnfC5ktzw&s",
  },
];
const Home = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className={`${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-20 py-8">
          <div
            className={`rounded-xl flex flex-col md:flex-row items-center p-6 gap-6 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <div className="flex-1">
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Home / Bootcamp
              </p>
              <h1
                className={`text-3xl font-bold mt-2 ${
                  theme === "dark" ? "text-gray-300" : "text-black"
                }`}
              >
                Bootcamp Program
              </h1>
            </div>
            <div className="flex-2 h-70">
              <img
                src={Management}
                alt="Bootcamp"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-10 justify-items-center px-15">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="flex flex-col  items-center text-center space-y-2 hover:text-blue-600 transition"
              >
                <div className="text-xl ">{cat.icon}</div>
                <span
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-gray-300" : "text-black"
                  }`}
                >
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className=" max-w-6xl mx-auto px-20 py-16 flex flex-col lg:flex-row items-center  gap-10">
          <div className="flex-1 ml-10">
            <h2
              className={`text-2xl md:text-3xl font-semibold mb-6 ${
                theme === "dark" ? "text-gray-300" : "text-black"
              }`}
            >
              The Advantages of the <br />{" "}
              <span className="text-blue-600">upskill Program.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((adv, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-blue-500 text-xl">✅</div>
                  <div>
                    <h4
                      className={`font-semibold ${
                        theme === "dark" ? "text-gray-300" : "text-black"
                      }`}
                    >
                      {adv.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-blue-100 rounded-3xl transform translate-x-6 translate-y-6 -z-10" />
              <img
                src={Mana}
                alt="Upskill Program"
                className="rounded-3xl w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className=" px-30  py-10 md:px-12 lg:px-20 rounded-xl">
          <h1
            className={`text-center text-2xl md:text-3xl font-semibold mb-8 ${
              theme === "dark" ? "text-gray-300" : "text-black"
            }`}
          >
            Bootcamp Program
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Cardhome
              Image="https://img.freepik.com/free-photo/online-blog_53876-123696.jpg?semt=ais_hybrid&w=740"
              Title="Drawing CoursEe"
              Description="Learn to draw with our comprehensive course."
            />
            <Cardhome
              Image="https://inmoment.com/wp-content/uploads/2023/11/blog-hero-Review-Management-An-Essential-Component-of-Modern-Marketing-1.jpg"
              Title="Drawing CoursEe"
              Description="Learn to draw with our comprehensive course."
            />
            <Cardhome
              Image="https://www.cxtoday.com/wp-content/uploads/2024/02/5-Ways-Review-Management-Services-Boost-Reputation-.jpg"
              Title="Drawing CoursEe"
              Description="Learn to draw with our comprehensive course."
            />
            <Cardhome
              Image="https://cdn.prod.website-files.com/636bbf9c519296f08f480299/6584937c5f7f14b7ddc97594_blog%20-%20hero%20-%20what%20to%20look%20for%20in%20workspace%20management%20software.jpg"
              Title="Drawing CoursEe"
              Description="Learn to draw with our comprehensive course."
            />
          </div>
        </div>
        <section className="py-16 px-6 md:px-24 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center space-y-5 transition-transform duration-300 hover:scale-105 hover:shadow-md p-4 rounded-xl"
              >
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-20 h-20 object-contain"
                />
                <h3 className="text-xl font-bold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
