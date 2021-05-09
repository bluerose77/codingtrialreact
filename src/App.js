
import './App.css';

function App() {
  return (
    <>
      <div class="main-container">
        <div class="left-container">
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Watching scripted
            tutorials is great, but understanding how developers think is invaluable.
          </p>
        </div>
        <div class="right-container">
          <div class="right-top">
            <b>Try it free 7 days</b> then $20/mo. thereafter
          </div>
          <div class="right-form">
            <form>
              <fieldset>
                <label class="visuallyhidden" for="fname">First Name</label>
                <input type="text" id="fname" name="fname" placeholder="First Name" size="60%" required></input>
                <label class="visuallyhidden" for="lname">Last Name</label>
                <input type="text" id="lname" name="lname" placeholder="Last Name" size="60%" required></input>
                <label class="visuallyhidden" for="eaddress">Email Address</label>
                <input type="email" id="eaddress" name="eaddress" placeholder="Email Address" size="60%" required></input>
                <label class="visuallyhidden" for="pw">Password</label>
                <input type="password" id="pw" name="pw" placeholder="Password" size="60%" required></input>
                <input type="submit" value="CLAIM YOUR FREE TRIAL" size="60%"></input>
                <p>By clicking the button, you are agreeing to our <b>Terms and Services</b></p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
