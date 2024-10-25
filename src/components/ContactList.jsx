import Contact from "./Contact"

const ContactList = () => {

  const contact = {
    name: 'therese Lidbom',
    email: 'therese@domain.com'
  }

  return (
    <div className="contact-list">

      <Contact name="Hans Mattin-Lassei" email="hans@domain.com" />
      <Contact name="Tommy Mattin-Lassei" email="tommy@domain.com" />
      <Contact name={Contact.name} email={Contact.email} />


      {/* <div className="contact">
        <p className="name">Hans Mattin-Lassei</p>
        <p className="email">Hans@domain.com</p>
      </div>
      <div className="contact">
        <p className="name">Tommy Mattin-Lassei</p>
        <p className="email">tommy@domain.com</p>
      </div>
      <div className="contact">
        <p className="name">Therese lidbom</p>
        <p className="email">therese@domain.com</p>
      </div> */}



    </div>
  )
}
export default ContactList