import Card from "../components/card";
const blog = () => {
  return (
    // <div className="min-h-screen bg-gray-100 p-6 ">
    <div className="max-w-4xl mx-auto">
      <section className=" from-blue-600 to-indigo-700 text-white  rounded-xl mt-3 shadow-lg ">
        <img
          className="w-230 h-80  mx-auto mb-4 rounded-xl"
          src="https://trailchronicles.com/wp-content/uploads/2025/01/b2cireland-travelinsurance.jpeg"
          alt=""
        />
      </section>
      <div className=" flex gap-2 mb-2">
        <span className="bg-gray-300 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full shadow-lg ml-[205px]">
          Lifestyle
        </span>
        <span className="bg-gray-300 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full shadow-lg ml-[70px]">
          Travel
        </span>
        <span className="bg-gray-300 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full shadow-lg ml-[70px]">
          Food
        </span>
        <span className="bg-gray-300 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full shadow-lg ml-[70px]">
          Fashion
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4 ">
        <Card
          title=" To Improve Your Health"
          descraption="The yoga mat curled up in the backseat of your car. The gym membership you keep paying for but don’t actually use. "
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6YLIQWyckFt3XHHL2BmYIc7dglDsMqQ5t4g&s"
        />
        <Card
          title="Major Spring Summer 2025"
          descraption="Things to love about spring: blue skies, temperatures above 12 degrees, 
          and a whole load of new szn fashion trends."
          image="https://hips.hearstapps.com/hmg-prod/images/spring-summer-fashion-trends-2025-67894bc4b1803.png?crop=0.6697674418604651xw:1xh;center,top&resize=1200:*"
        />
        <Card
          title="Restaurant Point Of View "
          descraption="The restaurant point of view is a perspective that focuses on the experiences and opinions of the restaurant itself."
          image="https://media.istockphoto.com/id/1282729736/photo/woman-in-a-restaurant-with-her-male-friend-having-lunch.jpg?s=612x612&w=0&k=20&c=93dv7iF-oDon4KKDjkjfFViLVhFM5Q2ZmcNOaNTmLu0="
        />
        <Card
          title="Traverling in 2025"
          descraption="All products are independently selected by our editors. If you buy something
         ."
          image="https://media.cntraveller.com/photos/670e2b6fa6ba0ee97419bbe3/16:9/w_2560%2Cc_limit/travelGettyImages-1599827836.jpg"
        />
        <Card
          title="Fashion Week"
          descraption="Fashion Week is a fashion industry event, lasting approximately one week,"
          image="https://www.voguecollege.com/wp-content/uploads/2024/09/LOOK_03_0322_V2_330-1920-x1280.jpg"
        />
        <Card
          title="life in 2025"
          descraption="The future is a time period that is yet to come, and it is often associated with"
          image="https://pkphoto.com/wp-content/uploads/2021/12/ZP8A0053.lg_-3-3-1650x1100-1.jpg"
        />
      </div>
    </div>
  );
};

export default blog;
