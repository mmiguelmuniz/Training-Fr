import React from 'react';
import Card from './card';
import './card.css';
import './body copy.css';
import projetor from '../assets/Projetor Interativo.png';
import som from '../assets/sistema-som.png';
import camera from '../assets/camera.png';
import _Win from '../assets/windowns.png';
import _apps from '../assets/apps.png';
import _Chorme from '../assets/Chormebook.png';
import _jupiter from '../assets/124558.png';
import _it from '../assets/helpdesk__1_-removebg-preview.png';
import _Drive from '../assets/Drive.png';
import _totvs from '../assets/TOTVS_pos (1).jpg';
import _after from '../assets/Green Modern Meet The Team Instagram Post (1).png';
import _gerais from '../assets/it-service.png';



const BodyPart2: React.FC = () => {
  return (
    <div className="container mt-4">
      <div className="row mt-4">
        <div className="col-md-4">
          <Card
            imgSrc={projetor}
            title="Interactive Projector"
            text="Transform any flat surface into an interactive display. They are widely used in educational, corporate, and collaborative environments, providing a more immersive."
            link="/agendamento?course=Interactive%20Projector#target-section"
            linkText="Schedule Training"
            imgClass="img-projetor"
          />
        </div>
        <div className="col-md-4">
          <Card
            imgSrc={camera}
            title="Document Camera"
            text="You can transform any surface into an interactive display, providing a more engaging and dynamic learning, presentation, or collaboration experience."
            link="/agendamento?course=Document%20Camera#target-section"
            linkText="Schedule Training"
            imgClass="img-camera"
          />
        </div>
        <div className="col-md-4">
          <Card
            imgSrc={som}
            title="Sound System"
            text="You can transform any space into an engaging, dynamic environment for learning, presentations, or collaborations. Users can enjoy clear, powerful audio."
            link="/agendamento?course=Sound%20System#target-section"
            linkText="Schedule Training"
            imgClass="img-som"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <Card
            imgSrc={_Win}
            title="Windows Basic"
            text="a reliable, easy-to-use operating system that lets you run multiple applications, browse the Internet, and organize your documents efficiently."
            link="/agendamento?course=Windows%20Basic#target-section"
            linkText="Schedule Training"
            imgClass="img-projetor"
          />
        </div>
        <div className="col-md-4">
          <Card
            imgSrc={_apps}
            title="Google Apps"
            text="A reliable, easy-to-use suite of apps that lets you create, edit documents, spreadsheets, and presentations and organize your work efficiently."
            link="/agendamento?course=Google%20Apps#target-section"
            linkText="Schedule Training"
            imgClass="img-camera"
          />
        </div>
        <div className="col-md-4">
          <Card
            imgSrc={_Chorme}
            title="Chromebooks"
            text="A reliable and easy-to-use device. Chromebooks offer fast performance, seamless integration with Google services, and a secure environment for all your needs."
            link="/agendamento?course=Chromebooks#target-section"
            linkText="Schedule Training"
            imgClass="img-som"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <Card
            imgSrc={_jupiter}
            title="Jupiter Features"
            text="Transform any flat surface into an interactive display. They are widely used in educational, corporate, and collaborative environments, providing a more immersive."
            link="/agendamento?course=Jupiter%20Features#target-section"
            linkText="Schedule Training"
            imgClass="img-projetor"
          />
        </div>
        <div className="col-md-4">
          <Card
            imgSrc={_it}
            title="IT Requests"
            text="You can transform any surface into an interactive display, providing a more engaging and dynamic learning, presentation, or collaboration experience."
            link="/agendamento?course=IT%20Requests#target-section"
            linkText="Schedule Training"
            imgClass="img-camera"
          />
        </div>
        <div className="col-md-4">
          <Card
            imgSrc={_gerais}
            title="General Equipment"
            text="You can transform any space into an engaging, dynamic environment for learning, presentations, or collaborations. Users can enjoy clear, powerful audio."
            link="/agendamento?course=General%20Equipment#target-section"
            linkText="Schedule Training"
            imgClass="img-som"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <Card
            imgSrc={_Drive}
            title="Google Drive"
            text="Store and share your files securely in the cloud. Google Drive provides a convenient way to collaborate and access your documents from anywhere."
            link="/agendamento?course=Google%20Drive#target-section"
            linkText="Schedule Training"
            imgClass="img-drive"
          />
        </div>
        <div className="col-md-4">
          <Card
            imgSrc={_totvs}
            title="Totvs"
            text="Enhance your business processes with TOTVS solutions. Streamline operations and improve efficiency with our integrated management systems."
            link="/agendamento?course=Totvs#target-section"
            linkText="Schedule Training"
            imgClass="img-totvs"
          />
        </div>
        <div className="col-md-4">
          <Card
            imgSrc={_after}
            title="After School Portal"
            text="Get the best support after your purchase. Our after-sales service ensures that you get the most out of your products with dedicated assistance."
            link="/agendamento?course=After%20School%20Portal#target-section"
            linkText="Schedule Training"
            imgClass="img-aftersales"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4 d-flex justify-content-start">
        <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => {
          window.location.href = "/agendamento?course=Custom%20Training#target-section";
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 100);
        }}
      >
      I didn't find the training I need »
      </button>
        </div>
      </div>
    </div>
  );
};

export default BodyPart2;
