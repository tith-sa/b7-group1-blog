import Card from "../components/card";
import Management from "../assets/management.png";
import Mana from "../assets/mana.png";
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
const Home = () => {
  return (
    <>
      ​
      <div className="">
        <div className="max-w-7xl mx-auto px-20 py-8">
          {/* Header Section */}
          <div className="bg-gray-100 rounded-xl flex flex-col md:flex-row items-center p-6 gap-6">
            <div className="flex-1">
              <p className="text-gray-500 text-sm">Home / Bootcamp</p>
              <h1 className="text-3xl font-bold mt-2">Bootcamp Program</h1>
            </div>
            <div className="flex-2 h-70">
              <img
                src={Management} // Replace with your image URL
                alt="Bootcamp"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-10 justify-items-center px-30">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="flex flex-col  items-center text-center space-y-2 hover:text-blue-600 transition"
              >
                <div className="text-xl ">{cat.icon}</div>
                <span className="text-sm font-medium">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className=" max-w-6xl mx-auto px-20 py-16 flex flex-col lg:flex-row items-center  gap-10">
          <div className="flex-1 ml-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              The Advantages of the <br />{" "}
              <span className="text-blue-600">upskill Program.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((adv, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-blue-500 text-xl">✅</div>
                  <div>
                    <h4 className="font-semibold">{adv.title}</h4>
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
        <div className=" rounded-xl bg-blue-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-40">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
