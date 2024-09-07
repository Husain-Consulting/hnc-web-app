import "@/styles/servicescard.css";

export default function ServiceCard({serviceImg,serviceDescription,serviceName}) {
  return (
    <>
      <div className="card">
          <img
            src={serviceImg}
            alt=""
            className="service-img"
          />
          <div className="service">
            <div className="service-name">{serviceName}</div>
            <div className="service-discription">
              {serviceDescription}
            </div>
          </div>
        </div>
      </>
  );
}
