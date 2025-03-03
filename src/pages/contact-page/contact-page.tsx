import React, { useState, useEffect } from 'react';
import {
  ContactContainer,
  ContactHeader,
  ContactContent,
  ContactForm,
  ContactInfo,
  ContactTitle,
  ContactDescription,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormSelect,
  FormButton,
  FormError,
  InfoItem,
  InfoIcon,
  InfoText,
  InfoTitle,
  ContactMap
} from './styles';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  serviceType?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  // Update title and meta description for SEO
  useEffect(() => {
    document.title = 'Contact Us | Orbit-Ops | Web Design, Graphic Design & Automation';
  }, []);

  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (formValues.phone && !/^\+?[0-9\s\-()]+$/.test(formValues.phone)) {
      errors.phone = 'Phone number is invalid';
      isValid = false;
    }

    if (!formValues.serviceType) {
      errors.serviceType = 'Please select a service type';
      isValid = false;
    }

    if (!formValues.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulating form submission with a timeout
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormValues({
          name: '',
          email: '',
          phone: '',
          company: '',
          serviceType: '',
          message: ''
        });
      }, 1500);
    }
  };

  return (
    <ContactContainer>
      <ContactHeader>
        <h1>
          Get In Touch
          <span className="terminal-text">_</span>
        </h1>
        <p>We'd love to hear from you. Reach out to discuss your project or request a quote.</p>
      </ContactHeader>

      <ContactContent>
        <ContactForm onSubmit={handleSubmit}>
          <ContactTitle>Send Us a Message</ContactTitle>
          <ContactDescription>
            Fill out the form below and we'll get back to you as soon as possible.
          </ContactDescription>

          {isSubmitted ? (
            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for contacting Orbit-Ops. We'll respond to your inquiry shortly.</p>
            </div>
          ) : (
            <>
              <FormGroup>
                <FormLabel htmlFor="name">Name <span className="required">*</span></FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  $hasError={!!formErrors.name}
                />
                {formErrors.name && <FormError>{formErrors.name}</FormError>}
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="email">Email <span className="required">*</span></FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  $hasError={!!formErrors.email}
                />
                {formErrors.email && <FormError>{formErrors.email}</FormError>}
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="phone">Phone</FormLabel>
                <FormInput
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  $hasError={!!formErrors.phone}
                />
                {formErrors.phone && <FormError>{formErrors.phone}</FormError>}
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="company">Company/Organization</FormLabel>
                <FormInput
                  type="text"
                  id="company"
                  name="company"
                  value={formValues.company}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="serviceType">
                  What service(s) are you interested in? <span className="required">*</span>
                </FormLabel>
                <FormSelect
                  id="serviceType"
                  name="serviceType"
                  value={formValues.serviceType}
                  onChange={handleChange}
                  $hasError={!!formErrors.serviceType}
                >
                  <option value="">Select a service...</option>
                  <option value="web-design">Web Design</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="automation">Automation</option>
                  <option value="support">Support</option>
                  <option value="multiple">Multiple Services</option>
                </FormSelect>
                {formErrors.serviceType && <FormError>{formErrors.serviceType}</FormError>}
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="message">
                  Message <span className="required">*</span>
                </FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formValues.message}
                  onChange={handleChange}
                  $hasError={!!formErrors.message}
                  placeholder="Tell us about your project or inquiry..."
                />
                {formErrors.message && <FormError>{formErrors.message}</FormError>}
              </FormGroup>

              <FormButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </FormButton>
            </>
          )}
        </ContactForm>

        <ContactInfo>
          <ContactTitle>Contact Information</ContactTitle>
          <ContactDescription>
            Feel free to reach out to us through any of these channels or visit our office.
          </ContactDescription>

          <InfoItem>
            <InfoIcon>
              <i className="fas fa-envelope"></i>
            </InfoIcon>
            <InfoText>
              <InfoTitle>Email</InfoTitle>
              <a href="mailto:info@orbit-ops.com">info@orbit-ops.com</a>
            </InfoText>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <i className="fas fa-phone-alt"></i>
            </InfoIcon>
            <InfoText>
              <InfoTitle>Phone</InfoTitle>
              <a href="tel:+1-123-456-7890">(123) 456-7890</a>
            </InfoText>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <i className="fas fa-map-marker-alt"></i>
            </InfoIcon>
            <InfoText>
              <InfoTitle>Office</InfoTitle>
              <address>
                123 Tech Avenue<br />
                Cyberspace, CS 12345
              </address>
            </InfoText>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <i className="fas fa-clock"></i>
            </InfoIcon>
            <InfoText>
              <InfoTitle>Business Hours</InfoTitle>
              <p>Monday - Friday: 9am - 6pm<br />Saturday: 10am - 2pm</p>
            </InfoText>
          </InfoItem>

          <ContactMap>
            <div className="map-placeholder">
              <i className="fas fa-map"></i>
              <p>Interactive Map</p>
            </div>
          </ContactMap>
        </ContactInfo>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactPage;