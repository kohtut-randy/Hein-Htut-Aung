import React, { useState } from "react";


function Contact() {
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleContactClick = (contact, idx) => {
    // Copy to clipboard
    navigator.clipboard.writeText(contact.value);
    setCopiedIdx(idx);
    // Advance: open link if LinkedIn
    if (contact.label === "LinkedIn") {
      window.open(`https://${contact.value}`, "_blank");
    }
    // Optionally, add more logic for other types
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  return (
    <section className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#181E2A] to-[#1A1832] text-white gap-10">
      <h1 className="text-5xl text-white">Get In Touch</h1>
      <h2 className="text-3xl font-bold">Let's start a conversation</h2>
      <p className="mt-4 text-lg">
        I'm always interested in hearing about new projects and opportunities. Whether you're a startup looking to build your first product or an established company wanting to innovate, I'd love to help.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition" onClick={() => handleContactClick(contact, idx)}>
            <div className="text-2xl">{contact.icon}</div>
            <div>
              <div className="font-semibold text-black">{contact.label}</div>
              <div className="text-gray-600 flex items-center">
                {contact.label === "LinkedIn" ? (
                  <span className="underline text-blue-600">{contact.value}</span>
                ) : (
                  <span>{contact.value}</span>
                )}
                {copiedIdx === idx && (
                  <span className="ml-2 text-green-500 text-xs">Copied!</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



const contacts = [
  {
    icon: "📧", // Replace with your SVG or icon component
    label: "Email",
    value: "heinhtut1820@gmail.com",
  },
  {
    icon: "📞",
    label: "Whatsapp",
    value: "+959 954470598",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Bangkok",
  },
  {
    icon: "🔗",
    label: "LinkedIn",
    value: "www.linkedin.com/in/hein-htut-aung-b0438324b",
  }
  ,
  {
    icon: "💻",
    label: "GitHub",
    value: "https://github.com/kohtut-randy",
  }
];


export default Contact;

