import React from 'react'

const Client = ({ client }) => {

  const { name, lastName, email, company, phoneNumber } = client
  return (

    <li className="client">
      <div className="info-client">
        <p className="name">{name}</p>
        <p className="company">{company}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
      </div>
      <div className="actions">
        <a href="#" className="btn btn-blue">
          <i className="fas fa-pen-alt"></i>
          Edit client
        </a>
        <button type="button" className="btn btn-red btn-delete">
          <i className="fas fa-times"></i>
          delete client
        </button>
      </div>
    </li>


  )
}

export default Client
