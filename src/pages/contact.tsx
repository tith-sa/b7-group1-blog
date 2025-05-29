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
  const imageUrl =
    "https://cdni.iconscout.com/illustration/premium/thumb/businesswoman-send-email-over-laptop-illustration-download-in-svg-png-gif-file-formats--sending-message-business-activities-pack-illustrations-5662051.png?f=webp";

  // Replace with your actual Formspree form ID
  const FORMSPREE_FORM_ID = "mvgkvozp";

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

    // Validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (message.trim().length < 10) {
      setError(
        "Please provide a more detailed message (at least 10 characters)."
      );
      return;
    }

    setIsLoading(true);

    try {
      const formData: ContactFormData = {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      };

      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _replyto: formData.email,
            _subject: `New contact form submission from ${formData.name}`,
          }),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        console.log("Form submitted successfully:", formData);

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      if (err instanceof Error) {
        setError(`Failed to send message: ${err.message}`);
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
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
              src={imageUrl}
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
              <h1
                className={`text-3xl md:text-4xl font-bold text-center mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Contact Us
              </h1>
              <p
                className={`text-lg text-center mb-8 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                We'd love to hear from you!
              </p>

              {!submitted ? (
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
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                        theme === "dark"
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      }`}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      aria-required="true"
                      maxLength={100}
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-1 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                        theme === "dark"
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      }`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-required="true"
                      maxLength={254}
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-1 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us what's on your mind..."
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y transition-colors ${
                        theme === "dark"
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      }`}
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      aria-required="true"
                      maxLength={2000}
                      disabled={isLoading}
                    />
                    <p
                      className={`text-xs mt-1 text-right ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {message.length}/2000
                    </p>
                  </div>

                  <div className="flex justify-between gap-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className={`flex-1 py-3 px-4 rounded-lg transition-colors font-medium ${
                        theme === "dark"
                          ? "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-700"
                          : "bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-300"
                      } disabled:cursor-not-allowed`}
                      disabled={isLoading}
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className={`flex-1 py-3 px-4 rounded-lg transition-colors font-medium text-white ${
                        isLoading
                          ? "bg-blue-400 cursor-not-allowed"
                          : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
                      }`}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>

                  {error && (
                    <div
                      className={`p-3 rounded-lg border ${
                        theme === "dark"
                          ? "bg-red-900/20 border-red-800 text-red-400"
                          : "bg-red-50 border-red-200 text-red-700"
                      }`}
                      role="alert"
                    >
                      <p className="text-sm font-medium">❌ {error}</p>
                    </div>
                  )}
                </form>
              ) : (
                <div className="text-center py-8">
                  <div
                    className={`p-6 rounded-lg border ${
                      theme === "dark"
                        ? "bg-green-900/20 border-green-800"
                        : "bg-green-50 border-green-200"
                    }`}
                  >
                    <div className="text-4xl mb-4">✅</div>
                    <h3
                      className={`text-xl font-semibold mb-2 ${
                        theme === "dark" ? "text-green-400" : "text-green-700"
                      }`}
                    >
                      Message Sent Successfully!
                    </h3>
                    <p
                      className={`text-sm mb-4 ${
                        theme === "dark" ? "text-green-300" : "text-green-600"
                      }`}
                    >
                      Thank you for reaching out. We'll get back to you soon!
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        theme === "dark"
                          ? "bg-gray-600 text-white hover:bg-gray-700"
                          : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                      }`}
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
