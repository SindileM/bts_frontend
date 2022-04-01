import axios from "axios";
const API = "https://bts-army-blog.herokuapp.com/users/";

class AuthService {
  async login(user) {
    const response = await axios.post(`${API}signin`, {
      email: user.email,
      password: user.password,
    });
    if (response.data.access) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(user) {
    return axios.post(`${API}signup`, {
      username: user.username,
      email: user.email,
      password: user.password,
      profile: user.profile,
    });
  }
}

export default new AuthService();
