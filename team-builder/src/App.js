import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Member from './components/Member';

const teamArr = [
  {
    fname: 'Carlos',
    mname: 'Santiago',
    lname: 'Nevett',
    likes: `to Rap but can't`,
    email: 'csnevett@gmail.com',
    role: 'Fully stacked Fullstack',
  },
  {
    fname: 'Aurora',
    mname: 'Catalina',
    lname: 'Kearney',
    likes: 'steal my airpods',
    email: 'auro@email.com',
    role: 'Super smart stuff',
  },
  {
    fname: 'Uma',
    mname: 'The Puma',
    lname: 'Purrman',
    likes: `is a cat so I don't know`,
    email: 'cat@cats.com',
    role: 'Unemployed freeloader',
  },
];

const initFormValues = {
  fname: '',
  mname: '',
  lname: '',
  likes: '',
  email: '',
  role: '',
};

function App() {
  const [teamList, setTeamList] = useState(teamArr);
  const [formValues, setFormValues] = useState(initFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const newMember = {
      fname: formValues.fname.trim(),
      mname: formValues.mname.trim(),
      lname: formValues.lname.trim(),
      likes: formValues.likes.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    };

    if (
      !newMember.fname ||
      !newMember.email ||
      !newMember.lname ||
      !newMember.role
    ) {
      return;
    }
    setTeamList([newMember, ...teamList]);
    setFormValues(initFormValues);
  };

  return (
    <div className="container">
      <h1>Form App</h1>
      <Form values={formValues} update={updateForm} submit={submitForm} />

      {teamList.map((member) => {
        return <Member details={member} />;
      })}
    </div>
  );
}

export default App;
