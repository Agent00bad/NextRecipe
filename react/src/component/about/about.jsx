import "../../SCSS/about.scss";

export default function About() {
  return (
    <div className="about">
      <div className="headerPushback"></div>
      <div className="textBox">
        <h1 className="textHeader title">About Us</h1>
        <hr></hr>
        <p className="text">
         &emsp; Människor blir allt mer intresserade av matlagning, speciellt i takt
          med att det växer på sociala medier och ett gott mål mat kräver en
          minst lika god dryck! Vi erbjuder användaren en helhetslösning för den
          ultimata gastronomiska upplevelsen genom vår tjänst PerfectPair. <br></br>
          &emsp; PerfectPair tillåter användaren att matcha sin måltid med en passande
          dryck samtidigt som man kan filtrera vilken typ av mat man är sugen
          på. Användaren kan även anpassa recepten efter allergier och dietära
          val för att få fram ett PerfectPair!
        </p>
      </div>
    </div>
  );
}
