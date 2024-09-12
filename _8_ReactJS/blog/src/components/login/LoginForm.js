import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./authSlice";
import { Link, useNavigate } from "react-router-dom";

// Login
const LoginForm = () => {
  // State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // Redirect
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Default: username: oguzhandemir-od@yandex.com
    // Default: password: root

    if (username === "root" && password === "root") {
      dispatch(login({ username }));

      navigate("/index");
    } else {
      alert("Geçersiz kullanıcı adı veya şifre girildi.");
    }
  };

  // Return
  return (
    <div className="shadow p-2">
      <h1 className="text-center display-3 text-primary mt-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div class="mb-4">
            <label for="" class="form-label">
              Kullanıcı Adı
            </label>
            <input
              type="text"
              value={username}
              className="form-control"
              placeholder="Kullanıcı Adı"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="mb-4">
            <label for="" class="form-label">
              Kullanıcı Şifresi
            </label>
            <input
              type="password"
              value={password}
              className="form-control"
              placeholder="Kullanıcı Şifresi"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Giriş Yap
        </button>
        <button type="reset" className="btn btn-danger ms-2">
          Temizle
        </button>
        <Link className="btn btn-info text-white ms-2" to="/register">Kayıt Ol</Link>
      </form>
    </div>
  );
}; // End Login

// Export
export default LoginForm;
