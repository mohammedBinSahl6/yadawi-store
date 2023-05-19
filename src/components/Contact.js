const Contact = () => {
  return (
    <div className="container starter">
      <div className="row p-5">
        <h2 id="hh2">Contact</h2>
      </div>
      <div>
        <div className="formbold-main-wrapper">
          {/* Author: FormBold Team */}
          {/* Learn More: https://formbold.com */}
          <div className="formbold-form-wrapper">
            <form action="https://formbold.com/s/FORM_ID" method="POST">
              <div className="formbold mb-5">
                <label htmlFor="name" className="formbold-form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="formbold-form-input"
                />
              </div>
              <div className="formbold mb-5">
                <label htmlFor="email" className="formbold-form-label">
                  
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="formbold-form-input"
                />
              </div>
              <div className="formbold mb-5">
                <label htmlFor="message" className="formbold-form-label">
                  
                  Message
                </label>
                <textarea
                  rows={6}
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  className="formbold-form-input"
                  defaultValue={""}
                />
              </div>
              <div>
                <button className="formbold-btn mt-3">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: "\n" }} />
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Contact;
