import React from "react";
import Container from "~components/core/container";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <Container>
        <div className="flex flex-col gap-4 pt-24">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4"></div>
            <div className="col-span-6 flex flex-col gap-3 md:col-span-3 lg:col-span-2">
              <span className="text-sm font-medium text-neutral-200">
                Enterprise
              </span>
              <ul className="flex list-inside flex-col gap-3 text-sm">
                <li>
                  <a className="duration-150" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="duration-150" href="#">
                    Customers
                  </a>
                </li>
                <li>
                  <a className="duration-150" href="#">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a className="duration-150" href="#">
                    Partners
                  </a>
                </li>
                <li>
                  <a className="duration-150" href="#">
                    Jobs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 flex flex-col gap-3 md:col-span-3 lg:col-span-2">
              <span className="text-sm font-medium text-neutral-200">
                Product
              </span>
              <ul className="flex list-inside flex-col gap-3 text-sm">
                <li>
                  <a className="duration-150" href="#">
                    Security
                  </a>
                </li>
                <li>
                  <a className="duration-150" href="#">
                    Customization
                  </a>
                </li>
                <li>
                  <a className="duration-150" href="#">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a className="duration-150" href="#">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 flex flex-col gap-3 md:col-span-3 lg:col-span-2">
              <span className="text-sm font-medium text-neutral-200">Docs</span>
              <ul className="flex list-inside flex-col gap-3 text-sm">
                <li>
                  <a className="duration-150" href="#">
                    Introduction
                  </a>
                </li>
                <li>
                  <a className="duration-150" href="#">
                    Installation
                  </a>
                </li>
                <li>
                  <a className="duration-150" href="#">
                    Utils
                  </a>
                </li>
                <li>
                  <a className="duration-150" href="#">
                    Principles
                  </a>
                </li>
                <li>
                  <a className="duration-150" href="#">
                    Jargon
                  </a>
                </li>
                <li>
                  <a className="duration-150" href="#">
                    Plugin
                  </a>
                </li>
                <li>
                  <a className="duration-150" href="#">
                    Customizer
                  </a>
                </li>
                <li>
                  <a className="duration-150" href="#">
                    Boilerplates
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 flex flex-col gap-3 md:col-span-3 lg:col-span-2">
              <span className="text-sm font-medium text-neutral-200">
                Community
              </span>
              <ul className="flex list-inside flex-col gap-3 text-sm">
                <li>
                  <a className="duration-150" href="#">
                    GitHub
                  </a>
                </li>
                <li>
                  <a className="duration-150" href="#">
                    Discord
                  </a>
                </li>
                <li>
                  <a className="duration-150" href="#">
                    Slack
                  </a>
                </li>
                <li>
                  <a className="duration-150" href="#">
                    X / Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-2 py-2 text-sm md:flex-row md:gap-4">
            <span>© 2025 Attio Ltd. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
