import { useSelector } from "react-redux"
import "./services.css"

const Services = () => {
    const servicesData = useSelector(state => state.service.value);
    return (
        <section className="services">
            {servicesData.map((service, index) => (
                <article className="services__item" key={index}>
                    <img src={service.icon} alt="services icon " />
                    <p>{service.title}</p>
                </article>
            ))}
        </section>
    )
}

export default Services
