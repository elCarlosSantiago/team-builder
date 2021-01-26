import React from 'react';

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='form-container'>
        <label>
          First Name <br/>
          <input
            type="text"
            name="fname"
            onChange={onChange}
            placeholder="First Name plz"
            maxLength="30"
            value={values.fname}
          />
        </label>
        <label>
          Middle Name <br/>
          <input
            type="text"
            name="mname"
            onChange={onChange}
            placeholder="mIdDlE nAmE oPtIoNaL"
            maxLength="30"
            value={values.mname}
          />
        </label>
        <label>
          Last Name <br/>
          <input
            type="text"
            name="lname"
            onChange={onChange}
            placeholder="Last Name"
            maxLength="30"
            value={values.lname}
          />
        </label>
        <label>
          Likes <br/>
          <input
            type="text"
            name="likes"
            onChange={onChange}
            placeholder="Oyioy"
            maxLength="30"
            value={values.likes}
          />
        </label>
        <label>
          E-mail <br/>
          <input
            type="email"
            name="email"
            onChange={onChange}
            placeholder="email not for marketing"
            maxLength="30"
            value={values.email}
          />
        </label>
        <label>
          Role <br/>
          <select name='role' value={values.role} onChange={onChange}>
              <option value =''>---Select Role---</option>
              <option value ='Fully Stacked Full Stack'>Fully Stacked Full Stack</option>
              <option value ='Front End Engineer'>Front End Engineer</option>
              <option value ='Back End Engineer'>Back End Engineer</option>
              <option value ='Project Engineer'>Project Engineer :( </option>
              <option value ='Swamp Manager'>Swamp Manager</option>

          </select>
        </label>
        <div className="submit">
          <button>Submitty!</button>
        </div>
      </div>
    </form>
  );
}
