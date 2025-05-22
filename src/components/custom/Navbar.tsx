import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
} from "@/components/ui/resizable-navbar.tsx";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu.tsx";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import WebnwellImg from '@/assets/webnwell-hero-img.png'
import { Link } from "react-router-dom";

const ResizableNavbar = () => {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="w-full sticky top-0 z-70">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo/>
          {/*<NavItems items={navItems}/>*/}
          <Menu setActive={setActive}>

            {/*<MenuItem setActive={setActive} active={active} item={*/}
            {/*  <div className="flex items-center text-black dark:text-white gap-1">*/}
            {/*    Solutions <ChevronDown className="h-4 w-4" />*/}
            {/*  </div>*/}
            {/*} menuId="solutions-menu">*/}
            {/*  <div className="flex flex-col space-y-4 text-sm">*/}
            {/*    <HoveredLink href="/web-dev">Web Development</HoveredLink>*/}
            {/*    <HoveredLink href="/interface-design">Interface Design</HoveredLink>*/}
            {/*    <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>*/}
            {/*    <HoveredLink href="/branding">Branding</HoveredLink>*/}
            {/*  </div>*/}
            {/*</MenuItem>*/}

            <MenuItem setActive={setActive} active={active} item={
              <div className="flex items-center text-black dark:text-white gap-1">
                Projects <ChevronDown className="h-4 w-4" />
              </div>
            } menuId="products-menu">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Webnwell"
                  href="projects/webnwell"
                  src={WebnwellImg}
                  description="Track your ads from one place"
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>

            {/*<MenuItem setActive={setActive} active={active} item="pricing">*/}
            {/*  <div className="flex flex-col space-y-4 text-sm">*/}
            {/*    <HoveredLink href="/hobby">Hobby</HoveredLink>*/}
            {/*    <HoveredLink href="/individual">Individual</HoveredLink>*/}
            {/*    <HoveredLink href="/team">Team</HoveredLink>*/}
            {/*    <HoveredLink href="/enterprise">Enterprise</HoveredLink>*/}
            {/*  </div>*/}
            {/*</MenuItem>*/}

          </Menu>
          <Link to="/about-us" className="text-white">About us</Link>
          {/*<div className="flex items-center gap-4">*/}
          {/*  <NavbarButton variant="secondary">Login</NavbarButton>*/}
          {/*  <NavbarButton variant="primary">Book a call</NavbarButton>*/}
          {/*</div>*/}
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo/>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default ResizableNavbar;
