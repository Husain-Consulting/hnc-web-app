import "@/styles/services.css";
import ServiceCard from "../servicecard/ServicesCard";
import { SERVICE_CARD } from "@/utils/serviceCardConstrants";

export default function Services() {
  return (
    <div className="services-main">
      <div className="services-heading">
        <span>SERVICES</span>
        <hr />
      </div>
      <div className="card-container">
        {SERVICE_CARD.map((serviceData, key) => (
          <ServiceCard
            serviceImg={serviceData.serviceImg}
            serviceName={serviceData.serviceName}
            serviceDescription={serviceData.serviceDescription}
            key={key}
          />
        ))}
      </div>
    </div>
  );
}
