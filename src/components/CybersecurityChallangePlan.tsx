const CybersecurityChallengePlan = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <p className="text-[30px] font-bold text-center mb-4 text-white">90-Day Cybersecurity Mastery Challenge</p>
      <p className="text-[15px] leading-6 mb-4 text-white">
        <span className="font-bold">Key Technologies: </span>
        Linux (Kali), Networking Basics, Python Scripting, Web Vulnerabilities (OWASP Top 10),
        Cryptography, Forensics Basics, CTF platforms, Virtualization (VirtualBox/VMware).
      </p>
      <p className="text-[15px] leading-10 mb-2 text-white">
        <span className="font-bold">Core Philosophy: </span>
        Understand how systems are attacked and defended. Hands-on practice with tools in a safe, lab environment.
      </p>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 1: </span>
        Foundations & Core Concepts (Days 1-30)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 1:</span>
        Linux Fundamentals & Networking Basics
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Linux: </span>Install Kali Linux (or another security-focused distro) in a VM. Master command-line interface (CLI) basics, file system navigation, user management.</li>
        <li><span className="font-bold">Networking: </span>Understand TCP/IP model, common ports, IP addressing (IPv4/IPv6), subnetting.</li>
        <li><span className="font-bold">Network Tools: </span>Basic usage of `ping`, `traceroute`, `ifconfig`/`ip addr`.</li>
        <li><span className="font-bold">Git & GitHub: </span>Set up repositories for security scripts and notes.</li>
        <li><span className="font-bold">Project: </span>Set up a small virtual lab (Kali VM, Metasploitable2/DVWA VM). Use `nmap` to scan your lab network and identify open ports.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 2:</span>
        Cryptography & Python for Security
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Cryptography: </span>Understand symmetric vs. asymmetric encryption, hashing (MD5, SHA-256), digital signatures, certificates.</li>
        <li><span className="font-bold">Python Scripting: </span>Basic Python for automating tasks, interacting with files, sending network requests.</li>
        <li><span className="font-bold">Encoding/Decoding: </span>Base64, URL encoding.</li>
        <li><span className="font-bold">Project: </span>Write Python scripts to: a) hash a string using different algorithms, b) encrypt/decrypt a message using a simple algorithm (e.g., Caesar cipher, for learning purposes), c) brute-force a simple password using a wordlist.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 3:</span>
        Operating System Security
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Linux Security: </span>User/group management, file permissions (chmod, chown), sudoers file, basic hardening (SSH configuration).</li>
        <li><span className="font-bold">Windows Security (Basics): </span>User Account Control (UAC), Firewall, Windows Defender concepts.</li>
        <li><span className="font-bold">Malware Concepts: </span>Types of malware (viruses, worms, ransomware), basic infection vectors.</li>
        <li><span className="font-bold">Project: </span>Harden a fresh Linux VM: disable unnecessary services, configure SSH securely, set up a basic firewall (`ufw`), and manage user permissions.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 4:</span>
        Web Application Security - OWASP Top 10 (Part 1)
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">HTTP Basics: </span>Request/Response, Headers, Cookies, Sessions.</li>
        <li><span className="font-bold">OWASP Top 10: </span>Deep dive into Injection (SQLi, Command Injection), Cross-Site Scripting (XSS), Broken Authentication.</li>
        <li><span className="font-bold">Tools: </span>Browser Developer Tools, basic `curl` usage.</li>
        <li><span className="font-bold">Project: </span>Set up a deliberately vulnerable web application (e.g., DVWA, OWASP Juice Shop) in your lab. Practice identifying and exploiting SQL Injection and XSS vulnerabilities.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 2: </span>
        Intermediate & Practical Tools (Days 31-60)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 5:</span>
        Web Application Security - OWASP Top 10 (Part 2) & Burp Suite
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">OWASP Top 10: </span>Insecure Design, Security Misconfiguration, Cross-Site Request Forgery (CSRF).</li>
        <li><span className="font-bold">Burp Suite (Community Edition): </span>Learn to use Proxy, Repeater, Intruder for web application testing.</li>
        <li><span className="font-bold">Session Management: </span>Understanding session tokens and their vulnerabilities.</li>
        <li><span className="font-bold">Project: </span>Use Burp Suite to analyze HTTP requests, intercept and modify traffic, and test for CSRF and other vulnerabilities on your vulnerable lab application.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 6:</span>
        Network Security & Traffic Analysis
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Firewalls: </span>Types (packet filtering, stateful), rules, common configurations.</li>
        <li><span className="font-bold">Intrusion Detection/Prevention Systems (IDS/IPS): </span>Concepts and basic functionalities.</li>
        <li><span className="font-bold">Wireshark: </span>Capture and analyze network packets. Understand common protocols (HTTP, DNS, FTP, SSH) and identify suspicious activity.</li>
        <li><span className="font-bold">Project: </span>Capture network traffic in your lab environment using Wireshark. Analyze captured packets to identify unencrypted credentials, unusual port activity, or suspicious requests.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 7:</span>
        Ethical Hacking Methodologies & Metasploit
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Penetration Testing Phases: </span>Reconnaissance, Scanning, Enumeration, Exploitation, Post-Exploitation, Reporting.</li>
        <li><span className="font-bold">Metasploit Framework: </span>Basics of using `msfconsole`, finding exploits, setting payloads, gaining shells.</li>
        <li><span className="font-bold">Vulnerability Scanning: </span>Introduction to tools like Nessus (conceptual) or OpenVAS (if time permits for setup).</li>
        <li><span className="font-bold">Project: </span>Use Metasploit to exploit a known vulnerability on Metasploitable2 (in your isolated lab). Practice gaining a shell and performing basic post-exploitation tasks.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 8:</span>
        Digital Forensics & Incident Response (DFIR) Basics
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">DFIR Concepts: </span>Phases of incident response (preparation, identification, containment, eradication, recovery, post-incident analysis).</li>
        <li><span className="font-bold">Forensics Tools (Introduction): </span>Basic use of `foremost`, `strings`, `binwalk`. Understand disk imaging concepts.</li>
        <li><span className="font-bold">Malware Analysis (Basic Static): </span>Using `file`, `strings`, `pefile` (for Windows executables) to gather information about suspicious files (in a safe VM).</li>
        <li><span className="font-bold">Project: </span>Given a small disk image (e.g., from a CTF challenge), use basic forensic tools to extract hidden files or recover deleted data.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 3: </span>
        Specialization, CTFs & Job Readiness (Days 61-90)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 9:</span>
        CTF Practice & Problem Solving
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">CTF Platforms: </span>Dedicate significant time to solving Capture The Flag challenges on platforms like <span className="font-bold">TryHackMe, Hack The Box (starting with easy/guided rooms), PicoCTF</span>.</li>
        <li><span className="font-bold">Problem Categories: </span>Focus on Web, Forensics, Reverse Engineering (basics), Binary Exploitation (basics), Cryptography challenges.</li>
        <li><span className="font-bold">Documentation: </span>Write up solutions (walkthroughs) for challenges you solve.</li>
        <li><span className="font-bold">Project: </span>Solve 3-5 easy CTF challenges and document your methodology for each.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 10:</span>
        CTF Deep Dive & Reporting
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Advanced CTF Techniques: </span>Explore more complex scenarios and exploit chains.</li>
        <li><span className="font-bold">Vulnerability Reporting: </span>Learn to write clear, concise, and actionable vulnerability reports (e.g., executive summary, technical details, remediation steps).</li>
        <li><span className="font-bold">Portfolio Integration: </span>Showcase your CTF write-ups and any personal security tools/scripts you've developed.</li>
        <li><span className="font-bold">Hackathon Prep (Optional): </span>If you plan a cybersecurity-focused hackathon, prepare your lab setup and tools.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 11:</span>
        Specialization & Resume/LinkedIn
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Choose Specialization: </span>Based on your interests, identify a cybersecurity domain to focus on (e.g., Web Application Pen Testing, Network Security, Cloud Security, Security Operations/SOC Analyst).</li>
        <li><span className="font-bold">Deep Dive: </span>Spend time on resources specific to your chosen specialization.</li>
        <li><span className="font-bold">Resume/CV & LinkedIn: </span>Tailor your resume to highlight your cybersecurity skills, lab experience, CTF achievements, and any relevant Python scripting.</li>
        <li><span className="font-bold">Networking: </span>Connect with cybersecurity professionals on LinkedIn.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 12:</span>
        Job Readiness & Continuous Learning
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Interview Practice: </span>Prepare for common cybersecurity interview questions (technical, behavioral, ethical considerations).</li>
        <li><span className="font-bold">Certifications (Research): </span>Look into entry-level certifications like CompTIA Security+, CySA+, or eJPT if they align with your career goals.</li>
        <li><span className="font-bold">Apply for Jobs: </span>Actively apply for junior/entry-level security roles (e.g., Security Analyst, Junior Pen Tester, SOC Analyst).</li>
        <li><span className="font-bold">Continuous Learning: </span>The cybersecurity landscape changes constantly. Stay updated through blogs, news, and community involvement.</li>
      </ul>
    </div>
  );
};

export default CybersecurityChallengePlan;