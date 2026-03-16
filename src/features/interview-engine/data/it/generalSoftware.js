const generalSoftwareData = {
  id: "general-software",
  title: "General Software & Operating Systems",
  description:
    "Essential Knowledge: Windows, MS Office, and Troubleshooting. Mkusanyiko wa maswali 50 muhimu kwa wanafunzi na wafanyakazi nchini Tanzania.",

  etiquette: [
    {
      title: "Explain the OS Internals",
      content:
        "Unapojibu, elezea jinsi mfumo wa uendeshaji (OS) unavyosimamia kumbukumbu, michakato, na mafaili kitalamu."
    },
    {
      title: "Use Practical Examples",
      content:
        "Relate answers to real-world troubleshooting scenarios like Windows updates, file recovery, and system maintenance."
    }
  ],

  questions: [
    /* SEHEMU YA 1: OPERATING SYSTEMS & HARDWARE BASICS (1-15) */
    {
      id: 1,
      swali_sw: "Nifanye nini kompyuta ikiwa nzito (inastack) bila kufuta mafaili?",
      swali_en: "What should I do if my computer is lagging without deleting my files?",
      muongozo: "Zungumzia kufuta temporary files na kusimamia startup programs.",
      jibu_en: "Delete 'Temporary Files' by running %temp% in the Run dialog (Win + R). Additionally, use Task Manager (Ctrl + Shift + Esc) to disable unnecessary programs from the 'Startup' tab."
    },
    {
      id: 2,
      swali_sw: "Kuna tofauti gani kati ya Windows 10 na Windows 11 kwa mtumiaji wa Tanzania?",
      swali_en: "What is the difference between Windows 10 and Windows 11 for a Tanzanian user?",
      muongozo: "Gusia muonekano, mahitaji ya hardware (TPM 2.0), na usalama.",
      jibu_en: "Windows 11 features a modern UI and enhanced security (requiring TPM 2.0), while Windows 10 remains stable and compatible with older hardware common in the local market."
    },
    {
      id: 3,
      swali_sw: "Nini maana ya 'Blue Screen of Death' (BSOD) na naitatua vipi?",
      swali_en: "What is the 'Blue Screen of Death' (BSOD) and how do I fix it?",
      muongozo: "Elezea kama system error na gusia drivers au RAM issues.",
      jibu_en: "BSOD is a critical system error. Immediate solutions include restarting the PC, but persistent cases require updating drivers or checking for faulty RAM modules."
    },
    {
      id: 4,
      swali_sw: "Je, ni lazima kununua Antivirus au Windows Defender inatosha?",
      swali_en: "Is it necessary to buy an Antivirus or is Windows Defender enough?",
      muongozo: "Zungumzia ufanisi wa Defender na umuhimu wa updates.",
      jibu_en: "Windows Defender is highly effective if kept updated. Paid antivirus software is recommended only if you frequently use external drives from multiple untrusted sources."
    },
    {
      id: 5,
      swali_sw: "Nawezaje kubadili lugha ya kompyuta yangu iwe Kiswahili?",
      swali_en: "How can I change my computer language to Swahili?",
      muongozo: "Elezea hatua za Settings na Language & Region.",
      jibu_en: "Go to Settings > Time & Language > Language & Region > Add a language, then search for and install 'Kiswahili'."
    },
    {
      id: 6,
      swali_sw: "Nawezaje kujua uwezo wa RAM na Processor ya kompyuta yangu?",
      swali_en: "How can I check my computer's RAM and Processor specifications?",
      muongozo: "Tumia mbinu ya 'This PC' Properties.",
      jibu_en: "Right-click the 'This PC' icon, select Properties. This will display the installed RAM capacity and the specific model of your Processor."
    },
    {
      id: 7,
      swali_sw: "Kuna umuhimu gani wa kufanya 'Eject' kabla ya kuchomoa Flash Disk?",
      swali_en: "Why is it important to 'Eject' a Flash Disk before unplugging it?",
      muongozo: "Zungumzia kuzuia file corruption na data loss.",
      jibu_en: "Ejecting ensures that all write operations are complete, preventing file corruption or physical damage to the flash drive's file system."
    },
    {
      id: 8,
      swali_sw: "Kompyuta imestack kabisa, hata mouse haichezi. Nifanyeje?",
      swali_en: "The computer is completely frozen; even the mouse won't move. What should I do?",
      muongozo: "Elezea mbinu ya Hard Restart (Power button).",
      jibu_en: "Perform a 'Hard Restart' by pressing and holding the Power button for about 10 seconds until the system shuts down completely."
    },
    {
      id: 9,
      swali_sw: "'Driver' ni nini na kwa nini ni muhimu?",
      swali_en: "What is a 'Driver' and why is it important?",
      muongozo: "Elezea kama daraja la mawasiliano kati ya OS na Hardware.",
      jibu_en: "A driver is software that allows the Operating System to communicate with hardware devices like printers or Wi-Fi adapters. Without it, the hardware won't function."
    },
    {
      id: 10,
      swali_sw: "Nini tofauti kati ya HDD na SSD? Ipi ni bora?",
      swali_en: "What is the difference between HDD and SSD? Which is better?",
      muongozo: "Lenga kasi, durability, na teknolojia ya flash.",
      jibu_en: "SSD is up to 10 times faster than HDD and has no moving parts, making it more durable and resistant to physical shocks."
    },
    {
      id: 11,
      swali_sw: "Nawezaje kuzuia programu zisijifungue zenyewe nikiwasha kompyuta?",
      swali_en: "How do I prevent programs from starting automatically upon boot?",
      muongozo: "Tumia Task Manager na tab ya Startup.",
      jibu_en: "Open Task Manager (Ctrl + Shift + Esc), navigate to the Startup tab, select the program, and click 'Disable'."
    },
    {
      id: 12,
      swali_sw: "Nini maana ya 'Formatting' kompyuta?",
      swali_en: "What does 'Formatting' a computer mean?",
      muongozo: "Kufuta kila kitu na kuweka OS mpya.",
      jibu_en: "Formatting involves erasing all data on a hard drive and reinstalling a fresh copy of the Operating System to resolve major software or virus issues."
    },
    {
      id: 13,
      swali_sw: "Nawezaje kupiga picha ya screen yangu (Screenshot)?",
      swali_en: "How do I take a screenshot of my screen?",
      muongozo: "Tumia shortcut ya Windows + Shift + S.",
      jibu_en: "Press Windows + Shift + S to activate the Snipping Tool, select the area you want to capture, and then paste (Ctrl + V) it into your desired application."
    },
    {
      id: 14,
      swali_sw: "Kuna umuhimu gani wa kutumia UPS kwenye desktop kompyuta?",
      swali_en: "Why is it important to use a UPS with a desktop computer?",
      muongozo: "Zungumzia ulinzi wa data na kuzima salama wakati wa kukatika umeme.",
      jibu_en: "A UPS provides backup power, allowing you enough time to save your work and shut down the computer properly during sudden power outages."
    },
    {
      id: 15,
      swali_sw: "Nini tofauti kati ya Software na Hardware?",
      swali_en: "What is the difference between Software and Hardware?",
      muongozo: "Physical components vs logical programs.",
      jibu_en: "Hardware refers to the physical, touchable components of a computer (like a monitor), while Software refers to the digital programs (like Windows or Chrome)."
    },

    /* SEHEMU YA 2: MICROSOFT WORD & NYARAKA (16-30) */
    {
      id: 16,
      swali_sw: "Nawezaje kutengeneza 'Table of Contents' (Yaliyomo) moja kwa moja?",
      swali_en: "How do I create an automatic 'Table of Contents'?",
      muongozo: "Tumia Styles (Headings) na References tab.",
      jibu_en: "Apply Heading Styles (1, 2, etc.) to your titles, then go to References > Table of Contents and select an automatic style."
    },
    {
      id: 17,
      swali_sw: "Nifanye nini kama nimesahau ku-save faili na umeme ukakatika?",
      swali_en: "What if I forgot to save my file and the power went out?",
      muongozo: "Tumia feature ya AutoRecover katika Word.",
      jibu_en: "Go to File > Info > Manage Document > Recover Unsaved Documents. MS Word automatically saves temporary copies via the AutoRecover feature."
    },
    {
      id: 18,
      swali_sw: "Kuna tofauti gani kati ya 'Save' na 'Save As'?",
      swali_en: "What is the difference between 'Save' and 'Save As'?",
      muongozo: "Mabadiliko ya faili la sasa vs kutengeneza nakala mpya.",
      jibu_en: "'Save' updates the current file with recent changes. 'Save As' allows you to create a new copy with a different name or format."
    },
    {
      id: 19,
      swali_sw: "Nawezaje kuweka namba za kurasa kuanzia ukurasa wa tatu?",
      swali_en: "How can I start page numbering from the third page?",
      muongozo: "Tumia Section Breaks na uncheck 'Link to Previous'.",
      jibu_en: "Insert a Section Break (Next Page) at the end of page 2, then go to page 3, edit the footer, and deselect 'Link to Previous' before adding page numbers."
    },
    {
      id: 20,
      swali_sw: "Jinsi gani naweza kulinda faili langu la Word kwa password?",
      swali_en: "How can I protect my Word document with a password?",
      muongozo: "Tumia Encrypt with Password katika Info tab.",
      jibu_en: "Go to File > Info > Protect Document > Encrypt with Password. Note that if the password is lost, the file cannot be recovered."
    },
    {
      id: 21,
      swali_sw: "Nawezaje kubadili mwandiko herufi ndogo kwenda kubwa bila kufuta?",
      swali_en: "How do I change text from lowercase to uppercase without retyping?",
      muongozo: "Tumia shortcut ya Shift + F3.",
      jibu_en: "Highlight the text and press Shift + F3 repeatedly to cycle through lowercase, uppercase, and title case options."
    },
    {
      id: 22,
      swali_sw: "'Line Spacing' sahihi kwa ripoti au CV ni ipi?",
      swali_en: "What is the appropriate 'Line Spacing' for reports or a CV?",
      muongozo: "Zungumzia 1.15 au 1.5 kwa muonekano wa kitaalamu.",
      jibu_en: "Professional documents typically use 1.15 or 1.5 line spacing. This can be found in the Home tab under the Paragraph section."
    },
    {
      id: 23,
      swali_sw: "Nawezaje kuunganisha nyaraka mbili tofauti kuwa moja?",
      swali_en: "How can I merge two separate documents into one?",
      muongozo: "Tumia Insert tab na 'Text from File'.",
      jibu_en: "Go to the Insert tab, click the arrow next to Object, and select 'Text from File' to import another document's content."
    },
    {
      id: 24,
      swali_sw: "'Hyperlink' ni nini na nawekaje?",
      swali_en: "What is a 'Hyperlink' and how do I insert it?",
      muongozo: "Shortcut ya Ctrl + K kwa kuunganisha maneno na link.",
      jibu_en: "A hyperlink is a clickable link. Highlight the text, press Ctrl + K, and enter the web address or file path."
    },
    {
      id: 25,
      swali_sw: "Nawezaje kuzuia neno lisisisitizwe na mstari mwekundu?",
      swali_en: "How do I stop a word from being underlined in red (Spell check)?",
      muongozo: "Right-click na chagua 'Ignore' au 'Add to Dictionary'.",
      jibu_en: "Right-click the word and select 'Ignore All' or 'Add to Dictionary' to stop Word from flagging it as a spelling error."
    },
    {
      id: 26,
      swali_sw: "Nini tofauti kati ya 'Portrait' na 'Landscape'?",
      swali_en: "What is the difference between 'Portrait' and 'Landscape'?",
      muongozo: "Karatasi kusimama vs karatasi kulala.",
      jibu_en: "'Portrait' is a vertical page orientation; 'Landscape' is horizontal. This is adjusted under Layout > Orientation."
    },
    {
      id: 27,
      swali_sw: "Nawezaje kuandika namba ndogo chini (H₂O) au juu (x²)?",
      swali_en: "How do I write small numbers below (subscript) or above (superscript)?",
      muongozo: "Tumia shortcuts: Ctrl + = (Sub) na Ctrl + Shift + + (Super).",
      jibu_en: "For superscript (above), press Ctrl + Shift + +. For subscript (below), press Ctrl + =."
    },
    {
      id: 28,
      swali_sw: "'Margin' ni nini na kwanini ni muhimu?",
      swali_en: "What is a 'Margin' and why is it important?",
      muongozo: "Nafasi ya pembeni kwa ajili ya usafi wa nyaraka na binding.",
      jibu_en: "Margins are the blank spaces around the edges of a page. They ensure text isn't cut off during printing or document binding."
    },
    {
      id: 29,
      swali_sw: "Nawezaje ku-save faili kama PDF?",
      swali_en: "How can I save a file as a PDF?",
      muongozo: "Tumia 'Save As' na ubadili file type.",
      jibu_en: "Go to File > Save As, and choose 'PDF' from the file format dropdown menu."
    },
    {
      id: 30,
      swali_sw: "Nifanye nini kama nimefuta neno kwa bahati mbaya?",
      swali_en: "What if I accidentally deleted a word?",
      muongozo: "Tumia shortcut ya Ctrl + Z.",
      jibu_en: "Use the 'Undo' shortcut (Ctrl + Z) to reverse your last action and restore the deleted content."
    },

    /* SEHEMU YA 3: EXCEL, INTERNET & SECURITY (31-45) */
    {
      id: 31,
      swali_sw: "Nawezaje kujumlisha namba nyingi kwenye Excel kwa haraka?",
      swali_en: "How can I quickly sum a large range of numbers in Excel?",
      muongozo: "Tumia shortcut ya Alt + = (AutoSum).",
      jibu_en: "Highlight the numbers and press Alt + =. Excel will automatically apply the SUM function to the range."
    },
    {
      id: 32,
      swali_sw: "Nini tofauti kati ya 'Formula' na 'Function'?",
      swali_en: "What is the difference between a 'Formula' and a 'Function'?",
      muongozo: "Manual calculation vs built-in Excel logic.",
      jibu_en: "A formula is a custom expression you write (e.g., =A1+B1). A function is a built-in tool within Excel (e.g., =SUM(A1:B1))."
    },
    {
      id: 33,
      swali_sw: "Nawezaje kuzuia Header isipotee ninaposhuka chini (Scroll)?",
      swali_en: "How do I keep the header visible when scrolling down?",
      muongozo: "Tumia mbinu ya 'Freeze Panes'.",
      jibu_en: "Go to the View tab, select 'Freeze Panes', and choose 'Freeze Top Row'."
    },
    {
      id: 34,
      swali_sw: "Alama ya ##### kwenye cell inamaanisha nini?",
      swali_en: "What does ##### in a cell mean?",
      muongozo: "Cell ni ndogo sana kuonyesha namba.",
      jibu_en: "It indicates that the cell is too narrow to display the numeric data. Expand the column width by double-clicking the column header boundary."
    },
    {
      id: 35,
      swali_sw: "Nawezaje kubadili namba ziwe na alama ya fedha (TSH)?",
      swali_en: "How do I format numbers as currency (TSH)?",
      muongozo: "Tumia Format Cells na uchague Currency (TZS).",
      jibu_en: "Right-click the cell, select Format Cells > Currency, and look for 'TZS' or 'TSH' in the symbol list."
    },
    {
      id: 36,
      swali_sw: "Tofauti kati ya 'CC' na 'BCC' kwenye Email?",
      swali_en: "Difference between 'CC' and 'BCC' in an Email?",
      muongozo: "Visible recipients vs hidden recipients.",
      jibu_en: "CC (Carbon Copy) shows everyone who received the email. BCC (Blind Carbon Copy) hides the recipients' addresses from others."
    },
    {
      id: 37,
      swali_sw: "'Spam Email' ni nini na kwanini ni hatari?",
      swali_en: "What is a 'Spam Email' and why is it dangerous?",
      muongozo: "Unsolicited mail; hatari kwa virusi na phishing.",
      jibu_en: "Spam is unsolicited junk mail. It is dangerous because it can contain malicious attachments or phishing links designed to steal your information."
    },
    {
      id: 38,
      swali_sw: "Nawezaje kujua kama website ni salama kuweka kadi ya benki?",
      swali_en: "How can I tell if a website is safe for credit card entry?",
      muongozo: "Kagua alama ya padlock na itifaki ya HTTPS.",
      jibu_en: "Look for the padlock icon in the browser address bar and ensure the URL begins with 'https://' (the 's' stands for secure)."
    },
    {
      id: 39,
      swali_sw: "'Browser Cache' ni nini na kwanini nifute?",
      swali_en: "What is 'Browser Cache' and why should I clear it?",
      muongozo: "Kumbukumbu ya picha za website; husaidia kurekebisha display errors.",
      jibu_en: "Cache stores website elements to load pages faster. Clearing it helps resolve display issues or access the most updated version of a site."
    },
    {
      id: 40,
      swali_sw: "Ni ipi password salama zaidi?",
      swali_en: "What constitutes a strong password?",
      muongozo: "Mchanganyiko wa herufi, namba, na alama.",
      jibu_en: "A strong password contains a mix of uppercase and lowercase letters, numbers, and symbols (e.g., Yaham#2026$), avoiding personal info like birthdays."
    },
    {
      id: 41,
      swali_sw: "Faili la PDF ni kubwa kulituma kwa email, nipunguzeje?",
      swali_en: "How can I reduce a PDF file size for email?",
      muongozo: "Tumia online compressors au 'Minimum size' saving option.",
      jibu_en: "Use online tools like iLovePDF or select 'Minimum size (publishing online)' when saving the document from Word as a PDF."
    },
    {
      id: 42,
      swali_sw: "Nini maana ya 'Cloud Storage' na ipi nzuri TZ?",
      swali_en: "What is 'Cloud Storage' and which options are good in TZ?",
      muongozo: "Kuhifadhi data mtandaoni; gusia Google Drive na OneDrive.",
      jibu_en: "Cloud storage allows you to save files on remote servers. Google Drive and Microsoft OneDrive are popular and reliable choices in Tanzania."
    },
    {
      id: 43,
      swali_sw: "Kwanini programu hazitaki ku-install (Error: 64-bit vs 32-bit)?",
      swali_en: "Why won't a program install (Error: 64-bit vs 32-bit)?",
      muongozo: "Inategemea architecture ya processor na OS.",
      jibu_en: "This occurs due to architectural mismatch; a 64-bit software application cannot run on a 32-bit Operating System."
    },
    {
      id: 44,
      swali_sw: "Nawezaje kufungua faili la 'ZIP'?",
      swali_en: "How do I open a 'ZIP' file?",
      muongozo: "Tumia 'Extract All' option.",
      jibu_en: "Right-click the ZIP folder and select 'Extract All' to decompress the contents into a standard folder."
    },
    {
      id: 45,
      swali_sw: "Nini maana ya 'Cloud Computing' kwa maneno mepesi?",
      swali_en: "What is 'Cloud Computing' in simple terms?",
      muongozo: "Kutumia computing services kupitia internet.",
      jibu_en: "Cloud computing means accessing and using computing services (like storage or apps) over the internet instead of on your own local hard drive."
    },

    /* SEHEMU YA 4: TROUBLESHOOTING & MISC (46-50) */
    {
      id: 46,
      swali_sw: "Printer yangu imejaa karatasi (Paper Jam), nifanye nini?",
      swali_en: "My printer has a paper jam; what should I do?",
      muongozo: "Zima printer na vuta karatasi taratibu.",
      jibu_en: "Turn off the printer. Gently pull the paper out in the direction of the paper path; avoid pulling it backwards to prevent damage."
    },
    {
      id: 47,
      swali_sw: "Programu imegoma kufunguka kabisa. Suluhisho?",
      swali_en: "A program won't open at all. What's the solution?",
      muongozo: "Restart PC au jaribu Uninstall/Reinstall.",
      jibu_en: "Restart your computer first. If it still fails, try uninstalling and then reinstalling the software application."
    },
    {
      id: 48,
      swali_sw: "'PDF' ni kifupi cha nini na kwanini ni maarufu?",
      swali_en: "What does 'PDF' stand for and why is it popular?",
      muongozo: "Portable Document Format; unalinda document structure.",
      jibu_en: "PDF stands for Portable Document Format. It is popular because it preserves document formatting across any device or operating system."
    },
    {
      id: 49,
      swali_sw: "'Wi-Fi' yangu inakata kata, nifanye nini?",
      swali_en: "My Wi-Fi keeps disconnecting; how do I fix it?",
      muongozo: "Sogeza router karibu au ifanye Restart.",
      jibu_en: "Move closer to the router to improve signal strength, or restart the router to clear network congestion."
    },
    {
      id: 50,
      swali_sw: "Nifanye nini kama nimemwaga maji kwenye laptop?",
      swali_en: "What should I do if I spill water on my laptop?",
      muongozo: "Zima haraka, kausha kwa V-shape, na usiiwashe kwa muda.",
      jibu_en: "Power it off immediately, unplug the charger, and place it upside down in a V-shape. Allow it to dry for at least 24-48 hours before attempting to turn it on."
    }
  ]
};

export default generalSoftwareData;