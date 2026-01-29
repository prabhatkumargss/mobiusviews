import React, { useState } from "react";
import { MapPin, Phone, Mail} from "lucide-react";
import LoaderWithLogo from "../../assets/components/Loader";
import AlertMessage from "../../component/AlertMessage";
import ReCAPTCHA from "react-google-recaptcha";

const services = [
  {
    label: "Custom Dashboard Development",
    value: "1",
  },
  {
    label: "Custom Chart & Visualization Creation",
    value: "2",
  },
  {
    label: "Data Integration from Multiple Sources",
    value: "3",
  },
  {
    label: "AI-powered Predictive Analytics",
    value: "4",
  },
  {
    label: "Real-time Reporting Solutions",
    value: "5",
  },
  {
    label: "Data Storytelling & Insight Presentation",
    value: "6",
  },
  {
    label: "Power BI",
    value: "7",
  },
];

const RequestAQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    services: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [alert, setAlert] = useState(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, formData[name]);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Full Name is required";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value))
          error = "Invalid email format";
        break;
      // case "mobile":
      //   if (!value.trim()) error = "Mobile number is required";
      //   else if (!/^\d{10}$/.test(value))
      //     error = "Enter a 10-digit mobile number";
      //   break;
      case "services":
        if (!value.trim()) error = "Please specify the services";
        break;
      case "description":
        if (!value.trim()) error = "Please describe your needs";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const requiredFields = ["name", "email", "services", "description"];

  const isFormValid =
    requiredFields.values(formData).every((val) => val.trim() !== "") &&
    Object.values(errors).every((err) => !err) &&
    captchaVerified;

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    setLoading(true);

    if (isFormValid) {
      console.log(formData);

      const config = {
        SecureToken: "6471bdf6-919d-4560-a47c-f958eb201999",
        To: "contactus@globalsurveysolutions.com",
        From: "contactus@globalsurveysolutions.com",
        Subject: "Contacted through MobiusViews",
        Body: `
          Name: ${formData.name},
          Email: ${formData.email},
          Mobile: ${formData.mobile},
          Services: ${formData.services},
          Message: ${formData.description}
        `,
      };

      console.log(window.Email);

      if (window.Email) {
        try {
          await window.Email.send(config);
          setFormData({
            name: "",
            email: "",
            mobile: "",
            services: "",
            description: "",
          });
          setCaptchaVerified(false);
          setAlert({
            type: "success",
            message: "Your data has been submitted successfully!",
          });
        } catch (error) {
          console.log(error);
          setAlert({
            type: "error",
            message: "Something went wrong. Please try again.",
          });
        }
      }
    }
    setLoading(false);
  };

  return (
    <>
      {loading && <LoaderWithLogo />}

      <section className="relative w-full">
        {alert && (
          <AlertMessage
            type={alert?.type}
            message={alert?.message || ""}
            onClose={() => setAlert(null)}
          />
        )}

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 h-full rounded-xl overflow-hidden shadow-lg bg-white">
          {/* Left Side with Background Image */}
          <div
            className="relative flex justify-center items-center text-white p-6 min-h-[300px] sm:min-h-[400px] lg:min-h-full"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: "url('/quote1.png')",
            }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            <div className="relative z-10 w-full text-center sm:text-left">
              <div className="mt-6 sm:mt-10 grid gap-6 max-w-lg mx-auto sm:mx-0">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-left">
                      Address
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-left">
                      3rd Floor, GM IT Park Sector 142 <br />
                      Noida, Uttar Pradesh Pin - 201304 India
                    </p>
                  </div>
                </div>

                {/* Let's Talk */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-left">
                      Let's Talk
                    </h3>
                    <p className="text-xs sm:text-sm">+91 120-4035800</p>
                  </div>
                </div>

                {/* General Support */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-left">
                      General Support
                    </h3>
                    <p className="text-xs sm:text-sm">sales@mobiusviews.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full p-4 sm:p-6 lg:p-8 bg-white text-black space-y-6 flex flex-col justify-center"
          >
            <p className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">
              Request a Quote
            </p>

            {/* Full Name */}
            <div>
              <label className="block font-medium text-[13px] mb-1 text-left">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-md bg-gray-100 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Enter your full name"
              />
              {touched.name && errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email & Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] mb-1 text-left">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-3 py-2 sm:px-4 rounded-md bg-gray-100 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  placeholder="Enter your email"
                />
                {touched.email && errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-[13px] mb-1 text-left">
                  Phone Number
                </label>
                <input
                  name="mobile"
                  type="text"
                  value={formData.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-3 py-2 sm:px-4 rounded-md bg-gray-100 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            {/* Services */}
            <div>
              <label className="block text-[13px] mb-1 text-left">
                Services <span className="text-red-500">*</span>
              </label>
              <select
                name="services"
                value={formData.services}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-3 py-2 sm:px-4 rounded-md bg-gray-100 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              >
                <option value="">Select a service</option>
                {services.map((data, index) => (
                  <option key={index} value={data.value}>
                    {data.label}
                  </option>
                ))}
              </select>
              {touched.services && errors.services && (
                <p className="text-red-500 text-xs mt-1">{errors.services}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-[13px] mb-1 text-left">
                More Details <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-3 py-2 sm:px-4 rounded-md bg-gray-100 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Tell us more about your needs..."
              ></textarea>
              {touched.description && errors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.description}
                </p>
              )}
            </div>

            {/* Captcha */}
            <div
              style={{ transform: "scale(0.85)", transformOrigin: "0 0" }}
              className="mb-2"
            >
              <ReCAPTCHA
                sitekey="6LeX_QQkAAAAAB0QIYpGkTCl_AeLwQfShypwTL93"
                onChange={() => setCaptchaVerified(true)}
              />
            </div>

            {/* Submit & Mail */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <button
                type="submit"
                disabled={!isFormValid}
                className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-full font-semibold hover:bg-blue-700 transition disabled:opacity-50 justify-center text-sm sm:text-base"
              >
                Submit
              </button>

              <a
                href="mailto:sales@mobiusviews.com?subject=Request%20for%20Quote&body=Hi%20Team%2C%0AI%20am%20interested%20in%20your%20services..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-100 text-blue-700 px-4 py-2 rounded-lg shadow-sm border border-blue-600"
              >
                <div className="p-1 rounded-full bg-blue-600">
                  <Mail size={12} className="text-white" />
                </div>
                <span className="font-semibold  lg:text-[11px]">
                  sales@mobiusviews.com
                </span>
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default RequestAQuote;
