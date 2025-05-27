import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form
      action="https://formspree.io/f/mqaqvnpy"
      method="POST"
      className="space-y-6"
    >
      <div>
        <label className="block text-white font-medium mb-2">
          Your email:
        </label>
        <input
          type="email"
          name="email"
          required
          className="input w-full"
        />
      </div>

      <div>
        <label className="block text-white font-medium mb-2">
          Your message:
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="input resize-y w-full"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded w-full"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
