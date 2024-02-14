import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ServiceCards = (props) => {
  const services = props.services;
  console.log(services);
  return (
    <div class="serviceCards row">
      {services &&
        services.length > 0 &&
        services.map((service, index) => (
          <div
            class="col-xl-4 col-lg-4 col-md-4 col-sm-6"
            key={index.toString()}
          >
            <div class="card text-bg-dark">
              <div
                class="card-background"
                style={{
                  backgroundImage: `url(${service.background})`,
                }}
              ></div>
              <div class="card-body">
                <h5 class="card-title">{service.service}</h5>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ServiceCards;
