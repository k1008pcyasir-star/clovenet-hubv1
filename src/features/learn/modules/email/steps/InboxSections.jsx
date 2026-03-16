import React, { useState } from 'react';

const InboxSections = ({ lang }) => {
  const isSw = lang === 'sw';
  const [activeSection, setActiveSection] = useState('inbox');
  const [showTip, setShowTip] = useState(false);

  // ─── Fake emails per folder ───────────────────────────────────────────────
  const folderEmails = {
    inbox: [
      { from: 'HR - Karibu Company', subject: isSw ? 'Hongera! Umechaguliwa kwa Interview' : 'Congratulations! You\'ve been selected', time: '9:41 AM', unread: true, avatar: 'HC', color: '#1a73e8' },
      { from: 'JobsKenya Portal', subject: isSw ? 'Maombi yako yamepokewa' : 'Your application has been received', time: '8:15 AM', unread: true, avatar: 'JK', color: '#34a853' },
      { from: 'LinkedIn', subject: isSw ? 'Una waombaji 5 wapya wanaokutafuta' : '5 new people viewed your profile', time: 'Yesterday', unread: false, avatar: 'Li', color: '#0077b5' },
      { from: 'Brighter Monday', subject: isSw ? 'Nafasi mpya 12 za kazi leo' : '12 new job openings today', time: 'Yesterday', unread: false, avatar: 'BM', color: '#ff6b00' },
    ],
    drafts: [
      { from: isSw ? 'Kwangu mimi (Haikutumwa)' : 'Me (Not Sent)', subject: isSw ? 'Ombi la Kazi - Msimamizi wa Ofisi' : 'Job Application - Office Manager', time: '2:30 PM', unread: false, avatar: '✏️', color: '#f59e0b', isDraft: true },
      { from: isSw ? 'Kwangu mimi (Haikutumwa)' : 'Me (Not Sent)', subject: isSw ? 'Barua ya Shukrani - Mkutano wa Jana' : 'Thank You Letter - Yesterday\'s Interview', time: 'Mon', unread: false, avatar: '✏️', color: '#f59e0b', isDraft: true },
    ],
    spam: [
      { from: 'prize@winning999.com', subject: isSw ? '🎉 UMESHINDA MILIONI! Bonyeza Sasa!' : '🎉 YOU WON A MILLION! Click Now!', time: '11:02 AM', unread: true, avatar: '⚠️', color: '#ef4444', isSpam: true },
      { from: 'noreply@fakebank.net', subject: isSw ? 'Akaunti yako imesimamishwa - Thibitisha sasa' : 'Account suspended - Verify now', time: '7:44 AM', unread: true, avatar: '⚠️', color: '#ef4444', isSpam: true },
      { from: 'HR - Bright Future Ltd', subject: isSw ? 'Tunaomba uwasiliane Kuhusu Nafasi ya Kazi' : 'We\'d like to discuss a job opportunity', time: 'Mon', unread: true, avatar: 'BF', color: '#8b5cf6', isLegit: true },
    ],
    sent: [
      { from: isSw ? 'Kwangu - Kwa: info@kenyapower.co.ke' : 'Me → info@kenyapower.co.ke', subject: isSw ? 'Ombi la Kazi - Injinia wa Umeme' : 'Job Application - Electrical Engineer', time: '10:20 AM', unread: false, avatar: '📤', color: '#10b981' },
      { from: isSw ? 'Kwangu - Kwa: jobs@safaricom.com' : 'Me → jobs@safaricom.com', subject: isSw ? 'CV na Barua ya Maombi' : 'CV and Cover Letter', time: 'Yesterday', unread: false, avatar: '📤', color: '#10b981' },
      { from: isSw ? 'Kwangu - Kwa: hr@equity.co.ke' : 'Me → hr@equity.co.ke', subject: isSw ? 'Shukrani kwa Mahojiano - Tarehe 10' : 'Thank You for the Interview - 10th', time: 'Mon', unread: false, avatar: '📤', color: '#10b981' },
    ],
  };

  const folders = [
    {
      id: 'inbox',
      icon: '📥',
      label: isSw ? 'Inbox' : 'Inbox',
      sublabel: isSw ? 'Kikasha' : 'Received',
      badge: 2,
      color: '#1a73e8',
      bg: '#e8f0fe',
      tip: isSw
        ? 'Hapa ndipo barua zote muhimu zinapoingia kwanza. Angalia hapa kila siku asubuhi hasa ukisubiri jibu la kazi.'
        : 'All important emails arrive here first. Check every morning especially when waiting for a job reply.',
      warning: null,
    },
    {
      id: 'drafts',
      icon: '📝',
      label: isSw ? 'Drafts' : 'Drafts',
      sublabel: isSw ? 'Rasimu' : 'Unsent',
      badge: 2,
      color: '#f59e0b',
      bg: '#fef3c7',
      tip: isSw
        ? 'Hapa zinahifadhiwa barua ulizoanza kuandika lakini bado hujatuma. Zinaweza kutumika kama template mara nyingine.'
        : 'Emails you started but haven\'t sent live here. Useful as templates for future applications.',
      warning: null,
    },
    {
      id: 'spam',
      icon: '🚫',
      label: isSw ? 'Spam' : 'Spam',
      sublabel: isSw ? 'Barua Taka' : 'Junk Mail',
      badge: 3,
      color: '#ef4444',
      bg: '#fee2e2',
      tip: isSw
        ? 'Tahadhari! Mfumo wakati mwingine husogeza barua nzuri kwenda hapa kwa kosa. Angalia kila siku ukisubiri jibu la kazi!'
        : 'Caution! The system sometimes moves good emails here by mistake. Check daily when waiting for job replies!',
      warning: isSw ? '⚠️ Angalia mfano hapa chini - barua nzuri ya kazi iko Spam!' : '⚠️ See example below - a real job email landed in Spam!',
    },
    {
      id: 'sent',
      icon: '📤',
      label: isSw ? 'Sent' : 'Sent',
      sublabel: isSw ? 'Zilizotumwa' : 'Delivered',
      badge: null,
      color: '#10b981',
      bg: '#d1fae5',
      tip: isSw
        ? 'Hapa utaona nakala ya barua zote ulizotuma. Unaweza kuthibitisha kama barua yako ilitumwa vizuri na kwa nani.'
        : 'See copies of every email you sent. Confirm delivery and who received your messages.',
      warning: null,
    },
  ];

  const active = folders.find(f => f.id === activeSection);
  const emails = folderEmails[activeSection] || [];

  // ─── How-to steps per folder ───────────────────────────────────────────────
  const howToSteps = {
    inbox: isSw
      ? ['Fungua Gmail kwenye simu yako', 'Bonyeza ikoni ya ☰ (menu) upande wa kushoto', 'Chagua "Inbox" kutoka kwenye orodha', 'Barua mpya zinaonekana juu yenye rangi nzito (bold)']
      : ['Open Gmail on your phone', 'Tap the ☰ (menu) icon on the left', 'Select "Inbox" from the list', 'New emails appear at top in bold'],
    drafts: isSw
      ? ['Fungua Gmail', 'Bonyeza ☰ (menu)', 'Tafuta na bonyeza "Drafts"', 'Bonyeza barua yoyote ili uendelee kuiandika au uitume']
      : ['Open Gmail', 'Tap ☰ (menu)', 'Find and tap "Drafts"', 'Tap any draft to continue writing or send it'],
    spam: isSw
      ? ['Fungua Gmail', 'Bonyeza ☰ (menu)', 'Scrollisha chini utaona "Spam"', 'Angalia barua - kama ni nzuri, bonyeza "Not Spam" kuirudisha Inbox']
      : ['Open Gmail', 'Tap ☰ (menu)', 'Scroll down to find "Spam"', 'If an email is real, tap "Not Spam" to move it to Inbox'],
    sent: isSw
      ? ['Fungua Gmail', 'Bonyeza ☰ (menu)', 'Bonyeza "Sent"', 'Utaona barua zote ulizotuma pamoja na tarehe na muda']
      : ['Open Gmail', 'Tap ☰ (menu)', 'Tap "Sent"', 'See all sent emails with date and time'],
  };

  return (
    <div style={{ fontFamily: "'Nunito', 'Segoe UI', sans-serif" }} className="space-y-6">
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="space-y-1">
        <h2 className="text-2xl font-black text-gray-900">
          {isSw ? '📬 Kuelewa Kikasha Chako cha Gmail' : '📬 Understanding Your Gmail Folders'}
        </h2>
        <p className="text-sm text-gray-500 font-semibold">
          {isSw ? 'Mwonekano halisi wa simu — bonyeza kila folder ujifunze zaidi' : 'Real phone view — tap each folder to learn more'}
        </p>
      </div>

      {/* ── Folder Tab Selector ─────────────────────────────────────── */}
      <div className="grid grid-cols-4 gap-2">
        {folders.map(f => (
          <button
            key={f.id}
            onClick={() => setActiveSection(f.id)}
            style={{
              background: activeSection === f.id ? f.color : '#f3f4f6',
              color: activeSection === f.id ? '#fff' : '#374151',
              border: `2px solid ${activeSection === f.id ? f.color : 'transparent'}`,
              transform: activeSection === f.id ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.2s ease',
            }}
            className="relative flex flex-col items-center py-3 px-1 rounded-2xl font-bold text-xs"
          >
            <span className="text-xl mb-1">{f.icon}</span>
            <span>{f.label}</span>
            {f.badge && (
              <span style={{ background: activeSection === f.id ? 'rgba(255,255,255,0.3)' : f.color, color: activeSection === f.id ? '#fff' : '#fff' }}
                className="absolute -top-1 -right-1 text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center">
                {f.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── Phone Mockup ────────────────────────────────────────────── */}
      <div className="flex justify-center">
        <div style={{ width: 320, fontFamily: "'Roboto', sans-serif" }}>
          {/* Phone frame */}
          <div style={{
            background: '#1c1c1e',
            borderRadius: 44,
            padding: '10px 6px',
            boxShadow: '0 30px 80px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.08)',
          }}>
            {/* Notch */}
            <div style={{ background: '#1c1c1e', height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2 }}>
              <div style={{ width: 120, height: 28, background: '#000', borderRadius: '0 0 20px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1c1c1e', border: '2px solid #333' }} />
                <div style={{ width: 50, height: 6, borderRadius: 3, background: '#1c1c1e' }} />
              </div>
            </div>

            {/* Screen */}
            <div style={{ background: '#fff', borderRadius: 34, overflow: 'hidden', minHeight: 480 }}>

              {/* Status bar */}
              <div style={{ background: '#fff', padding: '8px 20px 4px', display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 700, color: '#111' }}>
                <span>9:41</span>
                <span>📶 🔋</span>
              </div>

              {/* Gmail top bar */}
              <div style={{ padding: '6px 14px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid #f0f0f0' }}>
                <span style={{ fontSize: 20 }}>☰</span>
                <div style={{ flex: 1, background: '#f1f3f4', borderRadius: 24, padding: '6px 14px', fontSize: 12, color: '#5f6368', fontWeight: 600 }}>
                  {isSw ? `Tafuta kwenye barua...` : `Search in mail...`}
                </div>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: active.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 900 }}>U</div>
              </div>

              {/* Folder label */}
              <div style={{ padding: '10px 14px 6px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 16 }}>{active.icon}</span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: '#202124' }}>{active.label}</div>
                  <div style={{ fontSize: 10, color: '#9aa0a6', fontWeight: 600 }}>{active.sublabel}</div>
                </div>
              </div>

              {/* Email list */}
              <div style={{ padding: '0 0 8px' }}>
                {emails.map((email, i) => (
                  <div key={i} style={{
                    padding: '10px 14px',
                    display: 'flex',
                    gap: 12,
                    alignItems: 'flex-start',
                    background: email.unread ? '#fff' : '#fafafa',
                    borderBottom: '1px solid #f0f0f0',
                    position: 'relative',
                  }}>
                    {/* Unread dot */}
                    {email.unread && (
                      <div style={{
                        position: 'absolute',
                        left: 4,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: email.isSpam ? '#ef4444' : active.color,
                      }} />
                    )}
                    {/* Avatar */}
                    <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: email.isSpam ? '#fee2e2' : email.color + '22',
                      color: email.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: email.avatar.length > 2 ? 16 : 12,
                      fontWeight: 900,
                      flexShrink: 0,
                      border: email.isLegit ? '2px solid #8b5cf6' : 'none',
                    }}>
                      {email.avatar}
                    </div>
                    {/* Text */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                        <span style={{ fontSize: 12, fontWeight: email.unread ? 800 : 600, color: '#202124', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 150 }}>
                          {email.from}
                        </span>
                        <span style={{ fontSize: 10, color: '#9aa0a6', whiteSpace: 'nowrap' }}>{email.time}</span>
                      </div>
                      <div style={{ fontSize: 11, fontWeight: email.unread ? 700 : 500, color: email.isSpam ? '#ef4444' : '#202124', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {email.subject}
                      </div>
                      {email.isLegit && (
                        <div style={{ fontSize: 9, background: '#fef3c7', color: '#92400e', borderRadius: 4, padding: '1px 5px', marginTop: 3, display: 'inline-block', fontWeight: 700 }}>
                          {isSw ? '⚠️ Barua nzuri iliingia Spam!' : '⚠️ Real email landed in Spam!'}
                        </div>
                      )}
                      {email.isDraft && (
                        <div style={{ fontSize: 9, background: '#fef3c7', color: '#92400e', borderRadius: 4, padding: '1px 5px', marginTop: 3, display: 'inline-block', fontWeight: 700 }}>
                          {isSw ? '✏️ Bado hujatuma' : '✏️ Not sent yet'}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Compose FAB */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '8px 16px' }}>
                <div style={{
                  background: active.color,
                  color: '#fff',
                  borderRadius: 16,
                  padding: '10px 18px',
                  fontSize: 12,
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  boxShadow: `0 4px 14px ${active.color}55`,
                }}>
                  ✏️ {isSw ? 'Andika' : 'Compose'}
                </div>
              </div>

              {/* Bottom nav */}
              <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 0 14px', borderTop: '1px solid #f0f0f0' }}>
                {[
                  { icon: '📥', label: isSw ? 'Inbox' : 'Inbox', active: activeSection === 'inbox' },
                  { icon: '⭐', label: isSw ? 'Zingine' : 'Starred', active: false },
                  { icon: '🔍', label: isSw ? 'Tafuta' : 'Search', active: false },
                  { icon: '👤', label: isSw ? 'Mimi' : 'Me', active: false },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <span style={{ fontSize: 18 }}>{item.icon}</span>
                    <span style={{ fontSize: 9, color: item.active ? active.color : '#9aa0a6', fontWeight: item.active ? 800 : 500 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Home indicator */}
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10, paddingBottom: 6 }}>
              <div style={{ width: 130, height: 4, background: '#444', borderRadius: 2 }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Explanation Card ─────────────────────────────────────────── */}
      <div style={{ background: active.bg, border: `2px solid ${active.color}33`, borderRadius: 24, padding: 20 }}>
        <div className="flex items-start gap-3">
          <span className="text-3xl">{active.icon}</span>
          <div>
            <h3 style={{ color: active.color, fontSize: 16, fontWeight: 900, marginBottom: 6 }}>
              {active.label} <span style={{ fontSize: 12, opacity: 0.7 }}>({active.sublabel})</span>
            </h3>
            <p style={{ fontSize: 13, color: '#374151', fontWeight: 600, lineHeight: 1.6 }}>{active.tip}</p>
            {active.warning && (
              <div style={{ background: '#fff', borderRadius: 12, padding: '8px 12px', marginTop: 10, border: '1px solid #fca5a5', fontSize: 12, fontWeight: 700, color: '#dc2626' }}>
                {active.warning}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── How To Navigate Steps ───────────────────────────────────── */}
      <div style={{ background: '#f8fafc', borderRadius: 24, padding: 20, border: '1px solid #e2e8f0' }}>
        <h4 style={{ fontSize: 13, fontWeight: 800, color: '#374151', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
          📱 {isSw ? `Jinsi ya kufungua ${active.label} kwenye simu` : `How to open ${active.label} on your phone`}
        </h4>
        <div className="space-y-2">
          {(howToSteps[activeSection] || []).map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <div style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: active.color,
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
                fontWeight: 900,
                flexShrink: 0,
                marginTop: 1,
              }}>
                {i + 1}
              </div>
              <span style={{ fontSize: 13, color: '#374151', fontWeight: 600, lineHeight: 1.5 }}>{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Pro Tip Box ─────────────────────────────────────────────── */}
      <div style={{ background: '#0f172a', borderRadius: 24, padding: 20, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(99,102,241,0.15)' }} />
        <div style={{ position: 'relative', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <span style={{ fontSize: 28 }}>💡</span>
          <div>
            <div style={{ color: '#e2e8f0', fontSize: 11, fontWeight: 900, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 }}>
              {isSw ? 'Kidokezo Muhimu' : 'Pro Tip'}
            </div>
            <p style={{ color: '#94a3b8', fontSize: 13, fontWeight: 600, lineHeight: 1.7 }}>
              {isSw
                ? 'Ukisubiri barua ya kazi na huioni Inbox, haraka angalia SPAM! Mifumo ya email husogeza barua nzuri kwenda Spam bila kukuambia. Angalia Spam kila siku ukisubiri jibu muhimu.'
                : 'If you\'re waiting for a job email and don\'t see it in Inbox, immediately check SPAM! Email systems move real emails there without warning. Check Spam every day when expecting important replies.'}
            </p>
          </div>
        </div>
      </div>

      {/* ── Feature: All Folder Summary ─────────────────────────────── */}
      <div>
        <h4 style={{ fontSize: 14, fontWeight: 900, color: '#111827', marginBottom: 12 }}>
          {isSw ? '📂 Muhtasari wa Folders Zote' : '📂 All Folders at a Glance'}
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {folders.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveSection(f.id)}
              style={{
                background: activeSection === f.id ? f.color : '#fff',
                color: activeSection === f.id ? '#fff' : '#374151',
                border: `2px solid ${activeSection === f.id ? f.color : '#e5e7eb'}`,
                borderRadius: 16,
                padding: '12px 14px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ fontSize: 20, marginBottom: 4 }}>{f.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 800 }}>{f.label}</div>
              <div style={{ fontSize: 10, fontWeight: 600, opacity: 0.7 }}>{f.sublabel}</div>
              {f.badge && (
                <div style={{
                  display: 'inline-block',
                  background: activeSection === f.id ? 'rgba(255,255,255,0.25)' : f.color,
                  color: '#fff',
                  borderRadius: 10,
                  padding: '1px 8px',
                  fontSize: 10,
                  fontWeight: 900,
                  marginTop: 6,
                }}>
                  {f.badge} {isSw ? 'mpya' : 'new'}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InboxSections;