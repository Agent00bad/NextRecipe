export function ContactCard({
  image,
  fullName,
  occupation,
  availableAtLinkedIn,
  linkedinLink,}) {
  return (
    <>
      <div className="contactCard">
        <img src={image} alt="No image" />
        <div className="contactTextBox">
          <p>{fullName}</p>
          <p>Role: {occupation}</p>
          { availableAtLinkedIn === true ? (
            <p><a href={linkedinLink} className="lastEntry">LinkedIn</a></p>
          ) : (
            <p className="lastEntry">No LinkedIn available</p>
          )}
          
        </div>
      </div>
    </>
  );
}
