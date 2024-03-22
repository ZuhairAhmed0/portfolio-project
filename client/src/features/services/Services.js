import { FaDesktop, FaMobileAlt, FaServer, FaUserShield } from "react-icons/fa";
import { FcServices } from "react-icons/fc";
import { useSelector } from "react-redux";
import { getServices } from "./servicesSlice";

function Services() {
  const data = useSelector(getServices);

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>
          <FcServices /> Services
        </h2>
        <div className="content">
          {data.length > 0 &&
            data.map((service) => {
              return (
                <div key={service._id}>
                  {service.icon === "desktop" ? (
                    <FaDesktop />
                  ) : service.icon === "server" ? (
                    <FaServer />
                  ) : service.icon === "mobile" ? (
                    <FaMobileAlt />
                  ) : (
                    <FaUserShield />
                  )}
                  <h4>{service.name}</h4>
                  <p>{service.description}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Services;
