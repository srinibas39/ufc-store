export const Login = () => {
  return (
    <div class="login-container">
      <div class="login">
        <h2>Login</h2>
        <div class="email-container">
          <label for="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div class="password-container">
          <label for="password">Password</label>
          <input type="password" name="password" />
        </div>
        <div class="forgotP-container">
          <div class="remember">
            <input type="checkbox" name="remember-me" />
            <label for="remember-me">Remember Me</label>
          </div>
          <a href="#">Forgot Your Password ?</a>
        </div>
        <button class="btn-login">Login</button>
        <div class="create-new">
          <a href="./signup.html" class="link link2"></a>
          <p>Create new Account</p>
          <span class="material-icons"> arrow_forward_ios </span>
        </div>
      </div>
    </div>
  );
};
