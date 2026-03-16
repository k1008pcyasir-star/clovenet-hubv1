const networkingData = {
  id: "networking",
  title: "NETWORKING & CYBERSECURITY",
  description:
    "Mkusanyiko wa Maswali 100 ya Kitaalamu ya Usaili yaliyopangwa kuboresha uelewa wako wa kiundani.",

  etiquette: [
    {
      title: "Maandalizi ya Kiufundi",
      content: "Elezea dhana ngumu kwa lugha rahisi kueleweka kisha tumia istilahi za kitaalamu (technical terms) kuthibitisha uzoefu wako."
    },
    {
      title: "Usalama Kwanza",
      content: "Katika kila jibu la networking, jaribu kugusia namna unavyoweza kulinda usalama wa hiyo huduma (security mindset)."
    },
    {
      title: "Mifano Halisi",
      content: "Tumia mbinu ya STAR (Situation, Task, Action, Result) kuelezea uzoefu wako wa kusanidi au kutatua matatizo ya mitandao."
    }
  ],

  questions: [
    // --- SECTION 1: NETWORKING FUNDAMENTALS (1-20) ---
    {
      id: 1,
      swali_sw: "OSI Model ni nini na inasaidiaje mawasiliano?",
      swali_en: "What is the OSI model, and how does it facilitate communication?",
      muongozo: "Elezea kuwa ni mfumo wa tabaka 7 unaoruhusu mifumo tofauti kuelewana.",
      jibu_en: "The OSI model is a standardized framework that breaking the communication process into seven layers, from Physical to Application, to ensure interoperability between different systems."
    },
    {
      id: 2,
      swali_sw: "Tofauti kati ya Layer 2 switch na router ni nini?",
      swali_en: "Explain the differences between a Layer 2 switch and a router.",
      muongozo: "Lenga kwenye matumizi ya MAC address (switch) dhidi ya IP address (router).",
      jibu_en: "A Layer 2 switch connects devices within a local network using MAC addresses, while a router connects different networks together using IP addresses."
    },
    {
      id: 3,
      swali_sw: "Taja tabaka saba za OSI model.",
      swali_en: "What are the seven layers of the OSI model?",
      muongozo: "Taja kuanzia ya kwanza (Physical) hadi ya saba (Application).",
      jibu_en: "The layers are Physical, Data Link, Network, Transport, Session, Presentation, and Application."
    },
    {
      id: 4,
      swali_sw: "Tofauti kati ya IP address na MAC address ni nini?",
      swali_en: "How does an IP address differ from a MAC address?",
      muongozo: "IP ni ya kimantiki (logical) na MAC ni ya kudumu kwenye kifaa (physical).",
      jibu_en: "An IP address is a logical identifier assigned by software, whereas a MAC address is a permanent hardware identifier burned into the Network Interface Card."
    },
    {
      id: 5,
      swali_sw: "Tofautisha kati ya IPv4 na IPv6.",
      swali_en: "Differentiate between IPv4 and IPv6.",
      muongozo: "Gusia ukubwa wa bits (32 vs 128) na idadi ya anuani zinazopatikana.",
      jibu_en: "IPv4 uses a 32-bit address (4.3 billion addresses), while IPv6 uses a 128-bit address, providing a virtually unlimited number of addresses."
    },
    {
      id: 6,
      swali_sw: "DNS ina kazi gani kwenye mtandao?",
      swali_en: "What is the purpose of the Domain Name System (DNS)?",
      muongozo: "Ilinganishe na kitabu cha simu kinachotafsiri majina kwenda IP.",
      jibu_en: "DNS translates human-readable domain names like 'google.com' into machine-readable IP addresses."
    },
    {
      id: 7,
      swali_sw: "DHCP inafanya kazi gani?",
      swali_en: "Explain the role of DHCP.",
      muongozo: "Elezea kugawa anuani za IP moja kwa moja (automatically).",
      jibu_en: "DHCP automatically assigns IP addresses and network settings to devices, eliminating the need for manual configuration."
    },
    {
      id: 8,
      swali_sw: "Subnet mask inatumika kwa ajili gani?",
      swali_en: "What is a subnet mask, and why is it used?",
      muongozo: "Inatofautisha sehemu ya mtandao na sehemu ya kifaa (network vs host).",
      jibu_en: "A subnet mask is used to identify which part of an IP address belongs to the network and which part belongs to the host."
    },
    {
      id: 9,
      swali_sw: "Default Gateway maana yake nini?",
      swali_en: "Define the term 'Default Gateway.'",
      muongozo: "Ni njia/mlango wa kutokea kuelekea mitandao mingine.",
      jibu_en: "A default gateway is the node or router interface that serves as an access point to other networks when no other route matches."
    },
    {
      id: 10,
      swali_sw: "Tofauti ya Hub, Switch, na Router ni nini?",
      swali_en: "What is the difference between a Hub, a Switch, and a Router?",
      muongozo: "Hub ni ya kizamani (broadcast), Switch ni ya akili (MAC), Router ni ya kuunganisha mitandao (IP).",
      jibu_en: "A hub sends data to all ports; a switch sends data only to the specific destination MAC; a router forwards data between different networks using IP."
    },
    {
      id: 11,
      swali_sw: "ARP inafanya kazi gani?",
      swali_en: "Explain the Address Resolution Protocol (ARP).",
      muongozo: "Inatafuta MAC address kwa kutumia IP address inayojulikana.",
      jibu_en: "ARP is used to find the physical MAC address of a device when only its logical IP address is known."
    },
    {
      id: 12,
      swali_sw: "VLAN ni nini?",
      swali_en: "What is a Virtual Local Area Network (VLAN)?",
      muongozo: "Kugawa switch moja kimantiki ili iwe na mitandao midogo tofauti.",
      jibu_en: "A VLAN is a logical segmentation of a physical network that groups devices together regardless of their physical location."
    },
    {
      id: 13,
      swali_sw: "Kazi ya Spanning Tree Protocol (STP) ni nini?",
      swali_en: "Describe the function of STP.",
      muongozo: "Kuzuia mizunguko (loops) kwenye mitandao ya Layer 2.",
      jibu_en: "STP prevents loops in Ethernet networks by disabling redundant paths until they are needed for failover."
    },
    {
      id: 14,
      swali_sw: "NAT maana yake nini?",
      swali_en: "What is Network Address Translation (NAT)?",
      muongozo: "Inaruhusu IP za siri (private) kutumia IP moja ya umma (public) kupata internet.",
      jibu_en: "NAT allows multiple devices on a private network to share a single public IP address to access the internet."
    },
    {
      id: 15,
      swali_sw: "Tofauti kati ya TCP na UDP ni nini?",
      swali_en: "Explain the difference between TCP and UDP.",
      muongozo: "TCP ina uhakika (handshake), UDP ni ya kasi (streaming).",
      jibu_en: "TCP is a connection-oriented protocol that ensures reliable delivery, while UDP is connectionless and faster but doesn't guarantee delivery."
    },
    {
      id: 16,
      swali_sw: "ICMP inatumika kwa kazi gani?",
      swali_en: "What is the purpose of ICMP?",
      muongozo: "Inatumika kutoa ripoti za makosa na utatuzi (e.g., Ping).",
      jibu_en: "ICMP is used by network devices to send error messages and operational information, such as when a host is unreachable."
    },
    {
      id: 17,
      swali_sw: "Tofautisha kati ya LAN, WAN, na MAN.",
      swali_en: "Define LAN, WAN, and MAN.",
      muongozo: "Lenga eneo la kijiografia: LAN (ofisi), MAN (mji), WAN (dunia).",
      jibu_en: "LAN is for local areas like an office; MAN covers a city; WAN spans large geographical areas like countries or continents."
    },
    {
      id: 18,
      swali_sw: "Networking Protocol ni nini?",
      swali_en: "What is a protocol in networking?",
      muongozo: "Ni seti ya sheria zinazoongoza namna data inavyotumwa.",
      jibu_en: "A protocol is a standardized set of rules that govern how data is formatted, transmitted, and received across a network."
    },
    {
      id: 19,
      swali_sw: "Broadcast Domain maana yake nini?",
      swali_en: "Explain the concept of a Broadcast Domain.",
      muongozo: "Eneo ambalo kifaa kikijitangaza (broadcast), vifaa vyote vinasikia.",
      jibu_en: "A broadcast domain is a logical division of a network where all nodes can reach each other by broadcast at the data link layer."
    },
    {
      id: 20,
      swali_sw: "Collision Domain ni nini?",
      swali_en: "What is a Collision Domain?",
      muongozo: "Sehemu ambayo data zinaweza kugongana zikitumwa kwa wakati mmoja.",
      jibu_en: "A collision domain is a network segment where data packets can collide with one another on a shared medium, like a hub."
    },

    // --- SECTION 2: CYBERSECURITY (21-40) ---
    {
      id: 21,
      swali_sw: "CIA Triad ni nini?",
      swali_en: "What is the CIA Triad?",
      muongozo: "Siri (Confidentiality), Uadilifu (Integrity), na Upatikanaji (Availability).",
      jibu_en: "The CIA triad represents Confidentiality, Integrity, and Availability—the three core goals of information security."
    },
    {
      id: 22,
      swali_sw: "Malware ni nini? Toa mifano.",
      swali_en: "Define Malware and provide examples.",
      muongozo: "Programu yoyote yenye nia mbaya. Mifano: Viruses, Trojans, Ransomware.",
      jibu_en: "Malware is malicious software designed to disrupt, damage, or gain unauthorized access to a system. Examples include viruses, worms, and spyware."
    },
    {
      id: 23,
      swali_sw: "Tofauti ya Virus na Worm ni nini?",
      swali_en: "What is the difference between a Virus and a Worm?",
      muongozo: "Virus inahitaji binadamu/file, Worm inajisambaza yenyewe.",
      jibu_en: "A virus requires human action and a host file to spread, while a worm is self-replicating and spreads across networks autonomously."
    },
    {
      id: 24,
      swali_sw: "Phishing ni nini na unazuiaje?",
      swali_en: "Explain Phishing and how to prevent it.",
      muongozo: "Ulaghai kwa email/sms. Zuia kwa MFA na elimu kwa watumiaji.",
      jibu_en: "Phishing is a social engineering attack where attackers trick users into sharing data. Prevention includes Multi-Factor Authentication and user awareness training."
    },
    {
      id: 25,
      swali_sw: "Ransomware ni nini?",
      swali_en: "What is Ransomware?",
      muongozo: "Malware inayofunga mafaili na kudai pesa (fidi).",
      jibu_en: "Ransomware is a type of malware that encrypts a victim's files and demands payment in exchange for the decryption key."
    },
    {
      id: 26,
      swali_sw: "Social Engineering maana yake nini?",
      swali_en: "Define Social Engineering in cybersecurity.",
      muongozo: "Kumlaghai binadamu atoe siri badala ya kuvunja mfumo wa kiufundi.",
      jibu_en: "Social engineering is the psychological manipulation of people into performing actions or divulging confidential information."
    },
    {
      id: 27,
      swali_sw: "Tofauti ya Symmetric na Asymmetric Encryption ni nini?",
      swali_en: "Difference between Symmetric and Asymmetric Encryption?",
      muongozo: "Symmetric (funguo 1), Asymmetric (funguo 2: Public & Private).",
      jibu_en: "Symmetric encryption uses one key for both encryption and decryption, while asymmetric uses a public-private key pair."
    },
    {
      id: 28,
      swali_sw: "Kazi ya Firewall ni nini?",
      swali_en: "Explain the purpose of a Firewall.",
      muongozo: "Kuchuja traffic inayoingia na kutoka kulingana na sheria za usalama.",
      jibu_en: "A firewall monitors and filters incoming and outgoing network traffic based on an organization's previously established security policies."
    },
    {
      id: 29,
      swali_sw: "VPN inafanya kazi gani?",
      swali_en: "What is a VPN?",
      muongozo: "Inatengeneza 'tunnel' ya siri na iliyofungwa (encrypted) kwenye internet.",
      jibu_en: "A VPN (Virtual Private Network) creates an encrypted and secure connection over a less secure network, such as the public internet."
    },
    {
      id: 30,
      swali_sw: "Tofauti ya Authentication na Authorization ni nini?",
      swali_en: "Differentiate between Authentication and Authorization.",
      muongozo: "Auth (Wewe ni nani?), Author (Unaruhusiwa kufanya nini?).",
      jibu_en: "Authentication verifies who a user is, while authorization determines what data and actions they have permission to access."
    },
    {
      id: 31,
      swali_sw: "2FA ina umuhimu gani?",
      swali_en: "What is Two-Factor Authentication (2FA)?",
      muongozo: "Kuongeza ulinzi wa pili baada ya password.",
      jibu_en: "2FA is a security process that requires two different forms of identification to access a resource, adding an extra layer of protection."
    },
    {
      id: 32,
      swali_sw: "Principle of Least Privilege maana yake nini?",
      swali_en: "Explain the principle of Least Privilege.",
      muongozo: "Kumpa mtumiaji uwezo mdogo tu anaohitaji kufanya kazi yake.",
      jibu_en: "It is the security concept that a user should be granted only the minimum levels of access—or permissions—needed to perform their job."
    },
    {
      id: 33,
      swali_sw: "Zero-Day Vulnerability ni nini?",
      swali_en: "What is a Zero-Day Vulnerability?",
      muongozo: "Udhaifu uliogunduliwa ambao bado haujapatiwa 'patch' na watengenezaji.",
      jibu_en: "A zero-day vulnerability is a software security flaw that is known to the software vendor but has no patch in place to fix it."
    },
    {
      id: 34,
      swali_sw: "Tofautisha Black, White, na Grey Hat hackers.",
      swali_en: "Differentiate between Black, White, and Grey Hat hackers.",
      muongozo: "White (Wazuri/Ethical), Black (Wabaya), Grey (Kati na kati).",
      jibu_en: "White hats are ethical hackers, black hats have malicious intent, and grey hats may violate ethics but without malicious intent."
    },
    {
      id: 35,
      swali_sw: "Brute Force Attack ni nini?",
      swali_en: "What is a Brute Force Attack?",
      muongozo: "Jaribio la kukisia password kwa kujaribu kila namba au herufi.",
      jibu_en: "A brute force attack is a trial-and-error method used to guess login credentials or encryption keys by trying all possible combinations."
    },
    {
      id: 36,
      swali_sw: "SQL Injection inafanyaje kazi?",
      swali_en: "Explain SQL Injection.",
      muongozo: "Kuingiza kodi mbaya ya SQL kwenye 'input fields' ili kuiba data za database.",
      jibu_en: "SQL Injection is a vulnerability where an attacker injects malicious SQL code into an input field to manipulate the database."
    },
    {
      id: 37,
      swali_sw: "XSS (Cross-Site Scripting) ni nini?",
      swali_en: "What is Cross-Site Scripting (XSS)?",
      muongozo: "Kuingiza scripts mbaya kwenye website zinazoonekana na watumiaji wengine.",
      jibu_en: "XSS is a security exploit where an attacker injects malicious scripts into content from otherwise trusted websites."
    },
    {
      id: 38,
      swali_sw: "Tofauti ya DoS na DDoS ni nini?",
      swali_en: "Define DoS and DDoS attacks.",
      muongozo: "DoS (Chanzo 1), DDoS (Vyanzo vingi/Botnets).",
      jibu_en: "A DoS attack comes from one source to overwhelm a system, while a DDoS attack uses multiple compromised systems (botnets) to target the victim."
    },
    {
      id: 39,
      swali_sw: "IDS na IPS zina tofauti gani?",
      swali_en: "What are IDS and IPS?",
      muongozo: "IDS inagundua (Detection), IPS inazuia kabisa (Prevention).",
      jibu_en: "IDS monitors traffic and alerts for threats, whereas IPS monitors traffic and actively takes action to block identified threats."
    },
    {
      id: 40,
      swali_sw: "Honeypot ni nini?",
      swali_en: "What is a Honeypot?",
      muongozo: "Mfumo feki uliowekwa kama mtego ili kuwanasa na kuwasoma hackers.",
      jibu_en: "A honeypot is a decoy computer system used to trap hackers or track new hacking methods."
    },

    // --- SECTION 3: ADVANCED TOPICS (41-60) ---
    {
      id: 41,
      swali_sw: "Deep Packet Inspection (DPI) inasaidia nini?",
      swali_en: "What is Deep Packet Inspection (DPI)?",
      muongozo: "Kuchunguza ndani ya 'payload' ya paketi badala ya 'header' tu.",
      jibu_en: "DPI is an advanced method of packet filtering that examines the data part of a packet as it passes an inspection point."
    },
    {
      id: 42,
      swali_sw: "SSL/TLS Inspection inafanya nini?",
      swali_en: "Explain SSL/TLS Inspection.",
      muongozo: "Kufungua traffic iliyofungwa ili kuangalia kama ina virusi.",
      jibu_en: "SSL/TLS inspection is the process of intercepting encrypted internet traffic to scan it for malicious content."
    },
    {
      id: 43,
      swali_sw: "Next-Generation Firewall (NGFW) ni nini?",
      swali_en: "What is a Next-Generation Firewall?",
      muongozo: "Firewall ya kisasa yenye DPI na uwezo wa kutambua apps.",
      jibu_en: "An NGFW is a deeper firewall that includes additional features like application awareness and integrated intrusion prevention."
    },
    {
      id: 44,
      swali_sw: "SDN (Software Defined Networking) ni nini?",
      swali_en: "Describe Software-Defined Networking (SDN).",
      muongozo: "Kutenganisha upande wa 'control' na 'data' kwa kutumia software.",
      jibu_en: "SDN is an architecture that abstracts the network’s control plane from the forwarding plane for centralized management."
    },
    {
      id: 45,
      swali_sw: "SD-WAN ina faida gani?",
      swali_en: "What is SD-WAN?",
      muongozo: "Kutumia software kusimamia na ku-optimize traffic ya WAN.",
      jibu_en: "SD-WAN uses software to manage the wide area network, providing better performance and cost-effectiveness over traditional hardware."
    },
    {
      id: 46,
      swali_sw: "BGP (Border Gateway Protocol) inatumika wapi?",
      swali_en: "Explain BGP.",
      muongozo: "Ni itifaki inayounganisha mitandao mikubwa kwenye internet.",
      jibu_en: "BGP is the protocol used to exchange routing information between autonomous systems on the internet."
    },
    {
      id: 47,
      swali_sw: "OSPF ni nini?",
      swali_en: "What is OSPF?",
      muongozo: "Itifaki ya ndani ya mtandao inayotafuta njia fupi (Link-state).",
      jibu_en: "OSPF is a link-state routing protocol that finds the best path for data packets within a single autonomous system."
    },
    {
      id: 48,
      swali_sw: "EIGRP ni nini?",
      swali_en: "Define EIGRP.",
      muongozo: "Itifaki ya Cisco inayochanganya mbinu za Distance Vector na Link-state.",
      jibu_en: "EIGRP is a Cisco proprietary hybrid routing protocol used to automate routing decisions and configuration."
    },
    {
      id: 49,
      swali_sw: "MPLS inafanya kazi gani?",
      swali_en: "What is MPLS?",
      muongozo: "Kusafirisha data kwa kutumia 'labels' badala ya IP mzunguko mrefu.",
      jibu_en: "MPLS is a data-carrying mechanism that directs data from one node to the next based on short path labels rather than long network addresses."
    },
    {
      id: 50,
      swali_sw: "VPC (Virtual Private Cloud) ni nini?",
      swali_en: "Explain VPC.",
      muongozo: "Sehemu ya siri kwenye cloud (kama AWS/Azure) kwa ajili ya rasilimali zako.",
      jibu_en: "A VPC is an isolated network environment within a public cloud provider where you can launch resources."
    },
    {
      id: 51,
      swali_sw: "High Availability (HA) maana yake nini?",
      swali_en: "What is High Availability (HA)?",
      muongozo: "Kuhakikisha mfumo hauzimi hata kifaa kimoja kikifeli.",
      jibu_en: "HA refers to a system design that ensures a prearranged level of operational performance during a contractual measurement period."
    },
    {
      id: 52,
      swali_sw: "Active-Passive vs Active-Active HA?",
      swali_en: "Active-Passive vs Active-Active HA?",
      muongozo: "Passive (Kifaa cha akiba), Active (Vifaa vyote vinafanya kazi).",
      jibu_en: "Active-Passive has a standby node, while Active-Active shares the load across all available nodes simultaneously."
    },
    {
      id: 53,
      swali_sw: "Port Forwarding inafanya nini?",
      swali_en: "What is Port Forwarding?",
      muongozo: "Kuelekeza maombi ya kutoka nje kwenda kifaa maalum ndani ya mtandao.",
      jibu_en: "Port forwarding directs traffic from the outside world to a specific device on your internal network."
    },
    {
      id: 54,
      swali_sw: "SSL Offloading ni nini?",
      swali_en: "Explain SSL Offloading.",
      muongozo: "Kupunguza mzigo wa kusembelea siri (decryption) kwenye web server.",
      jibu_en: "SSL offloading involves shifting the processing of SSL-encrypted traffic from a web server to a separate device."
    },
    {
      id: 55,
      swali_sw: "QoS (Quality of Service) ina umuhimu gani?",
      swali_en: "What is QoS?",
      muongozo: "Kupa vipaumbele traffic muhimu kama Video/Sauti (VoIP).",
      jibu_en: "QoS is the use of mechanisms that manage network resources by setting priorities for specific types of data on the network."
    },
    {
      id: 56,
      swali_sw: "Traffic Shaping vs Policing?",
      swali_en: "Define Traffic Shaping and Policing.",
      muongozo: "Shaping (Inachelewesha), Policing (Inatupa traffic iliyozidi).",
      jibu_en: "Shaping buffers excess traffic to smooth out bursts, while policing drops excess traffic immediately when it exceeds a limit."
    },
    {
      id: 57,
      swali_sw: "EtherChannel inasaidia nini?",
      swali_en: "What is EtherChannel?",
      muongozo: "Kuunganisha nyaya nyingi za mtandao kuwa moja yenye kasi zaidi.",
      jibu_en: "EtherChannel allows grouping several physical Ethernet links to create one logical high-speed link for redundancy and bandwidth."
    },
    {
      id: 58,
      swali_sw: "VTP (VLAN Trunking Protocol) ni nini?",
      swali_en: "Explain VTP.",
      muongozo: "Itifaki ya Cisco inayowianisha majina ya VLAN kwenye switch zote.",
      jibu_en: "VTP is a Cisco protocol used to distribute and synchronize VLAN information across switches in a network."
    },
    {
      id: 59,
      swali_sw: "Static Route ni nini?",
      swali_en: "What is a Static Route?",
      muongozo: "Njia ya mtandao iliyowekwa na admin kwa mkono.",
      jibu_en: "A static route is a manually configured routing entry in a router's routing table."
    },
    {
      id: 60,
      swali_sw: "Default Route inatumika lini?",
      swali_en: "Define a Default Route.",
      muongozo: "Njia inayotumika kama router haijui wapi pa kupeleka data.",
      jibu_en: "A default route is the path used when no other specific routes match the destination IP address in the routing table."
    },

    // --- SECTION 4: INCIDENT RESPONSE & OPS (61-80) ---
    {
      id: 61,
      swali_sw: "Penetration Testing ni nini?",
      swali_en: "What is Penetration Testing?",
      muongozo: "Shambulio la majaribio lililoidhinishwa ili kupata udhaifu.",
      jibu_en: "Penetration testing is an authorized simulated attack on a computer system to evaluate its security."
    },
    {
      id: 62,
      swali_sw: "Vulnerability Assessment vs Pen Testing?",
      swali_en: "Vulnerability Assessment vs Penetration Testing?",
      muongozo: "Assessment (Kutafuta udhaifu), Pen Testing (Kujaribu kuuvunja).",
      jibu_en: "A vulnerability assessment identifies risks, while a penetration test actively exploits them to see how far an attacker could get."
    },
    {
      id: 63,
      swali_sw: "Incident Response Lifecycle ina hatua gani?",
      swali_en: "Incident Response Lifecycle?",
      muongozo: "Maandalizi -> Utambuzi -> Kudhibiti -> Kufuta -> Kurejesha -> Masomo.",
      jibu_en: "The lifecycle involves Preparation, Identification, Containment, Eradication, Recovery, and Lessons Learned."
    },
    {
      id: 64,
      swali_sw: "SIEM inafanya nini?",
      swali_en: "Define SIEM.",
      muongozo: "Inakusanya logs za vifaa vyote na kutafuta viashiria vya mashambulizi.",
      jibu_en: "SIEM (Security Information and Event Management) provides real-time analysis of security alerts generated by applications and network hardware."
    },
    {
      id: 65,
      swali_sw: "SOC (Security Operations Center) ni nini?",
      swali_en: "What is SOC?",
      muongozo: "Kituo kinachofanya kazi saa 24 kulinda usalama wa mtandao.",
      jibu_en: "A SOC is a centralized unit that deals with security issues on an organizational and technical level."
    },
    {
      id: 66,
      swali_sw: "Digital Forensics maana yake nini?",
      swali_en: "Explain Digital Forensics.",
      muongozo: "Uchunguzi wa kisheria wa data za kielektroniki baada ya uhalifu.",
      jibu_en: "Digital forensics is the branch of forensic science encompassing the recovery and investigation of material found in digital devices."
    },
    {
      id: 67,
      swali_sw: "Root Cause Analysis (RCA) ni nini?",
      swali_en: "What is Root Cause Analysis?",
      muongozo: "Kutafuta chanzo cha msingi cha tatizo badala ya kutibu dalili tu.",
      jibu_en: "RCA is a method of problem-solving used for identifying the root causes of faults or problems."
    },
    {
      id: 68,
      swali_sw: "IOC (Indicator of Compromise) ni nini?",
      swali_en: "Define Indicator of Compromise (IOC).",
      muongozo: "Alama zinazoonyesha kuwa mfumo umeshambuliwa (mfano: IP ngeni).",
      jibu_en: "An IOC is a piece of digital evidence that suggests a system network has been breached."
    },
    {
      id: 69,
      swali_sw: "Threat Hunting inafanywaje?",
      swali_en: "What is Threat Hunting?",
      muongozo: "Kutafuta hackers waliojificha ndani ya mtandao bila kusubiri alert.",
      jibu_en: "Threat hunting is the proactive searching through networks to detect and isolate advanced threats that evade existing security solutions."
    },
    {
      id: 70,
      swali_sw: "MITRE ATT&CK ni nini?",
      swali_en: "Explain MITRE ATT&CK.",
      muongozo: "Database ya mbinu na tabia zinazotumiwa na hackers duniani.",
      jibu_en: "MITRE ATT&CK is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations."
    },
    {
      id: 71,
      swali_sw: "DLP (Data Loss Prevention) ni nini?",
      swali_en: "What is Data Loss Prevention (DLP)?",
      muongozo: "Mbinu za kuzuia data nyeti zisichukuliwe nje ya ofisi.",
      jibu_en: "DLP is a set of tools and processes used to ensure that sensitive data is not lost, misused, or accessed by unauthorized users."
    },
    {
      id: 72,
      swali_sw: "Endpoint Security inalinda nini?",
      swali_en: "Describe Endpoint Security.",
      muongozo: "Kulinda vifaa kama laptop, simu, na server (mishale ya mwisho).",
      jibu_en: "Endpoint security is the practice of securing the entry points of end-user devices from being exploited by malicious actors."
    },
    {
      id: 73,
      swali_sw: "Zero Trust Architecture maana yake nini?",
      swali_en: "What is Zero Trust Architecture?",
      muongozo: "Kutoamini kifaa au mtumiaji yeyote hata kama yupo ndani ya ofisi.",
      jibu_en: "Zero Trust is a strategic initiative that helps prevent data breaches by eliminating the concept of trust from an organization's network architecture."
    },
    {
      id: 74,
      swali_sw: "Sandboxing inatumika kwa nini?",
      swali_en: "Explain Sandboxing.",
      muongozo: "Kufungua faili ngeni kwenye 'box' la siri ili lisiaribu computer.",
      jibu_en: "Sandboxing is a security mechanism for separating running programs, usually in an isolated environment, to prevent system damage."
    },
    {
      id: 75,
      swali_sw: "False Positive vs False Negative?",
      swali_en: "False Positive vs False Negative?",
      muongozo: "Positive (Kengele ya uongo), Negative (Shambulio lilitokea ila kimya).",
      jibu_en: "A false positive is an alert for a non-threat, while a false negative is a real threat that was missed by security systems."
    },
    {
      id: 76,
      swali_sw: "ARP Spoofing inagundulika vipi?",
      swali_en: "How to detect ARP Spoofing?",
      muongozo: "Kuangalia kama kuna MAC mbili kwenye IP moja kwenye ARP table.",
      jibu_en: "ARP Spoofing is detected by monitoring the network for unusual ARP traffic or identifying multiple MAC addresses associated with a single IP."
    },
    {
      id: 77,
      swali_sw: "Man-in-the-Middle (MITM) attack ni nini?",
      swali_en: "What is a Man-in-the-Middle attack?",
      muongozo: "Hacker anasikiliza au kubadili mazungumzo kati ya watu wawili bila wao kujua.",
      jibu_en: "An MITM attack is where the attacker secretly relays and possibly alters the communications between two parties who believe they are directly communicating."
    },
    {
      id: 78,
      swali_sw: "Session Hijacking inafanywaje?",
      swali_en: "Explain Session Hijacking.",
      muongozo: "Kuiba 'cookie' au 'session ID' ya mtumiaji aliyelog-in.",
      jibu_en: "Session hijacking is the exploitation of a valid computer session to gain unauthorized access to information or services in a computer system."
    },
    {
      id: 79,
      swali_sw: "Privilege Escalation ni nini?",
      swali_en: "What is Privilege Escalation?",
      muongozo: "Hacker anajiongezea uwezo (mfano kutoka user wa kawaida kuwa Admin).",
      jibu_en: "Privilege escalation is the act of exploiting a bug or vulnerability to gain elevated access to resources that are normally protected."
    },
    {
      id: 80,
      swali_sw: "Patch Management ni nini?",
      swali_en: "Define Patch Management.",
      muongozo: "Utaratibu wa kusasisha (update) mifumo ili kuziba matundu ya usalama.",
      jibu_en: "Patch management is the process of managing a network of computers by deploying software updates to fix security vulnerabilities."
    },

    // --- SECTION 5: TANZANIA PDPA 2022 (81-100) ---
    {
      id: 81,
      swali_sw: "Sheria ya PDPA 2022 ya Tanzania ni nini?",
      swali_en: "What is the Tanzania PDPA 2022?",
      muongozo: "Sheria inayolinda faragha na usalama wa data binafsi za watanzania.",
      jibu_en: "The Personal Data Protection Act (PDPA) 2022 is the law governing the collection, use, and protection of personal data in Tanzania."
    },
    {
      id: 82,
      swali_sw: "Data Controller ni nani?",
      swali_en: "Who is a Data Controller?",
      muongozo: "Mtu au taasisi inayoamua kwanini na namna gani data zichukuliwe.",
      jibu_en: "A Data Controller is a person or entity that determines the purposes and means of the processing of personal data."
    },
    {
      id: 83,
      swali_sw: "Data Processor ni nani?",
      swali_en: "Who is a Data Processor?",
      muongozo: "Mtu anayefanyia kazi data kwa niaba ya Controller (mfano: cloud company).",
      jibu_en: "A Data Processor is a person or entity that processes personal data on behalf of the Data Controller."
    },
    {
      id: 84,
      swali_sw: "Kazi ya Tume ya Ulinzi wa Data Binafsi (PDPC) ni nini?",
      swali_en: "Role of PDPC?",
      muongozo: "Kusimamia na kuhakikisha sheria ya ulinzi wa data inafuatwa.",
      jibu_en: "The PDPC is the regulatory body responsible for overseeing the implementation and enforcement of the PDPA 2022."
    },
    {
      id: 85,
      swali_sw: "Je, usajili wa Data Controller ni lazima Tanzania?",
      swali_en: "Is registration mandatory?",
      muongozo: "Ndiyo, kila anayechukua data binafsi lazima asajiliwe na Tume.",
      jibu_en: "Yes, under the PDPA, all data controllers and processors are required to register with the PDPC."
    },
    {
      id: 86,
      swali_sw: "Ada za usajili Tanzania zikoje?",
      swali_en: "Registration fees?",
      muongozo: "Inategemea ukubwa wa taasisi (Tsh 100,000 hadi 1,000,000).",
      jibu_en: "Registration fees range from TZS 100,000 to TZS 1,000,000 depending on the size and nature of the organization."
    },
    {
      id: 87,
      swali_sw: "Cheti cha usajili kinaishi muda gani?",
      swali_en: "Certificate validity?",
      muongozo: "Kinaishi kwa kipindi cha miaka mitano (5) kisha unahuisha (renew).",
      jibu_en: "The data protection registration certificate is valid for a period of five years."
    },
    {
      id: 88,
      swali_sw: "DPO (Data Protection Officer) ni nani?",
      swali_en: "What is a DPO?",
      muongozo: "Msimamizi ndani ya ofisi anayehakikisha sheria inafuatwa.",
      jibu_en: "A DPO is a designated person within an organization responsible for ensuring compliance with data protection laws."
    },
    {
      id: 89,
      swali_sw: "Wajibu wa DPO ni nini?",
      swali_en: "Responsibilities of a DPO?",
      muongozo: "Kutoa ushauri, kufuatilia compliance, na kuwa kiunganishi na Tume.",
      jibu_en: "A DPO monitors compliance, trains staff, and serves as the primary contact for the PDPC."
    },
    {
      id: 90,
      swali_sw: "Je, taasisi inaweza kuwa na DPO zaidi ya mmoja?",
      swali_en: "Can there be multiple DPOs?",
      muongozo: "Ndiyo, kulingana na muundo na ukubwa wa taasisi.",
      jibu_en: "Yes, organizations can appoint multiple DPOs or a team to manage data protection responsibilities."
    },
    {
      id: 91,
      swali_sw: "DPIA maana yake nini?",
      swali_en: "What is DPIA?",
      muongozo: "Tathmini ya hatari (risks) kabla ya kuanza mradi mpya wa data.",
      jibu_en: "DPIA (Data Protection Impact Assessment) is an audit to identify and minimize data protection risks of a project."
    },
    {
      id: 92,
      swali_sw: "Faini ya kutojisajili ni kiasi gani?",
      swali_en: "Penalties for non-registration?",
      muongozo: "Inaweza kufika hadi Tsh 5,000,000 kulingana na kosa.",
      jibu_en: "Failure to register can result in administrative fines of up to TZS 5,000,000 or other legal actions."
    },
    {
      id: 93,
      swali_sw: "Data Binafsi maana yake nini kisheria?",
      swali_en: "Define Personal Data.",
      muongozo: "Taarifa yoyote inayoweza kumtambulisha mtu moja kwa moja.",
      jibu_en: "Personal data is any information relating to an identified or identifiable natural person."
    },
    {
      id: 94,
      swali_sw: "Data Binafsi Nyeti (Sensitive) ni zipi?",
      swali_en: "What is Sensitive Personal Data?",
      muongozo: "Dini, afya, kabila, au mienendo ya kingono.",
      jibu_en: "Sensitive personal data includes information on health, religion, race, and biometrics, which require higher protection."
    },
    {
      id: 95,
      swali_sw: "Haki za mhusika wa data (Data Subject) ni zipi?",
      swali_en: "Rights of Data Subjects?",
      muongozo: "Haki ya kujua, kurekebisha, na kufuta data zake.",
      jibu_en: "Data subjects have the right to access, rectify, object to processing, and request erasure of their personal data."
    },
    {
      id: 96,
      swali_sw: "Je, data zinaweza kusafirishwa nje ya Tanzania?",
      swali_en: "Can data be transferred outside Tanzania?",
      muongozo: "Ndiyo, lakini lazima nchi hiyo iwe na ulinzi sawa na TZ na kibali cha Tume.",
      jibu_en: "Data transfer outside Tanzania is permitted only if the recipient country ensures adequate protection and with PDPC's authorization."
    },
    {
      id: 97,
      swali_sw: "Data Breach ikitokea, unaripoti ndani ya muda gani?",
      swali_en: "What is Mandatory Breach Notification?",
      muongozo: "Unapaswa kuripoti kwa Tume mapema iwezekanavyo pindi unapogundua.",
      jibu_en: "Data controllers must notify the PDPC of a data breach promptly to mitigate potential risks."
    },
    {
      id: 98,
      swali_sw: "Data zihifadhiwe kwa muda gani?",
      swali_en: "How long should data be stored?",
      muongozo: "Kwa muda mrefu tu unaohitajika kwa madhumuni yaliyokusudiwa.",
      jibu_en: "Personal data should be kept only for as long as necessary to fulfill the purpose for which it was collected."
    },
    {
      id: 99,
      swali_sw: "Je, sheria hii inatumika Zanzibar?",
      swali_en: "Does PDPA apply to Zanzibar?",
      muongozo: "Ndiyo, kwa mambo ya Muungano yanayohusu ulinzi wa data binafsi.",
      jibu_en: "The PDPA 2022 is a union matter and applies to both Tanzania Mainland and Zanzibar for union related entities."
    },
    {
      id: 100,
      swali_sw: "Kanuni ya Uwazi (Transparency) maana yake nini?",
      swali_en: "What is the Principle of Transparency?",
      muongozo: "Lazima mhusika ajue data zake zinachukuliwa kwa ajili gani.",
      jibu_en: "The principle of transparency requires that data controllers be open and clear about how they collect and use personal data."
    }
  ]
};

export default networkingData;