interface CardListProps {
    title: string;
    list: string[];
}

function CardList({ title, list }: CardListProps) {
    return (
        <div className="bg-card-bg-light dark:bg-card-bg-dark rounded-lg shadow-lg overflow-hidden p-8 h-full">
            <h2 className="font-bold text-card-h2-light dark:text-card-h2-dark text-3xl">{title}</h2>
            <ul className="py-3 text-card-paragraph-light dark:text-card-paragraph-dark space-y-2">
                {list.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <span className="mr-2">-</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CardList;
