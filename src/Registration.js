import React from "react";
import { useForm } from "react-hook-form";

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(data);

  return (
    <div className="registration-wrapper">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration</h1>
        <div className="reg-form">
          <div className="left-form">
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
            <br />
            <div className="radio-section">
              <div className="male">
                <input
                  {...register("fav_language", { required: true })}
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                  <label>Male</label>
              </div>
              <div className="female">
                <input
                  {...register("fav_language", { required: true })}
                  type="radio"
                  id="css"
                  name="fav_language"
                  value="CSS"
                />
                <label>Female</label>
                <br />
              </div>
              <br />
            </div>
            {errors.fav_language && <span>This field is required</span>}
            <br></br>
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
          </div>
          <div className="right-form">
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
          </div>
        </div>
        <div className="submit-wrap">
          <input type="submit" id="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
