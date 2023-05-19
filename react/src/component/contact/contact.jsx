import "../../SCSS/contact.scss";
import { ContactCard } from "./contactCard";
import Image from "../../Images/profil.png";
// import LinneaWillebrandVinnberg from "../../Images/Team/LinneaWillebrandVinnberg.INSERTFORMAT"
// import AndreaOlofsson from "../../Images/Team/AndreaOlofsson.INSERTFORMAT"
import ImirNorlin from "../../Images/Team/ImorNorlin.jpg"
import GustavAlbert from "../../Images/Team/GustavAlbert.jpg"
// import DanielAlden from "../../Images/Team/DanielAlden.INSERTFORMAT"
// import JessicaSjosten from "../../Images/Team/JessicaSjosten.INSERTFORMAT"
// import JonathanPerlow from "../../Images/Team/JonathanPerlow.INSERTFORMAT"
// import RobertGrimsborn from "../../Images/Team/RobertGrimsborn.INSERTFORMAT"
// import AdamTollin from "../../Images/Team/AdamTollin.INSERTFORMAT"

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="headerPushback"></div>
        <h1 className="ContactUs">Contact Us</h1>
        <hr className="hr1"></hr>
        <h2 className="Team">Project Team</h2>
        <hr className="hr2"></hr>

        <div className="row1">
          <ContactCard
            image={Image}
            fullName={"Linnea Willebrand Vinnberg"}
            occupation={"Project Leader"}
            availableAtLinkedIn={true}
            linkedinLink={
              "https://www.linkedin.com/in/linnea-willebrand-vinnberg/?originalSubdomain=se"
            }
          />

          <ContactCard
            image={Image}
            fullName={"Andrea Olofsson"}
            occupation={"Project Leader"}
            availableAtLinkedIn={true}
            linkedinLink={
              "https://www.linkedin.com/in/andréa-olofsson-12b81a1a6/"
            }
          />
        </div>
        <h2 className="Team">Development Team</h2>
        <hr className="hr2"></hr>
        <div className="row2">
          <ContactCard
            image={ImirNorlin}
            fullName={"Imir Norlin"}
            occupation={".Net Developer"}
            availableAtLinkedIn={true}
            linkedinLink={"https://www.linkedin.com/in/imir-norlin/"}
          />
          <ContactCard
            image={GustavAlbert}
            fullName={"Gustav Albert"}
            occupation={".Net Developer"}
            availableAtLinkedIn={true}
            linkedinLink={
              "https://www.linkedin.com/in/gustav-albert-44a312128/"
            }
          />
          <ContactCard
            image={Image}
            fullName={"Daniel Aldén"}
            occupation={".Net Developer"}
            availableAtLinkedIn={true}
            linkedinLink={"https://www.linkedin.com/in/daniel-aldén-61a6ab1b8/"}
          />
          <ContactCard
            image={Image}
            fullName={"Jessica Sjösten"}
            occupation={".Net Developer"}
            availableAtLinkedIn={true}
            linkedinLink={
              "https://www.linkedin.com/in/jessica-sjösten-a4a5a922a/"
            }
          />
        </div>

        <div className="row2">
          <ContactCard
            image={Image}
            fullName={"Jonathan Perlow"}
            occupation={".Net Developer"}
            availableAtLinkedIn={true}
            linkedinLink={"https://www.linkedin.com/in/jonathan-perlow/"}
          />
          <ContactCard
            image={Image}
            fullName={"Robert Grimsborn"}
            occupation={".Net Developer"}
            availableAtLinkedIn={true}
            linkedinLink={
              "https://www.linkedin.com/in/robert-grimsborn-615531252/"
            }
          />
          <ContactCard
            image={Image}
            fullName={"Adam Tollin"}
            occupation={".Net Developer"}
            availableAtLinkedIn={false}
            linkedinLink={"https://www.linkedin.com/"}
          />
        </div>
      </div>
    </>
  );
}
