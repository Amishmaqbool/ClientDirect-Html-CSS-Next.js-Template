import axios from "axios";

const API_URL = "https://api.clientidirect.com";

const authService = {
  initiateGoogleLogin: async () => {
    try {
      const redirect_url = 'http://localhost:3000';
      const response = await axios.get(`${API_URL}/auth/login/google`, {
        params: { redirect_url },
      });

      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  handleGoogleLoginCallback: async () => {
    try {
      const response = await axios.get(`${API_URL}/auth/login/google/callback`);
      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  googleSignIn: async (idToken) => {
    try {
      const response = await axios.post(`${API_URL}/auth/google`, { idToken });
      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });
      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // User registration
  register: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, userData);
      if (response.data) {
        console.log("Registration successful:", JSON.stringify(response.data));
        // authService.login(userData.email, userData.password);
        return response.data;
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem("user");
  },

  // Get current user
  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem("user"));
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const user = authService.getCurrentUser();
    return !!user && !!user.access_token;
  },

  // Get authentication token
  getToken: () => {
    const user = authService.getCurrentUser();
    return user ? user.access_token : null;
  },

  // Refresh token (if your backend supports it)
  refreshToken: async () => {
    try {
      const user = authService.getCurrentUser();
      if (user && user.refresh_token) {
        const response = await axios.post(`${API_URL}/auth/refresh-token`, {
          refresh_token: user.refresh_token,
        });
        if (response.data.access_token) {
          user.access_token = response.data.access_token;
          localStorage.setItem("user", JSON.stringify(user));
        }
        return response.data;
      }
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};

export default authService;
