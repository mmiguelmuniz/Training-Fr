import './agendamento.css';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import thankYouImage from '../assets/robozin.png';
import { useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import _robo from './tarefa-concluida.png';


type FormValues = {
  name: string;
  email: string;
  department: string;
  course: string;
  suggestedDateTime: string | null;
  describe: string;
};

const FormPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormValues>();
  const location = useLocation();
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const courseFromURL = queryParams.get('course');

    if (courseFromURL) {
      setValue('course', courseFromURL);
    }

    const targetSection = document.getElementById('target-section');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [location, setValue]);

  const copyToClipboard = () => {
    const courseName = watch('course');
    navigator.clipboard.writeText(courseName).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    });
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/schedules', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro ao enviar dados:', errorData);
        alert('Houve um problema ao enviar os dados. Tente novamente.');
      } else {
        const result = await response.json();
        console.log('Agendamento criado com sucesso:', result);
        setFormSubmitted(true);
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <div className="container mt-5">
    {formSubmitted ? (
      <div className="thank-you-message text-center">
        <section id="thank-you-section">
        <img src={_robo} alt="Thank You" className="thank-you-image" />
        <h1>Thank You!</h1>
        <p>
        <strong>If you followed the steps to schedule on Google Calendar, <br />your training request has been completed successfully. Please check your email</strong><br />
        If you would like to book additional training, please press the button below.
        </p>
        </section>
        <div className="container mt-4">
          <div className="d-flex justify-content-center">
            <a className="no-decoration" href="/" target="_self">
              <button className="btn btn-primary thank-you-button">
                <i className="fas fa-calendar-plus me-2"></i>Schedule a new training
              </button>
            </a>
          </div>
        </div>
      </div>
    ) : (
      <>
        <section id="target-section">
          <h1 className="title">Request Appointment</h1>
          <br />
          <div className={`card ${step === 2 ? 'expanded-card' : 'card-custom'}`}>
            <div className="card-body">
              {step === 1 && (
                <>
                  <div className="image-container text-center">
                    <p className="mt-3">
                      To schedule your training with us, click next, wait a little and you will have access to our calendar. <br /> <br /> 
                      <strong>
                      The name of the training is below. You will need it for the form; <br />I recommend that you copy the name using the shortcut below. <br />Press the finish button only after you have completed your booking in Google Calendar.
                      </strong>
                    </p>
                  </div>
                  <div className="row mb-3 d-flex justify-content-between align-items-center">
                    <div className="col">
                      <label htmlFor="course" className="form-label">Training</label>
                      <div className="input-group align-items-center">
                        <input
                          type="text"
                          id="course"
                          {...register('course', { required: 'Curso é obrigatório' })}
                          className="form-control"
                          readOnly
                          style={{ background: '#f8f9fa' }}
                        />
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-clipboard btn-sm ms-2"
                          style={{ width: '80px', height: '37px', padding: '5px', marginRight: '5px' }}
                          onClick={copyToClipboard}
                        >
                          <i className="bi bi-clipboard"></i>
                        </button>
                      </div>
                      {copied && (
                        <div style={{ color: '#212529', fontWeight: 'bold', marginTop: '5px' }}>
                          ✔️ Name copied
                        </div>
                      )}
                      {errors.course && <div className="invalid-feedback">{errors.course.message}</div>}
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                    <button type="button" className="btn btn-primary" onClick={() => setStep(2)} disabled={isLoading}>
                      {isLoading ? 'Loading...' : 'Next'}
                    </button>
                  </div>
                </>
              )}
              {step === 2 && (
              <div className="iframe-container">
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ12QWuGyaGLvAtNeMvpY7z_oRZE7wb2dkWIdmocWVur2fn6uEsTToJSBKQ1PM7PaplB-5Riuodm?gv=true"
                  frameBorder="0"
                  title="Google Calendar Scheduling"
                ></iframe>
              </div>
            )}
            {step === 2 && (
              <div className="d-flex justify-content-center mt-4">
              <button
          type="button"
          className="btn btn-primary finish-button"
          onClick={() => {
            setFormSubmitted(true);
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100); 
          }}
        >
          Finish
        </button>
        </div>
        )}
          </div>
          </div>
        </section>
      </>
    )}
  </div> 
  );
};

export default FormPage;
