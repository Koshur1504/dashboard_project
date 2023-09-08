import React from "react";
import Card from "../components/Card";
import revenueIcon from "../components/assets/Card-revenue.svg";
import transactionsIcon from "../components/assets/transaction_icon.svg";
import totalLikeIcon from "../components/assets/card_like.svg";
import totalUsersIcon from "../components/assets/card_users.svg";

const Cards = ({ data }) => {
  let { total_revenues, total_transactions, total_likes, total_users } = data;
  

  return (
    <>
      <Card
        icon={revenueIcon}
        color="#7FCD93"
        text="Total Revenues"
        value={`$${total_revenues?.toLocaleString("en-US")}`}
        pvalue="+2.5%"
      />
      <Card
        icon={transactionsIcon}
        color="#DEBF85"
        text="Total Transactions"
        value={`$${total_transactions?.toLocaleString("en-US")}`}
        pvalue="+15%"
      />
      <Card
        icon={totalLikeIcon}
        color="#ECA4A4"
        text="Total Likes"
        value={total_likes?.toLocaleString("en-US")}
        pvalue="+2.5%"
      />
      <Card
        icon={totalUsersIcon}
        color="#A9B0E5"
        text="Total Users"
        value={total_users?.toLocaleString("en-US")}
        pvalue="+5%"
      />
    </>
  );
};

export default Cards;
