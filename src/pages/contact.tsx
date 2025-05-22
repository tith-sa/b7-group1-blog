import { useState } from "react";

const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email && message) {
      console.log("Form submitted:", { name, email, message });
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } else if (!email.includes("@")) {
      setError('Email must include "@"');
      setSubmitted(false);
      return;
    } else {
      setError("All fields are required.");
      setSubmitted(false);
      return;
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-10 mt-25 sm:px-30">
        <div className="">
          <img
            className="w-full h-full object-cover"
            src="https://thumbs.dreamstime.com/b/contact-us-concept-modern-flat-design-web-man-chatting-online-operator-support-center-getting-advice-363919192.jpg"
            alt="Contact us concept in modern flat design for web. Man chatting online with operator of support center, getting advice and information, finding solutions for his questions in info. Vector illustration. Contact man vectors"
            sizes="(max-width: 359.98px) 360px, (min-width: 360px) and (max-width: 399.98px) 400px, (min-width: 400px) and (max-width: 449.98px) 450px, (min-width: 450px) and (max-width: 575.98px) 576px, 768px"
          ></img>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-white shadow-xl rounded-lg p-10 text-center mx-10">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="mt-4 text-lg">We would love to hear from you!</p>
            <form className="mt-8 w-[350px] " onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Your Message"
                className="w-full h-[120px] p-2 border border-gray-300 rounded mb-4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button className="bg-blue-500 text-white py-2 px-5 rounded-lg hover:bg-blue-600 flex flex-col-reverse">
                Send
              </button>
              {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
              {submitted && (
                <p className="text-green-600 text-sm mt-4">
                  ✅ Your message has been sent!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
