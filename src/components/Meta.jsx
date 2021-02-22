import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ country, flag }) => {
  return (
    <Helmet>
      <title>COVID-19 {country}</title>
      <meta
        name="description"
        content={`Track cases, recoveries and deaths in ${country}`}
      />
      <meta name="keywords" content={country} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "COVID-19 Tracer",
  keywords:
    "covid19, corona virus, cases, virus, vaccine, covid, country, daily cases",
};

export default Meta;
