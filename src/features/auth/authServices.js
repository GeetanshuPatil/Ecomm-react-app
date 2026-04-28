// features/auth/authServices.js

export const loginAPI = async (credentials) => {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) throw new Error("Invalid credentials");

  return res.json();
};

// 🔥 Add signup (fake for now)
export const signupAPI = async (data) => {
  // DummyJSON doesn’t really create users
  return {
    id: Date.now(),
    username: data.username,
    token: "fake-token-123",
  };
};
