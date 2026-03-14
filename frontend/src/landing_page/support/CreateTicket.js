import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row mt-5 text-center text-md-start">
        <h1 className="fs-4 fs-md-2 text-muted">
          To create a ticket, select a relevant topic
        </h1>
      </div>

      <div className="row">
        {/* Column 1 */}
        <div className="col-12 col-md-4 mt-4 mb-3 p-3">
          <h4 className="fs-5 fs-md-4">
            <i className="fa-solid fa-plus me-2"></i> Account opening
          </h4>
          <a href="/" className="d-block text-decoration-none my-2">Online Account Opening</a>
          <a href="/" className="d-block text-decoration-none my-2">Offline Account Opening</a>
          <a href="/" className="d-block text-decoration-none my-2">Company, Partnership and HUF Account</a>
          <a href="/" className="d-block text-decoration-none my-2">NRI Account Opening</a>
          <a href="/" className="d-block text-decoration-none my-2">Charge at Zerodha</a>
          <a href="/" className="d-block text-decoration-none my-2">Zerodha IDFC FIRST Bank 3-in-1 Account</a>
          <a href="/" className="d-block text-decoration-none my-2">Getting Started</a>
        </div>

        {/* Column 2 */}
        <div className="col-12 col-md-4 mt-4 mb-3 p-3">
          <h4 className="fs-5 fs-md-4">
            <i className="fa-solid fa-user me-2"></i> Your Zerodha Account
          </h4>
          <a href="/" className="d-block text-decoration-none my-2">Login Credentials</a>
          <a href="/" className="d-block text-decoration-none my-2">Account Modifications</a>
          <a href="/" className="d-block text-decoration-none my-2">DP ID and bank detail</a>
          <a href="/" className="d-block text-decoration-none my-2">Your Profile</a>
          <a href="/" className="d-block text-decoration-none my-2">Transfer and conversion of shares</a>
        </div>

        {/* Column 3 */}
        <div className="col-12 col-md-4 mt-4 mb-3 p-3">
          <h4 className="fs-5 fs-md-4">
            <i className="fa-solid fa-chart-simple me-2"></i> Kite
          </h4>
          <a href="/" className="d-block text-decoration-none my-2">IPO</a>
          <a href="/" className="d-block text-decoration-none my-2">Trading FAQs</a>
          <a href="/" className="d-block text-decoration-none my-2">Margin Trading Facility (MTF) and Margins</a>
          <a href="/" className="d-block text-decoration-none my-2">Charts and orders</a>
          <a href="/" className="d-block text-decoration-none my-2">Charge at Zerodha</a>
          <a href="/" className="d-block text-decoration-none my-2">Alerts and Nudges</a>
          <a href="/" className="d-block text-decoration-none my-2">General</a>
        </div>
      </div>

      <div className="row">
        {/* Column 4 */}
        <div className="col-12 col-md-4 mt-4 mb-3 p-3">
          <h4 className="fs-5 fs-md-4">
            <i className="fa-solid fa-folder-closed me-2"></i> Funds
          </h4>
          <a href="/" className="d-block text-decoration-none my-2">Add money</a>
          <a href="/" className="d-block text-decoration-none my-2">Withdraw money</a>
          <a href="/" className="d-block text-decoration-none my-2">Add bank accounts</a>
          <a href="/" className="d-block text-decoration-none my-2">NRI Account Opening</a>
          <a href="/" className="d-block text-decoration-none my-2">eMandates</a>
        </div>

        {/* Column 5 */}
        <div className="col-12 col-md-4 mt-4 mb-3 p-3">
          <h4 className="fs-5 fs-md-4">
            <i className="fa-solid fa-magnifying-glass me-2"></i> Console
          </h4>
          <a href="/" className="d-block text-decoration-none my-2">Portfolio</a>
          <a href="/" className="d-block text-decoration-none my-2">Corporate actions</a>
          <a href="/" className="d-block text-decoration-none my-2">Funds statement</a>
          <a href="/" className="d-block text-decoration-none my-2">Reports</a>
          <a href="/" className="d-block text-decoration-none my-2">Profile</a>
          <a href="/" className="d-block text-decoration-none my-2">Segments</a>
        </div>

        {/* Column 6 */}
        <div className="col-12 col-md-4 mt-4 mb-3 p-3">
          <h4 className="fs-5 fs-md-4">
            <i className="fa-solid fa-coins me-2"></i> Coin
          </h4>
          <a href="/" className="d-block text-decoration-none my-2">Understanding mutual funds and Coin</a>
          <a href="/" className="d-block text-decoration-none my-2">Coin app</a>
          <a href="/" className="d-block text-decoration-none my-2">Coin web</a>
          <a href="/" className="d-block text-decoration-none my-2">Transactions and reports</a>
          <a href="/" className="d-block text-decoration-none my-2">National Pension Scheme (NPS)</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;