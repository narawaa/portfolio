'use client'
import React, { useState } from 'react'
import { ACCESS_KEY } from './constant';

export const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  }

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target as HTMLFormElement;
    const formData = new FormData(event.target);

    formData.append("access_key", ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setShowModal(true);
      form.reset();
    }
    setIsLoading(false);
  };

  return (
    <section className="bg-gray-900 text-gray-200 px-12 py-16">
      <form onSubmit={onSubmit} className="flex flex-col items-center md:items-start gap-6">
        <h1 className="text-2xl font-bold">Contact Form</h1>

        <div className="bg-red-400 w-full md:w-1/2 lg:w-[40%] space-y-3 text-sm rounded-xl py-8">
          <div className="flex justify-center">
            <input type="text" className="py-2 px-4 text-gray-600 w-[85%] rounded-xl" placeholder="Your Name" name='name' required/>
          </div>

          <div className="pb-2 flex justify-center">
            <input type="text" className="py-2 px-4 text-gray-600 w-[85%] rounded-xl" placeholder="Your Email" name='email' required pattern='@'/>
          </div>

          <div className="pb-3 flex justify-center">
            <textarea className="py-2 px-4 h-32 text-gray-600 w-[85%] rounded-xl resize-none" placeholder="Write Messages" name='message' required/>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="border-2 py-2 px-8 rounded-full bg-red-500" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>

        </div>
      </form>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 text-black-100">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Success!</h2>
            <p>Your message has been sent successfully.</p>
            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
          </div>
        </div>
      )}

    </section>
  )
}