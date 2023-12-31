import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className='sm:flex hidden mr-10 relative'>
        <SideBar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <div className="container">
          <main className="main">
            <h1 className="title">
              Welcome to <a href="https://thirdweb.com/">thirdweb</a>!
            </h1>

            <p className="description">
              Get started by configuring your desired network in{" "}
              <code className="code">src/index.js</code>, then modify the{" "}
              <code className="code">src/App.js</code> file!
            </p>
            <div className="grid">
              <a href="https://portal.thirdweb.com/" className="card">
                <h2>Portal &rarr;</h2>
                <p>
                  Guides, references and resources that will help you build with
                  thirdweb.
                </p>
              </a>

              <a href="https://thirdweb.com/dashboard" className="card">
                <h2>Dashboard &rarr;</h2>
                <p>
                  Deploy, configure and manage your smart contracts from the
                  dashboard.
                </p>
              </a>

              <a href="https://portal.thirdweb.com/templates" className="card">
                <h2>Templates &rarr;</h2>
                <p>
                  Discover and clone template projects showcasing thirdweb features.
                </p>
              </a>
            </div>
          </main>
        </div>
      </div>

    </div>

  );
}
