interface PropsType{
    icon: React.ReactNode
    title: String
    desc: String
}

const ServiceCard = ({icon, title, desc}:PropsType) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-accent">{icon}</div>
            <h2 className="text-xl font-medium mt-4 mb-2">{title}</h2>
            <p className="text-gray-500">{desc}</p>
        </div>
 
}

export default ServiceCard