import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TermsPage.css";

function TermsPage() {
  const navigate = useNavigate();

  return (
    <div className="terms-page">
      <h1>Terms and Privacy Policy</h1>
      <div className="terms-content">
        <h2>Terms of Use</h2>
        <p>
          By using this app, you agree to the following terms:
        </p>
        <ul>
          <li>You will use this app only for personal, non-commercial purposes.</li>
          <li>You understand that the app is provided "as-is" without guarantees.</li>
          <li>Your data will be stored securely and not shared without your consent.</li>
        </ul>

        <h2>Privacy Policy</h2>
        <p>
          Your privacy is important to us. Here's how we handle your data:
        </p>
        <ul>
          <li>We collect only the information needed to provide the app's services.</li>
          <li>Your data will not be sold or shared with third parties.</li>
          <li>You can request to delete your data at any time by contacting support.</li>
        </ul>

        <p>
          If you have any questions, feel free to contact us via the app support email.
        </p>
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default TermsPage;
