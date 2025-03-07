interface CardTextProps {
    title: string;
    text: string;
}

function CardText({ title, text }: CardTextProps) {
    return (
        <div className="bg-card-bg-light dark:bg-card-bg-dark rounded-lg shadow-lg overflow-hidden p-8 h-full">
            <p className="font-bold text-card-h2-light dark:text-card-h2-dark text-3xl">{title}</p>
            <p className="py-3 text-card-paragraph-light dark:text-card-paragraph-dark">{text}</p>
        </div>
    )
}

export default CardText;