import { useState } from "react";
import { useTheme } from "../theme/themeContext";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }

  interface ContactFormEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = async (e: ContactFormEvent): Promise<void> => {
    e.preventDefault();
    setError("");

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise<void>((resolve) => setTimeout(resolve, 1000));
      const formData: ContactFormData = { name, email, message };
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError("An error occurred while sending your message.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setError("");
    setSubmitted(false);
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-md"
              src="https://thumbs.dreamstime.com/b/contact-us-concept-modern-flat-design-web-man-chatting-online-operator-support-center-getting-advice-363919192.jpg"
              alt="Contact us illustration"
              sizes="(max-width: 640px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div
              className={`${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } shadow-xl rounded-lg p-8 md:p-10 w-full max-w-md`}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Contact Us
              </h1>
              <p
                className={`text-lg text-center mb-8 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                We'd love to hear from you!
              </p>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                aria-label="Contact form"
              >
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-1 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      theme === "dark"
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-1 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      theme === "dark"
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-1 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y ${
                      theme === "dark"
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    aria-required="true"
                  />
                </div>
                <div className="flex justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                      theme === "dark"
                        ? "bg-gray-600 text-white hover:bg-gray-700"
                        : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                    }`}
                    disabled={isLoading}
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                      isLoading
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send"}
                  </button>
                </div>
                {error && (
                  <p
                    className="text-red-500 text-sm mt-4 text-center"
                    role="alert"
                  >
                    {error}
                  </p>
                )}
                {submitted && (
                  <p className="text-green-500 text-sm mt-4 text-center">
                    ✅ Your message has been sent!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
