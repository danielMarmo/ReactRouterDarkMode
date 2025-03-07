import type { Route } from "./+types/home";
import Header from "~/components/Header/Header";
import CardInfo from "~/components/Card/CardInfo";
import CardText from "~/components/Card/CardText";
import CardList from "~/components/Card/CardList";
import profileImg from "../assets/profileImg.png";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Header />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 p-6 md:p-12">
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 row-span-2">
          <CardInfo 
            imageSource={profileImg} 
            name="32" 
            age="Married, 2 kids" 
            education="University of Calgary" 
            location="Calgary, Alberta" 
            job="Family Physician" 
            hobbies="Hiking and dancing" 
          />
        </div>

        <div className="col-span-1 sm:col-span-1 lg:col-span-4 row-span-1">
          <CardText 
            title="Bio" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet mauris enim, vel condimentum risus eget rhoncus, vitae. Viverra pulvinar cras eu ac sed nunc dui. Risus pharetra, lacus interdum quam. Egestas aliquam dui at proin. Amet, pharetra, scelerisque molestie nibh porttitor sem malesuada cursus eget. Orci." 
          />
        </div>

        <div className="col-span-1 sm:col-span-1 lg:col-span-4 row-span-1">
          <CardList title="Personality" list={["Hardworking", "Smart", "Expressive", "Thoughtful"]} />
        </div>

        <div className="col-span-1 sm:col-span-1 lg:col-span-4 row-span-1">
          <CardList title="Pain points" list={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euchue", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euchue", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euchue", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euchue"
          ]} />
        </div>

        <div className="col-span-1 sm:col-span-1 lg:col-span-4 row-span-1">
          <CardList title="Goals" list={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euchue", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euchue", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euchue", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euchue"
          ]} />
        </div>
      </div>

    </div>
  );
}
