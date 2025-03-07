interface CardInfoProps {
    imageSource: string;
    name: string;
    age: string
    education: string;
    location: string;
    job: string;
    hobbies: string;
}

function CardInfo({ imageSource, name, age, education, location, job, hobbies }: CardInfoProps) {
    return (
        <div className="bg-card-bg-light dark:bg-card-bg-dark rounded-lg shadow-lg overflow-hidden h-full">
            <img className=" p-8 w-full h-auto object-cover"  src={imageSource} alt={name} />
            <div className="p-8 grid grid-cols-2 gap-4">
                <div className="font-bold">
                    <h2 className="text-card-h2-light dark:text-card-h2-dark py-3">NOMBRE:</h2>
                    <h2 className="text-card-h2-light dark:text-card-h2-dark py-3">EDAD:</h2>
                    <h2 className="text-card-h2-light dark:text-card-h2-dark py-3">EDUCACIÓN:</h2>
                    <h2 className="text-card-h2-light dark:text-card-h2-dark py-3">UBICACIÓN:</h2>
                    <h2 className="text-card-h2-light dark:text-card-h2-dark py-3">TRABAJO:</h2>
                    <h2 className="text-card-h2-light dark:text-card-h2-dark py-3">HOBBIES:</h2>
                </div>
                <div>
                    <p className="text-card-paragraph-light dark:text-card-paragraph-dark py-3">{name}</p>
                    <p className="text-card-paragraph-light dark:text-card-paragraph-dark py-3">{age}</p>
                    <p className="text-card-paragraph-light dark:text-card-paragraph-dark py-3">{education}</p>
                    <p className="text-card-paragraph-light dark:text-card-paragraph-dark py-3">{location}</p>
                    <p className="text-card-paragraph-light dark:text-card-paragraph-dark py-3">{job}</p>
                    <p className="text-card-paragraph-light dark:text-card-paragraph-dark py-3">{hobbies}</p>
                </div>
            </div>
        </div>
    );
}

export default CardInfo;
