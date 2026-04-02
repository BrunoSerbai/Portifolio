import { useEffect, useState } from "react";

const links = [
  { href: "#hero",     label: "início"   },
  { href: "#sobre",    label: "sobre"    },
  { href: "#stack",    label: "stack"    },
  { href: "#projetos", label: "projetos" },
];

function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <span className="navbar-logo">bruno<span>.serbai</span></span>
        <ul className="navbar-links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={active === href.slice(1) ? "active" : ""}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
