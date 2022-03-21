export const Signup = () => {
  return (
    <>
      <div class="login-container">
        <div class="login">
          <h2>Sign Up</h2>
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
              <label for="remember-me">I accept all terms and condition</label>
            </div>
          </div>
          <button class="btn-login">Create new Account</button>
          <div class="create-new">
            <a href="./Login.html" class="link link2"></a>
            <p>Already have an account</p>
            <span class="material-icons"> arrow_forward_ios </span>
          </div>
        </div>
      </div>
    </>
  );
};
