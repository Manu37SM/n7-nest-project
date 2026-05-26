export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 mt-24 py-16 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="text-7xl font-bold text-blue-500">N7</div>

        <div>
          <h4 className="mb-4 font-semibold">Solutions</h4>
          <p>Core Banking</p>
          <p>Digital Banking</p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">Company</h4>
          <p>About</p>
          <p>Careers</p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">Social</h4>
          <p>LinkedIn</p>
          <p>X</p>
        </div>
      </div>
    </footer>
  );
}
