import Heading from "./Heading";

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 py-24">
      <Heading>Contact</Heading>
      <div className="pt-24">
        <form className="grid gap-6 max-w-[500px] mx-auto" action="">
          <div className="grid gap-2">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="bg-transparent border rounded-md px-3 py-2"
              placeholder="Name"
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="bg-transparent border rounded-md px-3 py-2"
              placeholder="Email"
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message">Email</label>
            <textarea
              id="message"
              className="bg-transparent border rounded-md px-3 py-2"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>
          <button className="border border-zinc-200 dark:border-zinc-900 bg-zinc-200 dark:bg-zinc-900 hover:bg-zinc-300 hover:dark:bg-zinc-950 w-max px-4 py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
