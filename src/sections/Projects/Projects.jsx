import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
const customStyles = {
  content: {
    width: "1000px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Data = [
  {
    img: "/icon.svg",
    header: "SMART HR",
    body: {
      description: [
        "Explored and developed the Employee Claim feature and its integration with the Admin Dashboard in Smart HR.",
        "Implemented functionalities for Employee Self-Service (ESS) and Manager Self-Service (MSS), including on-behalf claim requests using React.js with TypeScript.",
        "Leveraged React Query for state management and asynchronous data fetching, ensuring seamless backend interactions.",
        "Designed and implemented a responsive and user-friendly interface using the Material UI framework, adhering to modern UI/UX standards.",
        "Successfully integrated the module with a legacy system, ensuring compatibility and smooth data flow.",
        "Enhanced overall system efficiency and user experience through effective implementation and integration.",
      ],
    },
  },
  {
    img: "/icon.svg",
    header: "SMARTER HR",
    body: {
      description: [
        "Worked on Smarter HR, exploring and developing comprehensive HR services, including Attendance tracking,Leave management,Overtime tracking,Payroll processing,Various other setups.",
        "Designed and implemented features for Employee Self-Service (ESS), Manager Self-Service (MSS), and the Admin Dashboard using React.js with TypeScript.",
        "Utilized React Query for efficient state management and data handling, ensuring real-time updates and smooth user interactions.",
        "Developed responsive and intuitive user interfaces with the Material UI framework, delivering a modern and user-friendly experience.",
        "Played a key role in enhancing functionality and streamlining HR processes across the platform.",
      ],
    },
  },
];
function Projects() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState();
  function openModal(item) {
    setIsOpen(true);
    setSelected(item);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {Data.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => {
                openModal(item);
              }}
              style={{ border: "none", cursor: "pointer" }}
            >
              <img src={item.img} alt="" style={{ width: "80px" }} />
              <p>{item.header}</p>
            </div>
          </div>
        ))}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          className={styles.modal}
        >
          <h2>{selected?.header}</h2>
          <ul>
            {selected?.body.description.map((item, index) => (
              <li style={{ marginTop: "10px" }}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </Modal>
      </div>
    </section>
  );
}

export default Projects;
