function Footer() {
  return (
    <footer className="bg-dark position-absolute bottom-0 w-100 py-2">
      <div className="container text-light text-center">
        <p className="mb-0">Copyright {new Date().getFullYear() === 2024 ? '2024' : '2024 - ' + new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
