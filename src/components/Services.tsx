import { BiSupport } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiRefund2Line, RiSecurePaymentLine } from "react-icons/ri";
import ServiceCard from "./ServiceCard";
const Services = () => {
    const servicesData = [
        {
            icon: <LiaShippingFastSolid size={36} />,
            title: "Free Shipping",
            desc: "Free Shipping for US order",
        }, {
            icon: <BiSupport size={36} />,
            title: "Support 24/7",
            desc: "We support 24h a day",
        }, {
            icon: <RiRefund2Line size={36} />,
            title: "100% Money Back",
            desc: "You have 7 Days to Return",
        }, {
            icon: <RiSecurePaymentLine size={36} />,
            title: "Secure Payment",
            desc: "We ensure secure payment",
        }
    ];
    return (
        <section className="container mt-[100px]">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {servicesData.map((service) => (
                    <ServiceCard key={service.title} icon={service.icon} title={service.title} desc={service.desc} />                    
                ))}
            </div>
        </section>
    )
}
export default Services