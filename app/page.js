import TopicCard from "./components/TopicCard";
import Quiz from "./components/Quiz";

export default function Page() {
  return (
    <div className="page">
      <section id="intro" className="hero">
        <h1>Namaste dosto! ?? Radhe Cyber Academy me swagat hai</h1>
        <p className="lede">
          Aaj hum sikhenge <strong>Networking Basics</strong>. Simple words me yaad rakho:
          <span className="quote">?Network samjhoge tabhi hacking samjhoge.?</span>
        </p>
        <p>
          Chahe <strong>hacking</strong> ho, <strong>security</strong> ho ya <strong>penetration testing</strong> ? sab kuch network par depend karta hai. Ye
          page aapko fast-track me wohi concepts deta hai jo ek ethical hacker ko
          daily life me chahiye hote hain, woh bhi Hinglish me.
        </p>
      </section>

      <section id="topics" className="topics-grid">
        <TopicCard
          title="1) Network kya hota hai?"
          points={[
            "Do ya zyada devices ka connected system",
            "Data packets ke through communication",
            "Medium: wires (Ethernet), wireless (Wi?Fi)",
          ]}
          hint="Real world me jaise log baat karte hain, waise hi devices packets bhej kar baat karte hain."
        />

        <TopicCard
          title="2) OSI vs TCP/IP"
          points={[
            "OSI (7 layers): Physical ? Application",
            "TCP/IP (4 layers): Link, Internet, Transport, Application",
            "Hacker view: packets kahan drop/alter ho rahe hain, wahi pe dhyan",
          ]}
          hint="Packet capture tools (Wireshark) layers ko decode karke dikhate hain."
          details={{
            callout: "Mnemonic (OSI): Please Do Not Throw Sausage Pizza Away",
            list: [
              "Physical, Data Link, Network, Transport, Session, Presentation, Application",
            ],
          }}
        />

        <TopicCard
          title="3) IP Addressing & Subnetting"
          points={[
            "IPv4: 32-bit address (e.g., 192.168.1.10)",
            "CIDR: /24 means 255.255.255.0 (256 addresses)",
            "Private ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
          ]}
          hint="Recon me private IPs ka matlab: internal network enumeration ke chances."
        />

        <TopicCard
          title="4) Ports & Protocols"
          points={[
            "Common: 22-SSH, 80/443-HTTP(S), 53-DNS, 25-SMTP, 3306-MySQL",
            "TCP reliable, UDP fast (stateless)",
            "Service fingerprinting: version + misconfig = entry point",
          ]}
          hint="Nmap ke -sS (SYN scan) aur -sV (version) ethical recon ke staples hain."
        />

        <TopicCard
          title="5) Routing, NAT & DNS"
          points={[
            "Router: packets ko next hop tak bhejta hai",
            "NAT: private ? public translation",
            "DNS: names ? IP mapping (A, AAAA, CNAME, TXT)",
          ]}
          hint="DNS misconfigs (zone transfer) aur weak records often goldmine hote hain."
        />

        <TopicCard
          title="6) Tools for Ethical Hackers"
          points={[
            "Wireshark, tcpdump: packet analysis",
            "nmap, masscan: scanning",
            "netcat (nc): swiss?army knife for TCP/UDP",
          ]}
          hint="Always authorized scope me kaam karein. Illegal activity ? ethical hacking."
        />
      </section>

      <section id="quiz" className="quiz-section">
        <h2>Quick Quiz</h2>
        <Quiz />
      </section>

      <section id="resources" className="resources">
        <h2>Further Resources</h2>
        <ul>
          <li>
            <a href="https://nmap.org/book/man-briefoptions.html" target="_blank" rel="noreferrer">Nmap quick reference</a>
          </li>
          <li>
            <a href="https://www.wireshark.org/docs/" target="_blank" rel="noreferrer">Wireshark docs</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/TCP" target="_blank" rel="noreferrer">MDN: TCP/UDP basics</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
