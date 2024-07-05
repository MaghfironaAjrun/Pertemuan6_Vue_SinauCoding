<template>
  <div class="container">
      <div class="left">
        <div>
          <h1>Welcome to Twitter</h1>
          <p>Happening now, join Twitter today</p>
          <img src="./assets/Ilustrator.svg" alt="Twitter Illustration" />
          <footer>&copy; 2022 Twitter,Inc.</footer>
        </div>
      </div>
      <div class="right">
        <div class="login-box">
          <div class="head">
            <img src="./assets/Logo Twitter.svg" alt="twitter icon">
            <p>Don't have an account? <a href="#" style="color: #1E9CF1; font-weight: bold;">Sign Up</a></p>
          </div>
          <h2>Log in to Twitter</h2>
          <input type="text" placeholder="Phone, email or username" />
          <input type="password" placeholder="Password" />
          <a href="#" class="forgot-link">Forgot password?</a>
          <button class="sign-button">Sign In</button>
          <p>or</p>
          <div class="alt-login">
            <button class="google-button">
              <img src="./assets/Logo Google.svg" alt="Google Logo" /> Sign in
              with Google
            </button>
            <button class="apple-button">
              <img src="./assets/Logo Apple.svg" alt="Apple Logo" /> Sign in with
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
</template>