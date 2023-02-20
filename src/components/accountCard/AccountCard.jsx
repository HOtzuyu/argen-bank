import React from "react";
import PropTypes from "prop-types";

/**
 * Account card _ data from props
 * @param {String} title
 * @param {String} amount
 * @param {string} description
 * @returns {JSX.Element} Account card amount section
 */
function AccountCard({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount} </p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

export default AccountCard;

AccountCard.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
