module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "http://localhost:1337",
  cors: {
    origin: ["http://localhost:5173", "http://localhost:3000"], // Add your frontend URL
  },
});
