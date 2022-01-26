import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(data);

  return (
    <div className="contact">
      <div className="left">
        <h2>Our location:</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondra%2C%20Regatul%20Unit!5e0!3m2!1sro!2sro!4v1628771075889!5m2!1sro!2sro"
          width="500"
          height="600"
        ></iframe>
      </div>
      <br></br>
      <div className="right">
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <h1>Contact us</h1>

          <label>
            Name <br />
            <input
              type="text"
              name="name"
              placeholder="your name..."
              {...register("name", { required: true })}
            />
          </label>
          <br />
          {errors.name && <span>This field is required</span>}
          <br></br>
          <label>
            Email address <br />
            <input
              type="email"
              name="email"
              placeholder="your email"
              {...register("email", { required: true })}
            />
          </label>
          <br />
          {errors.email && <span>This field is required</span>}
          <br />
          <div className="radio-section">          
              <input
                {...register("fav_language", { required: true })}
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
              />
                <label>Male</label>
       
              <input
                {...register("fav_language", { required: true })}
                type="radio"
                id="css"
                name="fav_language"
                value="CSS"
              />
              <label>Female</label>
        
          </div>          {errors.fav_language && <span>This field is required</span>}
          <br></br>

          <label>
            Mobile<br></br>
            <input
              name="phone"
              type="text"
              placeholder="your mobile number"
              {...register("phone", { required: true })}
            />
          </label>
          <br></br>
          {errors.phone && <span>This field is required</span>}
          <br></br>

          <label>
            Designation<br></br>
            <input
              type="text"
              name="designation"
              className="line"
              placeholder="your designation"
              {...register("designation", { required: true })}
            />
          </label>
          <br></br>
          {errors.designation && <span>This field is required</span>}
          <br />
          <label>
            Location<br></br>
            <input
              type="text"
              name="location"
              placeholder="your location"
              {...register("location", { required: true })}
            />
          </label>
          <br></br>
          {errors.location && <span>This field is required</span>}
          <br />
          <label>
            Course<br></br>
            <input
              type="text"
              name="course"
              placeholder="your course"
              {...register("course", { required: true })}
            />
          </label>
          <br></br>
          {errors.course && <span>This field is required</span>}
          <br />
          <label>
            *Remarks<br></br>
            <textarea
              placeholder="your suggestions"
              cols="25"
              rows="2"
            ></textarea>
          </label>
          <br></br>

          <div className="submit-wrap">
          <input type="submit" id="submit" value="Submit" />
                  </div>
                  
        </form>
      </div>
    </div>
  );
}
