import "../../SCSS/contact.scss";
import { ContactCard } from "./contactCard";
import Image from '../../Images/profil.png'

export default function Contact() {
  return (
    <>
    <div className="contact">
      <div className="headerPushback"></div>
      <h1 className="ContactUs">Contact Us</h1>
      <hr></hr>
      <h1 className="Team">Project Team</h1>
      <hr></hr>
      
      
      <div className="rows">
      <ContactCard
      image = {Image}
      fullName={'Linnea Willebrand Vinnberg'}
      occupation={'Project Leader'}
      availableAtLinkedIn={true}
      linkedinLink={'https://www.linkedin.com/in/linnea-willebrand-vinnberg/?originalSubdomain=se'}
      />

      <ContactCard
      image = {Image}
      fullName={'Andrea Olofsson'}
      occupation={'Project Leader'}
      availableAtLinkedIn={true}
      linkedinLink={'https://www.linkedin.com/in/andréa-olofsson-12b81a1a6/'}
      />
      </div>
      <h1 className="Team">Development Team</h1>
      <hr></hr>
      <div className="rows">
      <ContactCard
      image = {Image}
      fullName={'Imir Norlin'}
      occupation={'.Net Developer'}
      availableAtLinkedIn={true}
      linkedinLink={'https://www.linkedin.com/in/imir-norlin/'}
      />
      <ContactCard
      image = {Image}
      fullName={'Gustav Albert'}
      occupation={'.Net Developer'}
      availableAtLinkedIn={true}
      linkedinLink={'https://www.linkedin.com/in/gustav-albert-44a312128/'}
      />
      <ContactCard
      image = {Image}
      fullName={'Daniel Aldén'}
      occupation={'.Net Developer'}
      availableAtLinkedIn={true}
      linkedinLink={'https://www.linkedin.com/in/daniel-aldén-61a6ab1b8/'}
      />
      <ContactCard
      image = {Image}
      fullName={'Jessica Sjösten'}
      occupation={'.Net Developer'}
      availableAtLinkedIn={true}
      linkedinLink={'https://www.linkedin.com/in/jessica-sjösten-a4a5a922a/'}
      />
      </div>

      
      <div className="rows">
      <ContactCard
      image = {Image}
      fullName={'Jonathan Perlow'}
      occupation={'.Net Developer'}
      availableAtLinkedIn={true}
      linkedinLink={'https://www.linkedin.com/in/jonathan-perlow/'}
      />
      <ContactCard
      image = {Image}
      fullName={'Robert Grimsborn'}
      occupation={'.Net Developer'}
      availableAtLinkedIn={true}
      linkedinLink={'https://www.linkedin.com/in/robert-grimsborn-615531252/'}
      />
      <ContactCard
      image = {Image}
      fullName={'Adam Tollin'}
      occupation={'.Net Developer'}
      availableAtLinkedIn={false}
      linkedinLink={'https://www.linkedin.com/'}
      />
      </div>
      
    </div>
    </>
  );
}
